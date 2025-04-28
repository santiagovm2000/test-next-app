"use client";

import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="p-8 pb-90">
      <div className="flex flex-col items-center ">
        <div className="relative bg-primary w-full text-center text-white rounded-2xl overflow-visible">
          {/* Titles */}
          <div className="pt-24 px-4 sm:px-6 lg:px-45">
            <h6 className="text-7xl font-semibold mb-6">
              Grow your users. Smarter.
            </h6>
            <span className="font-normal text-gray-300">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </span>

            {/* Input + Button */}
            <div className="flex justify-center items-start gap-4 mt-12 mb-48">
              <div className="w-84">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  iconSrc="/images/icons/help-circle.svg"
                  iconAlt="Ayuda"
                  onIconClick={() =>
                    alert("Introduce tu email para recibir novedades")
                  }
                />
                <span className="font-normal text-gray-300 text-sm w-full block text-start mt-1">
                  We care about your data in our{" "}
                  <Link href="/" className="underline">
                    privacy policy.
                  </Link>
                </span>
              </div>
              <Button
                title="Get started"
                buttonClass="bg-primary-600 hover:bg-primary-700 h-full"
              />
            </div>
          </div>

          {/* Graph */}
          <div
            className="
                absolute left-1/2 -bottom-30 
                transform -translate-x-1/2 translate-y-1/2
                w-[800px] max-w-full
                z-10
            "
          >
            <Image
              src="/images/hero-section/hero-graph.png"
              alt="Hero graph"
              width={800}
              height={492}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
