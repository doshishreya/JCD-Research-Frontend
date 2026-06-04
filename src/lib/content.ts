export const site = {
  name: "JCD Research",
  tagline: "Peptide testing with clinical clarity.",
  domain: "jcdresearch.com",
  email: "admin@jcdresearch.com",
  location: "Peptide analytical laboratory",
  shipTo: "15751 Graham St",
} as const;

/** Brand marks in /public — white variants for dark backgrounds, black for light. */
export const brandAssets = {
  logoBlack: "/JCD logo black.png",
  logoWhite: "/JCD logo white.png",
  faviconWhite: "/JCD favicon white.png",
  faviconBlack: "/JCD favicon black.png",
} as const;

export const navLinks = [
  { label: "Testing", href: "#testing" },
  { label: "Orders", href: "#orders" },
  { label: "About", href: "#about" },
  { label: "Account", href: "#account" },
] as const;

export const hero = {
  eyebrow: "Peptide testing laboratory",
  headline: "Order peptide tests. View results in one place.",
  subhead:
    "A clean, clinical experience inspired by leading peptide labs—focused on your orders dashboard, defensible COAs, and tests built only for peptides.",
  ctaPrimary: "View testing menu",
  ctaSecondary: "How ordering works",
  highlights: [
    { title: "Purity &", sub: "Quantity" },
    { title: "Sterility", sub: "USP 71" },
    { title: "Endotoxins", sub: "Analysis" },
  ],
} as const;

export const about = {
  label: "About JCD Research",
  title: "Peptide-only testing for research teams.",
  paragraphs: [
    "JCD Research is built around a single focus: peptide analytical testing. We combine a light, clinical interface with laboratory rigor—so you can browse tests, place orders, and review results without friction.",
    "Our site flow mirrors the best peptide testing platforms: a clear testing menu, a guided order path, and an orders dashboard where every analysis, method, and COA is easy to find.",
  ],
  stats: [
    { value: "Peptide-only", label: "Test catalog" },
    { value: "COA-ready", label: "Vanguard-style reports" },
    { value: "Researchers", label: "Account sign-up" },
  ],
  badge: "Clinical · Light · Results-first",
  /** About section — swap for `/your-image.jpg` in public when you have brand photography */
  labImage:
    "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1200",
} as const;

export const testingSection = {
  label: "Testing menu",
  title: "Available peptide tests.",
  description:
    "Browse panels and assays before you order. Pricing is shown at checkout (TBD). Select tests to begin—you’ll be prompted to sign in with a researcher account.",
  pricingNote: "Pricing TBD — shown when you select tests.",
} as const;

export const peptideTests = [
  {
    id: "purity-quantity",
    icon: "chromatography" as const,
    title: "Panel: Purity & Quantity",
    method: "HPLC (1260 Infinity)",
    description:
      "Quantitative purity and quantity assessment for peptide material using HPLC—one vial per submission for this panel.",
    sampleNote: "1 vial",
    tags: ["HPLC", "Purity", "Quantity"],
  },
  {
    id: "sterility",
    icon: "validation" as const,
    title: "Sterility",
    method: "USP 71",
    description:
      "Sterility testing under USP 71 for injectable and research peptide preparations.",
    sampleNote: "Shared vial with endotoxins",
    tags: ["USP 71", "Sterility"],
  },
  {
    id: "endotoxins",
    icon: "molecular" as const,
    title: "Endotoxins",
    method: "LAL / endotoxin assay",
    description:
      "Endotoxin analysis for peptide samples. One vial covers both sterility and endotoxins when ordered together.",
    sampleNote: "1 vial for sterility & endotoxins",
    tags: ["Endotoxins", "LAL"],
  },
] as const;

export const orderFlowSection = {
  label: "Order flow",
  title: "From test selection to in-lab processing.",
  description:
    "A straightforward path: review tests, sign in, complete your order, ship with our label and barcode, and track status in your dashboard.",
} as const;

export const orderFlow = [
  {
    step: "01",
    title: "Testing menu",
    detail: "See available tests and pricing before you commit.",
  },
  {
    step: "02",
    title: "Sign in",
    detail: "Login when you select tests—researcher accounts only.",
  },
  {
    step: "03",
    title: "Place order",
    detail: "Name, company, email, shipping & billing, compounds tested.",
  },
  {
    step: "04",
    title: "Ship samples",
    detail: "Print shipping label to 15751 Graham St + barcode in package.",
  },
  {
    step: "05",
    title: "In testing",
    detail: "Scan marks order in testing and links to lab input.",
  },
  {
    step: "06",
    title: "Results",
    detail: "View analyses, graphs, and COA PDFs in Orders.",
  },
] as const;

export const orderFields = [
  "Name",
  "Company name",
  "Email",
  "Shipping address",
  "Billing address",
  "Compounds being tested",
] as const;

export const instrumentsSection = {
  label: "Instrumentation",
  title: "Bench systems for peptide analytics.",
  description:
    "Equipment selections may change as the lab scales; current planned systems include HPLC and mass spectrometry platforms.",
} as const;

export const instruments = [
  {
    id: "ms",
    icon: "chromatography" as const,
    title: "Mass spectrometer",
    model: "6545 Q-TOF",
    role: "High-resolution identification and confirmation workflows.",
  },
  {
    id: "hplc",
    icon: "protocol" as const,
    title: "HPLC",
    model: "1260 Infinity",
    role: "Purity & quantity panel and chromatographic release data.",
  },
] as const;

export const ordersDashboardSection = {
  label: "Orders dashboard",
  title: "Results and reordering, built in.",
  description:
    "Every order shows test counts, compounds, and pass/fail progress. Drill into analyses for methods, graphs, and COA downloads—reference Vanguard-style certificates.",
} as const;

export const ordersDashboardFeatures = [
  {
    icon: "reporting" as const,
    title: "Overview",
    description:
      "Each order lists tests per order, compounds tested, and complete / passed / failed counts—with options to reorder or add tests.",
  },
  {
    icon: "validation" as const,
    title: "Analysis",
    description:
      "Nested per order: expand an order or pick a specific analysis. Test names, methods, results with graphs, and COA PDF links.",
  },
  {
    icon: "throughput" as const,
    title: "Researcher accounts",
    description:
      "Sign-up is limited to researchers. Account info autofills on repeat orders when previously saved.",
  },
  {
    icon: "scientists" as const,
    title: "Compliance references",
    description:
      "Workflows informed by Vanguard Laboratory, Chromate, and LightLabs-style peptide testing UX.",
  },
] as const;

export const accountSection = {
  label: "Account",
  title: "Researcher sign-in.",
  description:
    "Accounts are for researchers only. After sign-in, profile details autofill on new orders and your dashboard stays in sync with lab status.",
  cta: "Sign in (coming soon)",
  note: "Registration and authentication will connect to the production API.",
} as const;

export const cta = {
  label: "Get started",
  title: "Ready to submit peptide samples?",
  description:
    "Browse the testing menu or reach our team for feasibility and turnaround questions.",
  button: "View testing menu",
  note: "Typical response within one business day.",
  contacts: [
    { label: "General", value: "admin@jcdresearch.com" },
    { label: "Website", value: "jcdresearch.com" },
  ],
} as const;

export const footer = {
  copyright: `© ${new Date().getFullYear()} JCD Research. All rights reserved.`,
  address: `Peptide testing · Ship to ${site.shipTo}`,
  accreditation: "Peptide-only catalog · Researcher accounts",
  links: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Researchers", href: "#account" },
  ],
} as const;

/** @deprecated Use `about` — kept for gradual migration */
export const mission = about;
export const labProcessSection = orderFlowSection;
export const labProcess = orderFlow;
export const researchAreas = peptideTests;
export const highlights = ordersDashboardFeatures;
