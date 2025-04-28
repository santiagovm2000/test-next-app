import Badge from "../Badge/Badge";
import SimpleCard from "../SimpleCard/SimpleCard";

export interface Integration {
  iconSrc: string;
  title: string;
  description: string;
  href: string;
}

const integrations: Integration[] = [
  {
    iconSrc: "/images/integration-tools/notion.svg",
    title: "Notion integration",
    description:
      "Work faster and smarter by integrating directly with Notion, right in the app.",
    href: "/",
  },
  {
    iconSrc: "/images/integration-tools/slack.svg",
    title: "Slack integration",
    description:
      "Work faster and smarter by integrating directly with Slack, right in the app.",
    href: "/",
  },
  {
    iconSrc: "/images/integration-tools/g-drive.svg",
    title: "Google Drive integration",
    description:
      "Work faster and smarter by integrating directly with Google Drive, right in the app.",
    href: "/",
  },
  {
    iconSrc: "/images/integration-tools/intercom.svg",
    title: "Intercom integration",
    description:
      "Work faster and smarter by integrating directly with Intercom, right in the app.",
    href: "/",
  },
  {
    iconSrc: "/images/integration-tools/jira.svg",
    title: "Jira integration",
    description:
      "Work faster and smarter by integrating directly with Jira, right in the app.",
    href: "/",
  },
  {
    iconSrc: "/images/integration-tools/dropbox.svg",
    title: "Dropbox integration",
    description:
      "Work faster and smarter by integrating directly with Dropbox, right in the app.",
    href: "/",
  },
];

export default function IntegrationSection() {
  return (
    <section className="py-16 ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="px-0 md:px-30">
          {/* Badge */}
          <Badge>Integrations</Badge>

          {/* Heading */}
          <h2 className="text-4xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Get more value from your tools
          </h2>

          {/* Subheading */}
          <p className="text-xl font-normal mx-auto text-gray-600 mb-12">
            Connect your tools, connect your teams. With over 100 apps already
            available in our directory, your team’s favourite tools are just a
            click away.
          </p>
        </div>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((i) => (
            <SimpleCard
              key={i.title}
              iconSrc={i.iconSrc}
              title={i.title}
              description={i.description}
              href={i.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
