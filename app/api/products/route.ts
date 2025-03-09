import { image } from "framer-motion/client";
import { NextResponse } from "next/server";

// ✅ Corrected Category Names
const products = [
  {
    id: 1,
    title: "Bucket Mop Set",
    category: "Cleaning Products", // ✅ Matches frontend
    image: "/images/products/cleaning/bucket-mop.jpeg",
    price: "★★★★★",
    description:
      "High-quality bucket mop set for easy and efficient floor cleaning.",
  },
  {
    id: 2,
    title: "Water Bucket",
    category: "Cleaning Products",
    image: "/images/products/cleaning/bucket3.jpg",
    price: "★★★★★",
    description:
      "Durable and spacious water bucket for household cleaning and storage.",
    images: [
      "/images/products/cleaning/bucket3.jpg",
      "/images/products/cleaning/bucket1.jpg",
      "/images/products/cleaning/bucket2.jpg",
      "/images/products/cleaning/bucket4.jpg",
    ],
  },
  {
    id: 3,
    title: "Floor Cleaning Mop",
    category: "Cleaning Products",
    image: "/images/products/cleaning/bottle-mop.jpg",
    price: "★★★★★",
    description:
      "Efficient floor cleaning mop with high-absorbent microfiber for effortless cleaning.",
  },
  {
    id: 4,
    title: "Jala Broom with Hand",
    category: "Cleaning Products",
    image: "/images/products/cleaning/jala-broom.jpg",
    price: "★★★★★",
    description:
      "Lightweight and sturdy Jala broom with a comfortable grip for effective dust removal.",
  },
  {
    id: 5,
    title: "Kharata Broom",
    category: "Cleaning Products",
    image: "/images/products/cleaning/kharata-broom.jpg",
    price: "★★★★★",
    description:
      "Heavy-duty Kharata broom designed for tough cleaning and sweeping tasks.",
  },
  {
    id: 6,
    title: "Bulldog Washing Brush",
    category: "Cleaning Products",
    image: "/images/products/cleaning/bulldog-brush.jpg",
    price: "★★★★★",
    description:
      "Strong Bulldog washing brush with firm bristles for deep cleaning surfaces.",
  },
  {
    id: 7,
    title: "King Floor Viper with Hand",
    category: "Cleaning Products",
    image: "/images/products/cleaning/king-viper.jpg",
    price: "★★★★★",
    description:
      "Premium King Floor Viper with ergonomic handle for smooth and efficient floor cleaning.",
  },
  {
    id: 8,
    title: "Nath Premium Kharata Broom",
    category: "Cleaning Products",
    image: "/images/products/cleaning/nath-kharata.jpg",
    price: "★★★★★",
    description:
      "Premium quality Kharata broom with strong bristles for heavy-duty cleaning.",
  },
  {
    id: 9,
    title: "Samarthya Kharata Broom",
    category: "Cleaning Products",
    image: "/images/products/cleaning/samarthya-kharata.jpg",
    price: "★★★★★",
    description:
      "Durable and efficient Samarthya Kharata broom for daily floor cleaning.",
  },
  {
    id: 10,
    title: "Plastic Mug",
    category: "Household Essentials",
    image: "/images/products/household/mug.jpg",
    price: "★★★★★",
    description:
      "Sturdy plastic mug with an ergonomic handle for versatile home use.",
  },
  {
    id: 11,
    title: "Square Washing Brush",
    category: "Cleaning Products",
    image: "/images/products/cleaning/square-brush.jpg",
    price: "★★★★★",
    description:
      "Square-shaped washing brush with firm bristles for effective scrubbing.",
    images: [
      "/images/products/cleaning/square-brush.jpg",
      "/images/products/cleaning/square-brush-2.jpg",
    ]
  },
  {
    id: 12,
    title: "Soap Dish Set",
    category: "Bathroom Accessories",
    image: "/images/products/bathroom/soap-dish.jpg",
    price: "★★★★★",
    description:
      "Elegant and durable soap dish set to keep your soap dry and clean.",
  },
  {
    id: 13,
    title: "Green Scrubber",
    category: "Cleaning Accessories",
    image: "/images/products/cleaning/scrubbers-green.jpg",
    price: "★★★★★",
    description:
      "High-quality green scrubber for removing tough stains on utensils and surfaces.",
  },
  {
    id: 14,
    title: "Steel Scrubber",
    category: "Cleaning Accessories",
    image: "/images/products/cleaning/steel-scrubber.jpg",
    price: "★★★★★",
    description:
      "Durable steel scrubber for deep cleaning of greasy and tough stains.",
  },
  {
    id: 15,
    title: "Toilet Brush",
    category: "Bathroom Cleaning",
    image: "/images/products/bathroom/toilet-brush.jpg",
    price: "★★★★★",
    description:
      "Ergonomic toilet brush for easy and effective toilet cleaning.",
  },
  {
    id: 16,
    title: "Tiles Cleaning Brush",
    category: "Cleaning Products",
    image: "/images/products/cleaning/tile-brush.jpg",
    price: "★★★★★",
    description:
      "Specialized tiles cleaning brush designed for removing dirt and stains.",
  },
  {
    id: 17,
    title: "Plunger Pump",
    category: "Cleaning Tools",
    image: "/images/products/cleaning/plunger-pump.jpg",
    price: "★★★★★",
    description:
      "Heavy-duty plunger pump to unclog sinks and toilets with ease.",
  },
  {
    id: 18,
    title: "MS Pipe 4 Feet",
    category: "Hardware & Accessories",
    image: "/images/products/hardware/ms-pipe-4feet.jpg",
    price: "★★★★★",
    description:
      "Strong and durable 4-feet MS pipe for various household and industrial uses.",
  },
  {
    id: 19,
    title: "Wooden Stick 4 Feet",
    category: "Hardware & Accessories",
    image: "/images/products/hardware/wooden-stick.jpg",
    price: "★★★★★",
    description:
      "Multipurpose 4-feet wooden stick for brooms and other household applications.",
  },
  {
    id: 20,
    title: "Diamond Shaped Water Bottle",
    category: "Kitchen Essentials",
    image: "/images/products/kitchen/diamond-waterbottle.jpg",
    price: "★★★★★",
    description: "Elegant diamond-shaped water bottle for stylish hydration.",
  },
  {
    id: 21,
    title: "Water Bottle For Fridge",
    category: "Kitchen Essentials",
    image: "/images/products/kitchen/water-bottle.jpg",
    price: "★★★★★",
    description:
      "Durable and lightweight water bottle, perfect for fridge storage.",
  },
  {
    id: 22,
    title: "Honeycomb Styled Storage Jar",
    category: "Kitchen Essentials",
    image: "/images/products/kitchen/honeycomb-jar.jpg",
    price: "★★★★★",
    description: "Stylish honeycomb-designed storage jar to keep food fresh.",
  },
  {
    id: 23,
    title: "Printed Storage Jar",
    category: "Kitchen Essentials",
    image: "/images/products/kitchen/print-jar.jpg",
    price: "★★★★★",
    description:
      "Attractive printed storage jar for spices, snacks, and dry foods.",
  },
  {
    id: 24,
    title: "Stylish Water Bottle",
    category: "Kitchen Essentials",
    image: "/images/products/kitchen/stylish-bottle.jpg",
    price: "★★★★★",
    description: "Trendy and stylish water bottle for daily hydration.",
  },
  {
    id: 25,
    title: "Tea Strainer",
    category: "Kitchen Essentials",
    image: "/images/products/kitchen/tea-strainer.jpg",
    price: "★★★★★",
    description: "Durable tea strainer for smooth and mess-free tea making.",
  },
  {
    id: 26,
    title: "Flour Strainer",
    category: "Kitchen Essentials",
    image: "/images/products/kitchen/flour-strainer.jpg",
    price: "★★★★★",
    description: "High-quality flour strainer for refined and lump-free flour.",
  },
  {
    id: 27,
    title: "Round Sweet Box",
    category: "Kitchen Essentials",
    image: "/images/products/kitchen/bowl.jpg",
    price: "★★★★★",
    description: "Elegant round sweet box for storing and serving sweets.",
  },
  {
    id: 28,
    title: "Square Sweet Box",
    category: "Kitchen Essentials",
    image: "/images/products/kitchen/square-conatiner.jpg",
    price: "★★★★★",
    description:
      "Square-shaped sweet box, perfect for gifting and storing treats.",
  },
  {
    id: 29,
    title: "Mango Shaped Sweet Box",
    category: "Kitchen Essentials",
    image: "/images/products/kitchen/mango-jar.jpg",
    price: "★★★★★",
    description: "Unique mango-shaped sweet box for an aesthetic presentation.",
  },
  {
    id: 30,
    title: "Round Tiffin Box",
    category: "Kitchen Essentials",
    image: "/images/products/kitchen/round-storage.jpg",
    price: "★★★★★",
    description: "Compact round tiffin box for carrying meals with ease.",
  },
  {
    id: 31,
    title: "Snacks Tray 2 Compartment",
    category: "Kitchen Essentials",
    image: "/images/products/kitchen/snacks-tray-2.jpg",
    price: "★★★★★",
    description: "Two-compartment snacks tray for serving and organizing food.",
  },
  {
    id: 32,
    title: "Snacks Tray 3 Compartment",
    category: "Kitchen Essentials",
    image: "/images/products/kitchen/snacks-tray-3.jpg",
    price: "★★★★★",
    description: "Three-compartment snacks tray, ideal for parties and snacks.",
  },
  {
    id: 33,
    title: "Snacks Tray 4 Compartment",
    category: "Kitchen Essentials",
    image: "/images/products/kitchen/snacks-tray-4.jpg",
    price: "★★★★★",
    description:
      "Four-compartment snacks tray for serving multiple food items neatly.",
  },
  {
    id: 34,
    title: "Mixing Bowl",
    category: "Kitchen Essentials",
    image: "/images/products/kitchen/mixing-bowl.jpg",
    price: "★★★★★",
    description:
      "Durable mixing bowl for baking, cooking, and food preparation.",
  },
  {
    id: 35,
    title: "Tiffin Box with Lid",
    category: "Kitchen Essentials",
    image: "/images/products/kitchen/tiffin-box.jpg",
    price: "★★★★★",
    description:
      "Convenient tiffin box with lid for fresh and spill-free meals.",
  },
  {
    id: 36,
    title: "Baby Rattle",
    category: "Kids & Baby",
    image: "/images/products/kids&baby/baby-rattle.jpg",
    price: "★★★★★",
    description:
      "Colorful and safe baby rattle designed for fun and sensory development.",
  },
  {
    id: 37,
    title: "Dinner Bell Lunch Box",
    category: "Kids & Baby",
    image: "/images/products/kids&baby/dinner-bell.jpg",
    price: "★★★★★",
    description:
      "Attractive and spacious lunch box to keep meals fresh for kids.",
  },
  {
    id: 38,
    title: "Happy Meal Lunch Box",
    category: "Kids & Baby",
    image: "/images/products/kids&baby/happy-meal.jpg",
    price: "★★★★★",
    description:
      "Fun and vibrant Happy Meal lunch box to make lunchtime exciting for kids.",
  },
  {
    id: 39,
    title: "Lunch Time Lunch Box",
    category: "Kids & Baby",
    image: "/images/products/kids&baby/lunch-time.jpg",
    price: "★★★★★",
    description:
      "Cute and compact lunch box for kids to carry their favorite meals with ease.",
  },
  {
    id: 40,
    title: "Printed Water Bottle",
    category: "Kids & Baby",
    image: "/images/products/kids&baby/printed-waterbottle.jpg",
    price: "★★★★★",
    description:
      "Stylish and lightweight printed water bottle designed for kids.",
  },
  {
    id: 41,
    title: "Kids Sipper Bottle",
    category: "Kids & Baby",
    image: "/images/products/kids&baby/sipper-bottle.jpg",
    price: "★★★★★",
    description:
      "Leak-proof sipper bottle for kids, perfect for school and outdoor activities.",
  },
  {
    id: 42,
    title: "Water Bottle for Kids",
    category: "Kids & Baby",
    image: "/images/products/kids&baby/water-bottle-kids.jpg",
    price: "★★★★★",
    description:
      "Durable and easy-to-use water bottle designed specifically for kids.",
  },
  {
    id: 43,
    title: "Powder Puff for Babies",
    category: "Kids & Baby",
    image: "/images/products/kids&baby/powder-puff.jpg",
    price: "★★★★★",
    description:
      "Soft and gentle powder puff to keep your baby’s skin fresh and dry.",
  },
  {
    id: 44,
    title: "Lunch Box for Kids",
    category: "Kids & Baby",
    image: "/images/products/kids&baby/lunch-box.jpg",
    price: "★★★★★",
    description:
      "Colorful and spacious lunch box, perfect for school-going kids.",
  },
  {
    id: 45,
    title: "1kg Spices Container",
    category: "Storage Solutions",
    image: "/images/products/storage/container-1kg.jpg",
    price: "★★★★★",
    description:
      "Airtight 1kg spices container to keep your spices fresh and moisture-free.",
    images: [
      "/images/products/storage/container-1kg.jpg",
      "/images/products/storage/container-1kg-2.jpg",
    ],
  },
  {
    id: 46,
    title: "2kg Grain Container",
    category: "Storage Solutions",
    image: "/images/products/storage/container-2kg.jpg",
    price: "★★★★★",
    description:
      "Durable 2kg grain container for storing rice, pulses, and dry goods.",
  },
  {
    id: 47,
    title: "5kg Grain Container",
    category: "Storage Solutions",
    image: "/images/products/storage/container-5kg.jpg",
    price: "★★★★★",
    description:
      "Spacious and airtight 5kg grain container to store large quantities of grains securely.",
  },
  {
    id: 48,
    title: "Transparent Glass Container",
    category: "Storage Solutions",
    image: "/images/products/storage/transperent-glass.jpg",
    price: "★★★★★",
    description:
      "Stylish transparent glass container for easy visibility and organized storage.",
  },
  {
    id: 49,
    title: "3 Layered Storage Box",
    category: "Storage Solutions",
    image: "/images/products/storage/stack.jpg",
    price: "★★★★★",
    description:
      "Multipurpose 3-layered storage box for organizing household essentials efficiently.",
  },
];

// ✅ API Handler (GET Request)
export async function GET() {
  return NextResponse.json(products);
}
