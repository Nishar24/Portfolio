import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll(".animate-on-scroll");
    const io = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add("visible"); }), { threshold: 0.15 });
    els?.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const info = [
    { label:"📍 Location", val:"Noida / New Delhi, India" },
    { label:"🎓 Education", val:"B.Tech CS — AKTU (2022–2025)" },
    { label:"📧 Email", val:"mdnishar75640@gmail.com" },
    { label:"💻 Internship", val:"AccioJob — Full-Stack Dev (1 Year)" },
    { label:"💼 Status", val:"🟢 Open to Work", green:true },
    { label:"🐙 GitHub", val:"github.com/mdnishar02" },
  ];

  return (
    <section id="about" ref={ref} className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="animate-on-scroll mb-12">
        <span className="section-label">// who I am</span>
        <h2 className="text-4xl md:text-5xl font-black mt-2">About <span className="gradient-text">Me</span></h2>
        <p className="text-slate-400 mt-3 max-w-lg">Engineer by code. Builder by passion. Problem-solver by nature.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-5 animate-on-scroll">
          <p className="text-slate-400 leading-relaxed">
            I'm <span className="text-cyan-400 font-semibold">Md Nishar Alam</span>, a Results-driven <span className="text-cyan-400 font-semibold">MERN Full-Stack Developer</span> with hands-on experience building scalable web applications during a <span className="text-white font-semibold">1-year internship at AccioJob, Noida</span>.
          </p>
          <p className="text-slate-400 leading-relaxed">
            I specialise in crafting <span className="text-cyan-400 font-semibold">end-to-end web solutions</span> — from pixel-perfect React UIs to robust Node.js/Express backends with MongoDB. Strong focus on <span className="text-white font-semibold">performance optimization, clean code architecture, and user-centric design</span>.
          </p>
          <p className="text-slate-400 leading-relaxed">
            I've built real-world projects including a <span className="text-cyan-400 font-semibold">home services marketplace</span> and business portfolio platforms — all with JWT auth, REST APIs, and responsive UI. Actively contributing to <span className="text-white font-semibold">open-source React component libraries</span>.
          </p>

          <div className="grid grid-cols-2 gap-3 mt-6">
            {info.map((item,i) => (
              <div key={i} className="card-glow p-4 space-y-1">
                <div className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</div>
                <div className={`text-sm font-semibold ${item.green ? "text-green-400" : "text-white"}`}>{item.val}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {["🚀 5+ MERN Projects","⚛️ React Specialist","🔒 JWT Auth Expert","🐙 Open Source Contributor"].map(a => (
              <span key={a} className="text-xs px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400">{a}</span>
            ))}
          </div>
        </div>

        <div className="space-y-4 animate-on-scroll" style={{transitionDelay:"0.2s"}}>
          {[{
            year:"Oct 2024 – Sep 2025",
            title:"Full-Stack Developer Intern",
            org:"AccioJob, Noida",
            points:["Developed and maintained full-stack MERN modules for real-world web apps","Built secure REST APIs with JWT auth and role-based access control","Optimized frontend rendering and backend queries for better responsiveness","Collaborated using Git/GitHub workflow with mentors and dev teams"]
          },{
            year:"2022 – 2025",
            title:"B.Tech — Computer Science",
            org:"Dr. A.P.J. Abdul Kalam Technical University",
            points:["Core CS fundamentals — DSA, OS, DBMS, CN","Built multiple full-stack projects as part of coursework","Active participant in coding competitions and hackathons"]
          },{
            year:"2018 – 2021",
            title:"Diploma — Computer Science Engg.",
            org:"Jamia Millia Islamia, New Delhi",
            points:["Foundation in programming, web dev, and databases","Hands-on lab experience in C, Java, and web technologies"]
          }].map((item,i) => (
            <div key={i} className="card-glow p-5 border-l-4 border-l-indigo-500" style={{transitionDelay:`${i*0.1}s`}}>
              <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">{item.year}</span>
              <h3 className="font-bold text-white mt-2">{item.title}</h3>
              <p className="text-cyan-400 text-sm">{item.org}</p>
              <ul className="mt-3 space-y-1">
                {item.points.map((p,j) => <li key={j} className="text-slate-400 text-sm flex gap-2"><span className="text-indigo-400 mt-0.5 shrink-0">▸</span>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
