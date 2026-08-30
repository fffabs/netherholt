const ventures = [
  {
    name: 'Moumoujus',
    type: 'Independent venture',
    href: 'https://moumoujus.com',
  },
  {
    name: 'Copycat for macOS',
    type: 'Software',
    status: 'Coming soon',
    struck: true,
  },
  { name: 'Future ventures', type: 'In development' },
];

const experience = [
  'Venture building',
  'Product strategy',
  'Brand and identity',
  'Digital products',
  'Go-to-market',
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <div
          className="site-logo"
          role="img"
          aria-label="Netherholt"
        >
          <span className="logo-aura" aria-hidden="true">
            <span className="logo-aura-fill" />
          </span>
          <img
            className="logo-mark"
            src="/netherholt-logo.svg"
            alt=""
            width={136}
            height={86}
            aria-hidden="true"
          />
        </div>
      </header>

      <div className="page-content">
        <section className="content-section" id="about" aria-labelledby="about-title">
          <h2 id="about-title">Netherholt</h2>
          <div className="content-indent prose">
            <p>
              is an experimental holding company. It&apos;s a place for
              incubating ideas at the intersection of physical and digital
              products.
            </p>
            <p>
              Born from a refusal to stand still, it evolves as new ideas take
              shape, find purpose, and become real.
            </p>
          </div>
        </section>

        <section className="content-section" id="ventures" aria-labelledby="ventures-title">
          <h2 id="ventures-title">Ventures</h2>
          <dl className="content-indent listing">
            {ventures.map(({ name, type, status, struck, href }) => (
              <div key={name}>
                <dt>
                  {href ? (
                    <a
                      className="venture-link"
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${name} (opens in a new tab)`}
                    >
                      <span className="venture-name">{name}</span>
                      <span className="external-arrow" aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className={struck ? 'venture-name is-struck' : 'venture-name'}>
                      {name}
                    </span>
                  )}
                  {status && <span className="status-chip">{status}</span>}
                </dt>
                <dd>{type}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="content-section" id="team" aria-labelledby="team-title">
          <h2 id="team-title">Team</h2>
          <div className="content-indent prose">
            <p>
              We are a small team of independent founders working across
              product, brand and technology. Taking ideas from an early thought
              through to a real launch.
            </p>
          </div>
        </section>

        <section className="content-section" id="experience" aria-labelledby="experience-title">
          <h2 id="experience-title">Experience</h2>
          <ul className="content-indent simple-list">
            {experience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="content-section" id="roles" aria-labelledby="roles-title">
          <h2 id="roles-title">Open roles</h2>
          <div className="role-card">
            <p>
              We’re seeking a <span>fractional advisor</span> with experience
              building, operating, or advising skincare brands. The ideal
              partner brings deep expertise in <span>growth strategy, brand
              marketing, and B2B partnerships</span>.
            </p>
            <p>
              This is a <span>remote engagement</span> and is currently open to
              <span> UK-based candidates only</span>.
            </p>
            <p>
              To express interest:{' '}
              <a href="mailto:jobs@netherholt.com">jobs (at) netherholt.com</a>
            </p>
          </div>
        </section>

        <footer className="content-close">
          <span>Made where nobody&apos;s looking.</span>
          <span>&copy; 2026</span>
        </footer>
      </div>

      <nav className="site-nav" aria-label="Site navigation">
        <div className="nav-row nav-primary">
          <a href="#ventures">Ventures</a>
          <a href="#team">Team</a>
          <a href="#experience">Experience</a>
          <a href="#roles">Open roles</a>
        </div>
        <div className="nav-row nav-secondary">
          <div className="nav-ventures">
            <a className="current" href="#top">Netherholt</a>
            <a href="https://moumoujus.com" target="_blank" rel="noreferrer">Moumoujus</a>
            <a
              className="nav-coming-soon"
              href="#ventures"
              data-tooltip="Coming soon"
              aria-label="Copycat for macOS — coming soon"
            >
              Copycat for macOS
            </a>
          </div>
          <a href="mailto:hello@netherholt.com">Contact</a>
        </div>
      </nav>
    </main>
  );
}
