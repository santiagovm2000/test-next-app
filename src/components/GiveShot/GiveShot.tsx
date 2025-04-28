"use client";

import Image from "next/image";
import Button from "../Button/Button";

export default function GiveShot() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row bg-primary rounded-2xl overflow-hidden">
          {/* Left half */}
          <div className="w-full md:w-[65%] p-16 flex flex-col justify-center text-white">
            <h3 className="text-4xl font-semibold mb-5">Give us a shot</h3>
            <p className="text-xl font-light text-gray-300 mb-12">
              Join over 4,000+ startups already growing with Untitled.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                title="Learn more"
                buttonClass="px-5 py-3 bg-white rounded-md border border-gray-300 !text-gray-700 hover:bg-gray-100 font-bold"
              />
              <Button
                title="Get started"
                buttonClass="px-5 py-2 bg-primary-500 text-white hover:bg-primary-600"
              />
            </div>
          </div>

          {/* Right half */}
          <div className="w-full md:w-[35%] h-64 sm:h-80 md:h-auto relative">
            <Image
              src="/images/give-shot/give-shot.png"
              alt="Team discussion"
              width={480}
              height={400}
              className="object-fill w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
