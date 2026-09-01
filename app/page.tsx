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
      <main>
      <div className="site-logo" role="img" aria-label="Netherholt">
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

      <div className="page-content">
        <h1 className="visually-hidden">Netherholt</h1>

        <section className="content-block" aria-label="About">
          <p>
            <span className="wave-underline">Netherholt</span> is an
            experimental holding company. We build products
            that blur the line between physical and digital. Some ideas
            won&apos;t leave. When one keeps returning, we follow it until
            it&apos;s real.
          </p>
        </section>

        <section className="content-block" aria-label="Team">
          <p>
            We&apos;re a small team of independent founders across product,
            brand and technology, taking ideas from first thought to real
            launch.
          </p>
        </section>

        <section className="content-block" aria-labelledby="ventures-title">
          <h2 id="ventures-title">Our Ventures</h2>
          <ul className="venture-list">
            {ventures.map(({ name, type, status, struck, href }) => (
              <li key={name}>
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
                    {name === 'Moumoujus' && (
                      <span className="venture-peek" aria-hidden="true">
                        <i />
                        <i />
                        <i />
                        <i />
                      </span>
                    )}
                  </a>
                ) : (
                  <span className={struck ? 'venture-name is-struck' : 'venture-name'}>
                    {name}
                  </span>
                )}
                {status && <span className="status-chip">{status}</span>}
                <span className="venture-type">{type}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="content-block" aria-labelledby="expertise-title">
          <h2 id="expertise-title">Our Expertise</h2>
          <ul className="expertise-list">
            {expertise.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="content-block" aria-labelledby="roles-title">
          <h2 id="roles-title">Open Roles</h2>
          <p>
            We’re looking for a fractional advisor who has built, operated, or
            advised skincare brands. You know growth strategy, brand
            marketing, and B2B partnerships firsthand.
          </p>
          <p>Remote, currently open to UK-based candidates only.</p>
          <p>
            Sounds like you?{' '}
            <a className="pen-circle" href="mailto:jobs@netherholt.com">
              jobs@netherholt.com
            </a>
          </p>
        </section>

        <footer className="content-close">
          <span>Made where nobody&apos;s looking.</span>
          <span>&copy; 2026</span>
        </footer>
      </div>

      <nav className="site-nav" aria-label="Site navigation">
        <span className="current">Netherholt</span>
        <Link href="/manifesto" transitionTypes={['page-fade']}>
          Manifesto
        </Link>
        <a className="nav-contact" href="mailto:hello@netherholt.com">Contact</a>
      </nav>
      </main>
    </ViewTransition>
  );
}
