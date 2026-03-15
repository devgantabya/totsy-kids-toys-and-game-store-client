"use client";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

type Testimonial = {
    id: number; name: string; role: string; image: string; text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Mother of 2",
    image: "/sarah-johnson.jpg",
    text: "Totsy has the cutest toys! My kids absolutely love them and the quality is amazing.",
  },
  {
    id: 2,
    name: "Michael Lee",
    role: "Father",
    image: "/michael-lee.png",
    text: "Great shopping experience. The toys are educational and very well made.",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Mom Blogger",
    image: "/emily-davis.jpg",
    text: "Perfect place for kids gifts. Fast delivery and adorable products!",
  },
    {
      id: 4,
    name: "Olivia Brown",
    role: "Parent",
    image: "/olivia-brown.jpg",
    text: "My daughter loves everything we bought from Totsy. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-pink-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            What Parents Say
          </h2>

          <p className="text-gray-500">
            Loved by thousands of happy families
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides
          loop
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>

              <div className="group bg-white rounded-3xl p-7 shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-3">

                {/* Stars */}
                <div className="text-yellow-400 mb-4 text-lg">
                  ★★★★★
                </div>

                {/* Text */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{t.text}"
                </p>

                {/* User */}
                <div className="flex items-center gap-4">

                  <div className="relative w-12 h-12">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold">{t.name}</h4>
                    <p className="text-sm text-gray-400">
                      {t.role}
                    </p>
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
