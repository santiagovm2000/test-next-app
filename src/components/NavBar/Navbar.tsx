"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown, { DropDownColumnLinkOption } from "../Dropdown/Dropdown";
import Button from "../Button/Button";

const chevronDownIcon = "/images/icons/chevron-down.svg";

const productOptions: DropDownColumnLinkOption[] = [
  {
    href: "/",
    iconSrc: "/images/icons/book-closed.svg",
    title: "Blog",
    description: "The latest industry news, updates and info.",
  },
  {
    href: "/",
    iconSrc: "/images/icons/stars.svg",
    title: "Customer stories",
    description: "Learn how our customers are making big changes.",
  },
  {
    href: "/",
    iconSrc: "/images/icons/play-button.svg",
    title: "Video tutorials",
    description: "Get up and running on new features and techniques.",
  },
];

const resourceOptions: DropDownColumnLinkOption[] = [
  {
    href: "/",
    iconSrc: "/images/icons/book-closed.svg",
    title: "Documentation",
    description: "Comprehensive guides and documentation.",
  },
  {
    href: "/",
    iconSrc: "/images/icons/stars.svg",
    title: "Community",
    description: "Join discussions and connect with other users.",
  },
  {
    href: "/",
    iconSrc: "/images/icons/play-button.svg",
    title: "Webinars",
    description: "Learn from experts in live sessions.",
  },
];

type NavItem =
  | { type: "link"; title: string; href: string }
  | { type: "dropdown"; title: string; options: DropDownColumnLinkOption[] };

const navItems: NavItem[] = [
  { type: "link", title: "Home", href: "/" },
  { type: "dropdown", title: "Products", options: productOptions },
  { type: "dropdown", title: "Resources", options: resourceOptions },
  { type: "link", title: "Pricing", href: "/" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header>
      <nav className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo y título */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.svg" alt="Logo" width={32} height={32} />
            <span className="ml-2 font-medium text-gray-900 text-lg">
              Untitled UI
            </span>
          </Link>

          {/* Menú escritorio */}
          <div className="hidden md:flex items-center gap-8 text-gray-500 font-semibold">
            {navItems.map((item) =>
              item.type === "link" ? (
                <Link
                  key={item.title}
                  href={item.href}
                  className="hover:text-gray-700"
                >
                  {item.title}
                </Link>
              ) : (
                <Dropdown
                  key={item.title}
                  title={item.title}
                  titleClassName="hover:text-gray-700"
                >
                  <div className="grid grid-cols-2 gap-10 p-3">
                    <ul className="space-y-4">
                      {item.options.map((opt) => (
                        <li key={opt.title}>
                          <Link
                            href={opt.href}
                            className="flex items-start gap-3 p-3 rounded hover:bg-gray-50"
                          >
                            <Image
                              src={opt.iconSrc}
                              alt={opt.title}
                              width={24}
                              height={24}
                            />
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                {opt.title}
                              </h4>
                              <p className="font-normal text-gray-500">
                                {opt.description}
                              </p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col bg-gray-50 rounded-xl overflow-hidden">
                      <Image
                        src="/images/dropdown-news/dropdown-new-girl.png"
                        alt="Update illustration"
                        width={240}
                        height={136}
                        className="object-cover w-full"
                      />
                      <div className="p-3">
                        <h3 className="font-bold text-black mb-2">
                          We&apos;ve just released an update!
                        </h3>
                        <p className="text-sm text-gray-600">
                          Check out the all new dashboard view. Pages now load
                          faster.
                        </p>
                        <div className="mt-3 flex gap-4">
                          <button className="text-sm text-gray-600 hover:text-gray-700 font-semibold">
                            Dismiss
                          </button>
                          <Link
                            href="/"
                            className="text-sm text-primary-600 font-semibold hover:text-primary-700"
                          >
                            Changelog
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dropdown>
              )
            )}
          </div>
        </div>

        {/* Acciones escritorio */}
        <div className="hidden md:flex items-center gap-4 font-semibold text-gray-500">
          <button className="px-4 py-2 hover:text-gray-700">Log in</button>
          <Button title="Sign up" />
        </div>

        {/* Toggle móvil */}
        <button
          className="md:hidden p-2 text-gray-500 hover:text-gray-700 text-xl"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Drawer móvil */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navItems.map((item) =>
            item.type === "link" ? (
              <Link
                key={item.title}
                href={item.href}
                className="block px-3 py-2 rounded hover:text-gray-700 "
              >
                {item.title}
              </Link>
            ) : (
              <details key={item.title} className="group">
                <summary className="flex justify-between items-center px-3 py-2 rounded hover:text-gray-700 cursor-pointer">
                  {item.title}
                  <Image
                    className="transform group-open:rotate-180 transition-transform"
                    src={chevronDownIcon}
                    alt=""
                    width={12}
                    height={7}
                  />
                </summary>
                <div className="mt-1 pl-4 space-y-1">
                  {item.options.map((opt) => (
                    <Link
                      key={opt.title}
                      href={opt.href}
                      className="block px-3 py-2 rounded hover:text-gray-700"
                    >
                      {opt.title}
                    </Link>
                  ))}
                </div>
              </details>
            )
          )}

          <div
            className={`block w-full ${
              mobileOpen ? "flex gap-6 justify-end" : ""
            }`}
          >
            <button className="text-left px-3 py-2 rounded hover:text-gray-700">
              Log in
            </button>
            <Button title="Sign up" />
          </div>
        </div>
      )}
    </header>
  );
}
