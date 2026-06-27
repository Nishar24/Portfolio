import { useEffect, useRef } from "react";

const categories = [
  { title:"Frontend", icon:"⚛️", skills:["React.js","Redux Toolkit","JavaScript (ES6+)","HTML5","CSS3","Tailwind CSS","Bootstrap"] },
  { title:"Backend", icon:"🟢", skills:["Node.js","Express.js","REST APIs","JWT Auth","Middleware","Role-Based Access"] },
  { title:"Database", icon:"🍃", skills:["MongoDB","Mongoose","Database Design","Aggregation Pipeline","Indexing"] },
  { title:"Tools & DevOps", icon:"🛠️", skills:["Git","GitHub","Postman","VS Code","Vercel","Render","npm/yarn"] },
];

const bars = [
  { name:"React.js", pct:88 },
  { name:"Node.js / Express", pct:82 },
  { name:"MongoDB / Mongoose", pct:80 },
  { name:"JavaScript", pct:90 },
  { name:"REST APIs / JWT", pct:85 },
  { name:"Tailwind CSS", pct:87 },
  { name:"Git / GitHub", pct:83 },
  { name:"Redux Toolkit", pct:75 },
];

export default function Skills() {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll(".animate-on-scroll");
    const barEls = ref.current?.querySelectorAll(".skill-bar-fill");
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if(e.isIntersecting) {
        e.target.classList.add("visible");
        barEls?.forEach(b => { b.style.width = b.dataset.w + "%"; });
      }
    }), { threshold: 0.1 });
    els?.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-24 px-6 md:px-12 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll mb-12">
          <span className="section-label">// technical stack</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2">Skills & <span className="gradient-text">Expertise</span></h2>
          <p className="text-slate-400 mt-3 max-w-lg">A solid MERN arsenal built through real-world internship and project experience.</p>
        </div>

        {/* Chip categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((cat,i) => (
            <div key={i} className="card-glow p-5 animate-on-scroll" style={{transitionDelay:`${i*0.1}s`}}>
              <div className="text-2xl mb-3">{cat.icon}</div>
              <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(s => <span key={s} className="tech-chip">{s}</span>)}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency bars */}
        <div className="animate-on-scroll">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">💪 Core Proficiencies</h3>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
            {bars.map((b,i) => (
              <div key={i}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm font-semibold text-slate-300">{b.name}</span>
                  <span className="text-xs font-mono text-cyan-400">{b.pct}%</span>
                </div>
                <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <div className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" style={{width:0, transition:`width 1.2s cubic-bezier(0.4,0,0.2,1) ${i*0.08}s`}} data-w={b.pct} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
