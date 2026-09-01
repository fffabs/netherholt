import Link from 'next/link';
import { ViewTransition } from 'react';
import { Arrow } from './arrow';
import { TaglineRing } from './tagline-ring';

const ventures = [
  {
    name: 'Moumoujus',
    type: 'Skincare',
    status: 'Live',
    href: 'https://moumoujus.com',
  },
  {
    name: 'Copycat for macOS',
    type: 'Software',
    status: 'Coming soon',
    struck: true,
  },
  {
    name: 'Future ventures',
    type: 'Physical and digital',
    status: 'In development',
  },
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
      <header className="site-header">
        <div className="grid">
          <h1 className="c6">Netherholt</h1>
          <span className="c5 label hide-mobile">Experimental holding company</span>
          <Link className="c3" href="/manifesto" transitionTypes={['page-fade']}>
            Manifesto
            <Arrow />
          </Link>
          <a className="c2 right" href="mailto:hello@netherholt.com">Contact</a>
        </div>
      </header>

      <div className="page">
        <section className="block block-first" aria-label="About">
          <div className="grid">
            <div className="c9 copy">
              <p>
                Netherholt is an experimental holding company. We build
                products that blur the line between physical and digital.
                Some ideas won&apos;t leave. When one keeps returning, we
                follow it until it&apos;s real.
              </p>
              <p>
                We&apos;re a small team of independent founders across
                product, brand and technology, taking ideas from first
                thought to real launch.
              </p>
            </div>
            <div className="c7 hero-logo" role="img" aria-label="Netherholt">
              <video autoPlay loop muted playsInline preload="auto" aria-hidden="true">
                <source src="/netherholt-logo-loop.mp4?v=3" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        <section className="block" aria-labelledby="ventures-title">
          <h2 id="ventures-title" className="block-title">Ventures</h2>
          <div className="grid row head">
            <span className="c6">Venture</span>
            <span className="c5">Type</span>
            <span className="c5">Status</span>
          </div>
          {ventures.map(({ name, type, status, struck, href }) => (
            <div className="grid row" key={name}>
              <span className="c6 name m-full">
                {href ? (
                  <a
                    className="venture-link"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${name} (opens in a new tab)`}
                  >
                    <span className="venture-name">{name}</span>
                    <span className="external-arrow" aria-hidden="true">
                      <Arrow external />
                    </span>
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
              </span>
              <span className="c5 cell label m-half">{type}</span>
              <span className="c5 cell label m-half">{status}</span>
            </div>
          ))}
        </section>

        <section className="block" aria-labelledby="expertise-title">
          <h2 id="expertise-title" className="block-title">Expertise</h2>
          {expertise.map((item, index) => (
            <div className="grid row" key={item}>
              <span className="c1 label">{String(index + 1).padStart(2, '0')}</span>
              <span className="c15 cell">{item}</span>
            </div>
          ))}
        </section>

        <section className="block" aria-labelledby="roles-title">
          <h2 id="roles-title" className="block-title">Open roles</h2>
          <div className="grid row head">
            <span className="c6">Role</span>
            <span className="c5">Location</span>
            <span className="c5">Contact</span>
          </div>
          <div className="grid row">
            <span className="c6 name m-full">Fractional advisor, skincare</span>
            <span className="c5 cell label m-half">Remote, UK-based only</span>
            <span className="c5 m-half">
              <a className="pen-circle" href="mailto:jobs@netherholt.com">
                jobs@netherholt.com
              </a>
            </span>
          </div>
          <div className="grid role-copy">
            <div className="c9 copy">
              <p>
                We’re looking for a fractional advisor who has built,
                operated, or advised skincare brands. You know growth
                strategy, brand marketing, and B2B partnerships firsthand.
              </p>
            </div>
          </div>
        </section>
      </div>

      <footer className="site-footer" id="footer">
        <TaglineRing />
        <div className="grid footer-meta">
          <span className="c6">Made where nobody&apos;s looking.</span>
          <span className="c10 right">&copy; 2026</span>
        </div>
      </footer>
      </main>
    </ViewTransition>
  );
}
