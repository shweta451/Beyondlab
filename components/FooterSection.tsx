const footerColumns = [
  {
    title: "Services",
    links: ["CTO Consulting", "MVP Package", "POD Team"],
  },
  {
    title: "Case studies",
    links: ["AISWAPP", "Dicipl", "Dicipl", "View All"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Blogs", "Whitepaper", "Technologies"],
  },
  {
    title: "Follow us",
    links: ["LinkedIn", "Twitter", "Dribbble", "Instagram"],
  },
];

const pressLogos = [
  { src: "/press-yahoo-finance-v2.png", alt: "Yahoo Finance" },
  { src: "/press-entrepreneur-v2.png", alt: "Entrepreneur" },
  { src: "/press-the-martec-v2.png", alt: "The Martec" },
  { src: "/press-smartcompany-v2.png", alt: "SmartCompany" },
  { src: "/press-business-insider-v2.png", alt: "Business Insider" },
];

export default function FooterSection() {
  return (
    <footer className="bg-[#f4f4f5] pb-10">
      <div className="mx-auto w-full max-w-[1320px] px-6 pt-14">
        <div className="flex flex-wrap items-start justify-between gap-8 border-b border-[#d9dce3] pb-10">
          <img src="/logo.png" alt="Beyond logo" className="h-10 w-auto object-contain" />
          <p className="text-right text-[20px] leading-[1.55] text-[#30323a]">
            1052 Antone Way
            <br />
            Petaluma, CA 94952
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-y-8 md:grid-cols-5">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="text-[20px] font-semibold text-[#191a1f]">{column.title}</h4>
              <ul className="mt-4 space-y-4 text-[18px] text-[#2a2d36]">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="inline-flex items-center gap-2 hover:text-black">
                      {link}
                      {column.title === "Services" ? (
                        <img
                          src="/badge-cs.png"
                          alt=""
                          aria-hidden="true"
                          className="h-4 w-auto object-contain"
                        />
                      ) : null}
                      {column.title === "Follow us" ? (
                        <img
                          src="/icon-external-link.png"
                          alt=""
                          aria-hidden="true"
                          className="h-4 w-4 object-contain"
                        />
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 items-center gap-8 md:grid-cols-5">
          {pressLogos.map((logo) => (
            <div key={logo.alt} className="flex justify-center">
              <img src={logo.src} alt={logo.alt} className="h-8 w-auto object-contain opacity-100" />
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-[1160px] text-center text-[13px] leading-[1.8] text-[#707480]">
          Beyond Labs is a registered trademark of Beyond Labs, LLC. All
          third-party names, logos, and brands mentioned on this site are the
          trademarks of their respective owners. Beyond Labs, LLC is an
          independent entity with no endorsement, sponsorship, or affiliation
          with these third parties. Any use of third-party names, logos, or
          brands is solely for identification purposes and does not imply
          endorsement or partnership.
        </p>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 text-[14px] text-[#1f2024] md:flex-row md:items-center">
          <p>© Beyond Labs 2024 - All Rights Reserved - Beyond Labs, LLC. • Privacy Policy & Terms</p>
          <p>Based in the USA, Supporting Teams Globally.</p>
        </div>
      </div>
    </footer>
  );
}
