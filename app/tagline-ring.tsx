import type { CSSProperties } from 'react';

const TAGLINE = "Made where nobody's looking. ";
const chars = (TAGLINE + TAGLINE).split('');

export function TaglineRing() {
  return (
    <div className="ring-stage" role="img" aria-label="Netherholt. Made where nobody's looking.">
      <div className="ring-scene">
        <video
          className="ring-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/netherholt-logo-loop.mp4?v=3" type="video/mp4" />
        </video>
        <div className="ring-tilt" aria-hidden="true">
          <div className="ring" style={{ '--n': chars.length } as CSSProperties}>
            {chars.map((char, index) => (
              <span key={index} style={{ '--i': index } as CSSProperties}>
                {char === ' ' ? ' ' : char}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
