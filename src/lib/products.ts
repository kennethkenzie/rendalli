import { IMAGES } from "./rendalli";

export type Product = {
  slug: string;
  name: string;
  latin: string;
  copy: string;
  longCopy: string[];
  img: string;
  gallery: string[];
  tags: string[];
  prices: { size: string; price: string; note: string }[];
  features: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "nile-tilapia",
    name: "Nile Tilapia",
    latin: "Oreochromis niloticus",
    copy: "Mild, flaky, firm. A family favourite — grills beautifully and soaks up marinades.",
    longCopy: [
      "Our signature fish. Farmed responsibly in clean, monitored waters of East Africa — raised on natural feed, without hormones, on its own clock.",
      "The result: firm, flaky, delicately sweet flesh that takes marinades beautifully and stands up to a charcoal grill.",
    ],
    img: IMAGES.tilapia,
    gallery: [IMAGES.tilapia, IMAGES.grilled, IMAGES.cooking],
    tags: ["Farm-raised", "Fresh", "24hr"],
    prices: [
      { size: "Medium", price: "10k", note: "Whole fish" },
      { size: "Large", price: "12k", note: "Whole fish" },
      { size: "Fillet", price: "20k", note: "500g" },
    ],
    features: [
      "Sustainably farmed, no hormones",
      "Traceable from pond to shop",
      "Delivered within 24 hours",
      "Mild flavour, perfect for every family table",
    ],
  },
  {
    slug: "nile-perch",
    name: "Nile Perch",
    latin: "Lates niloticus",
    copy: "Rich, meaty fillets — the pride of Lake Victoria. Premium-grade, export-ready.",
    longCopy: [
      "Nile Perch (mputa) is the pride of Lake Victoria — a firm, rich white fish with meaty fillets that stand up to any cooking method.",
      "Our perch is responsibly sourced, cold-chain protected, and graded to international standards.",
    ],
    img: IMAGES.perch,
    gallery: [IMAGES.perch, IMAGES.hero, IMAGES.heroAlt],
    tags: ["Lake-sourced", "Premium", "Export-grade"],
    prices: [
      { size: "Whole", price: "18k", note: "Per kg" },
      { size: "Fillet", price: "32k", note: "500g" },
      { size: "Trade", price: "POA", note: "Wholesale" },
    ],
    features: [
      "Premium export-grade quality",
      "Cold-chain protected",
      "Meaty, firm, naturally rich",
      "Available whole or filleted",
    ],
  },
  {
    slug: "smoked-selection",
    name: "Smoked Selection",
    latin: "Slow-cured & local",
    copy: "Traditionally smoked over coals. Smoky, tender, and ready for the table.",
    longCopy: [
      "Slow-smoked over aromatic mango wood, our smoked tilapia is tender, aromatic, and ready to plate.",
      "A Ugandan tradition reimagined with modern food-safety standards — perfect over warm rice or flaked into sandwiches.",
    ],
    img: IMAGES.grilled,
    gallery: [IMAGES.grilled, IMAGES.fishDish, IMAGES.cooking],
    tags: ["Traditional", "Ready-to-eat"],
    prices: [
      { size: "Small pack", price: "15k", note: "250g" },
      { size: "Family pack", price: "26k", note: "500g" },
    ],
    features: [
      "Traditionally smoked over mango wood",
      "No artificial preservatives",
      "Ready-to-eat convenience",
      "Long shelf-life, naturally",
    ],
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
