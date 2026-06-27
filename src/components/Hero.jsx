import { useEffect, useRef, useState } from "react";

const phrases = [
  "MERN Full-Stack Developer",
  "React.js Engineer",
  "Node.js Backend Dev",
  "MongoDB Expert",
  "REST API Builder",
  "JWT Auth Specialist",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);
  const particlesRef = useRef(null);

  useEffect(() => {
    if (paused) return;
    const phrase = phrases[phraseIdx];
    const timer = setTimeout(
      () => {
        if (!deleting) {
          setText(phrase.slice(0, charIdx + 1));
          if (charIdx + 1 === phrase.length) {
            setPaused(true);
            setTimeout(() => {
              setPaused(false);
              setDeleting(true);
            }, 2000);
            return;
          }
          setCharIdx((c) => c + 1);
        } else {
          setText(phrase.slice(0, charIdx - 1));
          if (charIdx - 1 === 0) {
            setDeleting(false);
            setPhraseIdx((i) => (i + 1) % phrases.length);
            setCharIdx(0);
            return;
          }
          setCharIdx((c) => c - 1);
        }
      },
      deleting ? 40 : 70,
    );
    return () => clearTimeout(timer);
  }, [charIdx, deleting, phraseIdx, paused]);

  useEffect(() => {
    const c = particlesRef.current;
    if (!c) return;
    for (let i = 0; i < 30; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.cssText = `left:${Math.random() * 100}%;width:${Math.random() * 3 + 1}px;height:${Math.random() * 3 + 1}px;background:${Math.random() > 0.5 ? "#6366f1" : "#06b6d4"};animation-duration:${Math.random() * 18 + 10}s;animation-delay:${Math.random() * 12}s;`;
      c.appendChild(p);
    }
  }, []);

  const stats = [
    { num: "1yr", label: "Internship" },
    { num: "4+", label: "MERN Projects" },
    { num: "🔒", label: "JWT / REST" },
  ];

  const badges = [
    {
      text: "MERN Stack Developer",
      pos: "top-4 right-[-10px]",
      color: "border-indigo-500/40",
      dot: true,
    },
    {
      text: "MongoDB / Databases",
      pos: "top-[30%] left-[-20px]",
      color: "border-cyan-500/40",
    },
    {
      text: "Node.js / Express.js",
      pos: "bottom-[20%] right-[-15px]",
      color: "border-purple-500/40",
    },
    {
      text: "React.js / Redux",
      pos: "bottom-4 left-[-10px]",
      color: "border-pink-500/40",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      <div
        ref={particlesRef}
        className="fixed inset-0 pointer-events-none z-0"
      />

      {/* BG Orbs */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-6">
            <div
              className="inline-flex items-center gap-2 border border-indigo-500/30 rounded-full px-4 py-2 text-sm text-cyan-400"
              style={{ background: "rgba(99,102,241,0.08)" }}
            >
              <span
                className="w-2 h-2 rounded-full bg-green-400"
                style={{
                  boxShadow: "0 0 8px #4ade80",
                  animation: "pulse 2s infinite",
                }}
              />
              Open to Full-time Opportunities
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
              Md Nishar
              <br />
              <span className="gradient-text">Alam</span>
            </h1>

            <div className="flex items-center gap-2 text-lg text-slate-400 min-h-8">
              <span className="text-cyan-400 font-mono text-lg md:text-xl">›</span>
              <span className="text-cyan-400 font-semibold font-mono">
                {text}
              </span>
              <span className="text-indigo-400 font-bold animate-pulse">_</span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-lg">
              I build{" "}
              <span className="text-white font-semibold">
                scalable, production-ready web applications
              </span>{" "}
              with the MERN stack. From secure REST APIs to pixel-perfect
              responsive UIs — I turn ideas into{" "}
              <span className="text-cyan-400 font-semibold">
                fast, reliable products
              </span>{" "}
              that users love.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary flex items-center gap-2"
              >
                → View Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 border border-slate-600 text-slate-300 px-7 py-4 text-lg rounded-full font-semibold hover:border-indigo-500 hover:text-white transition-all"
              >
                🤝 Let's Talk
              </a>
            </div>

            <div className="flex gap-8 pt-2">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-4xl font-black text-white">
                    {s.num}
                  </span>
                  <span className="text-xs text-slate-500 uppercase tracking-widest mt-1">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Photo */}
          <div className="flex justify-center items-center">
            <div
              className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]"
              style={{ animation: "float 6s ease-in-out infinite" }}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "transparent",
                  boxShadow:
                    "0 0 80px rgba(99,102,241,0.35), 0 0 160px rgba(6,182,212,0.2)",
                  animation: "glowPulse 4s ease-in-out infinite",
                }}
              />
              {/* Spinning ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #6366f1, #06b6d4, #a855f7, #ec4899, transparent 60%, #6366f1)",
                  animation: "spin 8s linear infinite",
                }}
              />
              <div
                className="absolute inset-[5px] rounded-full"
                style={{ background: "#0f172a" }}
              />

              {/* Photo frame */}
              <div className="absolute inset-[8px] rounded-full overflow-hidden border-2 border-indigo-500/20 z-10">
                {/* Replace src with your photo path: e.g. src="/photo.jpg" */}
                <img
                  src="/photo.jpeg"
                  alt="Md Nishar Alam"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback if no photo */}
                <div
                  className="w-full h-full flex flex-col items-center justify-center"
                  style={{
                    display: "none",
                    background:
                      "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(6,182,212,0.1))",
                  }}
                >
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-cyan-400">
                    <img
                      src="/photo.jpeg"
                      alt="profile"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              {badges.map((b, i) => (
                <div
                  key={i}
                  className={`absolute ${b.pos} flex items-center gap-2 bg-slate-900/90 backdrop-blur-sm border ${b.color} rounded-xl px-3 py-2 text-xs font-bold text-white whitespace-nowrap z-20 shadow-xl`}
                  style={{
                    animation: `float ${4 + i}s ${i * 0.7}s ease-in-out infinite`,
                  }}
                >
                  {b.dot && (
                    <span
                      className="w-2 h-2 rounded-full bg-green-400"
                      style={{ boxShadow: "0 0 6px #4ade80" }}
                    />
                  )}
                  {b.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes glowPulse { 0%,100% { box-shadow: 0 0 80px rgba(99,102,241,0.35), 0 0 150px rgba(6,182,212,0.2); } 50% { box-shadow: 0 0 120px rgba(99,102,241,0.5), 0 0 220px rgba(6,182,212,0.3); } }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.3; } }
      `}</style>
    </section>
  );
}
