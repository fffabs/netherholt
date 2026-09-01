import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { ViewTransition } from 'react';
import { TaglineRing } from '../tagline-ring';

export const metadata: Metadata = {
  title: 'Manifesto — Netherholt',
  description:
    'The principles behind how Netherholt explores, builds and grows new ventures.',
};

const beliefs: { lead: string; text: ReactNode }[] = [
  {
    lead: 'We believe',
    text: 'in ideas that fit no category, and in following them anyway.',
  },
  {
    lead: 'We believe',
    text: 'in making things real, because a prototype proves what a sketch can only claim.',
  },
  {
    lead: 'We believe',
    text: 'the line between physical and digital is at its best when it blurs.',
  },
  {
    lead: 'We believe',
    text: 'in momentum over certainty. In substance over noise. In decades over quarters.',
  },
  {
    lead: 'We believe',
    text: 'in the details nobody will notice. Somebody always notices.',
  },
  {
    lead: 'We believe',
    text: 'some ideas become ventures, and the rest become the way there.',
  },
  {
    lead: 'We believe',
    text: 'in staying small enough to move fast, and long enough to matter.',
  },
  {
    lead: 'And we believe',
    text: (
      <>
        the most interesting things are made{' '}
        <span className="pen-circle">where nobody&apos;s looking</span>.
      </>
    ),
  },
];

export default function Manifesto() {
  return (
    <ViewTransition
      enter={{ 'page-fade': 'page-fade', default: 'none' }}
      exit={{ 'page-fade': 'page-fade', default: 'none' }}
      default="none"
    >
      <main>
      <header className="site-header">
        <div className="grid">
          <Link className="c6 current" href="/" transitionTypes={['page-fade']}>
            Netherholt
          </Link>
          <span className="c5 label hide-mobile">Experimental holding company</span>
          <h1 id="manifesto-title" className="c3">Manifesto</h1>
          <a className="c2 right" href="mailto:hello@netherholt.com">Contact</a>
        </div>
      </header>

      <div className="page">
        <section className="block block-first" aria-labelledby="manifesto-title">
          <div className="grid">
            <div className="c9 copy">
              <p>
                Every venture begins with an idea that{' '}
                <span className="wave-underline">won&apos;t leave</span>. We
                built a whole company on that belief.
              </p>
            </div>
            <div className="c7 hero-logo" role="img" aria-label="Netherholt">
              <video autoPlay loop muted playsInline preload="auto" aria-hidden="true">
                <source src="/netherholt-logo-loop.mp4?v=3" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        <section className="block" aria-label="What we believe">
          {beliefs.map(({ lead, text }, index) => (
            <div className="grid row" key={index}>
              <span className="c3 label m-full">{lead}</span>
              <span className="c13 m-full">{text}</span>
            </div>
          ))}
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
