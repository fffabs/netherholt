import type { Metadata } from 'next';
import Link from 'next/link';
import { ViewTransition } from 'react';

export const metadata: Metadata = {
  title: 'Manifesto — Netherholt',
  description:
    'The principles behind how Netherholt explores, builds and grows new ventures.',
};

export default function Manifesto() {
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
        <section className="content-block" aria-labelledby="manifesto-title">
          <h1 id="manifesto-title">Manifesto</h1>
          <div className="prose">
            <p>
              Every venture begins with an idea that won&apos;t leave. We
              built a whole company on that belief.
            </p>
            <p>
              We believe in ideas that fit no category, and in following
              them anyway.
            </p>
            <p>
              We believe in making things real, because a prototype proves
              what a sketch can only claim.
            </p>
            <p>
              We believe the line between physical and digital is at its
              best when it blurs.
            </p>
            <p>
              We believe in momentum over certainty. In substance over
              noise. In decades over quarters.
            </p>
            <p>
              We believe in the details nobody will notice. Somebody always
              notices.
            </p>
            <p>
              We believe some ideas become ventures, and the rest become the
              way there.
            </p>
            <p>
              We believe in staying small enough to move fast, and long
              enough to matter.
            </p>
            <p>
              And we believe the most interesting things are made where
              nobody&apos;s looking.
            </p>
          </div>
        </section>

        <footer className="content-close">
          <span>Made where nobody&apos;s looking.</span>
          <span>&copy; 2026</span>
        </footer>
      </div>

      <nav className="site-nav" aria-label="Site navigation">
        <Link href="/" transitionTypes={['page-fade']}>
          Netherholt
        </Link>
        <span className="current">Manifesto</span>
        <a className="nav-contact" href="mailto:hello@netherholt.com">Contact</a>
      </nav>
      </main>
    </ViewTransition>
  );
}
