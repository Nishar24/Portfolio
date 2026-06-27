import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".animate-on-scroll");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 },
    );
    els?.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const socials = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: "GitHub",
      href: "https://github.com/Nishar24",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nishar-alam/",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,12 2,6" />
        </svg>
      ),
      label: "Email",
      href: "mailto:mdnishar75640@gmail.com",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20.52 3.48A11.79 11.79 0 0012.06 0C5.39 0 .01 5.38 0 12.06c0 2.12.55 4.18 1.6 6.01L0 24l6.17-1.62a11.95 11.95 0 005.89 1.5h.01c6.67 0 12.05-5.38 12.05-12.06 0-3.2-1.25-6.21-3.6-8.34zM12.07 22a9.9 9.9 0 01-5.05-1.38l-.36-.21-3.66.96.98-3.56-.23-.37A9.9 9.9 0 1122 12.07 9.9 9.9 0 0112.07 22zm5.43-7.45c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.19.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.18-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.12 3.24 5.13 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z" />
        </svg>
      ),
      label: "WhatsApp",
      href: "https://wa.me/917564025365",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="animate-on-scroll mb-12 text-center">
          <span className="section-label">// get in touch</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2">
            Let's Build Something{" "}
            <span className="gradient-text">Together</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-lg mx-auto">
            Open to full-time roles, freelance projects, and MERN
            collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left */}
          <div className="space-y-6 animate-on-scroll">
            <p className="text-slate-400 leading-relaxed">
              Whether you have an exciting project, a full-stack role, or just
              want to connect — I'm always open for a conversation. Let's build
              something impactful together.
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: "📧",
                  label: "mdnishar75640@gmail.com",
                  href: "mailto:mdnishar75640@gmail.com",
                },
                {
                  icon: "📱",
                  label: "+91-7564025365",
                  href: "tel:+917564025365",
                },
                { icon: "📍", label: "Noida, India" },
                {
                  icon: "🐙",
                  label: "github.com/Nishar24",
                  href: "https://github.com/Nishar24",
                },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-lg shrink-0">
                    {c.icon}
                  </div>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="text-slate-300 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {c.label}
                    </a>
                  ) : (
                    <span className="text-slate-400 text-sm">{c.label}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-slate-700 text-slate-400 text-sm font-semibold hover:border-indigo-500 hover:text-indigo-400 transition-all hover:-translate-y-1"
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div
            className="card-glow p-6 space-y-4 animate-on-scroll"
            style={{ transitionDelay: "0.2s" }}
          >
            {[
              {
                id: "name",
                label: "Your Name",
                type: "text",
                placeholder: "John Doe",
              },
              {
                id: "email",
                label: "Email Address",
                type: "email",
                placeholder: "john@example.com",
              },
              {
                id: "subject",
                label: "Subject",
                type: "text",
                placeholder: "Project / Job Opportunity",
              },
            ].map((f) => (
              <div key={f.id} className="space-y-1.5">
                <label className="text-xs text-slate-500 uppercase tracking-wider">
                  {f.label}
                </label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.id]}
                  onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                  className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                />
              </div>
            ))}
            <div className="space-y-1.5">
              <label className="text-xs text-slate-500 uppercase tracking-wider">
                Message
              </label>
              <textarea
                placeholder="Tell me about your project..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all resize-none"
              />
            </div>
            {status === "error" && (
              <p className="text-red-400 text-sm">
                ⚠️ Please fill all required fields.
              </p>
            )}
            {status === "sent" && (
              <p className="text-green-400 text-sm">
                ✅ Message sent! I'll reply within 24 hours.
              </p>
            )}
            <button
              onClick={handleSubmit}
              disabled={status === "sending"}
              className="btn-primary w-full justify-center text-sm disabled:opacity-60"
            >
              {status === "sending" ? "⏳ Sending..." : "🚀 Send Message"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
