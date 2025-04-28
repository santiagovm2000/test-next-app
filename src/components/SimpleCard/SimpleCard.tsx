// components/SimpleCard/SimpleCard.tsx
import Image from "next/image";
import Link from "next/link";

interface SimpleCardProps {
  iconSrc: string;
  title: string;
  description: string;
  href: string;
  heightImage?: number;
  widthImage?: number;
}

export default function SimpleCard({
  iconSrc,
  title,
  description,
  href,
  heightImage = 56,
  widthImage = 56,
}: SimpleCardProps) {
  return (
    <div
      className="
        flex flex-col justify-between items-center 
        text-center p-6 rounded-lg h-full
      "
    >
      <div className="w-16 h-16 mb-4 flex justify-center items-center">
        <Image
          src={iconSrc}
          alt={`${title} icon`}
          width={widthImage}
          height={heightImage}
          className="object-contain shadow p-2 rounded-lg"
        />
      </div>

      <div>
        <h4 className="font-semibold mb-2">{title}</h4>
        <p className="text-sm text-gray-500 mb-4">{description}</p>
      </div>

      <Link
        href={href}
        className="flex items-center text-primary hover:text-primary-900 font-medium"
      >
        <span className="mr-2">View integration</span>
        <Image
          src="/images/icons/arrow.svg"
          alt="Arrow icon"
          width={16}
          height={16}
          className="object-contain "
        />
      </Link>
    </div>
  );
}
