"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Slide = {
  title: string;
  subtitle: string;
  image: string;
  link: string;
};

export default function HeroSlider() {
  const slides: Slide[] = [
    {
      title: "Fun Toys for Happy Kids",
      subtitle: "Discover amazing toys your kids will love",
      image: "/banner1.jpg",
      link: "/shop",
    },
    {
      title: "Learning Through Play",
      subtitle: "Educational toys that spark creativity",
      image: "/banner2.jpg",
      link: "/learning",
    },
    {
      title: "Cute Kids Fashion",
      subtitle: "Comfortable and stylish clothes for kids",
      image: "/banner3.jpg",
      link: "/fashion",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 mt-6">
      <div className="rounded-2xl overflow-hidden shadow-lg">

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          loop
          className="h-[420px] md:h-[520px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">

                {/* Banner Image */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">

                  <div className="max-w-7xl mx-auto px-6 md:px-12 text-white">

                    <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h2>

                    <p className="mb-6 text-lg md:text-xl text-gray-200 max-w-xl">
                      {slide.subtitle}
                    </p>

                    <Link
                      href={slide.link}
                      aria-label={`Shop ${slide.title}`}
                      className="inline-block bg-pink-500 hover:bg-pink-600 px-7 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:scale-105"
                    >
                      Shop Now
                    </Link>

                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

