// Portfolio — single-scroll. Data-driven projects so copy is easy to refine.
// Voice rules: direct, verified facts only, no em-dashes mid-sentence, no "ready to ramp / familiar with / basic".

const CONTACT = {
  name: "Nicklaus Juncewski",
  role: "Predictive Analytics Analyst",
  tagline: "4 years turning messy data into models, reports, and decisions",
  email: "ndjunce@gmail.com",
  linkedin: "https://linkedin.com/in/nicklaus-juncewski",
  github: "https://github.com/ndjunce",
  location: "Minneapolis\u2013St. Paul",
};

const SKILLS = [
  { group: "Languages & querying", items: ["SQL", "Python"] },
  { group: "Tools", items: ["Alteryx", "Excel (advanced)"] },
  { group: "Analytics", items: ["Predictive modeling", "Data quality", "ETL"] },
  { group: "Delivery", items: ["Reporting", "Dashboards"] },
];

// verified stats only
const STATS = [
  { value: "4 yrs", label: "analytics experience" },
  { value: "27", label: "seasons modeled" },
  { value: "9", label: "leagues unified" },
  { value: "183K+", label: "player-weeks of data" },
];

const PROJECTS = [
  {
    n: "01",
    title: "NFL Evidence Engine",
    status: "in progress",
    oneLiner:
      "Locks fantasy predictions before games, then grades them against expert consensus in public, misses included.",
    problem:
      "Most prediction track records are quietly edited after the fact, so nobody can tell signal from hindsight.",
    approach:
      "Predictions are locked to an append-only ledger before kickoff, then graded against real outcomes and named expert benchmarks once results are known.",
    result:
      "A grading engine that keeps an honest, un-editable record. Currently in active development; the public scorecard is being built.",
    tech: ["Python", "SQLite", "nflverse data"],
    live: null,
    liveLabel: "Scorecard in progress",
    repo: "https://github.com/ndjunce",
  },
  {
    n: "02",
    title: "All-in-One Fantasy Dashboard",
    oneLiner:
      "Nine fantasy leagues across two platforms, unified in one dashboard with cross-league player views and live game tracking.",
    problem:
      "Managing nine leagues across ESPN and Sleeper meant logging into two platforms and juggling separate rosters with no single view.",
    approach:
      "Built a serverless API on Vercel that holds the ESPN credentials server-side and returns only data, then normalized both platforms into one schema. Players are grouped cross-league by game, position, or kickoff window, with the live NFL week single-sourced so the schedule and label always match.",
    result:
      "One dashboard covering all nine leagues, with cross-league grouping, tap-to-expand roster detail, and Final/live/scheduled game status pulled from the NFL scoreboard.",
    tech: ["Next.js", "Serverless (Vercel)", "ESPN API", "Sleeper API"],
    live: "https://fantasy-dashboard-orpin.vercel.app",
    liveLabel: "Live dashboard",
    repo: "https://github.com/ndjunce/fantasy-dashboard",
  },
  {
    n: "03",
    title: "NFL Pick'em Tracker",
    oneLiner:
      "A live weekly pick pool for six players with score integration, a leaderboard, and per-player path-to-win.",
    problem:
      "A yearly pick pool run through spreadsheets and screenshots was tedious to update and easy to get wrong.",
    approach:
      "Built a static site that pulls live scores from ESPN, computes standings, and shows each player's remaining path to win with readable team logos.",
    result:
      "A shared site the group checks each week instead of a spreadsheet, with the leaderboard and picks updating against real game results.",
    tech: ["JavaScript", "ESPN scoreboard API", "GitHub Pages"],
    live: "https://ndjunce.github.io/2026-nfl-picks",
    liveLabel: "Live tracker",
    repo: "https://github.com/ndjunce/2026-nfl-picks",
  },
  {
    n: "04",
    title: "NFL Matrix Projection Model",
    oneLiner:
      "A projection engine built on 27 seasons of play-by-play data, benchmarked honestly against expert consensus.",
    problem:
      "Fantasy projections are easy to build and hard to trust, since most are never measured against a real benchmark.",
    approach:
      "Assembled 27 seasons of nflverse data (over 183,000 player-weeks) into a projection engine, then evaluated it against expert consensus rankings using prior-season-only inputs to avoid leakage.",
    result:
      "A projection model with a documented, honest evaluation against experts, including the categories where it trails, so the numbers can be trusted or challenged.",
    tech: ["Python", "SQLite", "nflverse data", "scikit-learn"],
    live: null,
    liveLabel: "Private repo",
    repo: null,
  },
];

const HOW_I_WORK = [
  {
    title: "Measure before you trust",
    body: "A model or report is only worth as much as its evaluation. I benchmark against real outcomes and prior baselines before I rely on anything.",
  },
  {
    title: "Honest evaluation",
    body: "I report where something falls short, not just where it wins. Known limitations are part of the deliverable.",
  },
  {
    title: "Document decisions",
    body: "Every meaningful change gets logged with what was tried, what happened, and why. The reasoning is recoverable later, not lost.",
  },
];

function Chip({ children, tone = "line" }) {
  const tones = {
    line: "border-line text-mut",
    accent: "border-accent/40 text-accent",
    green: "border-accent2/40 text-accent2",
  };
  return (
    <span className={`inline-block rounded-md border px-2.5 py-1 text-xs font-semibold ${tones[tone]}`}>
      {children}
    </span>
  );
}

function SectionTitle({ kicker, title }) {
  return (
    <div className="mb-10">
      <div className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-accent">{kicker}</div>
      <h2 className="text-2xl font-bold text-txt sm:text-3xl">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-content px-5 sm:px-8">
      {/* NAV */}
      <nav className="flex items-center justify-between py-6">
        <span className="text-sm font-bold tracking-tight text-txt">NJ</span>
        <div className="flex items-center gap-6 text-sm font-semibold text-mut">
          <a href="#projects" className="hover:text-txt">Projects</a>
          <a href="#skills" className="hover:text-txt">Skills</a>
          <a href={`mailto:${CONTACT.email}`} className="hover:text-txt">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero-glow relative -mx-5 px-5 pb-16 pt-14 sm:-mx-8 sm:px-8 sm:pt-20">
        <p className="mb-3 text-sm font-semibold text-mut">{CONTACT.location}</p>
        <h1 className="text-4xl font-extrabold tracking-tight text-txt sm:text-6xl">
          {CONTACT.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-txt sm:text-xl">
          <span className="font-semibold text-accent">{CONTACT.role}</span>
          <span className="text-mut"> — {CONTACT.tagline}.</span>
        </p>
        <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold">
          <a href={`mailto:${CONTACT.email}`} className="rounded-lg bg-accent px-4 py-2.5 text-ink transition hover:opacity-90">
            {CONTACT.email}
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="rounded-lg border border-line px-4 py-2.5 text-txt transition hover:border-mut">
            LinkedIn
          </a>
          <a href={CONTACT.github} target="_blank" rel="noreferrer" className="rounded-lg border border-line px-4 py-2.5 text-txt transition hover:border-mut">
            GitHub
          </a>
        </div>

        {/* by the numbers */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-xl border border-line bg-panel/60 p-4">
              <div className="text-2xl font-extrabold text-txt">{s.value}</div>
              <div className="mt-1 text-xs font-medium text-mut">{s.label}</div>
            </div>
          ))}
        </div>
      </header>

      {/* ABOUT */}
      <section className="py-16" id="about">
        <SectionTitle kicker="About" title="Analyst who ships" />
        <p className="max-w-3xl text-lg leading-relaxed text-txt/90">
          I am a data and analytics professional with four years of experience turning messy, real-world
          data into models, reports, and decisions people act on. I work primarily in SQL, Python, and
          Alteryx, and I care as much about whether a result holds up as I do about producing it. The
          projects below are ones I built and shipped end to end, from data to a working product you can open.
        </p>
        <p className="mt-4 max-w-3xl text-sm text-mut">
          (Placeholder copy — refine in your own voice.)
        </p>
      </section>

      <div className="divider" />

      {/* SKILLS */}
      <section className="py-16" id="skills">
        <SectionTitle kicker="Skills" title="What I work with" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {SKILLS.map((s) => (
            <div key={s.group} className="rounded-xl border border-line bg-panel p-5">
              <div className="mb-3 text-sm font-bold text-txt">{s.group}</div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <Chip key={i}>{i}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* PROJECTS */}
      <section className="py-16" id="projects">
        <SectionTitle kicker="Projects" title="Things I built and shipped" />
        <div className="flex flex-col gap-6">
          {PROJECTS.map((p) => (
            <article key={p.n} className="rounded-2xl border border-line bg-panel p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-mut">{p.n}</span>
                  <h3 className="text-xl font-bold text-txt sm:text-2xl">{p.title}</h3>
                </div>
                {p.status ? <Chip tone="green">{p.status}</Chip> : null}
              </div>

              <p className="mt-3 text-base text-txt/90">{p.oneLiner}</p>

              <dl className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-mut">Problem</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-txt/85">{p.problem}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-mut">Approach</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-txt/85">{p.approach}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-mut">Result</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-txt/85">{p.result}</dd>
                </div>
              </dl>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Chip key={t} tone="accent">{t}</Chip>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
                {p.live ? (
                  <a href={p.live} target="_blank" rel="noreferrer" className="rounded-lg bg-accent px-4 py-2 text-ink transition hover:opacity-90">
                    {p.liveLabel} &rarr;
                  </a>
                ) : (
                  <span className="rounded-lg border border-line px-4 py-2 text-mut">{p.liveLabel}</span>
                )}
                {p.repo ? (
                  <a href={p.repo} target="_blank" rel="noreferrer" className="rounded-lg border border-line px-4 py-2 text-txt transition hover:border-mut">
                    GitHub
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* HOW I WORK */}
      <section className="py-16" id="how-i-work">
        <SectionTitle kicker="How I work" title="Methodology" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {HOW_I_WORK.map((h) => (
            <div key={h.title} className="rounded-xl border border-line bg-panel p-5">
              <div className="mb-2 text-base font-bold text-accent2">{h.title}</div>
              <p className="text-sm leading-relaxed text-txt/85">{h.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* FOOTER */}
      <footer className="py-16" id="contact">
        <SectionTitle kicker="Contact" title="Get in touch" />
        <div className="flex flex-wrap gap-3 text-sm font-semibold">
          <a href={`mailto:${CONTACT.email}`} className="rounded-lg bg-accent px-4 py-2.5 text-ink transition hover:opacity-90">
            {CONTACT.email}
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="rounded-lg border border-line px-4 py-2.5 text-txt transition hover:border-mut">
            LinkedIn
          </a>
          <a href={CONTACT.github} target="_blank" rel="noreferrer" className="rounded-lg border border-line px-4 py-2.5 text-txt transition hover:border-mut">
            GitHub
          </a>
          {/* resume PDF slot — drop resume.pdf into /public and this activates */}
          <a href="/resume.pdf" className="rounded-lg border border-line px-4 py-2.5 text-txt transition hover:border-mut">
            Resume (PDF)
          </a>
        </div>
        <p className="mt-10 text-xs text-mut">
          {CONTACT.name} · {CONTACT.location} · Built with Next.js and Tailwind, deployed on Vercel.
        </p>
      </footer>
    </main>
  );
}
