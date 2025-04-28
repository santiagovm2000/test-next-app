// src/components/Footer/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import Badge from "../Badge/Badge";

interface LinkItem {
  label: string;
  href: string;
  isNew?: boolean;
}

interface Section {
  title: string;
  items: LinkItem[];
}

// configura tus secciones y links aquí
const sections: Section[] = [
  {
    title: "Product",
    items: [
      { label: "Overview", href: "/" },
      { label: "Features", href: "/" },
      { label: "Solution", href: "/", isNew: true },
      { label: "Tutorials", href: "/" },
      { label: "Pricing", href: "/" },
      { label: "Releases", href: "/" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About us", href: "/" },
      { label: "Careers", href: "/" },
      { label: "Press", href: "/" },
      { label: "News", href: "/" },
      { label: "Media kit", href: "/" },
      { label: "Contact", href: "/" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Blog", href: "/" },
      { label: "Newsletter", href: "/" },
      { label: "Events", href: "/" },
      { label: "Help centre", href: "/" },
      { label: "Tutorials", href: "/" },
      { label: "Support", href: "/" },
    ],
  },
  {
    title: "Social",
    items: [
      { label: "Twitter", href: "/" },
      { label: "LinkedIn", href: "/" },
      { label: "Facebook", href: "/" },
      { label: "GitHub", href: "/" },
      { label: "AngelList", href: "/" },
      { label: "Dribbble", href: "/" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Terms", href: "/" },
      { label: "Privacy", href: "/" },
      { label: "Cookies", href: "/" },
      { label: "Licenses", href: "/" },
      { label: "Settings", href: "/" },
      { label: "Contact", href: "/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-900">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-primary-600">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <div className="flex items-center gap-1">
                      <Link
                        href={item.href}
                        className="text-base font-semibold hover:underline"
                      >
                        {item.label}
                      </Link>
                      {item.isNew && (
                        <Badge className="text-xs !m-0 !px-2 !py-0 border border-primary-600">
                          New
                        </Badge>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* columna “Get the app” */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Get the app</h3>
            <div className="mt-4 flex flex-col space-y-4">
              <Link href="/" className="inline-block w-32">
                <Image
                  src="/images/mobile-store/ios-store.png"
                  alt="Download on the App Store"
                  width={128}
                  height={40}
                  className="object-contain"
                />
              </Link>
              <Link href="/" className="inline-block w-32">
                <Image
                  src="/images/mobile-store/google-store.png"
                  alt="Get it on Google Play"
                  width={128}
                  height={40}
                  className="object-contain"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="ml-2 font-medium text-gray-900 text-lg">
              Untitled UI
            </span>
          </Link>
          <p className="text-base">© 2077 Untitled UI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
