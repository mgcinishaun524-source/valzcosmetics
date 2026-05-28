import fs from "fs";
import path from "path";
import { GoogleGenAI } from "@google/genai";

// Read GEMINI_API_KEY from environment
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("No GEMINI_API_KEY found!");
  process.exit(1);
}

const ai = new GoogleGenAI({
  apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function runPriceAnalysis() {
  const datasetDir = path.join("src", "assets", "images");
  const resultsFile = "image-prices-results.json";
  let results: any[] = [];
  if (fs.existsSync(resultsFile)) {
    try {
      results = JSON.parse(fs.readFileSync(resultsFile, "utf-8"));
    } catch {
      results = [];
    }
  }

  const imageFiles = fs.readdirSync(datasetDir).filter(f => f.startsWith("IMG-20260527-WA") && f.endsWith(".jpg"));
  console.log(`Found ${imageFiles.length} images to check for prices.`);

  const remainingFiles = imageFiles.filter(f => !results.some(r => r.filename === f));
  console.log(`Remaining files to analyze for prices: ${remainingFiles.length}`);

  if (remainingFiles.length === 0) {
    console.log("All files already analyzed for prices!");
    return;
  }

  // Use smaller batches to ensure we don't hit payload limits
  const batchSize = 5;
  for (let batchIdx = 0; batchIdx < remainingFiles.length; batchIdx += batchSize) {
    const currentBatch = remainingFiles.slice(batchIdx, batchIdx + batchSize);
    console.log(`Processing batch starting from index ${batchIdx}: ${currentBatch.join(", ")}`);

    const parts: any[] = [];
    for (let i = 0; i < currentBatch.length; i++) {
      const filename = currentBatch[i];
      const filePath = path.join(datasetDir, filename);
      const base64Data = fs.readFileSync(filePath).toString("base64");
      
      parts.push({
        text: `IMAGE INDEX ${i}: Filename "${filename}"`
      });
      parts.push({
        inlineData: {
          mimeType: "image/jpeg",
          data: base64Data
        }
      });
    }

    const instructionText = `You are an expert cosmetics cataloging editor.
Examine the ${currentBatch.length} images provided above.
For each image, look VERY closely at the product packaging/bottle to spot a sticker price tag (e.g. orange, green, yellow, pink, or white small adhesive label with a price printed or hand-written on it).
Most pictures have stickers like "85-", "R110-", "R75-", "R120-", "65-", etc.
Extract:
1. "filename": the actual filename e.g. "${currentBatch[0]}"
2. "brand": the identified brand name (e.g., Sorbet, Nivea, Oh So Heavenly, Dove, Gynaguard, Femivat, Avon, etc.)
3. "productName": specific name or descriptor (e.g., Body Scrub, Softening Heel Balm, Dry Comfort Deodorant)
4. "priceTag": the exact price tag string spotted on the sticker (e.g., "R75", "110", "R85", "R65", "65-"). If no price tag is visible at all, please look carefully, but if definitely missing, write "N/A".

Format your response as a strict JSON array of objects (no markdown, just raw JSON) using this format:
[
  {
    "filename": "string",
    "brand": "string",
    "productName": "string",
    "priceTag": "string"
  }
]`;

    parts.push({ text: instructionText });

    try {
      // Sleep a bit to prevent rate limit
      await sleep(2500);

      const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-lite",
        contents: { parts },
        config: {
          responseMimeType: "application/json"
        }
      });

      const text = response.text || "[]";
      const batchResults = JSON.parse(text.trim());
      console.log(`Batch results:`, batchResults);

      results.push(...batchResults);
      fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));
      console.log(`Saved batch results. Total analyzed: ${results.length}`);

    } catch (e: any) {
      console.error(`Error in batch ${batchIdx}:`, e.message);
      // Wait longer on error and try again
      await sleep(10000);
      batchIdx -= batchSize; // Retry this batch
    }
  }

  console.log("Price analysis fully complete!");
}

runPriceAnalysis();
