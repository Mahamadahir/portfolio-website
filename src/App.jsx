import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarClock,
  ChevronDown,
  Code2,
  Github,
  Linkedin,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Smartphone,
  X,
} from 'lucide-react';
import { createElement, useState } from 'react';
import profilePhoto from './assets/profile-photo.jpeg';

const profileLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Mahamadahir',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mahamaddahir',
    icon: Linkedin,
  },
];

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Now', href: '#current-work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const emailAddress = 'mrmahamadahir@gmail.com';
const emailHref = `mailto:${emailAddress}?subject=Portfolio enquiry`;
const location = 'London';

const skills = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'Dart', 'Rust'],
  },
  {
    category: 'Backend',
    items: ['Django', 'DRF', 'Spring Boot', 'Axum', 'Celery', 'Redis'],
  },
  {
    category: 'Frontend and mobile',
    items: ['React', 'Vue', 'SvelteKit', 'React Native', 'Flutter', 'Tailwind CSS'],
  },
  {
    category: 'Cloud and data',
    items: ['PostgreSQL', 'MySQL', 'Docker', 'Kubernetes', 'OpenShift', 'Cloudflare'],
  },
];

const highlights = [
  {
    label: 'Focus',
    value: 'Full-stack product engineering',
    icon: Code2,
  },
  {
    label: 'Main project',
    value: 'ChoreSync fairness engine and mobile app',
    icon: Smartphone,
  },
  {
    label: 'Current work',
    value: 'Regional IT technician across 5 GLF Schools sites',
    icon: CalendarClock,
  },
];

const projects = [
  {
    name: 'Airport Taxi Express',
    status: 'Client work',
    started: 'July 2026',
    description:
      'A paid rebuild of a Portland, Maine taxi and airport transfer website, replacing a dated WordPress site with a fast static build, structured data, and automated deployment.',
    details: [
      'Redesigned the site as a responsive static build with a single lightweight stylesheet and no CMS or build step.',
      'Added per-page canonical tags, sitemap, LocalBusiness and TaxiService schema, and location landing pages for high-value destinations and airports.',
      'Tuned performance with responsive srcset images and lazy-loaded below-the-fold assets.',
      'Automated deployment to Bluehost with GitHub Actions, including pre-deploy backups and a manual rollback workflow.',
      'Reworked the rates into confirmed current prices and a pending previous-prices list, with discounted fares shown as strikethrough.',
      'Surfaced fares across the site with hero badges, a homepage fares strip, and prices in the site directory.',
      'Served both the .com root and the .net docroot from one deploy, with documentation-only commits skipped from CI.',
    ],
    stack: ['HTML', 'CSS', 'GitHub Actions', 'SEO'],
    links: [
      { label: 'Live site', href: 'https://maineairporttaxi.net/' },
      { label: 'Repository', href: 'https://github.com/Mahamadahir/MaineAirportTaxi' },
    ],
    accent: 'from-amber-300/25 to-cyan/10',
  },
  {
    name: 'ChoreSync',
    status: 'Featured',
    started: 'April 2025',
    description:
      'A household chore coordination app that assigns tasks fairly, explains each decision, and supports shared households, calendar sync, notifications, and mobile use.',
    details: [
      'Designed and deployed the platform solo on OpenShift with Cloudflare DNS and rolling deployments.',
      'Built the fairness-weighted assignment engine with Celery and Django Channels for real-time WebSocket updates.',
      'Integrated Google Calendar and Microsoft Graph two-way sync with OAuth and delta-link checkpointing.',
      'Added a Gemini assistant with function calling, encrypted OAuth token storage, and a badge system for engagement.',
    ],
    stack: ['Django', 'Vue', 'React Native', 'Kubernetes'],
    links: [
      { label: 'Live app', href: 'https://choresync-app.mahamadahir.com' },
      { label: 'README', href: 'https://github.com/Mahamadahir/ChoreSync#readme' },
    ],
    accent: 'from-aqua/25 to-cyan/10',
  },
  {
    name: 'Hangman',
    status: 'Live',
    started: 'June 2024',
    description:
      'A Java Hangman game with Swing and web clients over one Spring Boot backend, including a server-side word flow and online leaderboard.',
    details: [
      'Kept Swing and web clients on one shared backend so gameplay rules stayed consistent across interfaces.',
      'Stored leaderboard data in PostgreSQL and deployed the service on OpenShift.',
      'Separated the server-side word flow from the clients so new interfaces can reuse the same game logic.',
    ],
    stack: ['Java 21', 'Spring Boot', 'PostgreSQL', 'OpenShift'],
    links: [
      { label: 'Live game', href: 'https://hangman.mahamadahir.com' },
      { label: 'README', href: 'https://github.com/Mahamadahir/Java-hangman#readme' },
    ],
    accent: 'from-cyan/25 to-violet/10',
  },
  {
    name: 'Fitness Tracker',
    status: 'Mobile',
    started: 'August 2025',
    description:
      'A Flutter training companion for progressive overload, workout planning, nutrition logging, and Health Connect or Apple Health insights.',
    details: [
      'Planned around repeat gym workflows: workouts, progression, nutrition, and health-data review.',
      'Used local-first storage choices so the app can stay useful without depending on a hosted backend for core tracking.',
      'Designed the data model around planned sessions, completed sets, and long-term progress trends.',
    ],
    stack: ['Flutter', 'Dart', 'Hive', 'Drift'],
    links: [{ label: 'README', href: 'https://github.com/Mahamadahir/fitness_app#readme' }],
    accent: 'from-violet/25 to-aqua/10',
  },
];

const currentWork = [
  {
    name: 'Pharmacy Revision App',
    started: 'July 2026',
    description:
      'A subscription pharmacy exam revision app with spaced repetition, on web and mobile over one API, targeting a September 2026 launch.',
    stack: ['Backend', 'Web', 'Mobile'],
    href: 'https://github.com/Mahamadahir/UnamedApp#readme',
  },
  {
    name: 'PermissionLedger',
    started: 'June 2026',
    description:
      'A privacy dashboard for tracking consent decisions, app permissions, policy changes, and review history, built for audit and export.',
    stack: ['Rust', 'Axum', 'SvelteKit'],
    href: 'https://github.com/Mahamadahir/permission-ledger#readme',
  },
  {
    name: 'Marking Agent',
    started: 'July 2026',
    description:
      'A human-reviewed exam grading tool that pairs an LLM’s provisional marks with a required human decision before grades are exported.',
    stack: ['Python', 'SQLite', 'CLI'],
    href: 'https://github.com/Mahamadahir/markingAgent#readme',
  },
];

const experience = [
  {
    title: 'Regional IT Technician',
    organisation: 'GLF Schools',
    period: 'Apr 2025 - Present',
    detail:
      'I support 5 school sites, cut a newly acquired site from a 340-ticket backlog to 20 open tickets in 2 months, and removed recurring Google Drive and distribution-list tickets with Python automation and process fixes.',
    details: [
      'Investigated site-wide Wi-Fi failures, traced the root cause to underpowered PoE switch ports, reconfigured the affected ports, and reduced monthly tickets from 190 to 20 within one month.',
      'Automated daily Google Groups mapping and trained the communications admin to self-manage distribution lists.',
      'Used Ethernet passthrough on existing PoE ports to connect desk phones, freeing switch capacity and avoiding an unnecessary hardware purchase.',
      'Planned a classroom move from HDMI and Ethernet to Wi-Fi casting with Wondercast servers, reducing cable faults and installation cost.',
    ],
  },
  {
    title: '2nd Line IT Support Technician',
    organisation: 'St. Francis Xavier College',
    period: 'May - Aug 2024',
    detail:
      'I led a Windows 11 migration across roughly 500 devices with SCCM task sequences, then traced recurring profile corruption to the roaming-profile setup and piloted a OneDrive Known Folder Move and Enterprise State Roaming rollout.',
    details: [
      'Built and deployed SCCM task sequences, then identified devices too old to upgrade so the estate could move to a supported OS cleanly.',
      'Investigated slow logins, storage complaints, and corrupted profile tickets caused by oversized roaming profiles failing to write back to the NAS.',
      'Piloted OneDrive Known Folder Move and Enterprise State Roaming with one department and a tutor group over 3 weeks before rolling it out to staff.',
    ],
  },
];

const education = [
  {
    title: 'BSc Computer Science',
    organisation: 'Queen Mary University of London',
    period: '2022 - 2026',
    detail: 'On track for First Class Honours, with 92% in OOP and 89% in Software Engineering Project.',
    details: [
      'Strongest marks include 92% in Object-Oriented Programming and 89% in Software Engineering Project.',
      'Coursework and project work connect directly to the full-stack systems shown in the projects section.',
    ],
  },
  {
    title: 'A Levels',
    organisation: 'Mathematics, Further Mathematics, Chemistry, Physics',
    period: '2022',
    detail: 'A* in Mathematics, A in Further Mathematics, A in Chemistry, and A in Physics.',
    details: [
      'Grades: Mathematics A*, Further Mathematics A, Chemistry A, Physics A.',
      'The maths-heavy background supports the algorithmic and systems work in my software projects.',
    ],
  },
];

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-mist">
      <SiteHeader />
      <Hero />
      <Highlights />
      <Experience />
      <Projects />
      <CurrentWork />
      <Skills />
      <Contact />
    </main>
  );
}

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-aqua/10 bg-ink-deep/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a className="font-mono text-sm font-semibold text-aqua" href="#top">
          Mahamad Dahir
        </a>
        <div className="hidden items-center gap-7 font-mono text-xs text-slate sm:flex">
          {navLinks.map((link) => (
            <a key={link.label} className="transition hover:text-aqua" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <button
          className="inline-flex min-h-11 min-w-11 items-center justify-center text-aqua sm:hidden"
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {createElement(isMenuOpen ? X : Menu, { className: 'h-6 w-6', 'aria-hidden': true })}
        </button>
      </nav>
      {isMenuOpen && (
        <div className="border-t border-aqua/10 sm:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className="min-h-12 border-b border-white/5 py-3 font-mono text-sm text-slate transition hover:text-aqua"
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(100,255,218,0.14),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(179,136,255,0.14),transparent_26%)]" />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:pb-24">
        <div>
          <p className="mb-5 font-mono text-sm text-aqua">Full-stack developer</p>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
            I build practical software with clear product thinking.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate">
            I am Mahamad Dahir, a developer focused on full-stack web apps, mobile
            clients, cloud deployment, and systems that explain their decisions.
          </p>
          <div className="mt-6">
            <LocationPill />
          </div>
          <div className="mt-9 flex flex-wrap gap-4">
            {profileLinks.map((link) => (
              <IconLink key={link.label} {...link} />
            ))}
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function LocationPill() {
  return (
    <div className="inline-flex min-h-11 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] px-4 py-2 font-mono text-sm text-slate">
      <MapPin className="h-4 w-4 text-aqua" aria-hidden="true" />
      {location}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md rounded-3xl border border-aqua/15 bg-panel/75 p-4 shadow-panel lg:max-w-none">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-deep">
        <img className="aspect-square w-full object-cover" src={profilePhoto} alt="Mahamad Dahir" />
      </div>
      <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-cyan/20 bg-cyan/10 px-5 py-4 shadow-glow sm:block">
        <p className="font-mono text-xs text-cyan">Full-stack developer</p>
      </div>
    </div>
  );
}

function Highlights() {
  return (
    <section className="mx-auto grid max-w-6xl gap-4 px-5 pb-20 sm:px-8 md:grid-cols-3">
      {highlights.map((item) => {
        const Icon = item.icon;

        return (
          <article key={item.label} className="rounded-2xl border border-white/10 bg-panel/65 p-6">
            <Icon className="mb-5 h-6 w-6 text-aqua" aria-hidden="true" />
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate">{item.label}</p>
            <p className="mt-3 text-lg font-semibold leading-7 text-white">{item.value}</p>
          </article>
        );
      })}
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="bg-ink-deep/70 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-mono text-sm text-aqua">Experience and education</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">I solve practical problems across software, infrastructure, and support.</h2>
        </div>
        <div className="space-y-8 text-slate">
          <TimelineList items={experience} />
          <TimelineList items={education} />
          <div className="grid gap-4 pt-5 sm:grid-cols-2">
            <Metric value="500" label="devices migrated to Windows 11" />
            <Metric value="A*AAA" label="A Level grades" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineList({ items }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <ExpandableTimelineItem key={`${item.title}-${item.organisation}`} item={item} />
      ))}
    </div>
  );
}

function ExpandableTimelineItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="rounded-2xl border border-white/10 bg-panel-soft/55 p-5">
      <button className="w-full text-left" type="button" onClick={() => setIsOpen((current) => !current)} aria-expanded={isOpen}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-aqua">{item.organisation}</p>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs text-slate">
            <span>{item.period}</span>
            <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180 text-aqua' : ''}`} aria-hidden="true" />
          </div>
        </div>
        <p className="mt-4 text-lg leading-8 text-slate">{item.detail}</p>
      </button>
      {isOpen && (
        <ul className="mt-5 grid gap-3 border-t border-white/10 pt-5 text-base leading-7 text-slate">
          {item.details.map((detail) => (
            <li key={detail} className="flex gap-3">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

function Metric({ value, label }) {
  return (
    <div className="rounded-2xl bg-panel-soft/60 p-5">
      <p className="text-3xl font-bold text-white">{value}</p>
      <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-slate">{label}</p>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-sm text-aqua">Selected projects</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Work with shipped behaviour.</h2>
        </div>
        <a className="inline-flex items-center gap-2 font-mono text-sm text-cyan transition hover:text-aqua" href="https://github.com/Mahamadahir" target="_blank" rel="noreferrer">
          View GitHub <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-panel/70 transition hover:-translate-y-1 hover:border-aqua/40 hover:shadow-glow">
      <button className="block w-full text-left" type="button" onClick={() => setIsOpen((current) => !current)} aria-expanded={isOpen}>
        <div className={`h-32 bg-gradient-to-br ${project.accent} p-5`}>
          <div className="flex h-full items-end justify-between gap-3 rounded-2xl border border-white/10 bg-ink-deep/45 p-4">
            <BriefcaseBusiness className="h-8 w-8 text-aqua" aria-hidden="true" />
            <div className="flex flex-col items-end gap-2">
              <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-xs text-white">{project.status}</span>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-slate">
                <CalendarClock className="h-3.5 w-3.5 text-aqua" aria-hidden="true" />
                Started {project.started}
              </span>
            </div>
          </div>
        </div>
        <div className="p-6 pb-0">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-bold text-white">{project.name}</h3>
            <ChevronDown className={`mt-1 h-5 w-5 shrink-0 text-slate transition ${isOpen ? 'rotate-180 text-aqua' : ''}`} aria-hidden="true" />
          </div>
          <p className="mt-4 leading-7 text-slate">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full bg-aqua/10 px-3 py-1 font-mono text-xs text-aqua">
                {item}
              </span>
            ))}
          </div>
        </div>
      </button>
      <div className="p-6 pt-0">
        {isOpen && (
          <ul className="mt-5 grid gap-3 border-t border-white/10 pt-5 leading-7 text-slate">
            {project.details.map((detail) => (
              <li key={detail} className="flex gap-3">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6 flex flex-wrap gap-4">
          {project.links.map((link) => (
            <a key={link.label} className="inline-flex items-center gap-2 font-mono text-sm text-cyan transition hover:text-aqua" href={link.href} target="_blank" rel="noreferrer">
              {link.label} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

function CurrentWork() {
  return (
    <section id="current-work" className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="font-mono text-sm text-aqua">Currently working on</p>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Live builds in progress.</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {currentWork.map((item) => (
          <a
            key={item.name}
            className="group flex flex-col rounded-2xl border border-white/10 bg-panel/65 p-6 transition hover:-translate-y-1 hover:border-aqua/40 hover:shadow-glow"
            href={item.href}
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-bold text-white">{item.name}</h3>
              <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-slate transition group-hover:text-aqua" aria-hidden="true" />
            </div>
            <span className="mt-2 inline-flex items-center gap-1.5 font-mono text-xs text-slate">
              <CalendarClock className="h-3.5 w-3.5 text-aqua" aria-hidden="true" />
              Started {item.started}
            </span>
            <p className="mt-4 flex-1 leading-7 text-slate">{item.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.stack.map((tag) => (
                <span key={tag} className="rounded-full bg-aqua/10 px-3 py-1 font-mono text-xs text-aqua">
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-ink-deep/70 py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="font-mono text-sm text-aqua">Skills and tooling</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Tools I use to build and ship software.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((group) => (
            <article key={group.category} className="rounded-2xl border border-white/10 bg-panel/65 p-6">
              <div className="mb-5 flex items-center gap-3">
                <Layers3 className="h-5 w-5 text-aqua" aria-hidden="true" />
                <h3 className="text-xl font-bold text-white">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-aqua/10 px-3 py-1 font-mono text-xs text-aqua">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="rounded-3xl border border-aqua/20 bg-ink-deep p-8 shadow-panel sm:p-10">
        <p className="font-mono text-sm text-aqua">Contact</p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">I am open to software roles and project conversations.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate">
              The quickest way to see how I work is through the code, case studies, and live projects linked here.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <LocationPill />
            <IconLink label="Email" href={emailHref} icon={Mail} />
            {profileLinks.map((link) => (
              <IconLink key={link.label} {...link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IconLink({ label, href, icon }) {
  return (
    <a
      className="inline-flex min-h-12 items-center gap-3 rounded-lg border border-aqua/35 px-5 py-3 font-mono text-sm text-aqua transition hover:bg-aqua/10 focus:outline-none focus:ring-2 focus:ring-aqua"
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
    >
      {createElement(icon, { className: 'h-5 w-5', 'aria-hidden': true })}
      {label}
    </a>
  );
}

export default App;
