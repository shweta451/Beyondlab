"use client";

import { useEffect, useState } from "react";

type SuccessSlide = {
  title: string;
  thumbnail: string;
  metrics: Array<{ value: string; label: string }>;
  challenge: string;
  solution: string;
  result: string;
};

const successSlides: SuccessSlide[] = [
  {
    title: "Construction Technology Platform",
    thumbnail: "/success-construction.png",
    metrics: [
      { value: "40%", label: "Faster Time-to-Market" },
      { value: "100%", label: "System Reliability" },
      { value: "3.2x", label: "Operational Efficiency" },
    ],
    challenge:
      "Legacy systems made it difficult for builders and contractors to manage inventory and sales efficiently.",
    solution:
      "Built a modern ERP mobile app with aggregated inventory and sales management.",
    result:
      "Delivered a fully compliant solution, streamlined operations, and launched well ahead of schedule.",
  },
  {
    title: "Fintech App",
    thumbnail: "/success-fintech.png",
    metrics: [
      { value: "43%", label: "Faster feature delivery" },
      { value: "40%", label: "Lean Operations" },
    ],
    challenge:
      "Enterprises needed rapid product implementation without compromising on stringent security standards.",
    solution:
      "Beyond deployed a dedicated full-stack product team that combined enterprise-grade security practices with startup-level speed and agility.",
    result:
      "Within just one year, we successfully designed, built, and launched the platform - scaling it to a massive audience with confidence and reliability.",
  },
  {
    title: "Healthcare Technology Company",
    thumbnail: "/success-healthcare.png",
    metrics: [
      { value: "61%", label: "Performance Boost" },
      { value: "99%", label: "Brand Compliance" },
      { value: "4x", label: "Productivity Increase" },
    ],
    challenge:
      "Developing a HIPAA-compliant patient platform with faster deployment and seamless hardware integration.",
    solution:
      "A specialized full-stack team built a secure, compliant mobile app with integrated hardware connectivity.",
    result:
      "Delivered a fully compliant solution, improved operational efficiency, and launched ahead of schedule.",
  },
];

export default function ExecutiveTestimonials() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % successSlides.length);
    }, 10000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="bg-[#f4f4f5] py-14">
      <div className="mx-auto w-full max-w-[1320px] px-6">
        <div className="flex items-center justify-between">
          <h3 className="text-[48px] font-medium leading-tight text-[#1f2023] md:text-[52px]">
            Executive Testimonials
          </h3>
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#9aa0ad]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="text-[#6f7480]"
              >
                <path
                  d="M15 6L9 12L15 18M10 12H21"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#9aa0ad]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="text-[#6f7480]"
              >
                <path
                  d="M9 6L15 12L9 18M3 12H14"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="executive-testimonials"
          className="mt-8 grid grid-cols-1 items-end bg-[#ececee] px-7 py-8 md:px-10 lg:grid-cols-2"
        >
          <div>
            <img
              src="/testimonial-person.png"
              alt=""
              aria-hidden="true"
              className="h-12 w-12 object-contain"
            />
            <p className="mt-5 max-w-[660px] text-[19px] leading-[1.6] text-[#232428]">
              Beyond Labs delivered exactly what they promised. Their team
              integrated seamlessly with our enterprise processes and delivered
              our digital transformation ahead of schedule. The fractional CTO
              provided the strategic leadership our board was looking for.
            </p>
            <a
              href="#"
              className="mt-7 inline-flex items-center gap-4 text-[14px] font-medium tracking-[0.08em] text-[#f36a2f]"
            >
              Our strategy for Kraken
              <span className="text-[18px] leading-none">→</span>
            </a>
            <p className="mt-6 text-[26px] font-semibold leading-tight text-[#1f2023]">
              Jabez Reuben
            </p>
            <p className="mt-2 text-[14px] text-[#6b6f7b]">
              Founder of thekraken.co
            </p>
          </div>

            <div className="mt-6 flex justify-end lg:mt-0">
            <img
              src="/testimonial-quote.png"
              alt="Jabez Reuben speaking with a microphone"
                className="h-auto w-full max-w-[380px] object-contain"
            />
          </div>
        </div>

        <div
          id="success-stories"
          className="relative mt-16 overflow-hidden bg-[#0a090d] bg-cover bg-center px-8 py-10 md:px-14 md:py-12"
          style={{ backgroundImage: "url('/success-stories-bg.png')" }}
        >

          <div className="relative z-10 flex items-center justify-between">
            <h3 className="text-[36px] font-medium text-white md:text-[50px]">
              Success Stories
            </h3>
            <div className="flex items-center gap-2">
              {successSlides.map((_, index) => (
                <span
                  key={index}
                  className={`h-[3px] w-8 transition-colors duration-300 ${
                    index === activeSlide ? "bg-[#ff5a18]" : "bg-white"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-8 overflow-hidden bg-[#ebebed]">
            <div
              className="flex w-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {successSlides.map((item) => (
                <div key={item.title} className="w-full shrink-0 p-6 md:p-10">
                  <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-12 w-12 rounded-sm object-cover"
                      />
                      <p className="text-[17px] leading-[1.25] text-[#1f2023]">
                        {item.title}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-1 md:min-w-[360px]">
                      {[0, 1, 2].map((metricIndex) => {
                        const metricPool =
                          item.metrics.length === 2
                            ? [null, ...item.metrics]
                            : item.metrics;
                        const metric = metricPool[metricIndex] ?? null;
                        const isEmpty = !metric;

                        return (
                          <div
                            key={metricIndex}
                            className={`px-4 py-5 text-center ${
                              isEmpty ? "opacity-0" : "bg-[#e1e1e3]"
                            }`}
                          >
                            <p className="text-[28px] font-medium text-[#111216]">
                              {metric?.value ?? "0"}
                            </p>
                            <p className="mt-1 text-[10px] text-[#707480]">
                              {metric?.label ?? "placeholder"}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-1 border-t border-[#d5d6da] pt-7 md:grid-cols-3">
                    <div className="border-b border-[#d5d6da] pb-5 md:border-b-0 md:border-r md:pr-8">
                      <h4 className="text-[34px] font-medium text-[#17181b]">
                        Challenge
                      </h4>
                      <p className="mt-3 max-w-[290px] text-[18px] leading-[1.6] text-[#6a6f7b] md:min-h-[120px]">
                        {item.challenge}
                      </p>
                    </div>
                    <div className="border-b border-[#d5d6da] py-5 md:border-b-0 md:border-r md:px-8 md:py-0">
                      <h4 className="text-[34px] font-medium text-[#17181b]">
                        Solution
                      </h4>
                      <p className="mt-3 max-w-[300px] text-[18px] leading-[1.6] text-[#6a6f7b] md:min-h-[120px]">
                        {item.solution}
                      </p>
                    </div>
                    <div className="pt-5 md:pl-8 md:pt-0">
                      <h4 className="text-[34px] font-medium text-[#17181b]">
                        Result
                      </h4>
                      <p className="mt-3 max-w-[300px] text-[18px] leading-[1.6] text-[#6a6f7b] md:min-h-[120px]">
                        {item.result}
                      </p>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
