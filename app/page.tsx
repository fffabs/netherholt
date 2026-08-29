const ventures = [
  ['Moumoujus', 'Independent venture'],
  ['Copycat app', 'Software'],
  ['Future ventures', 'In development'],
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
      <section className="intro" aria-labelledby="site-title">
        <div className="intro-mark">
          <h1 id="site-title">Netherholt</h1>
          <p>Independent holding company</p>
        </div>
      </section>

      <div className="page-content">
        <section className="content-section" id="about" aria-labelledby="about-title">
          <h2 id="about-title">Netherholt</h2>
          <div className="content-indent prose">
            <p>
              is the holding company behind Moumoujus, Copycat app, and future
              ventures.
            </p>
            <p>
              It exists to give each idea room to become a focused company,
              while keeping the long-term thinking in one place.
            </p>
          </div>
        </section>

        <section className="content-section" id="ventures" aria-labelledby="ventures-title">
          <h2 id="ventures-title">Ventures</h2>
          <dl className="content-indent listing">
            {ventures.map(([name, type]) => (
              <div key={name}>
                <dt>{name}</dt>
                <dd>{type}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="content-section" id="founder" aria-labelledby="founder-title">
          <h2 id="founder-title">Founder</h2>
          <div className="content-indent prose">
            <p>
              I’m an independent founder working across product, brand and
              technology—taking ideas from an early thought through to a real
              launch.
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
          <div className="content-indent prose muted-copy">
            <p>
              Nothing open today. If you make thoughtful work and believe you
              should be part of something here, introductions are always
              welcome.
            </p>
            <p>
              <a href="mailto:hello@netherholt.com">hello (at) netherholt.com</a>
            </p>
          </div>
        </section>

        <p className="content-close">More to come.</p>
      </div>

      <nav className="site-nav" aria-label="Site navigation">
        <div className="nav-row nav-primary">
          <a href="#ventures">Ventures</a>
          <a href="#founder">Founder</a>
          <a href="#experience">Experience</a>
          <a href="#roles">Open roles</a>
        </div>
        <div className="nav-row nav-secondary">
          <div className="nav-ventures">
            <a className="current" href="#top">Netherholt</a>
            <a href="#ventures">Moumoujus</a>
            <a href="#ventures">Copycat app</a>
          </div>
          <a href="mailto:hello@netherholt.com">Contact</a>
        </div>
      </nav>
    </main>
  );
}
