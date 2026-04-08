export default function ContactSection() {
  return (
    <section className="bg-[#f4f4f5] pb-16">
      <div className="mx-auto w-full max-w-[1320px] px-6">
        <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-2 md:gap-16">
          <div className="max-w-[560px]">
            <h3 className="text-[34px] font-medium leading-[1.15] text-[#191a1f] md:text-[52px]">
              Contact for Enterprise
              <br />
              Inquiries
            </h3>
            <p className="mt-6 text-[16px] leading-[1.6] text-[#676c78] md:text-[17px]">
              Direct Response for Strategic Initiatives - Same-day response to
              all executive inquiries - Confidential technology assessments
              available - Strategic planning sessions with C-level leadership
            </p>
          </div>

          <div className="flex flex-col gap-4 text-[16px] text-[#676c78] md:pt-2">
            <div className="flex items-center gap-3">
              <span className="text-[16px]">✉</span>
              <span>business@beyondlabs.io</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[16px]">☎</span>
              <span>+1 (631) 572-8486</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[16px]">⌂</span>
              <span>1052 Antone Way, Petaluma, CA 94952</span>
            </div>

            <button className="mt-4 w-fit rounded bg-[#f36a2f] px-7 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#e25f29]">
              Request Executive Briefing
            </button>
          </div>
        </div>

        <div className="bg-[#07070b] px-6 py-14 text-center md:px-8 md:py-16">
          <h3 className="mx-auto max-w-[760px] text-[32px] font-medium leading-[1.2] text-white md:text-[50px]">
            Launch Faster with a Dedicated
            <br />
            Product Team in Just Weeks
          </h3>
          <p className="mx-auto mt-6 max-w-[680px] text-[16px] leading-[1.5] text-[#6f7283] md:text-[20px]">
            While you focus on <span className="text-white">growth</span>, we&apos;ll
            handle the tech.
          </p>
          <button className="mt-8 rounded bg-[#f36a2f] px-12 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#e25f29] md:px-14">
            Build with us
          </button>
        </div>
      </div>
    </section>
  );
}
