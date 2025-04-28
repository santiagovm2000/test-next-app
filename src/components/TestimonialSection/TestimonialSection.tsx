"use client";

import Image from "next/image";
import Carousel from "../Carousel/Carousel";

interface Testimonial {
  imageSrc: string;
  quote: string;
  author: string;
  role: string;
  rating?: number;
}

const testimonials: Testimonial[] = [
  {
    imageSrc: "/images/testimonial-people/people1.png",
    quote: `Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.`,
    author: "Renee Wells",
    role: "Product Designer, Quotient",
    rating: 4,
  },
  {
    imageSrc: "/images/testimonial-people/people2.png",
    quote: `This product changed our workflow completely. The team is thrilled!`,
    author: "Jordan Miles",
    role: "CTO, Acme Corp",
    rating: 3,
  },
  {
    imageSrc: "/images/testimonial-people/people3.png",
    quote: `Incredible analytics and easy integration. Highly recommend to any growing startup.`,
    author: "Alex Kim",
    role: "Founder, DataDash",
    rating: 5,
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel interval={5000}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                flex flex-col 
                lg:flex-row 
                overflow-hidden 
                rounded-3xl 
                h-auto lg:h-[480px] 
                w-full
              "
            >
              {/* Imagen: 100% ancho en móvil, 45% en desktop */}
              <div
                className="
                  w-full lg:w-[45%] 
                  h-64 sm:h-80 lg:h-full 
                  relative
                "
              >
                <Image
                  src={t.imageSrc}
                  alt={t.author}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenido: 100% ancho en móvil, 55% en desktop */}
              <div
                className="
                  w-full lg:w-[55%] 
                  bg-primary text-white 
                  p-6 sm:p-8 lg:p-16 
                  flex flex-col justify-between
                "
              >
                <div>
                  {/* Estrellas */}
                  <div className="flex mb-4 gap-2">
                    {Array.from({ length: t.rating ?? 0 }).map((_, j) => (
                      <Image
                        key={j}
                        src="/images/icons/star-rating.svg"
                        alt="Star"
                        width={20}
                        height={20}
                      />
                    ))}
                  </div>
                  {/* Cita */}
                  <blockquote className="text-lg sm:text-2xl lg:text-4xl mb-6 whitespace-pre-line font-medium">
                    {t.quote}
                  </blockquote>
                </div>

                {/* Autor */}
                <div>
                  <p className="font-semibold text-base sm:text-lg">
                    — {t.author}
                  </p>
                  <p className="text-sm sm:text-base text-gray-300">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
