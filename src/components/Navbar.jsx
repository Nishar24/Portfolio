import { useState, useEffect } from "react";

const links = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      links.forEach((l) => {
        const el = document.getElementById(l.toLowerCase());
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) setActive(l.toLowerCase());
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 h-16 flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${scrolled ? "bg-slate-900/95 shadow-lg shadow-black/20" : "bg-slate-900/70"} backdrop-blur-xl border-b border-slate-800/50`}
      >
        <div
          onClick={() => scrollTo("home")}
          className="text-2xl font-black cursor-pointer gradient-text"
        >
          MN.
        </div>

        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l.toLowerCase())}
                className={`nav-link ${active === l.toLowerCase() ? "active" : ""}`}
              >
                {l}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="btn-primary text-sm relative z-50"
        >
          Hire Me
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1"
        >
          <span
            className={`block w-6 h-0.5 bg-slate-200 transition-all ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-200 transition-all ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-200 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="fixed top-16 inset-x-0 z-40 bg-slate-900/98 backdrop-blur-xl border-b border-slate-800 flex flex-col gap-4 p-6">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l.toLowerCase())}
              className="text-slate-300 text-lg font-medium text-left hover:text-cyan-400 transition-colors"
            >
              {l}
            </button>
          ))}
          <a
            href="mailto:mdnishar75640@gmail.com"
            className="btn-primary text-center text-sm mt-2"
          >
            Hire Me
          </a>
        </div>
      )}
    </>
  );
}
