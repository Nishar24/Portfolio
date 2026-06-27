import { useEffect, useRef } from "react";

export default function Experience() {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll(".animate-on-scroll");
    const io = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add("visible"); }), { threshold: 0.1 });
    els?.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const certs = [
    { icon:"⚛️", name:"React.js — Advanced Patterns", org:"AccioJob / Self-Directed", year:"2024" },
    { icon:"🟢", name:"Node.js & Express.js", org:"AccioJob Internship", year:"2024" },
    { icon:"🍃", name:"MongoDB & Mongoose ODM", org:"Self-Directed + Internship", year:"2024" },
    { icon:"🔒", name:"JWT Auth & API Security", org:"AccioJob Internship", year:"2025" },
    { icon:"🐙", name:"Git & GitHub — Version Control", org:"Open Source Contributions", year:"2023–2025" },
    { icon:"🛠️", name:"Full-Stack MERN Projects", org:"AccioJob + Independent", year:"2024–2025" },
  ];

  return (
    <section id="experience" ref={ref} className="py-24 px-6 md:px-12 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll mb-12">
          <span className="section-label">// my journey</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2">Experience & <span className="gradient-text">Achievements</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Timeline */}
          <div>
            <h3 className="text-cyan-400 font-bold mb-6 flex items-center gap-2">🗓️ Work & Education</h3>
            <div className="space-y-0">
              {[{
                dot:"from-indigo-500 to-cyan-500",
                period:"Oct 2024 – Sep 2025",
                role:"Full-Stack Developer Intern",
                org:"AccioJob, Noida",
                desc:"Developed and maintained full-stack MERN modules. Built secure REST APIs with JWT auth & RBAC. Optimized frontend rendering and backend queries. Collaborated using Git/GitHub workflow."
              },{
                dot:"from-purple-500 to-indigo-500",
                period:"2022 – 2025",
                role:"B.Tech — Computer Science",
                org:"AKTU, Lucknow",
                desc:"Core CS fundamentals: DSA, OS, DBMS, Networking. Built multiple full-stack projects. Active in coding competitions and tech events."
              },{
                dot:"from-cyan-500 to-emerald-500",
                period:"2021 – Present",
                role:"Open Source Contributor",
                org:"GitHub — mdnishar02",
                desc:"Contributing to open-source React component libraries. Building and deploying multiple full-stack MERN projects independently with production deployments on Vercel & Render."
              },{
                dot:"from-amber-500 to-orange-500",
                period:"2018 – 2021",
                role:"Diploma — CS Engineering",
                org:"Jamia Millia Islamia, New Delhi",
                desc:"Foundation in programming, web development, and databases. Hands-on experience with C, Java, HTML/CSS and core web technologies."
              }].map((item,i) => (
                <div key={i} className="flex gap-4 pb-8 animate-on-scroll" style={{transitionDelay:`${i*0.1}s`}}>
                  <div className="flex flex-col items-center shrink-0 w-8">
                    <div className={`w-3.5 h-3.5 rounded-full bg-gradient-to-br ${item.dot} shadow-[0_0_12px_rgba(99,102,241,0.5)] mt-1 shrink-0`} />
                    {i < 3 && <div className="w-0.5 flex-1 bg-gradient-to-b from-indigo-500/30 to-transparent mt-1" />}
                  </div>
                  <div className="flex-1 pb-2">
                    <span className="text-xs font-mono text-indigo-400">{item.period}</span>
                    <h4 className="font-bold text-white mt-1">{item.role}</h4>
                    <p className="text-cyan-400 text-sm">{item.org}</p>
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certs & Achievements */}
          <div>
            <h3 className="text-cyan-400 font-bold mb-6 flex items-center gap-2">🏆 Certifications & Learning</h3>
            <div className="space-y-3">
              {certs.map((c,i) => (
                <div key={i} className="card-glow p-4 flex items-center gap-4 animate-on-scroll hover:translate-x-1 transition-transform" style={{transitionDelay:`${i*0.08}s`}}>
                  <div className="text-2xl shrink-0">{c.icon}</div>
                  <div>
                    <div className="font-bold text-white text-sm">{c.name}</div>
                    <div className="text-cyan-400 text-xs">{c.org}</div>
                    <div className="text-slate-500 text-xs font-mono mt-0.5">{c.year}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                { num:"1 Year", label:"Internship Duration", icon:"🏢" },
                { num:"5+", label:"Projects Shipped", icon:"🚀" },
                { num:"10+", label:"Tech Stack Tools", icon:"🛠️" },
                { num:"Open", label:"Source Contributor", icon:"🐙" },
              ].map((s,i) => (
                <div key={i} className="card-glow p-4 text-center animate-on-scroll" style={{transitionDelay:`${i*0.1}s`}}>
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div className="text-2xl font-black gradient-text">{s.num}</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
