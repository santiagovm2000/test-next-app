"use client";

import Accordion from "../Accordion/Accordion";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Absolutely. You can upgrade, downgrade, or cancel at any time through your account settings—no long-term commitment required.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time. After cancellation, you’ll retain access until the end of your current billing period.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes—just let us know what you need on your invoice and we’ll do our best to accommodate. Reach out to billing support for custom invoice requests.",
  },
  {
    question: "How does billing work?",
    answer:
      "We bill monthly on the same date you signed up. You’ll receive an email reminder 3 days before each renewal.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "Head to your profile settings, click “Account,” then “Email Address.” Enter your new email and confirm via the link we send you.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold text-gray-900 text-center">
          Frequently asked questions
        </h2>
        <p className="mt-2 text-center text-gray-600 text-xl">
          Everything you need to know about the product and billing.
        </p>

        <div className="mt-16 space-y-4">
          {faqs.map((f, idx) => (
            <Accordion key={idx} title={f.question}>
              {f.answer}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
