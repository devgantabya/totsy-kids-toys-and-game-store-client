"use client";

import Image from "next/image";
import Link from "next/link";

type Product = {
    id: number;
    name: string;
    price: string;
    image: string;
}

const products: Product[] = [
  { id: 1, name: "Furby", price: "$20", image: "/furbys-toy.webp" },
  { id: 2, name: "Toy Car", price: "$15", image: "/toy-car.jpeg" },
  { id: 3, name: "Puzzle Set", price: "$18", image: "/puzzle-set.webp" },
  { id: 4, name: "Alien Doll", price: "$25", image: "/alien-doll.avif" },
];

export default function TrendingProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Trending Products
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4"
          >
            <div className="relative h-40 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-2xl group-hover:scale-105 transition"
              />
            </div>

            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-pink-500 font-bold">{product.price}</p>

            <button className="mt-3 w-full bg-pink-500 text-white py-2 rounded-full hover:bg-pink-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

