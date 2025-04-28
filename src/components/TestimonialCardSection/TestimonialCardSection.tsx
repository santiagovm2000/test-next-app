import Image from "next/image";
import Button from "../Button/Button";
import CardCarousel from "../CardCarousel/CardCarousel";

const testimonials = [
  {
    image: "/images/card-testimonials/testim-1.png",
    quote: "",
    name: "Alisa Hester",
    role: "PM, Hourglass",
    agency: "Web Design Agency",
    rating: 5,
  },
  {
    image: "/images/card-testimonials/testim-2.png",
    quote: `“We’ve really sped up our workflow using Untitled.”`,
    name: "Rich Wilson",
    role: "COO, Command+R",
    agency: "Web Development Agency",
    rating: 5,
  },
  {
    image: "/images/card-testimonials/testim-3.png",
    quote: "",
    name: "Annie Stanley",
    role: "Designer, Catalog",
    agency: "UX Agency",
    rating: 5,
  },
  {
    image: "/images/card-testimonials/testim-4.png",
    quote: "",
    name: "Johnny Doe",
    role: "PM, Sisyphean",
    agency: "Machine Learning",
    rating: 5,
  },
];

export default function TestimonialCardSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + buttons */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Don’t just take our word for it
            </h2>
            <p className="mt-1 text-gray-600">
              Hear from some of our amazing customers who are automating their
              finances.
            </p>
          </div>
          <div className="flex gap-4">
            <Button
              title="Our customers"
              buttonClass="px-5 py-3 rounded-md border border-gray-300 !text-gray-700 hover:bg-gray-100 font-bold"
            />
            <Button
              title="Create account"
              buttonClass="px-4 py-2 bg-primary-600 text-white hover:bg-primary-700"
            />
          </div>
        </div>

        {/* Carousel */}
        <CardCarousel>
          {testimonials.map((t, i) => (
            <div key={i} className="relative h-96 overflow-hidden shadow-lg">
              {/* background image */}
              <Image src={t.image} alt={t.name} fill className="object-cover" />

              {/* overlay */}
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[90%] bg-gray-400/40 backdrop-blur-sm p-4 border border-gray-400">
                {/* quote */}
                <p className="text-xl text-white font-semibold mb-4">
                  {t.quote}
                </p>
                {/* stars */}
                <div className="flex mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Image
                      key={j}
                      src="/images/icons/white-star.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                  ))}
                </div>
                {/* name & role */}
                <p className="text-3xl text-white font-semibold mb-4">
                  {t.name}
                </p>
                <p className="text-sm text-white mb-1">{t.role}</p>
                <p className="text-sm text-white">{t.agency}</p>
              </div>
            </div>
          ))}
        </CardCarousel>
      </div>
    </section>
  );
}
