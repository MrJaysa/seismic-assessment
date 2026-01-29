import { WhotCardsType } from "@/utils/types";

const NavLinks: { title: string; link: string | undefined }[] = [
  { title: "How it Works", link: "#hiw" },
  { title: "Features", link: "#feature" },
  { title: "FAQs", link: "#faqs" },
  { title: "Support", link: undefined },
];

const storeCards: { name: string; src: string }[] = [
  { name: "adidas", src: "/images/adidas.png" },
  { name: "chanel", src: "/images/chanel.png" },
  { name: "nike", src: "/images/nike.png" },
  { name: "chanel-1", src: "/images/chanel.png" },
  { name: "amazon", src: "/images/amazon.png" },
  { name: "ebay", src: "/images/ebay.png" },
  { name: "tnf", src: "/images/tnf.png" },
  { name: "amazon-1", src: "/images/amazon.png" },
];

const featureCards: {
  name: string;
  src: string;
  title: string;
  subtitle: string;
}[] = [
  {
    name: "recv",
    src: "/images/recv.png",
    title: "Package Receiving",
    subtitle: "We receive your international orders at our overseas warehouse.",
  },
  {
    name: "conl",
    src: "/images/parcel.png",
    title: "Parcel Consolidation",
    subtitle:
      "Combine multiple packages into one shipment to reduce shipping costs.",
  },
  {
    name: "ship",
    src: "/images/shipping.png",
    title: "Shipping Cost Calculator",
    subtitle: "See your shipping cost before paying. No surprises.",
  },
  {
    name: "rttr",
    src: "/images/tracking.png",
    title: "Real-Time Tracking",
    subtitle: "Track your package from warehouse to delivery in Nigeria.",
  },
  {
    name: "purc",
    src: "/images/purchase.png",
    title: "Assisted Purchase",
    subtitle:
      "If a store doesn’t accept your card, share the product link and we’ll help you buy it.",
  },
  {
    name: "orda",
    src: "/images/order.png",
    title: "Order Notifications",
    subtitle: "Get updates when your package arrives, ships, and is delivered.",
  },
];

const whotCards: WhotCardsType = [
  {
    name: "man",
    src: "/images/man.png",
    title: "Small Business Owners",
    subtitle: "Importing items for resale in Nigeria.",
  },
  {
    name: "woman",
    src: "/images/woman.png",
    title: "Small Business Owners",
    subtitle: "Buying clothes, gadgets, and accessories from abroad.",
    isDown: true,
  },
];

const featureBottomCards: {
  name: string;
  src: string;
  title: string;
  subtitle: string;
}[] = [
  {
    name: "globe",
    src: "/images/globe.png",
    title: "Shop Globally",
    subtitle: "Buy from US and other international stores.",
  },
  {
    name: "house",
    src: "/images/house.png",
    title: "Overseas Warehouse",
    subtitle: "We receive and process your items securely.",
  },
  {
    name: "van",
    src: "/images/van.png",
    title: "Delivered to Nigeria",
    subtitle: "Your package arrives at your chosen Nigerian address.",
  },
  {
    name: "shield",
    src: "/images/shield.png",
    title: "Transparent & Secure",
    subtitle: "Clear costs, real tracking, safe payments.",
  },
];

const faqList: { question: string; answer: string; key: string }[] = [
  {
    key: "pwa",
    question: "Do I get a personal warehouse address?",
    answer:
      "No. All packages are received at our shared overseas warehouse and processed securely.",
  },
  {
    key: "hcf",
    question: "Do you handle customs fees?",
    answer:
      "Customs duties are determined by Nigerian customs and are not controlled by us.",
  },
  {
    key: "cis",
    question: "Can I shop from any international store?",
    answer: "Yes, as long as the store can ship to our warehouse location.",
  },
  {
    key: "tmp",
    question: "Can I track my package?",
    answer: "Yes. You’ll receive tracking updates from warehouse to delivery.",
  },
  {
    key: "wmd",
    question: "What if my item is damaged?",
    answer: "Optional insurance is available for eligible shipments.",
  },
];

const ctaCard: { key: string; src: string; isFull?: boolean }[] = [
  { key: "connect", src: "/images/connect.png", isFull: true },
  { key: "package", src: "/images/package.png" },
  { key: "delivery", src: "/images/delivery.png" },
];

const footerLinks: { key: string; text: string; link: string | undefined }[] = [
  { key: "hiwf", text: "How it Works", link: "#hiw" },
  { key: "featuref", text: "Features", link: "#feature" },
  { key: "faqsf", text: "FAQs", link: "#faqs" },
  { key: "contact", text: "Contact Us", link: undefined },
  { key: "track-order", text: "Track Order", link: undefined },
  { key: "tos", text: "Terms of Service", link: undefined },
];

export {
  ctaCard,
  faqList,
  featureBottomCards,
  featureCards,
  footerLinks,
  NavLinks,
  storeCards,
  whotCards,
};
