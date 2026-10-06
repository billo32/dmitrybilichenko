import Logo from './components/Logo.jsx';
import Section from './components/Section.jsx';
import { profile, experience, hackathons, projects, links, nav } from './data.js';

export default function App() {
  return (
    <>
      <header className="topbar">
        <div className="wrap topbar-inner">
          <a href="#top" className="brand">
            <Logo height={32} />
            <span className="muted">
              dmitrybilichenko.com<span className="accent"> ~ $</span>
            </span>
          </a>
          <nav className="nav muted" aria-label="Sections">
            {nav.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="wrap">
        <section id="top" className="hero">
          <div>
            <div className="muted">{profile.kicker}</div>
            <h1>{profile.name}</h1>
            <p className="lead">{profile.intro}</p>
          </div>
          <dl className="facts">
            {profile.facts.map(([k, v]) => (
              <div key={k} className="fact">
                <dt className="muted">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
            <div className="fact">
              <dt className="muted">status</dt>
              <dd className="status">
                <span className="dot" />
                {profile.status}
              </dd>
            </div>
          </dl>
        </section>

        <Section id="about" num="01" title="about">
          <div className="about">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Section>

        <Section id="experience" num="02" title="experience">
          <div className="list">
            {experience.map((job) => (
              <div key={job.company} className="job">
                <div className="period muted">{job.period}</div>
                <div className="job-body">
                  <div className="company">{job.company}</div>
                  {job.roles.map((r) => (
                    <div key={r.title} className="role">
                      <span>{r.title}</span>
                      {r.period && <span className="role-period muted">{r.period}</span>}
                    </div>
                  ))}
                  {job.note && <div className="note">{job.note}</div>}
                </div>
                {job.current && <span className="badge">current</span>}
              </div>
            ))}
          </div>
        </Section>

        <Section id="hackathons" num="03" title="hackathons">
          <div className="list">
            {hackathons.map((h) => (
              <div key={h} className="talk">
                {h}
              </div>
            ))}
          </div>
        </Section>

        <Section id="side" num="04" title="side-projects">
          <div className="box">
            {projects.map((p) => (
              <a key={p.name} className="project" href={p.url} target="_blank" rel="noreferrer">
                <span className="pname">{p.name}</span>
                <span className="ptext">{p.text}</span>
                <span className="pkind">{p.kind} ↗</span>
              </a>
            ))}
            <div className="project placeholder">
              <span className="pname">[domain.tld]</span>
              <span className="ptext">[One line about the next project]</span>
            </div>
          </div>
        </Section>

        <Section id="contact" num="05" title="contact">
          <div className="links">
            {links.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label} {l.label.startsWith('[') ? '' : '↗'}
              </a>
            ))}
          </div>
        </Section>
      </main>

      <footer className="wrap footer">© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
