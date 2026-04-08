export default function HeroSection() {
  return (
    <section className="w-full">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center px-6 pt-28 pb-20 text-center">
        <h1 className="text-5xl font-medium leading-[1.15] tracking-[-0.02em] text-black md:text-7xl">
          Enterprise-Grade
          <br />
          <span className="text-[#f36a2f]">Technology</span> Solutions.
        </h1>

        <p className="mt-8 max-w-4xl text-base leading-[1.8] text-[#6b6b73] md:text-[18px] md:leading-[1.7]">
          Transform your digital infrastructure with elite engineers-3x faster
          delivery, 60% lower costs, and effortless enterprise-scale growth.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <button className="min-w-[260px] rounded-md bg-[#f36a2f] px-10 py-3 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-[#e65f26]">
            Schedule Briefing
          </button>
          <button className="min-w-[260px] rounded-md border border-[#808080] bg-white px-10 py-3 text-lg font-semibold text-black transition-colors hover:bg-[#f6f6f6]">
            View Case Studies
          </button>
        </div>
      </div>

      <div className="w-full">
        <video
          className="hidden h-[260px] w-full object-cover md:block lg:h-[300px]"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/hero-desktop.mp4" type="video/mp4" />
        </video>
        <video
          className="block h-[220px] w-full object-cover md:hidden"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/hero-mobile.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
