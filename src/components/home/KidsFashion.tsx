"use client";

import Image from "next/image";

type Fasion = {
    id: number;
    name: string;
    image: string;
}

const fashion: Fasion[] = [
  { id: 1, name: "Kids T-Shirt", image: "/kids-t-shirt.jpeg" },
  { id: 2, name: "Cute Jacket", image: "/cute-jacket.avif" },
  { id: 3, name: "Kids Shoes", image: "/kids-shoes.webp" },
];

export default function KidsFashion() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

      <h2 className="text-3xl font-bold text-center mb-10">
        Kids Fashion
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {fashion.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <div className="relative h-72">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 font-semibold text-lg">
              {item.name}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

