export default function Header() {
  return (
    <header className="h-[68px] px-8">
      <div className="relative mx-auto flex h-full w-full max-w-[1240px] items-center justify-between">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Company logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-11 text-[16px] font-medium text-[#222] md:flex">
          <a href="#" className="transition-colors hover:text-[#f36a2f]">
            About
          </a>
          <a href="#" className="transition-colors hover:text-[#f36a2f]">
            Case studies
          </a>
          <a href="#" className="transition-colors hover:text-[#f36a2f]">
            Services
          </a>
          <a href="#" className="transition-colors hover:text-[#f36a2f]">
            Career
          </a>
        </nav>

        <button className="rounded-[4px] bg-black px-8 py-2.5 text-[16px] font-semibold text-white transition-colors hover:bg-[#1b1b1b]">
          Build with us
        </button>
      </div>
    </header>
  );
}
