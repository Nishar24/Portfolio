import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const bt = document.createElement("button");
    bt.innerHTML = "↑";
    bt.className = "fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-white font-bold shadow-lg opacity-0 pointer-events-none transition-all duration-300";
    bt.onclick = () => window.scrollTo({top:0,behavior:"smooth"});
    document.body.appendChild(bt);
    const onScroll = () => {
      bt.style.opacity = window.scrollY > 400 ? "1" : "0";
      bt.style.pointerEvents = window.scrollY > 400 ? "all" : "none";
    };
    window.addEventListener("scroll", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); document.body.removeChild(bt); };
  }, []);

  return (
    <div className="relative">
      {/* Grid background */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{backgroundImage:"linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)", backgroundSize:"55px 55px"}} />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
