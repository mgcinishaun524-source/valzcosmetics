import React, { useRef, useEffect, useState } from "react";

// 3D vector math interface
interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface ProjectedPoint extends Point3D {
  px: number;
  py: number;
}

type MaterialType = "bulb" | "gold" | "glass" | "label" | "liquid";

interface Face {
  p1: ProjectedPoint;
  p2: ProjectedPoint;
  p3: ProjectedPoint;
  p4: ProjectedPoint;
  color: string;
  borderColor: string;
  material: MaterialType;
  centerZ: number;
  normalX: number;
  normalY: number;
  normalZ: number;
}

export default function Cosmetic3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Interaction states
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  
  // Pitch and Yaw angles for rotation (in radians)
  // Initially oriented for a highly professional 45-degree isometric studio layout
  const angles = useRef({ pitch: -0.15, yaw: 0.61 });
  const velocities = useRef({ pitch: 0.001, yaw: 0.004 }); // Slow pristine default drift
  const lastActiveTime = useRef(Date.now());

  // Mouse move parallax light spot to simulate high-end studio strobe light reflection path
  const mouseLight = useRef({ x: 0, y: 0 });

  // Floating micro golden serum oil droplets around the main bottle
  const particles = useRef<Array<{
    x: number;
    y: number;
    z: number;
    size: number;
    speed: number;
    phase: number;
  }>>([]);

  // Populating exquisite golden dust particles
  useEffect(() => {
    particles.current = Array.from({ length: 40 }, () => ({
      x: (Math.random() - 0.5) * 320,
      y: (Math.random() - 0.5) * 280,
      z: (Math.random() - 0.5) * 200,
      size: Math.random() * 2.2 + 0.8,
      speed: 0.15 + Math.random() * 0.35,
      phase: Math.random() * Math.PI * 2,
    }));
  }, []);

  // Track cursor layout coordinates for dynamic strobe light reflecting on the curves
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      mouseLight.current.x += (x - mouseLight.current.x) * 0.12;
      mouseLight.current.y += (y - mouseLight.current.y) * 0.12;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Interaction handlers
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    lastActiveTime.current = Date.now();
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    
    angles.current.yaw += dx * 0.006;
    angles.current.pitch += dy * 0.006;
    
    velocities.current.yaw = dx * 0.001;
    velocities.current.pitch = dy * 0.001;
    
    dragStart.current = { x: e.clientX, y: e.clientY };
    lastActiveTime.current = Date.now();
  };

  const onMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      lastActiveTime.current = Date.now();
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - dragStart.current.x;
    const dy = e.touches[0].clientY - dragStart.current.y;
    
    angles.current.yaw += dx * 0.006;
    angles.current.pitch += dy * 0.006;
    
    velocities.current.yaw = dx * 0.001;
    velocities.current.pitch = dy * 0.001;
    
    dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    lastActiveTime.current = Date.now();
  };

  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions dynamically
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Highly refined geometry definitions mimicking high-end cosmetics bottle
    // This allows us to map distinct materials (rubber bulb, gold metal collar, white paper label or direct glass body)
    interface RingDef {
      y: number;          // Height coordinate
      r: number;          // Cylindrical radius at this height
      material: MaterialType;
    }

    const ringDefinitions: RingDef[] = [
      // 1. SILICONE BULB (Squeeze Dropper top)
      { y: 130, r: 0, material: "bulb" },          // Tip
      { y: 125, r: 12, material: "bulb" },
      { y: 115, r: 16, material: "bulb" },
      { y: 92, r: 17, material: "bulb" },          // Bulb base
      { y: 90, r: 15, material: "bulb" },

      // 2. REFLECTIVE GOLD META COLLAR (Prestige threaded cap)
      { y: 90, r: 18, material: "gold" },
      { y: 88, r: 19, material: "gold" },
      { y: 65, r: 19, material: "gold" },
      { y: 62, r: 18, material: "gold" },

      // 3. CYLINDRIQUE GLASS SHOULDER & INCEPTION neck
      { y: 62, r: 15, material: "glass" },
      { y: 55, r: 24, material: "glass" },
      { y: 48, r: 38, material: "glass" },

      // 4. MAIN BOTTLE ASSEMBLY WITH PREMIUM WHITE/GOLD WRAPPED LABEL
      { y: 40, r: 40, material: "glass" },
      { y: 35, r: 40, material: "label" },         // Label top boundary
      { y: 10, r: 40, material: "label" },
      { y: -15, r: 40, material: "label" },
      { y: -38, r: 40, material: "label" },        // Label bottom boundary
      { y: -42, r: 40, material: "glass" },

      // 5. TRANSLUCENT HEAVY GLASS BOTTOM BED
      { y: -68, r: 39, material: "glass" },
      { y: -74, r: 34, material: "glass" },
      { y: -76, r: 22, material: "glass" },
      { y: -78, r: 0, material: "glass" },         // Complete solid glass seal base
    ];

    const SEGMENTS = 24; // High-precision radial density for beautiful round curve rendering

    // Main 3D Rendering Iteration Loop
    const render = () => {
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, width, height);

      // Inertial drift calculations when not active drag mode
      if (!isDragging) {
        angles.current.yaw += velocities.current.yaw;
        angles.current.pitch += velocities.current.pitch;
        
        const timeSinceActive = Date.now() - lastActiveTime.current;
        if (timeSinceActive > 1500) {
          // Slowly decay to the ideal luxury golden angle
          velocities.current.yaw += (0.003 - velocities.current.yaw) * 0.05;
          velocities.current.pitch += (-0.0008 - velocities.current.pitch) * 0.05;
        } else {
          velocities.current.yaw *= 0.95;
          velocities.current.pitch *= 0.95;
        }
      }

      // Precalculate rotation tables
      const cosYaw = Math.cos(angles.current.yaw);
      const sinYaw = Math.sin(angles.current.yaw);
      const cosPitch = Math.cos(angles.current.pitch);
      const sinPitch = Math.sin(angles.current.pitch);

      const fov = 420;
      const centerX = width / 2;
      const centerY = height / 2 - 10;

      // Project 3D vector to 2D screen coordinate space with perspective
      const project = (p: Point3D): ProjectedPoint => {
        // Rotate local coordinates (Yaw Y-Axis)
        const xRot = p.x * cosYaw - p.z * sinYaw;
        const zRot = p.x * sinYaw + p.z * cosYaw;
        
        // Rotate local coordinates (Pitch X-Axis)
        const yRot = p.y * cosPitch - zRot * sinPitch;
        const finalZ = p.y * sinPitch + zRot * cosPitch;

        // Apply upscale layout constant
        const scale = 1.7;
        const xScaled = xRot * scale;
        const yScaled = yRot * scale;
        const zScaled = finalZ * scale;

        // Perspectivic divisor
        const depthFactor = fov / (fov + zScaled);
        const px = centerX + xScaled * depthFactor;
        const py = centerY - yScaled * depthFactor;

        return { x: xScaled, y: yScaled, z: zScaled, px, py };
      };

      // 1. RENDER BACKPLATE STUDIO GLOW
      const studioGlow = ctx.createRadialGradient(
        centerX, centerY, 5,
        centerX, centerY, 210
      );
      studioGlow.addColorStop(0, "rgba(224, 182, 162, 0.16)"); // Soft luxury warmth
      studioGlow.addColorStop(0.4, "rgba(24, 20, 18, 0.04)");
      studioGlow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = studioGlow;
      ctx.fillRect(centerX - 240, centerY - 240, 480, 480);

      // 2. RENDER DRIFTING GOLD SEED PARTICLES
      particles.current.forEach((part, i) => {
        part.y += part.speed;
        part.phase += 0.012;
        
        const offsetHz = Math.sin(part.phase) * 0.4;
        
        const rx = (part.x + offsetHz) * cosYaw - part.z * sinYaw;
        const rz = (part.x + offsetHz) * sinYaw + part.z * cosYaw;
        const ry = part.y * cosPitch - rz * sinPitch;
        const fZ = part.y * sinPitch + rz * cosPitch;

        if (part.y > 200) part.y = -200; // Recoil loop

        const scaleFac = fov / (fov + fZ);
        const px = centerX + rx * 1.7 * scaleFac;
        const py = centerY - ry * 1.7 * scaleFac;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const depthAlpha = Math.max(0.15, (fov - fZ) / fov);
          ctx.beginPath();
          ctx.arc(px, py, part.size * scaleFac, 0, Math.PI * 2);
          
          if (i % 4 === 0) {
            // Elegant bright stellar point
            ctx.fillStyle = `rgba(255, 230, 200, ${0.85 * depthAlpha})`;
          } else {
            // Suspended honey oil globule
            ctx.fillStyle = `rgba(224, 162, 114, ${0.65 * depthAlpha})`;
          }
          ctx.fill();

          if (part.size > 2.0) {
            ctx.beginPath();
            ctx.arc(px, py, part.size * 2 * scaleFac, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(224, 162, 114, ${0.12 * depthAlpha})`;
            ctx.fill();
          }
        }
      });

      // 3. GENERATE BOTTLE 3D MESH VERTICES
      const faces: Face[] = [];
      const ringsProj: Array<ProjectedPoint[]> = [];

      ringDefinitions.forEach((def) => {
        const currentRingPoints: ProjectedPoint[] = [];
        for (let j = 0; j < SEGMENTS; j++) {
          const angle = (j / SEGMENTS) * Math.PI * 2;
          const rawCoord: Point3D = {
            x: Math.cos(angle) * def.r,
            y: def.y,
            z: Math.sin(angle) * def.r
          };
          currentRingPoints.push(project(rawCoord));
        }
        ringsProj.push(currentRingPoints);
      });

      // Assemble 4-point polygon faces
      for (let r = 0; r < ringDefinitions.length - 1; r++) {
        const ringAbove = ringsProj[r];
        const ringBelow = ringsProj[r + 1];
        const defAbove = ringDefinitions[r];
        const defBelow = ringDefinitions[r + 1];

        // Determine polygon material (material follows lower geometry or transition)
        let activeMat = defAbove.material;
        if (defAbove.material === "label" && defBelow.material === "label") {
          activeMat = "label";
        } else if (defAbove.material === "gold" || defBelow.material === "gold") {
          activeMat = "gold";
        } else if (defAbove.material === "bulb" && defBelow.material === "bulb") {
          activeMat = "bulb";
        }

        for (let s = 0; s < SEGMENTS; s++) {
          const sNext = (s + 1) % SEGMENTS;
          
          const p1 = ringAbove[s];
          const p2 = ringAbove[sNext];
          const p3 = ringBelow[sNext];
          const p4 = ringBelow[s];

          // Compute centroid z-depth for painter sorting sorting
          const centerZ = (p1.z + p2.z + p3.z + p4.z) / 4;

          // Face normal calculations for real Phong light refraction vectors
          const dx1 = p2.x - p1.x;
          const dy1 = p2.y - p1.y;
          const dz1 = p2.z - p1.z;
          const dx2 = p4.x - p1.x;
          const dy2 = p4.y - p1.y;
          const dz2 = p4.z - p1.z;

          const nX = dy1 * dz2 - dz1 * dy2;
          const nY = dz1 * dx2 - dx1 * dz2;
          const nZ = dx1 * dy2 - dy1 * dx2;
          const len = Math.sqrt(nX * nX + nY * nY + nZ * nZ) || 1;

          const normX = nX / len;
          const normY = nY / len;
          const normZ = nZ / len;

          faces.push({
            p1, p2, p3, p4,
            color: "", // Dynamically generated per frame based on lighting below
            borderColor: "",
            material: activeMat,
            centerZ,
            normalX: normX,
            normalY: normY,
            normalZ: normZ
          });
        }
      }

      // Add deep-internal suspended liquid core cylinder faces for double reflective glass bottle feeling
      // Only drawn inside the glass zone
      const liquidRings: RingDef[] = [
        { y: 34, r: 35, material: "liquid" },
        { y: 10, r: 35, material: "liquid" },
        { y: -15, r: 35, material: "liquid" },
        { y: -38, r: 35, material: "liquid" },
        { y: -62, r: 32, material: "liquid" },
        { y: -68, r: 0, material: "liquid" },
      ];

      const liquidRingsProj: Array<ProjectedPoint[]> = [];
      liquidRings.forEach((def) => {
        const ringPoints: ProjectedPoint[] = [];
        for (let j = 0; j < SEGMENTS; j++) {
          const angle = (j / SEGMENTS) * Math.PI * 2;
          const rawC: Point3D = {
            x: Math.cos(angle) * def.r,
            y: def.y,
            z: Math.sin(angle) * def.r
          };
          ringPoints.push(project(rawC));
        }
        liquidRingsProj.push(ringPoints);
      });

      for (let r = 0; r < liquidRings.length - 1; r++) {
        const ringAbove = liquidRingsProj[r];
        const ringBelow = liquidRingsProj[r + 1];
        for (let s = 0; s < SEGMENTS; s++) {
          const sNext = (s + 1) % SEGMENTS;
          const p1 = ringAbove[s];
          const p2 = ringAbove[sNext];
          const p3 = ringBelow[sNext];
          const p4 = ringBelow[s];
          const centerZ = (p1.z + p2.z + p3.z + p4.z) / 4 + 1.2; // Push slightly back inside bottle
          faces.push({
            p1, p2, p3, p4,
            color: "rgba(189, 115, 60, 0.45)", // Gorgeous organic rose-gold oil serum active fluid
            borderColor: "transparent",
            material: "liquid",
            centerZ,
            normalX: 0,
            normalY: 0,
            normalZ: 0
          });
        }
      }

      // 4. SORT COMPLETED MESH (PAINTER'S ALGORITHM)
      faces.sort((a, b) => b.centerZ - a.centerZ);

      // Light direction coordinates (constant luxury backlight + interactive user mouse position strobe)
      const lightSource = {
        x: 0.5 + mouseLight.current.x * 1.5,
        y: 0.8 + mouseLight.current.y * 1.5,
        z: -1.0
      };
      const lightLen = Math.sqrt(lightSource.x * lightSource.x + lightSource.y * lightSource.y + lightSource.z * lightSource.z) || 1;
      const lx = lightSource.x / lightLen;
      const ly = lightSource.y / lightLen;
      const lz = lightSource.z / lightLen;

      // 5. RENDER CHOREOGRAPHED FACES
      faces.forEach((face) => {
        // Multi-Material Complex Shading Logic
        let faceCol = "rgba(20,20,20,0.8)";
        let borderCol = "transparent";

        // Dot product between light source and face normal
        const diffuse = Math.max(0, face.normalX * lx + face.normalY * ly + face.normalZ * lz);
        // Specular strobe reflection (Phong approximation)
        const reflectionX = 2 * diffuse * face.normalX - lx;
        const reflectionY = 2 * diffuse * face.normalY - ly;
        const reflectionZ = 2 * diffuse * face.normalZ - lz;
        const specular = Math.pow(Math.max(0, -reflectionZ), 14);

        if (face.material === "bulb") {
          // Pure white matte healthcare premium silicone look
          const capIntensity = Math.floor(215 + diffuse * 32);
          faceCol = `rgb(${capIntensity}, ${capIntensity + 4}, ${capIntensity + 8})`;
          borderCol = `rgba(255,255,255,0.06)`;
        } 
        else if (face.material === "gold") {
          // Prestigious high-reflectance Rose Gold mirror alloy
          const goldAlbedo = Math.floor(210 + diffuse * 35 + specular * 50);
          const r = Math.max(170, Math.min(255, goldAlbedo + 25));
          const g = Math.max(125, Math.min(210, Math.floor(goldAlbedo * 0.73)));
          const b = Math.max(105, Math.min(185, Math.floor(goldAlbedo * 0.62)));
          
          faceCol = `rgb(${r}, ${g}, ${b})`;
          borderCol = `rgba(${r + 15}, ${g + 15}, ${b + 15}, 0.25)`;
        } 
        else if (face.material === "glass") {
          // Translucent obsidian crystal glass, lets internal liquid colors reflect beautifully
          const fresnelAlpha = 0.82 - Math.max(0, face.normalZ) * 0.38; // Rim transparency
          const refractIntensity = Math.floor(14 + diffuse * 15 + specular * 55);
          
          faceCol = `rgba(${refractIntensity + 6}, ${refractIntensity}, ${refractIntensity + 3}, ${fresnelAlpha})`;
          borderCol = `rgba(255, 255, 255, ${0.05 + specular * 0.22})`;
        } 
        else if (face.material === "liquid") {
          // Dynamic active gold nectar serum
          faceCol = face.color; // Set above
        } 
        else if (face.material === "label") {
          // Luxury cream studio paper label
          const labelInk = Math.floor(235 + diffuse * 18);
          // High contrast velvet white
          faceCol = `rgb(${labelInk}, ${labelInk - 5}, ${labelInk - 15})`;
          borderCol = `rgba(13, 10, 8, 0.04)`;
        }

        // Draw basic face polygonal block
        ctx.beginPath();
        ctx.moveTo(face.p1.px, face.p1.py);
        ctx.lineTo(face.p2.px, face.p2.py);
        ctx.lineTo(face.p3.px, face.p3.py);
        ctx.lineTo(face.p4.px, face.p4.py);
        ctx.closePath();

        ctx.fillStyle = faceCol;
        ctx.fill();

        if (borderCol !== "transparent") {
          ctx.strokeStyle = borderCol;
          // Thin hairpins
          ctx.lineWidth = face.material === "gold" ? 0.6 : 0.4;
          ctx.stroke();
        }

        // Render typography dynamically onto the cylindrical label
        // We look for front-facing faces (face.normalZ < -0.35) near the center vertical axis
        if (face.material === "label" && face.normalZ < -0.4 && face.p1.y < 35 && face.p1.y > -25) {
          const cy = (face.p1.py + face.p4.py) / 2;
          const cx = (face.p1.px + face.p2.px) / 2;

          // Estimate skew angle based on cylinder horizontal slant
          const textShift = face.normalX * 6;

          ctx.save();
          ctx.fillStyle = "rgba(40, 28, 20, 0.85)"; // Elegant heavy charcoal ink
          ctx.font = "bold 4.5px sans-serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";

          // Simulate cylindrical label perspective warp
          ctx.transform(1, face.normalX * 0.22, 0, 1, 0, 0);

          // Render exact typographic layers of our "VALZ | ESSENCE" skincare branding
          const rowY = face.p1.y; // Original height to place lines consistently split across segments
          if (rowY < 32 && rowY > 20) {
            ctx.fillStyle = "rgba(202, 131, 86, 0.95)"; // Exquisite gold accent header
            ctx.fillText("V A L Z", cx + textShift, cy);
          } else if (rowY <= 20 && rowY > 0) {
            ctx.fillStyle = "rgba(31, 22, 16, 0.9)";
            ctx.font = "italic bold 5.5px serif";
            ctx.fillText("Elixir 3.0", cx + textShift, cy);
          } else if (rowY <= 0 && rowY > -15) {
            ctx.fillStyle = "rgba(110, 95, 85, 0.8)";
            ctx.font = "3.2px monospace";
            ctx.fillText("BOTANICALS", cx + textShift, cy);
          } else if (rowY <= -15 && rowY > -30) {
            ctx.fillStyle = "rgba(145, 120, 100, 0.7)";
            ctx.font = "3px sans-serif";
            ctx.fillText("● 100% PURE ●", cx + textShift, cy);
          }

          ctx.restore();
        }
      });

      // 6. RENDER DYNAMIC FLOOR SHADOW WITH CAST DISTORTION
      ctx.beginPath();
      const shadowY = centerY + 145;
      const shRadX = 66 + Math.sin(angles.current.pitch) * 12;
      const shRadY = 16 + Math.cos(angles.current.pitch) * 5;
      
      const shadowGrad = ctx.createRadialGradient(
        centerX, shadowY, 0,
        centerX, shadowY, shRadX
      );
      shadowGrad.addColorStop(0, "rgba(22, 15, 12, 0.48)"); // Warm high fidelity occlusive shadow
      shadowGrad.addColorStop(0.35, "rgba(35, 26, 22, 0.18)");
      shadowGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = shadowGrad;
      
      ctx.save();
      ctx.beginPath();
      // Transforming standard circle to low aspect ellipse matching surface perspective
      ctx.setTransform(1, 0, 0, shRadY / shRadX, 0, shadowY - (shRadY / shRadX) * centerX);
      ctx.arc(centerX, centerX, shRadX, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    // Initialize rendering loop
    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUpOrLeave}
      onMouseLeave={onMouseUpOrLeave}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onMouseUpOrLeave}
      className="relative w-full aspect-square max-w-[340px] md:max-w-[400px] mx-auto cursor-grab active:cursor-grabbing flex items-center justify-center select-none"
    >
      {/* Background Soft Glow Aura */}
      <div className="absolute top-[28%] left-[28%] w-[160px] h-[160px] rounded-full bg-luxury-rose/14 filter blur-[60px] pointer-events-none transition-transform duration-300 transform scale-110" />

      {/* The 3D Engine Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full relative z-10 block"
      />

      {/* Elegant, humble floating interactions instruction badge */}
      <div className="absolute bottom-1 bg-neutral-900/90 border border-luxury-rose/25 text-luxury-rose text-[8px] tracking-[0.3em] uppercase py-2 px-6 shadow-2xl pointer-events-none rounded-full select-none z-20 backdrop-blur-sm">
        REVOLVE VALZ ELIXIR
      </div>
    </div>
  );
}
