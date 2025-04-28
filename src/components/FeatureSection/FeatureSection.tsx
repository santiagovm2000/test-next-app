import Badge from "../Badge/Badge";
import SimpleCard from "../SimpleCard/SimpleCard";

export interface Feature {
  iconSrc: string;
  title: string;
  description: string;
  href: string;
}

const features: Feature[] = [
  {
    iconSrc: "/images/feature-section/message-chat-circle.svg",
    title: "Share team inboxes",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    href: "/",
  },
  {
    iconSrc: "/images/feature-section/zap.svg",
    title: "Deliver instant answers",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    href: "/",
  },
  {
    iconSrc: "/images/feature-section/chart-breakout-square.svg",
    title: "Manage your team with reports",
    description:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill on the data in a couple clicks.",
    href: "/",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <div className="mx-auto text-center px-0 md:px-30">
          <Badge>Features</Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Cutting-edge features for advanced analytics
          </h2>
          <p className="text-xl font-normal mx-auto text-gray-600 mb-12">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {features.map((f) => (
            <SimpleCard
              key={f.title}
              iconSrc={f.iconSrc}
              title={f.title}
              description={f.description}
              href={f.href}
              heightImage={40}
              widthImage={40}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
