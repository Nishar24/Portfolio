import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id:1, cat:"fullstack",
    icon:"🏠", iconBg:"rgba(99,102,241,0.15)",
    title:"Grih Seva — Home Services Marketplace",
    badge:"Full-Stack MERN", badgeClass:"bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
    desc:"Full-stack home services marketplace enabling users to book services like plumbing, cleaning, and electrical work. JWT auth, role-based access, RESTful APIs, and responsive Tailwind UI.",
    highlights:["JWT-based authentication & role-based access","RESTful APIs for services, bookings & users","Optimized API response handling","Mobile-first responsive design"],
    tech:["React.js","Node.js","Express.js","MongoDB","JWT","Tailwind CSS"],
    link:"https://github.com/mdnishar02"
  },
  {
    id:2, cat:"frontend",
    icon:"💼", iconBg:"rgba(6,182,212,0.12)",
    title:"Business Portfolio Platform",
    badge:"Frontend React", badgeClass:"bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    desc:"Responsive single-page business website using reusable React components and Tailwind CSS. Modern UI with mobile-first approach, optimized rendering, and deployed on Vercel.",
    highlights:["Reusable React component architecture","Mobile-first Tailwind CSS design","Optimized state management & rendering","Production deploy on Vercel"],
    tech:["React.js","Tailwind CSS","Vercel","JavaScript"],
    link:"https://github.com/mdnishar02"
  },
  {
    id:3, cat:"fullstack",
    icon:"🔐", iconBg:"rgba(168,85,247,0.12)",
    title:"Secure Auth System — JWT + RBAC",
    badge:"Backend Node.js", badgeClass:"bg-purple-500/15 text-purple-300 border-purple-500/30",
    desc:"Production-grade authentication and authorization system with JWT tokens, refresh token rotation, role-based access control (Admin/User/Provider), and secure middleware chains.",
    highlights:["JWT + Refresh Token rotation","Role-Based Access Control (RBAC)","Secure Express middleware chain","MongoDB user management"],
    tech:["Node.js","Express.js","MongoDB","JWT","Mongoose","Postman"],
    link:"https://github.com/mdnishar02"
  },
  {
    id:4, cat:"fullstack",
    icon:"🛒", iconBg:"rgba(245,158,11,0.12)",
    title:"E-Commerce REST API",
    badge:"Full-Stack MERN", badgeClass:"bg-amber-500/15 text-amber-300 border-amber-500/30",
    desc:"Complete e-commerce backend with product catalog, cart management, order processing, and payment integration. Redux Toolkit for frontend state management with optimized re-renders.",
    highlights:["Product catalog & cart management","Order processing & tracking","Redux Toolkit state management","Responsive React storefront"],
    tech:["React.js","Redux Toolkit","Node.js","Express.js","MongoDB"],
    link:"https://github.com/mdnishar02"
  },
  {
    id:5, cat:"frontend",
    icon:"📱", iconBg:"rgba(16,185,129,0.1)",
    title:"Open-Source React Component Library",
    badge:"Open Source", badgeClass:"bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    desc:"Contributed reusable UI component library to open-source React ecosystem. Custom hooks, accessible components, and Storybook documentation for developer experience.",
    highlights:["Reusable accessible UI components","Custom React hooks","Storybook documentation","Published on GitHub"],
    tech:["React.js","JavaScript","CSS3","Storybook","GitHub"],
    link:"https://github.com/mdnishar02"
  },
  {
    id:6, cat:"fullstack",
    icon:"📊", iconBg:"rgba(239,68,68,0.1)",
    title:"Real-Time Dashboard — MERN",
    badge:"Full-Stack MERN", badgeClass:"bg-red-500/15 text-red-300 border-red-500/30",
    desc:"Admin dashboard with real-time data visualization, user analytics, and performance metrics. WebSocket integration for live updates, Chart.js graphs, and MongoDB aggregation pipelines.",
    highlights:["Real-time WebSocket updates","Chart.js data visualizations","MongoDB aggregation pipeline","JWT-protected admin routes"],
    tech:["React.js","Node.js","MongoDB","Chart.js","WebSocket","Tailwind CSS"],
    link:"https://github.com/mdnishar02"
  },
];

const filters = [
  { label:"🌐 All", val:"all" },
  { label:"🔗 Full-Stack", val:"fullstack" },
  { label:"⚛️ Frontend", val:"frontend" },
];

export default function Projects() {
  const ref = useRef(null);
  const [active, setActive] = useState("all");

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".animate-on-scroll");
    const io = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add("visible"); }), { threshold: 0.08 });
    els?.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const filtered = active === "all" ? projects : projects.filter(p => p.cat === active);

  return (
    <section id="projects" ref={ref} className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="animate-on-scroll mb-10">
        <span className="section-label">// what I've built</span>
        <h2 className="text-4xl md:text-5xl font-black mt-2">Featured <span className="gradient-text">Projects</span></h2>
        <p className="text-slate-400 mt-3 max-w-lg">Real-world MERN applications built during internship and self-directed learning.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-10 animate-on-scroll">
        {filters.map(f => (
          <button key={f.val} onClick={() => setActive(f.val)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${active===f.val ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white border-transparent shadow-lg" : "border-slate-700 text-slate-400 hover:border-indigo-500 hover:text-indigo-400"}`}>
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p,i) => (
          <div key={p.id} className="card-glow p-6 flex flex-col gap-4 animate-on-scroll" style={{transitionDelay:`${i*0.1}s`}}>
            <div className="flex items-start justify-between gap-3">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0" style={{background:p.iconBg}}>{p.icon}</div>
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${p.badgeClass}`}>{p.badge}</span>
            </div>

            <h3 className="font-bold text-white text-base leading-snug">{p.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed flex-1">{p.desc}</p>

            <ul className="space-y-1">
              {p.highlights.map((h,j) => <li key={j} className="text-slate-400 text-xs flex gap-2"><span className="text-indigo-400 shrink-0">▸</span>{h}</li>)}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {p.tech.map(t => <span key={t} className="tech-chip text-xs">{t}</span>)}
            </div>

            <div className="flex gap-3 mt-auto">
              <a href={p.link} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 border border-slate-700 px-3 py-1.5 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
              <a href={p.link} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 border border-slate-700 px-3 py-1.5 rounded-lg hover:border-indigo-500 hover:text-indigo-400 transition-all">
                ▶ Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
