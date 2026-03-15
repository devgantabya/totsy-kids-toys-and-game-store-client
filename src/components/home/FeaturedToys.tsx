"use client";

import Image from "next/image";

type Toy = {
    id: number;
    name: string;
    image: string;
}

const toys: Toy[] = [
  { id: 1, name: "Building Blocks", image: "/building-blocks.webp" },
  { id: 2, name: "Plush Bear", image: "/plush-bear.jpeg" },
  { id: 3, name: "Mini Train", image: "/mini-train.avif" },
];

export default function FeaturedToys() {
  return (
    <section className="bg-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Toys
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {toys.map((toy) => (
            <div
              key={toy.id}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <div className="relative h-64">
                <Image
                  src={toy.image}
                  alt={toy.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 font-semibold text-lg">
                {toy.name}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
