import React from "react";

const stats = [
  { value: "400+", label: "Projects completed" },
  { value: "600%", label: "Return on investment" },
  { value: "10k", label: "Global downloads" },
];

export default function DataStatsSection() {
  return (
    <section className="py-16 bg-white">
      {/* Título y subtítulo */}
      <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-4xl font-semibold text-gray-900">
          Unleash the full power of data
        </h2>
        <p className="mt-2 text-xl font-normal text-gray-600">
          Everything you need to convert, engage, and retain more users.
        </p>
      </div>

      {/* Caja de estadísticas */}
      <div className="mt-8 max-w-4xl mx-auto bg-gray-50 rounded-xl p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 ">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="py-6 flex flex-col items-center justify-center"
            >
              <span className="text-4xl sm:text-5xl font-bold text-primary-600">
                {stat.value}
              </span>
              <span className="mt-1 text-sm text-gray-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
