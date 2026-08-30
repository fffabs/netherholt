import Link from 'next/link';
import { ViewTransition } from 'react';

const ventures = [
  {
    name: 'Moumoujus',
    type: 'Skincare',
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

const expertise = [
  'Venture building, zero to launch',
  'Product strategy and design',
  'Brand and identity',
  'Physical and digital product development',
  'Growth and go-to-market',
];

export default function Home() {
  return (
    <ViewTransition
      enter={{ 'page-fade': 'page-fade', default: 'none' }}
      exit={{ 'page-fade': 'page-fade', default: 'none' }}
      default="none"
    >
      <main id="top">
      <header className="site-header">
        <div
          className="site-logo"
          role="img"
          aria-label="Netherholt"
        >
          <video
            className="logo-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src="/netherholt-logo-loop.mp4?v=3" type="video/mp4" />
          </video>
        </div>
      </header>

      <div className="page-content">
        <section className="content-section" id="about" aria-labelledby="about-title">
          <h2 id="about-title">Netherholt</h2>
          <div className="content-indent prose manifesto-intro">
            <p>
              is an experimental holding company. We build products that blur
              the line between physical and digital.
            </p>
            <p>
              Some ideas won&apos;t leave. When one keeps returning, we follow
              it until it&apos;s real.
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
                      <span className="external-arrow" aria-hidden="true">{'↗︎'}</span>
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
              We&apos;re a small team of independent founders across product,
              brand and technology, taking ideas from first thought to real
              launch.
            </p>
          </div>
        </section>

        <section className="content-section" id="expertise" aria-labelledby="expertise-title">
          <h2 id="expertise-title">Expertise</h2>
          <ul className="content-indent simple-list">
            {expertise.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="content-section" id="roles" aria-labelledby="roles-title">
          <h2 id="roles-title">Open roles</h2>
          <div className="role-card">
            <p>
              We’re looking for a <span>fractional advisor</span> who has
              built, operated, or advised skincare brands. You know{' '}
              <span>growth strategy, brand marketing, and B2B partnerships</span>{' '}
              firsthand.
            </p>
            <p>
              <span>Remote</span>, currently open to{' '}
              <span>UK-based candidates only</span>.
            </p>
            <p>
              Sounds like you?{' '}
              <a href="mailto:jobs@netherholt.com">jobs@netherholt.com</a>
            </p>
          </div>
        </section>

        <footer className="content-close">
          <nav className="footer-nav" aria-label="Site navigation">
            <div className="footer-pages">
              <span className="current">Netherholt</span>
              <Link href="/manifesto" transitionTypes={['page-fade']}>
                Manifesto
              </Link>
            </div>
            <a href="mailto:hello@netherholt.com">Contact</a>
          </nav>
          <div className="content-close-meta">
            <span>Made where nobody&apos;s looking.</span>
            <span>&copy; 2026</span>
          </div>
        </footer>
      </div>
      </main>
    </ViewTransition>
  );
}
