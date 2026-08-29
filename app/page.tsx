const ventures = [
  {
    number: '01',
    name: 'Moumoujus',
    type: 'Independent venture',
    status: 'Active',
  },
  {
    number: '02',
    name: 'Copycat app',
    type: 'Software',
    status: 'Active',
  },
  {
    number: '—',
    name: 'The next thing',
    type: 'Future venture',
    status: 'Open',
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Netherholt, back to top">
          N°
        </a>
        <nav aria-label="Main navigation">
          <a href="#ventures">Ventures</a>
          <a href="#about">About</a>
          <a href="#roles">Roles</a>
        </nav>
        <p className="header-meta">London, UK</p>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-intro reveal">
          <p>Independent holding company</p>
          <p>Building for the long term</p>
        </div>
        <h1 id="hero-title" className="wordmark reveal reveal-delay">
          Netherholt<span>.</span>
        </h1>
        <div className="hero-statement reveal reveal-delay-2">
          <p className="section-label">What we are</p>
          <p>
            A home for considered companies—Moumoujus, Copycat app, and
            whatever comes next.
          </p>
        </div>
      </section>

      <section className="ventures section-pad" id="ventures" aria-labelledby="ventures-title">
        <div className="section-head">
          <p className="section-label">01 / Ventures</p>
          <h2 id="ventures-title">Built here.</h2>
        </div>
        <div className="venture-list">
          {ventures.map((venture) => (
            <article className="venture-row" key={venture.name}>
              <p className="venture-number">{venture.number}</p>
              <h3>{venture.name}</h3>
              <p className="venture-type">{venture.type}</p>
              <p className="venture-status">
                <span aria-hidden="true" />
                {venture.status}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto section-pad" aria-label="Our approach">
        <p className="section-label">Working principle</p>
        <p className="manifesto-copy">
          Start with something useful. Make it distinct. Stay close enough to
          care. Keep going long enough for it to matter.
        </p>
      </section>

      <section className="about section-pad" id="about" aria-labelledby="about-title">
        <div className="section-head about-heading">
          <p className="section-label">02 / About</p>
          <h2 id="about-title">One founder,<br />multiple directions.</h2>
        </div>
        <div className="about-copy">
          <p>
            I’m an independent founder working across product, brand and
            technology. Netherholt gives every new idea room to become a
            focused company, while keeping the long-term thinking in one place.
          </p>
          <p>
            My experience spans taking products from an early thought to a
            real launch: shaping the proposition, building the identity,
            designing the experience and finding the path to market.
          </p>
        </div>
        <div className="experience" aria-label="Areas of experience">
          <p className="section-label">Experience</p>
          <ul>
            <li>Venture building</li>
            <li>Product strategy</li>
            <li>Brand &amp; identity</li>
            <li>Digital products</li>
            <li>Go-to-market</li>
          </ul>
        </div>
      </section>

      <section className="roles section-pad" id="roles" aria-labelledby="roles-title">
        <p className="section-label">03 / Work with us</p>
        <div className="roles-grid">
          <h2 id="roles-title">Good people, before job titles.</h2>
          <div className="roles-copy">
            <p>
              There are no open roles today. But if you make thoughtful work
              and think you should be part of something here, introduce
              yourself.
            </p>
            <a className="text-link" href="mailto:hello@netherholt.com">
              hello@netherholt.com <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p className="footer-wordmark">Netherholt</p>
        <div className="footer-meta">
          <p>© 2026 Netherholt Ltd.</p>
          <p>Independent / London</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
