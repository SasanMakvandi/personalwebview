import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink, User, Briefcase, FolderKanban, Globe, Fish, X, Square, Minus, Image as ImageIcon } from "lucide-react";
import fredPreview from "./assets/fred-preview.jpg";
import bonPreview from "./assets/bon-preview.jpg";
import aquariumPhoto from "./assets/aquarium-photo.jpg";

const skills = {
  "Core Languages": ["Python", "JS", "C", "C#", "Java", "HTML", "CSS", "R", "PHP"],
  Frameworks: ["Node.js", "React.js", "Django", "Express.js", "Angular", "Bootstrap"],
  Database: ["Mongo DB", "SQL", "Neo4j"],
  "Tools and Workflow": ["Git", "JIRA", "Notion", "Agile Methodologies"],
  "Product & Team Management": ["Process Optimization", "Technical Oversight", "QA & Testing", "Feature Implementation", "Stakeholder Communication"],
};

const certifications = [{ name: "AWS Certified Cloud Practitioner", year: "2025" }];

const experience = [
  {
    role: "QA & Development Coordinator",
    org: "SporDee",
    location: "Remote",
    period: "May '24 — Present",
    bullets: [
      "Own end-to-end QA for web and mobile application features, performing functional, regression, integration, exploratory, and post-release testing across staging and production.",
      "Developed automated tests for critical user workflows using Selenium, expanding regression coverage and reducing repetitive manual validation.",
      "Built lightweight QA and development utilities using JavaScript to automate test preparation, application checks, and recurring validation tasks.",
      "Tested REST APIs through Postman, validating authentication, payloads, error handling, data consistency, and integration with front-end features.",
      "Investigated defects using browser developer tools, network requests, logs, and API responses, isolating root causes and providing developers with actionable findings.",
      "Contributed to application development, working through Git-based development workflows.",
      "Documented and triaged defects with reproducible steps, severity, expected and actual results, environment details, and supporting technical evidence.",
    ],
  },
  {
    role: "Shift Supervisor",
    org: "Starbucks",
    location: "Richmond Hill, ON",
    period: "Jun '22 — Jul '24",
    bullets: [
      "Led daily operations in a high-volume environment, managing workflow, inventory, and team execution under time-sensitive conditions.",
      "Supervised and supported staff during peak hours, ensuring consistency in service and operational efficiency.",
      "Trained new employees and reinforced procedures to maintain performance and accountability.",
      "Resolved day-to-day operational issues quickly, strengthening problem-solving and decision-making under pressure.",
    ],
  },
  {
    role: "Coding and Mathematics Instructor",
    org: "Code Ninjas",
    location: "Richmond Hill, ON",
    period: "Jun '20 — Jun '22",
    bullets: [
      "Taught programming fundamentals including object-oriented programming, logic development, and problem-solving.",
      "Guided students through debugging exercises, helping them understand code behavior and execution flow.",
      "Designed structured lesson plans tailored to individual learning pace and technical understanding.",
      "Coordinated scheduling and student-instructor assignments based on progress and compatibility.",
    ],
  },
];

const projects = [
  {
    name: "Habit Reminder System",
    tag: "Raspberry Pi Deployment",
    repo: "https://github.com/SasanMakvandi/Water-Reminder-",
    bullets: [
      "Built a Java-based backend service enabling users to set custom reminder frequencies for habits such as hydration and daily routines.",
      "Implemented scheduling logic to trigger notifications dynamically based on user-defined intervals and engagement patterns.",
      "Designed basic tracking to monitor adherence and generate simple habit reports over time.",
      "Added follow-up logic to re-engage users who missed reminders, improving consistency through repeated prompts.",
      "Developed based on a personal motivation to address common issues like dehydration and inconsistent routines through lightweight automation.",
    ],
  },
  {
    name: "Streaming Platform",
    tag: "Full Stack Development",
    bullets: [
      "Developed a full-stack web application with integrated social features, enabling user interaction, content sharing, and real-time engagement.",
      "Contributed to both frontend and backend layers using modern frameworks, handling UI rendering, routing, and server-side logic.",
      "Implemented RESTful API communication between client and server components to support dynamic content updates.",
      "Collaborated in a team of 6 using Agile methodologies, participating in sprint planning, task breakdown, and iterative feature development.",
      "Managed version control and code integration using Git and GitFlow, resolving merge conflicts and maintaining code consistency across branches.",
    ],
  },
  {
    name: "ADS-B Flight Radar",
    tag: "Personal · In Progress",
    repo: "https://github.com/SasanMakvandi/ADSB-Radar",
    bullets: [
      "Built a receiver setup on a Raspberry Pi with an RTL-SDR dongle to pick up ADS-B signals from aircraft transponders within roughly 150km.",
      "Built a live radar-style map plotting aircraft position, altitude, speed, and heading in real time as planes pass overhead.",
      "Added a lookup layer to resolve tail numbers to airline and aircraft type for identified flights.",
      "Logging historical flight paths to start spotting patterns in the traffic over the house.",
    ],
  },
];


const webWork = [
  {
    name: "Built By Fred",
    url: "builtbyfred.ca",
    desc: "Site for a renovation business — built to bring in leads and make the work look as good as it is.",
    status: "live",
    image: fredPreview,
  },
  {
    name: "Studio Bon",
    url: "studiobon.ca",
    desc: "Site for a Pilates studio — clean, calm, and built to get people booking a class.",
    status: "live",
    image: bonPreview,
  },
  {
    name: "———",
    url: "coming soon",
    desc: "Next up: a site for an advertising agency. In progress.",
    status: "wip",
  },
];

const nav = [
  { id: "about", label: "About Me", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "webwork", label: "Web Design", icon: Globe },
];

function WinIcon() {
  return (
    <span className="w-3 h-3 grid grid-cols-2 grid-rows-2 gap-[1px] shrink-0" aria-hidden>
      <span className="bg-[#F25022]" /><span className="bg-[#7FBA00]" />
      <span className="bg-[#00A4EF]" /><span className="bg-[#FFB900]" />
    </span>
  );
}

function TitleBar({ title, onClose }) {
  return (
    <div
      className="flex items-center justify-between pl-2 pr-1 py-1 border-b border-[#0A3E9E]"
      style={{ background: "linear-gradient(180deg,#4FA0F8 0%,#1E62D0 45%,#0B3AA0 100%)" }}
    >
      <span className="flex items-center gap-1.5 font-xp text-[13px] text-white font-bold truncate">
        <span className="w-3 h-3 rounded-sm bg-gradient-to-br from-[#FFE38A] to-[#E0A83A]" />
        {title}
      </span>
      <div className="flex gap-0.5 shrink-0">
        <button className="w-[18px] h-[16px] rounded-[2px] border border-[#0A3E9E] flex items-center justify-center" style={{ background: "linear-gradient(180deg,#6DB3F7,#1E62D0)" }}>
          <Minus size={8} className="text-white" />
        </button>
        <button className="w-[18px] h-[16px] rounded-[2px] border border-[#0A3E9E] flex items-center justify-center" style={{ background: "linear-gradient(180deg,#6DB3F7,#1E62D0)" }}>
          <Square size={7} className="text-white" />
        </button>
        <button
          onClick={onClose}
          disabled={!onClose}
          className="w-[18px] h-[16px] rounded-[2px] border border-[#7A1608] flex items-center justify-center disabled:cursor-default"
          style={{ background: "linear-gradient(180deg,#FB9585,#C4281A)" }}
          aria-label="Close"
        >
          <X size={9} className="text-white" />
        </button>
      </div>
    </div>
  );
}

function Window({ id, title, children, onClose }) {
  return (
    <section id={id} className="rounded-lg overflow-hidden border border-[#0A3E9E]/50 shadow-[0_10px_24px_-6px_rgba(6,30,60,0.5)] scroll-mt-6">
      <TitleBar title={title} onClose={onClose} />
      <div className="bg-white p-5 md:p-6">{children}</div>
    </section>
  );
}

function Callout({ children }) {
  return (
    <div className="bg-[#FFFBD6] border border-[#D9C86A] rounded p-3 text-sm text-[#4A3F0F] leading-relaxed flex gap-2">
      <span>💡</span>
      <span>{children}</span>
    </div>
  );
}

function BrowserPreview({ url, image }) {
  return (
    <div className="border border-[#B9C6DE] rounded overflow-hidden mb-3">
      <div className="flex items-center gap-1.5 bg-[#E4EEFC] border-b border-[#B9C6DE] px-2 py-1">
        <span className="w-2 h-2 rounded-full bg-[#FF6259] border border-black/10" />
        <span className="w-2 h-2 rounded-full bg-[#FFBD2E] border border-black/10" />
        <span className="w-2 h-2 rounded-full bg-[#28C93F] border border-black/10" />
        <span className="font-xp text-[10px] text-[#3A3F55] bg-white rounded px-2 py-0.5 ml-1 truncate flex-1">{url}</span>
      </div>
      <div className="h-24 flex items-center justify-center bg-[#F0F3FA]">
        {image ? (
          <img src={image} alt={`${url} preview`} className="w-full h-full object-cover" />
        ) : (
          <span className="flex items-center gap-1.5 text-[#8B96AC] text-xs">
            <ImageIcon size={14} /> preview coming soon
          </span>
        )}
      </div>
    </div>
  );
}

function useClock() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 30000);
    return () => clearInterval(t);
  }, []);
  return time.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

export default function Portfolio() {
  const [aquariumOpen, setAquariumOpen] = useState(false);
  const clock = useClock();

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(circle at 82% 10%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 13%), linear-gradient(180deg, #1E5FC7 0%, #6FB3EE 46%, #A9D9F5 54%, #8FCB5E 56%, #4C9A3B 100%)",
      }}
    >
      <style>{`
        .font-display { font-family: 'Trebuchet MS', 'Verdana', sans-serif; }
        .font-xp { font-family: 'Tahoma', 'Verdana', 'Segoe UI', sans-serif; }
        a.retrolink { color: #1560D4; text-decoration: underline; text-underline-offset: 2px; font-weight: 600; }
        a.retrolink:visited { color: #6B2FB5; }
        .btn3d { transition: transform 0.1s ease; }
        .btn3d:hover { transform: translateY(-2px); }
        @media (prefers-reduced-motion: reduce) { .btn3d { transition: none; } }

        .layout { display: flex; flex-direction: column; max-width: 1152px; margin: 0 auto; }
        .icon-rail { display: none; }
        .sidebar-col { width: 100%; padding: 24px 16px 16px; box-sizing: border-box; }
        .main-col { width: 100%; padding: 8px 16px 128px; box-sizing: border-box; display: flex; flex-direction: column; gap: 32px; }
        @media (min-width: 768px) {
          .layout { flex-direction: row; align-items: flex-start; }
          .icon-rail {
            display: flex; flex-direction: column; align-items: center; gap: 20px;
            padding: 32px 12px 0; flex: 0 0 auto;
            position: sticky; top: 24px; align-self: flex-start;
          }
          .sidebar-col {
            flex: 0 0 320px; width: 320px;
            position: sticky; top: 24px; align-self: flex-start;
            max-height: calc(100vh - 48px); overflow-y: auto;
            padding: 32px 8px 32px;
          }
          .main-col { flex: 1 1 0%; min-width: 0; padding: 32px 32px 128px; }
        }
      `}</style>

      <div className="layout" style={{ fontFamily: "'Tahoma','Verdana',sans-serif" }}>
        {/* Desktop icon rail */}
        <div className="icon-rail">
          {nav.map((n) => (
            <button key={n.id} onClick={() => scrollToId(n.id)} className="flex flex-col items-center gap-1 w-16 group">
              <span className="w-9 h-9 rounded-md bg-white/25 border border-white/50 flex items-center justify-center shadow-sm group-hover:bg-white/35 transition-colors">
                <n.icon size={16} className="text-white" />
              </span>
              <span className="font-xp text-xs text-white text-center leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">{n.label}</span>
            </button>
          ))}
          <div className="h-3" />
          <button onClick={() => setAquariumOpen(true)} className="flex flex-col items-center gap-1 w-16 group">
            <span className="w-9 h-9 rounded-md bg-white/25 border border-white/50 flex items-center justify-center shadow-sm group-hover:bg-white/35 transition-colors">
              <Fish size={16} className="text-white" />
            </span>
            <span className="font-xp text-xs text-white text-center leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">Aquarium.exe</span>
          </button>
        </div>

        {/* Sidebar */}
        <div className="sidebar-col">
          <Window id="whoami" title="whoami.txt">
            <div className="flex flex-col gap-5">
              <div>
                <h1 className="font-display text-2xl font-bold leading-tight text-[#12203A] mb-2">Sasan Makvandi</h1>
                <div className="h-[3px] bg-[#2E9FB0] w-16 mb-3" />
                <div className="inline-block font-xp text-xs bg-[#D9F3D0] border border-[#7BBF6A] rounded px-2 py-0.5">
                  ● open to work
                </div>
              </div>
              <p className="text-sm text-[#3A3F55] leading-relaxed">
                CS & Math grad doing QA and technical coordination — I test things, break things,
                and increasingly build the things myself. Based in the GTA.
              </p>
              <div className="flex gap-2">
                <a href="mailto:sasan.makvandi@hotmail.com" className="btn3d w-9 h-9 flex items-center justify-center rounded border border-[#8FAFD9]" style={{ background: "linear-gradient(180deg,#FFFFFF,#DCE9FB)" }} aria-label="Email">
                  <Mail size={15} />
                </a>
                <a href="https://www.linkedin.com/in/sasanmak" className="btn3d w-9 h-9 flex items-center justify-center rounded border border-[#8FAFD9]" style={{ background: "linear-gradient(180deg,#FFFFFF,#DCE9FB)" }} aria-label="LinkedIn">
                  <Linkedin size={15} />
                </a>
                <a href="https://github.com/SasanMakvandi" className="btn3d w-9 h-9 flex items-center justify-center rounded border border-[#8FAFD9]" style={{ background: "linear-gradient(180deg,#FFFFFF,#DCE9FB)" }} aria-label="GitHub">
                  <Github size={15} />
                </a>
              </div>
              <nav className="font-xp text-sm leading-tight border-t border-dashed border-[#B9C6DE] pt-3">
                <div className="text-[#6B2FB5] mb-1 text-xs uppercase tracking-wide">Site Map</div>
                <ul className="space-y-1">
                  {nav.map((n) => (
                    <li key={n.id}>
                      <button onClick={() => scrollToId(n.id)} className="retrolink">{n.label}</button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </Window>
        </div>

        {/* Main content */}
        <div className="main-col">
          <Window id="about" title="Credentials.sys — Education / Skills / Certs">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-xp text-xs font-bold text-[#6B2FB5] uppercase tracking-wide mb-1">Education</h3>
                <h4 className="font-display font-bold text-[#12203A]">University of Toronto, Mississauga Campus</h4>
                <p className="text-sm text-[#3A3F55] mb-4">B.S. Major in Mathematics, Minor in Statistics and Computer Science · 2018 – 2023</p>
                <h3 className="font-xp text-xs font-bold text-[#6B2FB5] uppercase tracking-wide mb-1">Certifications</h3>
                {certifications.map((c) => (
                  <p key={c.name} className="text-sm text-[#3A3F55]">{c.name} — {c.year}</p>
                ))}
              </div>
              <div className="space-y-3">
                {Object.entries(skills).map(([group, items]) => (
                  <div key={group}>
                    <div className="font-xp text-xs font-bold text-[#6B2FB5] uppercase tracking-wide">{group}</div>
                    <p className="text-sm text-[#3A3F55]">{items.join(", ")}</p>
                  </div>
                ))}
              </div>
            </div>
          </Window>

          <Window id="experience" title="Experience.log">
            <div className="space-y-6">
              {experience.map((job) => (
                <div key={job.role}>
                  <div className="flex items-baseline justify-between flex-wrap gap-x-3">
                    <h3 className="font-display font-bold text-[#12203A]">{job.role} <span className="font-normal text-[#3A3F55]">— {job.org}</span></h3>
                    <span className="font-xp text-xs text-[#6B2FB5]">{job.location} | {job.period}</span>
                  </div>
                  <ul className="mt-1.5 space-y-1">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="text-sm text-[#3A3F55] leading-relaxed flex gap-2">
                        <span className="text-[#1560D4]">▸</span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Window>

          <Window id="projects" title="Projects">
            <div className="space-y-6">
              {projects.map((p) => (
                <div key={p.name}>
                  <div className="flex items-baseline justify-between flex-wrap gap-x-3">
                    <h3 className="font-display font-bold text-[#12203A] flex items-center gap-1.5">
                      {p.name}
                      {p.repo && (
                        <a href={p.repo} className="text-[#3A3F55] hover:text-[#1560D4]" aria-label={`${p.name} on GitHub`}>
                          <Github size={14} />
                        </a>
                      )}
                    </h3>
                    <span className="font-xp text-xs text-[#6B2FB5]">{p.tag}</span>
                  </div>
                  <ul className="mt-1.5 space-y-1">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="text-sm text-[#3A3F55] leading-relaxed flex gap-2">
                        <span className="text-[#1560D4]">▸</span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Window>

          <Window id="webwork" title="Web Design Work">
            <p className="text-sm text-[#3A3F55] leading-relaxed mb-4">
              Alongside my full-time work, I design and build websites for small businesses —
              from a first conversation about what the business needs, through design and build,
              to a site that's actually hosted and live. If you're looking for a site that
              represents your business well and brings people in the door, that's what I do.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-5">
              {webWork.map((w) => (
                <div
                  key={w.name}
                  className={`border rounded p-4 flex flex-col ${w.status === "wip" ? "border-dashed border-[#B9C6DE] opacity-70" : "border-[#B9C6DE] bg-white"}`}
                >
                  <BrowserPreview url={w.url} image={w.image} />
                  <h3 className="font-display font-bold text-[#12203A] mb-1">{w.name}</h3>
                  {w.status === "live" ? (
                    <a href={`https://${w.url}`} className="retrolink text-sm mb-2 flex items-center gap-1">
                      {w.url} <ExternalLink size={11} />
                    </a>
                  ) : (
                    <span className="font-xp text-xs text-[#3A3F55] mb-2">{w.url}</span>
                  )}
                  <p className="text-sm text-[#3A3F55]">{w.desc}</p>
                </div>
              ))}
            </div>
            <a
              href="mailto:sasan.makvandi@hotmail.com?subject=Website%20project"
              className="btn3d inline-flex items-center gap-2 font-xp text-sm font-bold text-white px-4 py-2 rounded"
              style={{ background: "linear-gradient(180deg,#4FA0F8,#1E62D0)", border: "1px solid #0A3E9E" }}
            >
              Get in touch about a site <ExternalLink size={13} />
            </a>
          </Window>
        </div>
      </div>

      {/* Taskbar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 flex items-center gap-2 px-1.5 py-1 border-t-2 border-[#083A96]"
        style={{ background: "linear-gradient(180deg,#3D82E8 0%,#1E5FC7 12%,#1147A8 100%)", height: 42 }}
      >
        <button className="flex items-center gap-1.5 h-8 pl-2 pr-4 rounded-r-full rounded-l-md font-display font-bold text-sm text-white italic shrink-0" style={{ background: "linear-gradient(180deg,#6ED66E,#1F8A1F)" }}>
          <WinIcon /> start
        </button>
        <div className="w-px h-6 bg-white/25 shrink-0" />
        <div className="flex items-center gap-1.5 overflow-x-auto">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollToId(n.id)}
              className="font-xp text-xs text-white px-2.5 py-1.5 rounded shrink-0"
              style={{ background: "linear-gradient(180deg,#1A50AE,#0E3480)", boxShadow: "inset 0 1px 2px rgba(0,0,0,0.4)" }}
            >
              {n.label}
            </button>
          ))}
        </div>
        <div className="ml-auto font-xp text-xs text-white px-3 py-1 rounded shrink-0" style={{ background: "linear-gradient(180deg,#1A50AE,#0E3480)", boxShadow: "inset 0 1px 2px rgba(0,0,0,0.4)" }}>
          {clock}
        </div>
      </div>

      {/* Aquarium.exe easter egg */}
      {aquariumOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(4, 30, 36, 0.55)" }}
          onClick={() => setAquariumOpen(false)}
        >
          <div className="w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <div className="rounded-lg overflow-hidden border border-[#0A3E9E]/50 shadow-[0_10px_24px_-6px_rgba(6,30,60,0.5)]">
              <TitleBar title="aquarium.exe" onClose={() => setAquariumOpen(false)} />
              <div className="bg-white p-5 md:p-6">
                <img
                  src={aquariumPhoto}
                  alt="Sasan's aquarium"
                  className="w-full rounded border border-[#B9C6DE] mb-3"
                />
                <p className="text-sm text-[#3A3F55] leading-relaxed">
                  This is my genuine aquarium 🐠
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
