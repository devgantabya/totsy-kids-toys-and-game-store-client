"use client";
import Image from "next/image";
import Link from "next/link";

type Category = {
    id: number;
    name: string;
    image: string;
    link: string;
}

const categories: Category[] = [
    {
        id: 1,
        name: "Toys",
        image: "/categories/toys.jpg",
        link: "/toys"
    },
    {
        id: 2,
        name: "Books",
        image: "/categories/books.jpg",
        link: "/books"
    },
    {
        id: 3,
        name: "Fasions",
        image: "/categories/fashion.jpg",
        link: "/fashion"
    },
    {
        id: 4,
        name: "Games",
        image: "/categories/games.jpg",
        link: "/games"
    }
]



export default function Categories() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-10 text-center">
                Shop by Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {categories.map((cat) => (
                    <Link
                        key={cat.id}
                        href={cat.link}
                        className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition" >
                        
                    <div className="relative h-48">
                        <Image
                            src={cat.image}
                            alt={cat.name}
                            fill
                            className="object-cover group-hover:scale-105 transition"
                        />
                    </div>
                    <div className="text-center py-4 font-semibold">
                        {cat.name}
                    </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}