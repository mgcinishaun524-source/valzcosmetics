// Import all new images from assets
import img0065 from './assets/images/IMG-20260527-WA0065.jpg';
import img0066 from './assets/images/IMG-20260527-WA0066.jpg';
import img0068 from './assets/images/IMG-20260527-WA0068.jpg';
import img0069 from './assets/images/IMG-20260527-WA0069.jpg';
import img0070 from './assets/images/IMG-20260527-WA0070.jpg';
import img0071 from './assets/images/IMG-20260527-WA0071.jpg';
import img0072 from './assets/images/IMG-20260527-WA0072.jpg';
import img0073 from './assets/images/IMG-20260527-WA0073.jpg';
import img0074 from './assets/images/IMG-20260527-WA0074.jpg';
import img0075 from './assets/images/IMG-20260527-WA0075.jpg';
import img0075a from './assets/images/IMG-20260527-WA0075(1).jpg';
import img0076 from './assets/images/IMG-20260527-WA0076.jpg';
import img0076a from './assets/images/IMG-20260527-WA0076(1).jpg';
import img0077 from './assets/images/IMG-20260527-WA0077.jpg';
import img0078 from './assets/images/IMG-20260527-WA0078.jpg';
import img0079 from './assets/images/IMG-20260527-WA0079.jpg';
import img0080 from './assets/images/IMG-20260527-WA0080.jpg';
import img0081 from './assets/images/IMG-20260527-WA0081.jpg';
import img0082 from './assets/images/IMG-20260527-WA0082.jpg';
import img0083 from './assets/images/IMG-20260527-WA0083.jpg';
import img0084 from './assets/images/IMG-20260527-WA0084.jpg';
import img0085 from './assets/images/IMG-20260527-WA0085.jpg';
import img0086 from './assets/images/IMG-20260527-WA0086.jpg';
import img0087 from './assets/images/IMG-20260527-WA0087.jpg';
import img0087a from './assets/images/IMG-20260527-WA0087(1).jpg';
import img0088 from './assets/images/IMG-20260527-WA0088.jpg';
import img0089 from './assets/images/IMG-20260527-WA0089.jpg';
import img0090 from './assets/images/IMG-20260527-WA0090.jpg';
import img0091 from './assets/images/IMG-20260527-WA0091.jpg';
import img0092 from './assets/images/IMG-20260527-WA0092.jpg';
import img0093 from './assets/images/IMG-20260527-WA0093.jpg';
import img0094 from './assets/images/IMG-20260527-WA0094.jpg';
import img0095 from './assets/images/IMG-20260527-WA0095.jpg';
import img0096 from './assets/images/IMG-20260527-WA0096.jpg';
import img0097 from './assets/images/IMG-20260527-WA0097.jpg';
import img0098 from './assets/images/IMG-20260527-WA0098.jpg';
import img0099 from './assets/images/IMG-20260527-WA0099.jpg';
import img0100 from './assets/images/IMG-20260527-WA0100.jpg';
import img0101 from './assets/images/IMG-20260527-WA0101.jpg';
import img0102 from './assets/images/IMG-20260527-WA0102.jpg';
import img0102a from './assets/images/IMG-20260527-WA0102(1).jpg';
import img0103 from './assets/images/IMG-20260527-WA0103.jpg';
import img0104 from './assets/images/IMG-20260527-WA0104.jpg';
import img0105 from './assets/images/IMG-20260527-WA0105.jpg';
import img0106 from './assets/images/IMG-20260527-WA0106.jpg';
import img0107 from './assets/images/IMG-20260527-WA0107.jpg';
import img0108 from './assets/images/IMG-20260527-WA0108.jpg';
import img0109 from './assets/images/IMG-20260527-WA0109.jpg';
import img0110 from './assets/images/IMG-20260527-WA0110.jpg';
import img0111 from './assets/images/IMG-20260527-WA0111.jpg';
import img0112 from './assets/images/IMG-20260527-WA0112.jpg';
import img0113 from './assets/images/IMG-20260527-WA0113.jpg';
import img0114 from './assets/images/IMG-20260527-WA0114.jpg';
import img0115 from './assets/images/IMG-20260527-WA0115.jpg';
import img0115a from './assets/images/IMG-20260527-WA0115(1).jpg';
import logoImg from './assets/images/LOGO.png';
import shopLocationImg from './assets/images/SHOP LOCATION.png';

import { Product, Testimonial } from './types';

const RAW_PRODUCTS: Product[] = [
  {
    id: "dove-even-tone-deod",
    name: "Dove Advanced Care Even Tone Sensitive Antiperspirant",
    category: "Deodorants & Sprays",
    brand: "Dove",
    price: "$4.00",
    description: "Formulated with 1/4 moisturizing cream and active skin-even patch tone restoring nutrients to reduce underarm hyperpigmentation while protecting against odor up to 72 hours.",
    ingredients: ["Aluminium Zirconium Tetrahydrex GLY", "Sunflower Seed Oil", "Glycerin Lipids", "Moisturising Cream Base"],
    benefits: [
      "Visibly restores and unifies underarm skin tone balance within 21 days",
      "72-hour high-performance perspirant defense and fresh floral odor control",
      "Incredibly gentle formula tailored for highly sensitive or shaved skin tissues"
    ],
    image: img0065
  },
  {
    id: "osh-royal-bath",
    name: "Oh So Heavenly Royal Radiance Perfumed Foam Bath",
    category: "Luxurious Bath Care",
    brand: "Oh So Heavenly",
    price: "$10.00",
    description: "A luxury perfumed foam bath enriched with royal gold-dust shimmer and black orchid extract to soften your skin layers with rich, moisturizing bubbles.",
    ingredients: ["Black Orchid Essential Oils", "Glycerin Humectants", "Purifying Surfactants", "Shimmer Minerals"],
    benefits: [
      "Fills your bathing routine with a deeply elegant, majestic perfume trail",
      "Creates dense cascading bubbles that hydrate and soften skin cells thoroughly",
      "Features a rich cleansing properties ideal for dry skin relief"
    ],
    image: img0066
  },
  {
    id: "nivea-dry-comfort",
    name: "Nivea Dry Comfort Antiperspirant Body Spray",
    category: "Deodorants & Sprays",
    brand: "Nivea",
    price: "$4.00",
    description: "Dual active antiperspirant formula with real mineral extracts to ensure a touchably dry, ultra-smooth underarm feeling with 72-hour clinical confidence.",
    ingredients: ["Butane", "Isobutane", "Aluminum Chlorohydrate", "Dry Mineral Minerals", "Avocado Skin Oil"],
    benefits: [
      "Provides dry underarm protection that lasts throughout the busiest days",
      "Dermatologically approved for direct, high-comfort everyday application",
      "Infused with a subtle, clean, and refreshing cotton-fresh aroma"
    ],
    image: img0068
  },
  {
    id: "playgirl-body-spray",
    name: "Playgirl VIP Glamour Perfumed Body Spray",
    category: "Deodorants & Sprays",
    brand: "Playgirl",
    price: "$4.00",
    description: "An irresistible, elegant concentrated perfumed body spray designed for the modern woman who demands confidence, longevity, and alluring floral fruit base tones.",
    ingredients: ["Alcohol Denat", "Perfume Fluid", "Propylene Glycol", "Alpha-Isomethyl Ionone", "Linalool Essence"],
    benefits: [
      "Provides an instant burst of high-fashion VIP couture scent notes",
      "Designed specifically for 24-hour long-lasting scent projection",
      "Gentle aerosol dispersion that does not cause skin patch burning"
    ],
    image: img0069
  },
  {
    id: "osh-bye-bye-stress",
    name: "Oh So Heavenly Bye-Bye Stress Perfumed Body Mist",
    category: "Deodorants & Sprays",
    brand: "Oh So Heavenly",
    price: "$4.00",
    description: "Infused with high-grade organic lavender, chamomile, and warm vanilla extracts to mist away daily pressure and restore absolute serenity.",
    ingredients: ["Lavender Essential Extract", "Chamomile Oil", "Aqua Purified", "Aloe Cooling Agent"],
    benefits: [
      "Calms mind and body with aromatherapy-grade floral soothing properties",
      "Lightweight long-lasting spray mist perfect for multiple daily applications",
      "Protects skin cells against environmental hot dry weather dehydration"
    ],
    image: img0070
  },
  {
    id: "dove-advanced-deod",
    name: "Dove Advanced Care Sensitive Anti-Perspirant",
    category: "Deodorants & Sprays",
    brand: "Dove",
    price: "$4.00",
    description: "Premium advanced protective aerosol spray crafted with zero alcohol, nourishing skin-identical lipids, and deep humectants to relieve irritation.",
    ingredients: ["Alpha-Isomethyl Acid", "Sunflower Seed Oil", "Moisturising Lipids", "Hydrotalcite minerals"],
    benefits: [
      "Rapidly repairs dry, damaged underarm skin barriers caused by friction",
      "Stops sweat and odor molecules from forming without causing irritation",
      "Hypoallergenic formula thoroughly certified for highly vulnerable skin"
    ],
    image: img0071
  },
  {
    id: "nivea-men-shower-gel",
    name: "Nivea Men Deep Comfort 3-in-1 Shower Gel",
    category: "Body Bath & Wash",
    brand: "Nivea",
    price: "$12.00",
    description: "An incredibly fast, high-performance cleanser enriched with micro-fine natural clay to absorb oil, dirt, and sweat from your body, face, and hair cleanly.",
    ingredients: ["Purifying Natural Micro-Clay", "Active Surfactant Matrix", "Glycerin Lipids", "Fresh Wood Fragrance"],
    benefits: [
      "The ultimate 3-in-1 time-saver for deep body, face, and hair purification",
      "Natural clay draws out stubborn impurities without drying out the skin",
      "Leaves skin feeling completely refreshed, clean, and deeply clean"
    ],
    image: img0072
  },
  {
    id: "dove-men-extra-fresh",
    name: "Dove Men+Care Extra Fresh Active Deodorant",
    category: "Deodorants & Sprays",
    brand: "Dove",
    price: "$4.00",
    description: "Engaged with a highly invigorating masculine citrus scent and 1/4 moisturizer technology to defend against sweat and lock in skin moisture.",
    ingredients: ["Aluminum Sesquichlorohydrate", "Invigorating Citrus Terpenes", "Dimethiconol", "Moisture Shield"],
    benefits: [
      "Slashes perspiration underarm wetness immediately for 72 hours",
      "Shields skin cells from chafing, burning, and heavy dry weather scraping",
      "Releases a refreshing citrus burst that reactivates throughout the day"
    ],
    image: img0073
  },
  {
    id: "sorbet-body-butter",
    name: "Sorbet Renewing Cranberry Body Butter",
    category: "Exfoliating & Moisturising",
    brand: "Sorbet",
    price: "$14.00",
    description: "An incredibly rich, whipped body cream packed with nourishing cranberry lipids, organic shea butter, and essential oils for dry skin therapy.",
    ingredients: ["Cranberry Lipids", "Saponified Cocoa Butter", "Raw African Shea", "Glycerin Humectant Base"],
    benefits: [
      "Restores natural skin barrier moisture levels instantly upon application",
      "Leaves body skin with an extremely healthy, non-greasy satin elasticity",
      "Envelopes the senses in a premium, long-lasting salon luxury trail"
    ],
    image: img0074
  },
  {
    id: "gynaguard-comfort-wash",
    name: "Gynaguard Essential Daily Comfort Intimate Wash",
    category: "Intimate Care",
    brand: "Gynaguard",
    price: "$9.00",
    description: "Dermatologically and gynecologically approved Daily Comfort Intimate Wash to respect your natural pH balance and ensure fresh, clean confidence.",
    ingredients: ["Lactic Acid", "Probiotics Extract", "Tea Tree Bio-Active Essence", "Purified Water Base"],
    benefits: [
      "Formulated to respect and support the natural vaginal pH balance and defenses",
      "Soothes and completely neutralizes odor-causing bacteria instantly",
      "Colorant-free, soap-free, and specifically hypoallergenic for skin health"
    ],
    image: img0075
  },
  {
    id: "gynaguard-ultimate-wash",
    name: "Gynaguard Ultimate Daily Control Intimate Wash",
    category: "Intimate Care",
    brand: "Gynaguard",
    price: "$9.00",
    description: "Ultimate daily control intimate wash for extra freshness.",
    ingredients: ["Lactic Acid", "Tea Tree Oil", "Probiotics", "Purified Water"],
    benefits: [
      "pH balanced for daily use",
      "Controls odor-causing bacteria",
      "Gentle for sensitive skin"
    ],
    image: img0075a
  },
  {
    id: "femivat-comfort-cleanser",
    name: "Femivat Essential Intimate Cleanser (140ml)",
    category: "Intimate Care",
    brand: "Femivat",
    price: "$8.00",
    description: "High-comfort botanical intimate cleanser designed to protect natural flora and moisturize sensitive intimate skin tissues daily and cleanly.",
    ingredients: ["Aloe Hydrating Base", "Chamomile Extract", "Natural Lactic Lipids", "Eucalyptus Extract"],
    benefits: [
      "Maintains perfectly balanced pH levels to support natural defenses",
      "Delivers soothing, immediate cooling relief from environmental dry heat",
      "Thoroughly dermatologist tested for everyday sensitive skin safety"
    ],
    image: img0076
  },
  {
    id: "femivat-intimate-cleanser",
    name: "Femivat Essential Intimate Cleanser",
    category: "Intimate Care",
    brand: "Femivat",
    price: "$8.00",
    description: "Essential intimate cleanser for daily care.",
    ingredients: ["Chamomile Extract", "Aloe Vera", "Natural Lactic Acid"],
    benefits: ["Gentle cleansing", "pH balanced", "Soothes sensitive skin"],
    image: img0076a
  },
  {
    id: "sorbet-body-wash-firming",
    name: "Sorbet Firming & Nourishing Body Wash",
    category: "Body Bath & Wash",
    brand: "Sorbet",
    price: "$16.00",
    description: "Infused with active collagen stimulants, micro-beads, and nourishing almond milk proteins to systematically purify and firm skin layers while bathing.",
    ingredients: ["Almond Milk Proteids", "Collagen boosters", "Micro-cleaning beads", "Tocopherol acetate"],
    benefits: [
      "Gently washes away daily dust and grime while boosting skin elasticity",
      "Nourishing vitamin beads burst open to feed natural barrier cells directly",
      "Provides rich luxurious leather that preserves original skin hydration"
    ],
    image: img0077
  },
  {
    id: "osh-foot-spa-repair",
    name: "Oh So Heavenly Foot Spa Cracked Heel Cream",
    category: "Foot Care Solutions",
    brand: "Oh So Heavenly",
    price: "$5.00",
    description: "Dermatologist-tested cracked heel remedy loaded with active Urea and soothing tea tree oil to heal and close tough heel splits within 5 days.",
    ingredients: ["Pure Urea (Active)", "Peppermint Essence", "Melaleuca Alternifolia (Tea Tree) Oil", "Vaseline Base"],
    benefits: [
      "Completely closes and heals rough painful skin splits and calluses safely",
      "Active cooling eucalyptus properties relieve heavy ankle and arch fatigue",
      "Locks in intense protective oil levels to ensure everyday elastic heel steps"
    ],
    image: img0078
  },
  {
    id: "osh-foot-treatment-night",
    name: "Oh So Heavenly Sole Therapy Overnight Treatment",
    category: "Foot Care Solutions",
    brand: "Oh So Heavenly",
    price: "$5.00",
    description: "An intensive restorative overnight foot balm packed with premium botanical oils and cocoa extract to soften feet during sleep cycles.",
    ingredients: ["Cocoa Seed Butter", "Peppermint essential oils", "Salicylic Acid", "Vitamin E Alpha"],
    benefits: [
      "Deeply penetrates thick hard sole skin structures while sleeping",
      "Hydrates extremely dried foot plates ensuring beautiful morning soft heels",
      "Restores a refreshing scent that neutralizes foot odor systematically"
    ],
    image: img0079
  },
  {
    id: "sorbet-body-scrub",
    name: "Sorbet Rejuvenating Body Scrub",
    category: "Exfoliating & Moisturising",
    brand: "Sorbet",
    price: "$6.00",
    description: "A luxury professional scrub formulated with fine-crystal sugar nodes and deep skin rejuvenating extracts to dissolve dead cell debris perfectly.",
    ingredients: ["Crystalline Exfoliating Nodes", "Jojoba Glaze", "Vitamin E Alpha-Tocopherol", "Essential Oil Blend"],
    benefits: [
      "Gently polishes and buffs away rough skin cells, revealing instant glow",
      "Improves natural cell absorption of body moisturizers and skin oils",
      "Enriches the bath routine with a beautiful, lasting salon fragrance"
    ],
    image: img0080
  },
  {
    id: "femivat-intimate-bar",
    name: "Femivat Gentle Intimate Cleansing Bar Soap",
    category: "Intimate Care",
    brand: "Femivat",
    price: "$3.00",
    description: "A premium, pH-balanced solid cleansing block formulated without visual colorants or heavy soaps. Gently keeps intimate skin fresh and clean.",
    ingredients: ["Lactic Ferments", "Saponified Coconut Lipids", "Organic Chamomile Juice", "Purified Glycerin"],
    benefits: [
      "Safe and non-irritating solid bar format suitable for daily sensitive care",
      "Instantly shields vulnerable tissue layers against dryness and odor",
      "Completely soap-free to respect the body's natural moisture boundaries"
    ],
    image: img0081
  },
  {
    id: "osh-lip-balm-trio",
    name: "Oh So Heavenly Lip Balm Trio Pack",
    category: "Lip & Face care",
    brand: "Oh So Heavenly",
    price: "$6.00",
    description: "A gorgeous collection of three moisturizing lip balms. Provides intense satin feeling, high hydration shielding, and sweet fruity aromas.",
    ingredients: ["Organic Coconut Butter", "Soybean Oil Extract", "Vitamin E Tocopherol", "Moisture Seals"],
    benefits: [
      "Saves dry, chapped lips from heavy dry weather splitting and flaking",
      "Compact easy-carry pack offering three beautiful, unique scent selections",
      "Restores a gorgeous natural sheen and leaves lips fully moisturized"
    ],
    image: img0082
  },
  {
    id: "clicks-lip-balm-duo",
    name: "Clicks Color & Condition Lip Balm Duo",
    category: "Lip & Face care",
    brand: "Clicks",
    price: "$5.00",
    description: "Double action lip defense formula (Cherry & Shimmering Pearl) designed to nourish lips with deep oils and provide a subtle rosy tint.",
    ingredients: ["Cherry Seed Oil", "Vaseline Base", "Pearl Extract Shimmer", "Vitamin E Alpha"],
    benefits: [
      "Offers dual benefit: intense therapeutic healing and gorgeous tint color",
      "Protects lips from cold, wind, and dryness for 12 hours straight",
      "Subtle sweet cherry flavor that leaves a lasting pleasant scent"
    ],
    image: img0083
  },
  {
    id: "vaseline-cera-glow",
    name: "Vaseline Radiant & Beauty Cera-Glow Lotion (400ml)",
    category: "Tone Even Glow Lotion",
    brand: "Vaseline",
    price: "$10.00",
    description: "Enriched with high concentration Ceramides and Vitamin C to restore a touchably even tone skin glow and rebuild skin elasticity.",
    ingredients: ["Active Ceramides", "Vitamin C (Brightening)", "Sunflower Seed Lipids", "Moisture Locks"],
    benefits: [
      "Specifically engineered to brighten and nourish beautiful dark skin",
      "Restores evenness and eliminates dry patches on elbows and knees",
      "Locks in continuous nourishing moisture for up to 48 hours straight"
    ],
    image: img0084
  },
  {
    id: "good-stuff-bee-natural",
    name: "The Good Stuff Bee Natural Hydrating Body Cream",
    category: "Tone Even Glow Lotion",
    brand: "Good Stuff",
    price: "$6.00",
    description: "A deeply nourishing moisturizing body cream infused with organic wild honey, cold-pressed almond oils, and deep moisture locking lipids.",
    ingredients: ["Organic Honey Extract", "Prunus Amygdalus Dulcis (Almond) Oil", "Glycerin Lipids", "Botanical Surfactants"],
    benefits: [
      "Instantly produces a rich, nourishing film that hydrates dry skin cells",
      "Free from harsh chemical chemicals, keeping skin soft and clean",
      "Leaves behind a beautiful, comforting warm honey and cream scent"
    ],
    image: img0085
  },
  {
    id: "eucerin-lotion-trio",
    name: "Eucerin Advanced Repair & Roughness Relief Lotions",
    category: "Advanced Tone Correction",
    brand: "Eucerin",
    price: "$12.00",
    description: "Professional medical-grade treatment lotions designed to correct extreme dryness, rough bumpy skin, and repair cellular skin barriers.",
    ingredients: ["Ceramide-3", "Natural Moisturising Factors (NMF)", "Urea Extrastimulants", "Sunflower Seed Oil"],
    benefits: [
      "Restores extremely dry, scaly skin layers back to absolute smooth health",
      "Gently exfoliates rough bumps and flakes systematically within 3 days",
      "Completely fragrance-free and dermatologist approved for absolute safety"
    ],
    image: img0086
  },
  {
    id: "osh-even-glow-niacinamide-night",
    name: "Oh So Heavenly Even Glow Niacinamide Pro+ Night Cream",
    category: "Advanced Tone Correction",
    brand: "Oh So Heavenly",
    price: "$14.00",
    description: "An advanced professional night therapy cream powered by Niacinamide Pro+ to visibly restore even look and fade dark spots during rest cycles.",
    ingredients: ["Niacinamide Pro+", "Vitamin C complex", "Alpha-Arbutin", "Glycolic Acid Base"],
    benefits: [
      "Visibly fades dark blemish spots and hyperpigmentation marks in 14 days",
      "Reduces fine lines and improves overall organic structural density",
      "Provides intense, 72-hour structural moisture storage to skin cells"
    ],
    image: img0087
  },
  {
    id: "osh-even-glow-niacinamide-day",
    name: "Oh So Heavenly Even Glow Niacinamide Pro+ SPF 15 Day Cream",
    category: "Advanced Tone Correction",
    brand: "Oh So Heavenly",
    price: "$14.00",
    description: "Day cream with SPF 15 and Niacinamide Pro+ for even tone.",
    ingredients: ["Niacinamide Pro+", "SPF 15", "Vitamin C", "Glycolic Acid"],
    benefits: ["Even skin tone", "Sun protection", "Hydration"],
    image: img0087a
  },
  {
    id: "osh-even-glow-serum",
    name: "Oh So Heavenly Even Glow Vitamin C Pro+ Serum",
    category: "Advanced Tone Correction",
    brand: "Oh So Heavenly",
    price: "$12.00",
    description: "High-potency brightening serum infused with pure stabilizing Vitamin C and licorice root to correct dull skin regions and restore youthful bounce.",
    ingredients: ["Stabilised Vitamin C Complex", "Licorice Extract", "Hyaluronic Acid", "Niacinamide"],
    benefits: [
      "Delivers a stunning luminous skin dew glow immediately after use",
      "Acts as a powerful shield against free radicals and hot sun UV damage",
      "Highly absorbent, water-gel texture that acts naturally under cosmetics"
    ],
    image: img0088
  },
  {
    id: "osh-even-glow-spot-cor",
    name: "Oh So Heavenly Even Glow Niacinamide Spot Corrector",
    category: "Advanced Tone Correction",
    brand: "Oh So Heavenly",
    price: "$11.00",
    description: "Targeted localized treatment gel engineered to clear hyperpigmentation patches, correct historic solar spots, and unify face complexion borders.",
    ingredients: ["Niacinamide Pro+ 5%", "Salicylic Acid (BHA)", "Bearberry Herbal Ext", "Soothing Lactic Acid"],
    benefits: [
      "Uncompromisingly focuses on dark melanin spots to fade them completely",
      "Gently micro-peels cellular dust away allowing smooth healthy skin emergence",
      "Provides localized sebum control without causing dry skin scaling"
    ],
    image: img0089
  },
  {
    id: "osh-baby-freshener",
    name: "Oh So Heavenly Baby Gentle Care Fragranced Skin Freshener",
    category: "Baby & Gentle Care",
    brand: "Oh So Heavenly",
    price: "$6.00",
    description: "Baby gentle care fragranced skin freshener.",
    ingredients: ["Aloe Vera", "Chamomile", "Purified Water"],
    benefits: ["Gentle for baby skin", "Soft fragrance", "Hydrating"],
    image: img0090
  },
  {
    id: "osh-baby-room-mist",
    name: "Oh So Heavenly Baby Sweet Dreams Bedtime Room Mist",
    category: "Baby & Gentle Care",
    brand: "Oh So Heavenly",
    price: "$7.00",
    description: "Bedtime room mist for sweet dreams.",
    ingredients: ["Lavender", "Chamomile", "Purified Water"],
    benefits: ["Calming scent", "Helps baby sleep", "Gentle"],
    image: img0091
  },
  {
    id: "tiamo-fragrance-mist",
    name: "Ti-Amo Luxurious Lavender Fragrance Body Mist",
    category: "Deodorants & Sprays",
    brand: "Ti-Amo",
    price: "$3.00",
    description: "An airy, beautifully scented spritzer to refresh your body with lightweight hydrating micro-agents and high-fashion floral lavender accents.",
    ingredients: ["Lavender Essence", "Aloe Vera Hydrolate", "Butane Purified", "Alpha-Hexyl Cinnamal"],
    benefits: [
      "Leaves an incredibly cooling, relaxing lavender freshness trail that elevates mood",
      "Perfect compact size for multiple freshening sprays throughout hot dry days",
      "Dermatologically tested to avoid cosmetic sensitivity or stinging"
    ],
    image: img0092
  },
  {
    id: "avon-white-lily",
    name: "Avon Senses White Lily Luxurious Body Mist",
    category: "Deodorants & Sprays",
    brand: "Avon",
    price: "$4.00",
    description: "Infused with pure White Lily extracts and soft peach accents to envelop your skin in a beautiful, long-lasting botanical breeze trail.",
    ingredients: ["White Lily extract", "Moisture-locking agents", "Fragrance Essential Matrix", "Alcohol Denat"],
    benefits: [
      "Provides daylong projection of an elegant floral bouquet fragrance",
      "Leaves skin surface feeling cool, dry, and delightfully clean in seconds",
      "Excellent skin compatibility certified across all types"
    ],
    image: img0093
  },
  {
    id: "osh-scentsations-mist",
    name: "Oh So Heavenly Scentsations Body Spritzer",
    category: "Deodorants & Sprays",
    brand: "Oh So Heavenly",
    price: "$5.00",
    description: "An airy, beautifully scented spritzer to refresh your body with lightweight hydrating micro-agents and sweet fruity orchid accents.",
    ingredients: ["Fragrance Mist Base", "Moroccan Orchid Oil", "Linalool", "Purified Water Mist", "Aloe Hydration Extracts"],
    benefits: [
      "Leaves a refreshing, lingering fine fragrance trail that captivates",
      "Ultra-fine mist spray cooling effect perfect for Zimbabwe warm periods",
      "Infused with natural aloe to provide a quick subtle hydration touch"
    ],
    image: img0094
  },
  {
    id: "osh-perfume-mist-long",
    name: "Oh So Heavenly 48HR Long Lasting Perfume Mist",
    category: "Deodorants & Sprays",
    brand: "Oh So Heavenly",
    price: "$6.00",
    description: "An elite fragrance mist with micro-encapsulated fragrance boosters that slowly release luxurious floral notes for a full 48 hours.",
    ingredients: ["Micro-Encapsulated Fragrance", "Vanilla Musks", "Purified Aqua", "Antioxidant complex"],
    benefits: [
      "Guarantees deep premium scent projection and longevity for up to two full days",
      "Moisturizing skin elements keep your arms and neck soft and glowing",
      "Resists hot summer sweat to maintain clean fresh fragrance contours"
    ],
    image: img0095
  },
  {
    id: "exquisite-clutch-black",
    name: "Exquisite Glamour Pleated Black Evening Clutch Bag",
    category: "Elegance Accessories",
    brand: "Exquisite",
    price: "$35.00",
    description: "A gorgeous, high-fashion pleated evening clutch bag with chain details. Adds an elite touch of luxury and glamour to formal events and dinners.",
    ingredients: ["Pleated Silk Fibre", "Satin Lining", "Chrome Chain", "Magnetic Lock"],
    benefits: [
      "Luxurious, pristine pleated texture catching light beautifully at any angle",
      "Perfect compact size to host your cosmetics, smartphone, and keys elegantly",
      "Versatile dual form: use as an elegant hand clutch or over-the-shoulder bag"
    ],
    image: img0096
  },
  {
    id: "exquisite-clutch-silver",
    name: "Exquisite Glamour Pleated Silver Evening Clutch Bag",
    category: "Elegance Accessories",
    brand: "Exquisite",
    price: "$35.00",
    description: "A gorgeous, high-fashion pleated evening clutch bag with chain details. Adds an elite touch of luxury and glamour to formal events and dinners.",
    ingredients: ["Pleated Glistening Fibre", "Satin Lining", "Chrome Chain", "Magnetic Lock"],
    benefits: [
      "Luxurious, pristine pleated texture catching light beautifully at any angle",
      "Perfect compact size to host your cosmetics, smartphone, and keys elegantly",
      "Versatile dual form: use as an elegant hand clutch or over-the-shoulder bag"
    ],
    image: img0097
  },
  {
    id: "clicks-tissue-oil-cream",
    name: "Clicks Tissue Oil Repairing Body Cream (500ml)",
    category: "Dermal Spot Treatment",
    brand: "Clicks",
    price: "$8.00",
    description: "Deep action tissue oil cream containing multi-vitamin nourishing beads and rosehip oil to heal stretch marks and lock in 48-hour moisture.",
    ingredients: ["Pure Rosehip Oil", "Vitamin E Alpha Base", "Collagen boosters", "Saponified Coconut Oil"],
    benefits: [
      "Dramatically reduces the appearance of stretch marks and body scars",
      "Infuses dry flaky skin tissues with deep moisture for absolute elastic health",
      "Dermatologist tested for daily body application on sensitive regions"
    ],
    image: img0098
  },
  {
    id: "clicks-tissue-oil-lotion",
    name: "Clicks Tissue Oil Intense Body Lotion (200ml)",
    category: "Dermal Spot Treatment",
    brand: "Clicks",
    price: "$5.00",
    description: "A lightweight, fast-absorbing therapeutic lotion formulated with cold-pressed marula, calendula, and vitamin E to restore skin softness.",
    ingredients: ["Marula Seed Oil", "Calendula Extract", "Vitamin E", "Lanolin Humectant Base"],
    benefits: [
      "Absorbs in seconds leaving zero greasy residue, ideal for hot periods",
      "Targets uneven dry patches on elbows, knees, and ankles for swift renewal",
      "Perfect everyday body lotion to protect skin against sun drying effects"
    ],
    image: img0099
  },
  {
    id: "clicks-tissue-oil-liquid",
    name: "Clicks Therapeutic Pure Tissue Oil (125ml)",
    category: "Dermal Spot Treatment",
    brand: "Clicks",
    price: "$7.00",
    description: "Concentrated therapeutic tissue oil designed to target stubborn stretch marks, scar tissue, dehydrated skin plates, and facial pigmentation.",
    ingredients: ["Concentrated Rosehip Oil", "Sweet Almond Mineral Oil", "Wheat Germ extract", "Bisabolol Soothing Oil"],
    benefits: [
      "Provides rich clinical lipids to repair deep scars and stretch marks fast",
      "Hydrates dried cell layers thoroughly restoring smooth glowing complexion",
      "Excellent to mix with everyday lotions for an added hydration boost"
    ],
    image: img0100
  },
  {
    id: "dove-intense-cream",
    name: "Dove Beauty Cream Intense Moisturising Balm",
    category: "Barrier Repair Cream",
    brand: "Dove",
    price: "$8.00",
    description: "Intensely rich nourishing cream formulated built with 1/4 skin moisturizer lipids and active hydration anchors to heal extremely dry rough spots.",
    ingredients: ["Purified Glycerin", "Stearic Acid", "1/4 Moisturising Cream", "Zinc Healing minerals"],
    benefits: [
      "Instantly relieves severe dry tightness on knees, elbows, and joints",
      "Rebuilds the natural moisture protective shield of your skin for 48 hours",
      "Subtle classic clean fragrance that is fully eye-safe and comforting"
    ],
    image: img0101
  },
  {
    id: "dove-body-love-lotion",
    name: "Dove Body Love Pampering Body Lotion",
    category: "Tone Even Glow Lotion",
    brand: "Dove",
    price: "$9.00",
    description: "Pamper your skin with this luxury moisturizing lotion enriched with shea butter and warm vanilla notes for instant 24-hour skin glow.",
    ingredients: ["African Shea Butter", "Glycerin Lipids", "Vitamin E Alpha-Tocopherol", "Moisture Seal Esters"],
    benefits: [
      "Imbues dry skin layers with absolute satin moisture and glow",
      "Rebuilds skin elasticity boundaries preventing stretch marks systematically",
      "Envelopes the entire body in a beautiful and calming rich vanilla perfume"
    ],
    image: img0102
  },
  {
    id: "dove-body-love-pampering",
    name: "Dove Body Love Pampering Body Lotion",
    category: "Tone Even Glow Lotion",
    brand: "Dove",
    price: "$9.00",
    description: "Body love pampering lotion with shea butter.",
    ingredients: ["Shea Butter", "Glycerin", "Vitamin E"],
    benefits: ["Deep hydration", "Soft skin", "Smooth texture"],
    image: img0102a
  },
  {
    id: "clicks-baby-lotion-cuddles",
    name: "Oh So Heavenly Mum & Cherub Soft Baby Lotion",
    category: "Baby & Gentle Care",
    brand: "Oh So Heavenly",
    price: "$6.00",
    description: "A pediatric-certified, ultra-gentle baby lotion formulated with organic chamomile and sweet almond oil to nourish delicate baby skin.",
    ingredients: ["Chamomile juice extract", "Sweet Almond Oil Base", "Vaseline Base", "Aqua Purified"],
    benefits: [
      "Formulated specifically for highly sensitive newborn skin boundaries",
      "Locks in 24-hour continuous botanical moisture shielding with ease",
      "Hypoallergenic, dye-free, and dermatologically tested for absolute care"
    ],
    image: img0103
  },
  {
    id: "osh-kids-bubble-bath",
    name: "Oh So Heavenly Kids Colour Changing Bubble Bath",
    category: "Baby & Gentle Care",
    brand: "Oh So Heavenly",
    price: "$7.00",
    description: "A fun and incredibly gentle colour changing bubble bath for children, creating an ocean of blue, tear-free bubbles while protecting skin barriers.",
    ingredients: ["Tear-Free Surfactant Mix", "Organic Chamomile", "Skin-Safe Colour Changing ferments", "Hydrating Glycerin"],
    benefits: [
      "Turns bath-time into a magical blue ocean adventure with huge organic bubbles",
      "Formulated strictly tear-free and dermatologically verified for children",
      "Contains organic chamomile to soothe and safeguard vulnerable skin tissues"
    ],
    image: img0104
  },
  {
    id: "osh-baby-bubble-bath",
    name: "Oh So Heavenly Baby African Oils Bubble Bath",
    category: "Baby & Gentle Care",
    brand: "Oh So Heavenly",
    price: "$8.00",
    description: "Pediatrician-approved gentle bubble bath enriched with cold-pressed African marula and baobab oils to nourish baby skin while playing.",
    ingredients: ["Baobab Seed extract", "Marula Oil", "Tear-Free Gentle cleansing bases", "Aqua Purified"],
    benefits: [
      "Protects baby skin's natural pH and acidic moisture barrier securely",
      "Rich soothing foam that nourishes dry skin cells during the bath",
      "100% free from parabens, phthalates, and harsh sulfates"
    ],
    image: img0105
  },
  {
    id: "nivea-luminous-cleansing",
    name: "Nivea Luminous Skin Glow Cleansing Foam",
    category: "Barrier Repair Cream",
    brand: "Nivea",
    price: "$12.00",
    description: "Advanced daily hydrating face wash featuring micro-bubbles and active Luminous skin nutrients to clear dark solar patches and unified contours.",
    ingredients: ["Luminous Spot Correction Matrix", "L-Ascorbic Acid (Vitamin C)", "Glycerin Refined", "Mild surfactant gel"],
    benefits: [
      "Deeply purifies facial pores removing dust, sweat, and cosmetics safely",
      "Uncompromisingly fades blemish shadows and prevents hyperpigmentation",
      "Leaves face surface feeling fully moisturized, clean, and radiant"
    ],
    image: img0106
  },
  {
    id: "african-extracts-creams",
    name: "African Extracts Rooibos Complete Daily Facial Kit",
    category: "Advanced Tone Correction",
    brand: "African Extracts Rooibos",
    price: "$8.00",
    description: "A set of Day Cream with SPF 15, deep action Night Cream, and Dual Action Moisturiser enriched with bio-active Rooibos antioxidants.",
    ingredients: ["Bio-Active Rooibos Extract", "SPF 15 Filters", "Vitamin E Alpha-Tocopherol", "Glycerin"],
    benefits: [
      "Delivers therapeutic antioxidant protection directly to facial cells",
      "Saves skin from sun drying and hyperpigmentation with active SPF filters",
      "Reduces fine lines and repairs skin texture overnight systematically"
    ],
    image: img0107
  },
  {
    id: "african-extracts-spot-range",
    name: "African Extracts Rooibos Spot Control Cleansing Set",
    category: "Target Spot Treatment",
    brand: "African Extracts Rooibos",
    price: "$7.00",
    description: "Includes Face Scrub, Spot Treatment Gel, and Face Wash. Formulated with tea tree and organic rooibos to heal acne and skin breakouts fast.",
    ingredients: ["Concentrated Bio-Active Rooibos", "Pure Melaleuca Tea Tree Oil", "Salicylic Acid 2%", "Zinc PCA", "Aloe Vera Juice"],
    benefits: [
      "Rapidly reduces spot size, redness, and inflammation overnight",
      "Provides localized sebum regulation without peeling healthy surrounding skin",
      "Dries out blemishes while soothing the skin's natural healing process"
    ],
    image: img0108
  },
  {
    id: "nivea-q10-body-lotion",
    name: "Nivea Firming Q10+ Vitamin C Body Lotion",
    category: "Tone Even Glow Lotion",
    brand: "Nivea",
    price: "$10.00",
    description: "Formulated with Coenzyme Q10 and pure Vitamin C to firm skin and restore natural elasticity within 10 days of everyday application.",
    ingredients: ["Coenzyme Q10", "Stabilised Vitamin C Complex", "Glycerin Lipids", "Moisture Locks"],
    benefits: [
      "Dramatically improves overall skin firmness and contour elasticity in 10 days",
      "Offers intense 48-hour moisture shielding preventing dry skin split lines",
      "Leaves skin with a beautiful, healthy glow and subtle fresh scent"
    ],
    image: img0109
  },
  {
    id: "nivea-q10-firming-cream",
    name: "Nivea Firming Q10 Rich Body Cream (400ml)",
    category: "Tone Even Glow Lotion",
    brand: "Nivea",
    price: "$10.00",
    description: "An intensely rich whipped firming body cream packed with Coenzyme Q10 and deep moisturizing lipids to shape and smooth body tissues.",
    ingredients: ["Coenzyme Q10", "Soybean oil extracts", "Moisturising Lipids Base", "Aqua Purified"],
    benefits: [
      "Restores natural skin firmness and targets dry saggy patches perfectly",
      "Prevents and heals body stretch marks across joints and stomach plates",
      "Provides rich clinical moisturization that locks into skin cells for 48 hours"
    ],
    image: img0110
  },
  {
    id: "oxy-acne-starter",
    name: "Oxy Starter Pack For Acne Prone Skin",
    category: "Target Spot Treatment",
    brand: "Oxy",
    price: "$20.00",
    description: "A comprehensive localized acne and pimple clearance starter pack featuring face wash, face scrub, and clinical gel formulations to prevent and heal breakouts.",
    ingredients: ["Benzoyl Peroxide 10%", "Salicylic Acid 2%", "Tea Tree Purifying Oil", "Purified Water Base"],
    benefits: [
      "Eliminates 99% of acne-causing surface bacteria instantly",
      "Clears blackheads and whiteheads systematically in a multi-step routine",
      "Deeply cleanses, exfoliates, and repairs the skin barrier with ease"
    ],
    image: img0111
  },
  {
    id: "osh-advanced-tissue",
    name: "Oh So Heavenly Advanced Repair Tissue Oil Body Cream",
    category: "Dermal Spot Treatment",
    brand: "Oh So Heavenly",
    price: "$9.00",
    description: "Restorative 72-hour clinical body cream packed with premium natural tissue oils and vitamins to dry hyperpigmentation and diminish stretch marks.",
    ingredients: ["Natural Tissue Oil Complex", "Soybean Kernel Essence", "Vitamin E Alpha-Tocopherol", "Moisture Seals"],
    benefits: [
      "Locks in absolute restorative skin health moisture for up to 72 hours",
      "Visibly fades scars and stretch marks across delicate skin areas",
      "Soothes itching and repairs severe dryness flakes instantly upon contact"
    ],
    image: img0112
  },
  {
    id: "osh-advanced-q10-firm",
    name: "Oh So Heavenly Advanced Benefits Q10 Firming Cream",
    category: "Tone Even Glow Lotion",
    brand: "Oh So Heavenly",
    price: "$9.00",
    description: "Clinical-grade 72-hour tissue-oil and Q10 firming cream designed to support overall skin elasticity and body shape definitions.",
    ingredients: ["Alpha Coenzyme Q10", "Active Tissue Oil", "Prunus Amygdalus Oil", "Collagen boosters"],
    benefits: [
      "Noticeably firms, lifts, and tightens sagging body skin contours systematically",
      "Ensures continuous professional-grade dermal cell hydration for 72 hours",
      "Enriches daily routine with a clean subtle, professional spa-level perfume"
    ],
    image: img0113
  },
  {
    id: "exquisite-cotton-premium",
    name: "Exquisite Make Up Premium Cotton Rounds",
    category: "Elegance Accessories",
    brand: "Exquisite",
    price: "$3.00",
    description: "Highly soft, multi-layer dual design cosmetics cotton rounds crafted from 100% natural pure cotton for gentle skin cleansing.",
    ingredients: ["100% Pure Natural Cotton Fibre"],
    benefits: [
      "Incredibly soft touch perfect for sensitive eye makeup removal",
      "Dual texture design: smooth for liquids, embossed for gentle scrubs",
      "Lint-free premium stitching ensuring absolute clean performance"
    ],
    image: img0114
  },
  {
    id: "clean-point-yoni-pearls",
    name: "Yoni Detox Pearls Clean Point Pack",
    category: "Intimate Care",
    brand: "Clean Point",
    price: "$12.00",
    description: "The highly demanded Clean Point Yoni Detox Pearls. Formulated with authentic traditional herbs to naturally clear, tighten, and rejuvenate.",
    ingredients: ["Cnidium Monnieri", "Sophora Flavescens Root", "Cortex Phellodendri", "Leonurus Heart Herba"],
    benefits: [
      "Provides premium, natural traditional pelvic and uterine detoxification",
      "Effectively balances vaginal moisture, tightness, and organic freshness",
      "Individually vacuum-sealed for highest grade safety, sterility, and care"
    ],
    image: img0115
  },
  {
    id: "yoni-detox-pearls-pack",
    name: "Yoni Detox Pearls Clean Point Pack",
    category: "Intimate Care",
    brand: "Clean Point",
    price: "$12.00",
    description: "Yoni detox pearls clean point pack.",
    ingredients: ["Cnidium Monnieri", "Sophora Flavescens", "Phellodendron", "Leonurus"],
    benefits: ["Detoxifying", "Tightening", "Rejuvenating"],
    image: img0115a
  }
];

export const PRODUCTS: Product[] = RAW_PRODUCTS;

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "The Nivea Radiant Even Glow paired with Oh So Heavenly Royal Radiance is my absolute daily secret. Valz Cosmetics brought original beauty formulas directly to us in Bulawayo and Harare at beautiful rates!",
    author: "Zandile Moyo",
    role: "International Beauty Editor",
    source: "Vogue Cosmopolitan digital"
  },
  {
    quote: "Finding true, authenticated European and South African skin brands in Bulawayo at local USD prices is a blessing. WhatsApp checkout was flawless!",
    author: "Elena Ndlovu",
    role: "Lifestyle Stylist",
    source: "Bulawayo Creative Hub"
  },
  {
    quote: "Authenticity is guaranteed here. Ordering Clicks Tissue Oil and OSH spritzers on WhatsApp is incredibly fast. Delivery to Harare and Mutare arrived in perfect condition the next morning!",
    author: "Tariro Ncube",
    role: "Founder & Creative",
    source: "Sublime Living Magazine"
  }
];

export const BRAND_STORY = {
  title: "Founded by Mr and Ms Mawire",
  subtitle: "AN UNCOMPROMISING STANDARD OF AUTHENTICITY",
  paragraphs: [
    "Formed under the guidance of Mr & Mrs Mawire, Valz Cosmetics was born from a singular, vital mandate: to offer a sanctuary of absolute purity in skin health. Discovering that the marketplace was saturated with compromise and unverified formulations, they established our Bulawayo flagship boutique to restore a standard of trust, luxury, and raw botanical efficacy.",
    "Every bottle, oil, and elite formulation we house is curated with uncompromising rigor and sourced directly from certified prestigious laboratories. Sparing no detail, they built Valz Cosmetics not just as a boutique, but as a legacy of luxury honoring the skin you are in."
  ]
};

export const BOUTIQUE_CONTACT = {
  raw: "263782944507",
  formatted: "+263 78 294 4507",
  defaultMessage: "I am interested in ordering from the Valz Cosmetics collection."
};

export const BOUTIQUE_INFO = {
  title: "The Bulawayo Boutique",
  concept: "Our Flagship Sanctuary",
  address: "Shop 5, Federal Center Building koHYPER, 10th Ave & Fort Street, Bulawayo, Zimbabwe",
  hours: [
    { days: "Monday – Friday", time: "09:00 AM – 06:00 PM" },
    { days: "Saturday", time: "09:30 AM – 04:00 PM" },
    { days: "Sunday", time: "By Private Appointment / Online Order Delivery only" }
  ],
  features: [
    "Fast express deliveries across Bulawayo, Harare, and nationwide Zimbabwe",
    "Worldwide courier delivery (DHL/FedEx) to bring skin health directly to you, anywhere",
    "Tailored skin consultations in-store or directly over WhatsApp with our specialists"
  ],
  cta: "Consult Our Boutique Stylist on WhatsApp",
  image: shopLocationImg
};

export { logoImg, img0066 as heroImg };
