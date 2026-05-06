import animeTee from "@/assets/products/anime-tee.jpg";
import cargoPants from "@/assets/products/cargo-pants.jpg";
import hoodieBlack from "@/assets/products/hoodie-black.jpg";
import streetKurta from "@/assets/products/street-kurta.jpg";
import y2kTee from "@/assets/products/y2k-tee.jpg";
import coordSet from "@/assets/products/coord-set.jpg";
import baggyPants from "@/assets/products/baggy-pants.jpg";
import minimalShirt from "@/assets/products/minimal-shirt.jpg";
import fusionKurti from "@/assets/products/fusion-kurti.jpg";
import tiedyeHoodie from "@/assets/products/tiedye-hoodie.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  tags: string[];
  isNew?: boolean;
  isLimited?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Shinobi Oversized Anime Tee",
    description: "Premium heavyweight cotton oversized tee with hand-drawn anime warrior graphic. Drop shoulders, boxy fit.",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    rating: 4.8,
    reviews: 234,
    image: animeTee,
    category: "Anime Tees",
    tags: ["anime", "oversized", "graphic"],
    isNew: true,
  },
  {
    id: "2",
    name: "Tactical Cargo Joggers",
    description: "6-pocket tactical cargo joggers in military olive. Ripstop fabric, elastic cuffs, drawstring waist.",
    price: 2299,
    originalPrice: 2999,
    discount: 23,
    rating: 4.6,
    reviews: 189,
    image: cargoPants,
    category: "Streetwear",
    tags: ["cargo", "tactical", "joggers"],
  },
  {
    id: "3",
    name: "Midnight Essential Hoodie",
    description: "Ultra-soft 400 GSM fleece hoodie in pure black. Embossed logo, kangaroo pocket, premium drawstrings.",
    price: 2499,
    originalPrice: 3499,
    discount: 29,
    rating: 4.9,
    reviews: 312,
    image: hoodieBlack,
    category: "Hoodies",
    tags: ["hoodie", "essential", "minimal"],
    isNew: true,
  },
  {
    id: "4",
    name: "Neo-Desi Street Kurta",
    description: "Indo-western street kurta in cream with gold embroidery. Modern mandarin collar, side slits, relaxed fit.",
    price: 1999,
    originalPrice: 2799,
    discount: 29,
    rating: 4.7,
    reviews: 156,
    image: streetKurta,
    category: "Indian Fusion",
    tags: ["kurta", "fusion", "indo-western"],
  },
  {
    id: "5",
    name: "Y2K Retro Graphic Tee",
    description: "Oversized Y2K-inspired graphic tee in white. Bold retro typography, 240 GSM cotton, dropped shoulders.",
    price: 999,
    originalPrice: 1499,
    discount: 33,
    rating: 4.5,
    reviews: 278,
    image: y2kTee,
    category: "Anime Tees",
    tags: ["y2k", "retro", "graphic"],
  },
  {
    id: "6",
    name: "Summer Vibes Co-ord Set",
    description: "Matching resort shirt and shorts set in warm peach. Camp collar, relaxed fit, premium cotton blend.",
    price: 2999,
    originalPrice: 3999,
    discount: 25,
    rating: 4.8,
    reviews: 145,
    image: coordSet,
    category: "Streetwear",
    tags: ["coord", "set", "summer"],
    isLimited: true,
  },
  {
    id: "7",
    name: "Cloud Baggy Drawstring Pants",
    description: "Ultra-comfortable wide-leg baggy pants in cream. Elastic waist, drawstring, side pockets.",
    price: 1499,
    originalPrice: 1999,
    discount: 25,
    rating: 4.4,
    reviews: 198,
    image: baggyPants,
    category: "Streetwear",
    tags: ["baggy", "wide-leg", "comfort"],
  },
  {
    id: "8",
    name: "Midnight Navy Minimal Shirt",
    description: "Clean-cut button-up shirt in deep navy. Subtle embroidered detail, premium poplin cotton.",
    price: 1799,
    originalPrice: 2499,
    discount: 28,
    rating: 4.6,
    reviews: 167,
    image: minimalShirt,
    category: "Streetwear",
    tags: ["shirt", "minimal", "clean"],
  },
  {
    id: "9",
    name: "Patola Fusion Kurti",
    description: "Modern Indo-western kurti with Patola-inspired prints in teal & gold. Contemporary silhouette, 3/4 sleeves.",
    price: 1699,
    originalPrice: 2299,
    discount: 26,
    rating: 4.7,
    reviews: 203,
    image: fusionKurti,
    category: "Indian Fusion",
    tags: ["kurti", "fusion", "patola"],
    isNew: true,
  },
  {
    id: "10",
    name: "Psychedelic Tie-Dye Hoodie",
    description: "Spiral tie-dye oversized hoodie in purple-pink. 380 GSM fleece, kangaroo pocket, premium finish.",
    price: 2799,
    originalPrice: 3999,
    discount: 30,
    rating: 4.9,
    reviews: 89,
    image: tiedyeHoodie,
    category: "Hoodies",
    tags: ["tie-dye", "psychedelic", "hoodie"],
    isLimited: true,
  },
];

export const collections = [
  { name: "Streetwear", slug: "streetwear", count: 42 },
  { name: "Anime Tees", slug: "anime-tees", count: 28 },
  { name: "Indian Fusion", slug: "indian-fusion", count: 35 },
  { name: "Hoodies", slug: "hoodies", count: 18 },
  { name: "New Drops", slug: "new-drops", count: 15 },
  { name: "Best Sellers", slug: "best-sellers", count: 24 },
];