// src/components/TrialSection.tsx
import Image from "next/image";
import Button from "../Button/Button";

export default function TrialSection() {
  return (
    <section className="py-16 ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-stretch ">
          {/* Left column*/}
          <div className="w-full md:w-[45%] flex flex-col justify-center">
            <h2 className="text-gray-900 font-semibold text-5xl">
              No long-term contracts. No catches.
            </h2>
            <p className="mt-6 text-gray-600 text-xl">
              Start your 30-day free trial today.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button
                title="Learn more"
                buttonClass="px-5 py-3 rounded-md border border-gray-300 !text-gray-700 hover:bg-gray-100 font-bold"
              />
              <Button
                title="Get started"
                buttonClass="px-5 py-3 rounded-md bg-primary-600 text-white hover:bg-primary-700"
              />
            </div>
          </div>

          {/* Right column*/}
          <div className="w-full md:w-[55%] h-full rounded-3xl flex justify-end items-center">
            <Image
              src="/images/trial-section/mosaic.png"
              alt="Person smiling"
              width={576}
              height={496}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
