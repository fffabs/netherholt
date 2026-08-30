import type { Metadata } from 'next';
import Link from 'next/link';
import { ViewTransition } from 'react';

export const metadata: Metadata = {
  title: 'Manifesto — Netherholt',
  description:
    'The principles behind how Netherholt explores, builds and grows new ventures.',
};

const principles = [
  {
    title: 'Stay curious',
    copy: 'Follow the questions that keep returning. The unfamiliar is often where the useful work begins.',
  },
  {
    title: 'Make things real',
    copy: 'Ideas gain meaning through contact with the world. We prototype, test and learn by making.',
  },
  {
    title: 'Think beyond the launch',
    copy: 'Build with enough care to last, and enough openness to change when the work demands it.',
  },
];

export default function Manifesto() {
  return (
    <ViewTransition
      enter={{ 'page-fade': 'page-fade', default: 'none' }}
      exit={{ 'page-fade': 'page-fade', default: 'none' }}
      default="none"
    >
      <main id="top">
      <header className="site-header">
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
      </header>

      <div className="page-content manifesto-content">
        <section className="content-section" id="manifesto" aria-labelledby="manifesto-title">
          <h1 id="manifesto-title">Manifesto</h1>
          <div className="content-indent prose manifesto-intro">
            <p>
              We make room for ideas that do not yet have a category.
            </p>
            <p>
              Netherholt exists to explore the space between physical and
              digital products—turning curiosity into useful, distinctive and
              enduring ventures.
            </p>
          </div>
        </section>

        <section className="content-section" id="principles" aria-labelledby="principles-title">
          <h2 id="principles-title">Principles</h2>
          <div className="content-indent manifesto-principles">
            {principles.map(({ title, copy }) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="direction" aria-labelledby="direction-title">
          <h2 id="direction-title">Direction</h2>
          <div className="content-indent prose">
            <p>
              We choose momentum over certainty, substance over noise and
              long-term value over short-term attention.
            </p>
            <p>The form may change. The intent remains.</p>
          </div>
        </section>

        <footer className="content-close">
          <span>Made where nobody&apos;s looking.</span>
          <span>&copy; 2026</span>
        </footer>
      </div>

      <nav className="site-nav" aria-label="Site navigation">
        <div className="nav-row nav-primary">
          <a href="#manifesto">Manifesto</a>
          <a href="#principles">Principles</a>
          <a href="#direction">Direction</a>
        </div>
        <div className="nav-row nav-secondary">
          <div className="nav-ventures">
            <Link href="/" transitionTypes={['page-fade']}>
              Netherholt
            </Link>
            <a className="current" href="#top">Manifesto</a>
          </div>
          <a href="mailto:hello@netherholt.com">Contact</a>
        </div>
      </nav>
      </main>
    </ViewTransition>
  );
}
