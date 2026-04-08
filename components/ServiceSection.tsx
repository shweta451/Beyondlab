"use client";

import { useState } from "react";

type ServiceCard = {
  title: string;
  description: string;
  icon: string;
  activeIcon?: string;
};

const services: ServiceCard[] = [
  {
    title: "Website Operations",
    description:
      "Streamline digital operations with 99.9% uptime, faster campaign launches, and reduced operational costs.",
    icon: "/service-website-black.png",
    activeIcon: "/service-website-white.png",
  },
  {
    title: "Software Product Engineering",
    description:
      "Deploy AI-accelerated engineering squads delivering 3x faster, secure, scalable solutions within your enterprise ecosystem.",
    icon: "/service-product-black-v2.png",
    activeIcon: "/service-product-white-v2.png",
  },
  {
    title: "Fractional CTO",
    description:
      "On-demand tech leadership offering strategy, risk assessment, and cost-efficient executive expertise within 72 hours.",
    icon: "/service-fractional-black.png",
    activeIcon: "/service-fractional-white.png",
  },
  {
    title: "AI Workflow Automation",
    description:
      "Scale your business with AI-powered automation, seamless integrations, and secure workflows for enterprise growth.",
    icon: "/service-ai-black.png",
    activeIcon: "/service-ai-white.png",
  },
];

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  const isLeft = direction === "left";

  return (
    <button
      type="button"
      aria-label={isLeft ? "Previous services" : "Next services"}
      onClick={onClick}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-[#8f949f] text-[#5f6471] transition-colors hover:border-[#6f7585] hover:text-[#454b5a]"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isLeft ? "rotate-180" : ""}
      >
        <path
          d="M5 12H19M13 6L19 12L13 18"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function ServiceSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [expandedStandard, setExpandedStandard] = useState<number>(0);

  const standards = [
    {
      title: "Security & Compliance",
      points: [
        "SOC 2 compliance readiness and security protocols",
        "Enterprise SSO integration and GDPR compliance",
        "Comprehensive NDAs and IP protection frameworks",
        "Security-first development practices",
        "Regular security audits and monitoring",
      ],
      showCta: true,
    },
    {
      title: "Professional Integration",
      points: [
        "Seamless integration with existing enterprise workflows",
        "Direct reporting to C-level executives with clear governance",
        "Cultural alignment with enterprise standards",
        "Dedicated account management with executive access",
        "Agile methodology adapted for enterprise requirements",
      ],
      showCta: true,
    },
    {
      title: "Technology Expertise",
      points: [
        "Cloud & Infrastructure: AWS, Google Cloud, Microsoft Azure, Kubernetes, Docker",
        "Enterprise Development: React, Next.js, Node.js, .NET Core, Java Spring, Python",
        "Data & Analytics: PostgreSQL, MongoDB, Redis, Elasticsearch, Snowflake",
        "Enterprise Integrations: Salesforce, HubSpot, SAP, Microsoft Dynamics, Slack",
      ],
      showCta: true,
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => {
      const base = prev === null ? 0 : prev;
      return (base - 1 + services.length) % services.length;
    });
  };

  const handleNext = () => {
    setActiveIndex((prev) => {
      const base = prev === null ? -1 : prev;
      return (base + 1) % services.length;
    });
  };

  return (
    <section className="w-full bg-[#f4f4f5] py-8 md:py-10">
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-6">
        <h2 className="text-[40px] font-medium leading-tight text-[#202124]">
          Four Strategic Enterprise Services
        </h2>
        <div className="flex shrink-0 items-center gap-3">
          <ArrowButton direction="left" onClick={handlePrev} />
          <ArrowButton direction="right" onClick={handleNext} />
        </div>
      </div>

      <div className="mx-auto mt-7 grid w-full max-w-[1320px] grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const isActive = index === activeIndex;

          return (
            <article
              key={service.title}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`flex min-h-[390px] flex-col border px-8 py-8 text-left ${
                isActive
                  ? "border-[#111215] bg-[#0d0e12]"
                  : "border-[#ececef] bg-[#f7f7f8]"
              } transition-colors duration-300`}
            >
              <img
                src={isActive && service.activeIcon ? service.activeIcon : service.icon}
                alt={`${service.title} icon`}
                className="h-12 w-12 object-contain"
              />
              <h3
                className={`mt-5 max-w-[210px] text-[20px] leading-[1.25] font-normal ${
                  isActive ? "text-white" : "text-[#222326]"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`mt-5 min-h-[88px] max-w-[210px] text-[14px] leading-[1.45] transition-all duration-300 ${
                  isActive
                    ? "max-h-[180px] opacity-100 text-[#d9dbe1]"
                    : "max-h-0 overflow-hidden opacity-0 text-[#666b77]"
                }`}
              >
                {service.description}
              </p>

              <div
                className={`mt-auto flex justify-end border-t pt-3 transition-colors duration-300 ${
                  isActive ? "border-[#3a3c43]" : "border-[#e4e5e8]"
                }`}
              >
                <button
                  type="button"
                  aria-label={`Open ${service.title}`}
                  className={`flex h-9 w-9 items-center justify-center transition-colors duration-300 ${
                    isActive
                      ? "bg-[#f36a2f] text-white"
                      : "bg-[#f2f2f4] text-[#8b90a0]"
                  }`}
                >
                  <img
                    src={isActive ? "/card-arrow-white.png" : "/card-arrow-black.png"}
                    alt=""
                    aria-hidden="true"
                    className="h-4 w-4 object-contain"
                  />
                </button>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mx-auto mt-16 w-full max-w-[1320px] px-6 pb-4">
        <h3 className="text-[40px] font-medium leading-tight text-[#1f2023]">
          Enterprise-Grade Standards
        </h3>

        <div className="mt-8 border-t border-[#dedee2]">
          {standards.map((item, index) => {
            const isOpen = expandedStandard === index;

            return (
              <div key={item.title} className="border-b border-[#dedee2] py-7">
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-6 text-left"
                  onClick={() => setExpandedStandard(index)}
                  aria-expanded={isOpen}
                >
                  <h4 className="text-[25px] font-medium leading-[1.2] text-[#232428]">
                    {item.title}
                  </h4>
                  <img
                    src={isOpen ? "/accordion-minus.png" : "/accordion-plus.png"}
                    alt={isOpen ? "Collapse section" : "Expand section"}
                    className="mt-2 h-4 w-4 object-contain"
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="mt-5 list-disc space-y-3 pl-7 text-[15px] leading-[1.7] text-[#676c78]">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  {item.showCta ? (
                    <button className="mt-6 rounded bg-[#f36a2f] px-6 py-3 text-[16px] font-semibold text-white transition-colors hover:bg-[#e25f29]">
                      Schedule Briefing
                    </button>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative mt-14 overflow-hidden bg-[#07070b] py-20">
        <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-16 px-6 lg:grid-cols-2">
          <div>
            <h3 className="max-w-[560px] text-[40px] leading-[1.15] font-medium text-white md:text-[46px]">
              Proven <span className="text-[#5d5f66]">Methodology,</span>
              <br />
              Enterprise Results
            </h3>
            <button className="mt-8 rounded border border-[#757983] px-7 py-2.5 text-[16px] font-medium text-white transition-colors hover:bg-white hover:text-[#07070b]">
              Book a meeting
            </button>
          </div>

          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-4">
                <h4 className="shrink-0 text-[24px] font-medium leading-tight text-white md:text-[26px]">
                  Top 1% Global Talent
                </h4>
                <div className="h-px w-full bg-[#4b4d53]" />
              </div>
              <p className="mt-4 max-w-[760px] text-[16px] leading-[1.7] text-[#d1d2d6] md:text-[17px]">
                Our teams consist of senior engineers, designers, and
                technology leaders who&apos;ve worked with major technology companies
                and understand enterprise requirements.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4">
                <h4 className="shrink-0 text-[24px] font-medium leading-tight text-white md:text-[26px]">
                  AI-Accelerated Development
                </h4>
                <div className="h-px w-full bg-[#4b4d53]" />
              </div>
              <p className="mt-4 max-w-[760px] text-[16px] leading-[1.7] text-[#d1d2d6] md:text-[17px]">
                70% of our code is AI-generated and optimized, allowing us to
                deliver enterprise-quality solutions 3x faster than traditional
                approaches.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4">
                <h4 className="shrink-0 text-[24px] font-medium leading-tight text-white md:text-[26px]">
                  Enterprise-Ready from Day 1
                </h4>
                <div className="h-px w-full bg-[#4b4d53]" />
              </div>
              <p className="mt-4 max-w-[760px] text-[16px] leading-[1.7] text-[#d1d2d6] md:text-[17px]">
                Every engagement includes enterprise-grade security, compliance
                considerations, and professional project management aligned with
                your business objectives.
              </p>
            </div>
          </div>
        </div>

        <img
          src="/methodology-corner.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 w-[340px] opacity-80 md:w-[460px] lg:w-[560px]"
        />
      </div>

    </section>
  );
}
