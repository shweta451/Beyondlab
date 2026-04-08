"use client";

import { useState } from "react";

type EngagementItem = {
  title: string;
  description?: string;
  icon: string;
};

type PromiseItem = {
  title: string;
  description?: string;
  iconDark: string;
  iconLight?: string;
};

const engagementItems: EngagementItem[] = [
  {
    title: "Strategic Discovery & Planning",
    description:
      "Comprehensive assessment of your technology landscape with clear recommendations for optimization and growth.",
    icon: "/engagement-discovery-black.png",
  },
  {
    title: "Executive Technology Leadership",
    description:
      "Deploy fractional CTO services for immediate strategic oversight and board-level technology governance.",
    icon: "/engagement-executive-black.png",
  },
  {
    title: "Dedicated Team Integration",
    description:
      "Engineering and design teams that work within your enterprise framework with full transparency and accountability.",
    icon: "/engagement-team-black.png",
  },
  {
    title: "Agile Enterprise Delivery",
    description:
      "Sprint-based delivery with enterprise project management, ensuring predictable results and continuous progress.",
    icon: "/engagement-agile-black.png",
  },
  {
    title: "Ongoing Optimization",
    description:
      "Continuous performance monitoring and strategic technology planning to maintain competitive advantage.",
    icon: "/engagement-optimization-black.png",
  },
];

const promiseItems: PromiseItem[] = [
  {
    title: "Enterprise Grade Security",
    description: "Comprehensive security protocols and compliance frameworks",
    iconDark: "/promise-security-white.png",
    iconLight: "/promise-security-black.png",
  },
  {
    title: "Transparent Delivery",
    description: "Clear milestones with regular executive reporting",
    iconDark: "/promise-transparent-white.png",
    iconLight: "/promise-transparent-black.png",
  },
  {
    title: "Cultural Integration",
    description: "Teams that work within your enterprise standards and processes",
    iconDark: "/promise-cultural-black-v2.png",
    iconLight: "/promise-cultural-white-v2.png",
  },
  {
    title: "Executive Access",
    description: "Direct communication with Beyond Labs leadership team",
    iconDark: "/promise-executive-black-v2.png",
    iconLight: "/promise-executive-white-v2.png",
  },
];

export default function EngagementSection() {
  const [activePromise, setActivePromise] = useState<number | null>(null);
  const [hoveredEngagementCard, setHoveredEngagementCard] = useState<number | null>(null);

  return (
    <section className="bg-[#f4f4f5] pb-16">
      <div className="mx-auto w-full max-w-[1320px] px-6">
        <h3 className="text-[32px] font-medium leading-tight text-[#17181b] md:text-[54px]">
          Engagement Approach
        </h3>

        <section className="mt-10 grid grid-cols-1 border border-[#dbdde2] md:grid-cols-3 lg:grid-cols-5">
          {engagementItems.map((item, index) => (
            <article
              key={item.title}
              onMouseEnter={() => setHoveredEngagementCard(index)}
              onMouseLeave={() => setHoveredEngagementCard(null)}
              className={`group flex h-[285px] flex-col overflow-hidden border-r border-b border-[#dbdde2] p-5 transition-all duration-300 lg:border-b-0 lg:p-6 ${
                hoveredEngagementCard === index
                  ? "-translate-y-1 bg-[#ededee] shadow-lg"
                  : "bg-[#f4f4f5]"
              }`}
            >
              <div>
                <img
                  src={item.icon}
                  alt={`${item.title} icon`}
                  className={`h-12 w-12 object-contain ${
                    (hoveredEngagementCard === null && index === 0) ||
                    hoveredEngagementCard === index
                      ? "[filter:brightness(0)_saturate(100%)_invert(55%)_sepia(88%)_saturate(2971%)_hue-rotate(349deg)_brightness(101%)_contrast(92%)]"
                      : ""
                  }`}
                />
                <h4 className="mt-4 text-[20px] leading-[1.25] font-medium text-[#17181b]">
                  {item.title}
                </h4>
                <p
                  className={`mt-5 max-w-[250px] text-[16px] leading-[1.45] text-[#6b6f7b] transition-opacity duration-200 ${
                    hoveredEngagementCard === null
                      ? index === 0
                        ? "opacity-100"
                        : "opacity-0"
                      : hoveredEngagementCard === index
                        ? "opacity-100"
                        : "opacity-0"
                  }`}
                >
                  {item.description}
                </p>
              </div>

            </article>
          ))}
        </section>

        <div className="relative left-1/2 right-1/2 mt-[35px] w-screen -translate-x-1/2 bg-[#09090d] py-12">
          <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10">
            <h3 className="text-[34px] font-medium text-white md:text-[48px]">
              Our Promise to Enterprise Clients
            </h3>

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4">
              {promiseItems.map((item, index) => {
                const isActive = index === activePromise;

                return (
                  <button
                    key={item.title}
                    type="button"
                    onMouseEnter={() => setActivePromise(index)}
                    onMouseLeave={() => setActivePromise(null)}
                    onClick={() => setActivePromise(index)}
                    className={`relative h-[360px] overflow-hidden border border-[#2a2b30] px-7 py-7 text-left transition-colors duration-300 ${
                      isActive
                        ? "bg-[#ececee] text-[#1d1f23]"
                        : "bg-transparent text-white"
                    }`}
                  >
                    <span
                      className={`absolute right-6 top-4 text-[34px] leading-none ${
                        isActive ? "text-[#f36a2f]" : "text-white"
                      }`}
                    >
                      {isActive ? "-" : "+"}
                    </span>

                    <img
                      src={isActive ? item.iconLight ?? item.iconDark : item.iconDark}
                      alt={`${item.title} icon`}
                      className="h-11 w-11 object-contain"
                    />

                    <p
                      className={`mt-6 font-medium leading-[1.2] transition-all duration-300 ${
                        isActive ? "text-[44px]" : "text-[28px]"
                      }`}
                    >
                      {item.title.split(" ").slice(0, 2).join(" ")}
                      <br />
                      {item.title.split(" ").slice(2).join(" ")}
                    </p>

                    <p
                      className={`mt-7 max-w-[270px] overflow-hidden text-[16px] leading-[1.55] transition-all duration-300 ${
                        isActive
                          ? "max-h-[190px] opacity-100 text-[#676c78]"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
