import { useState } from 'react';
import { LOGO_URL } from '../data.js';

// The original BD owl logo. If the image can't load, a plain "BD" box is shown.
export default function Logo({ height = 32 }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="logo-fallback" style={{ width: height, height }}>
        BD
      </span>
    );
  }
  return (
    <img
      src={LOGO_URL}
      alt="BD"
      height={height}
      style={{ height, width: 'auto', display: 'block' }}
      onError={() => setFailed(true)}
    />
  );
}
