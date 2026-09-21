import { useEffect, useRef } from "react";

interface WaveBand {
  baseFactor: number;    // vertical position (0 = top, 1 = bottom)
  amplitude: number;     // crest height in px
  freq: number;          // spatial frequency
  speed: number;         // phase drift (rad/s)
  phase: number;         // initial phase offset
  opacity: number;       // fill opacity
  harmonicMult: number;  // second harmonic freq multiplier
  harmonicRatio: number; // second harmonic amplitude ratio
}

function buildBands(): WaveBand[] {
  // 6 stacked filled bands — back (high, faint) → front (low, denser)
  // baseFactor starts at 0.38 so waves cover the bottom ~62% of the hero
  return [
    { baseFactor: 0.38, amplitude: 20, freq: 0.0016, speed: 0.15, phase: 0.0, opacity: 0.040, harmonicMult: 0.50, harmonicRatio: 0.30 },
    { baseFactor: 0.49, amplitude: 26, freq: 0.0020, speed: 0.19, phase: 1.2, opacity: 0.058, harmonicMult: 0.44, harmonicRatio: 0.32 },
    { baseFactor: 0.60, amplitude: 34, freq: 0.0018, speed: 0.23, phase: 2.5, opacity: 0.075, harmonicMult: 0.55, harmonicRatio: 0.28 },
    { baseFactor: 0.70, amplitude: 38, freq: 0.0022, speed: 0.17, phase: 0.8, opacity: 0.090, harmonicMult: 0.40, harmonicRatio: 0.35 },
    { baseFactor: 0.80, amplitude: 32, freq: 0.0019, speed: 0.26, phase: 3.6, opacity: 0.105, harmonicMult: 0.62, harmonicRatio: 0.25 },
    { baseFactor: 0.89, amplitude: 24, freq: 0.0024, speed: 0.20, phase: 1.8, opacity: 0.118, harmonicMult: 0.48, harmonicRatio: 0.30 },
  ];
}

export default function WaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number | null>(null);
  const bandsRef = useRef<WaveBand[]>(buildBands());
  const activeRef = useRef<boolean>(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ── Resize ───────────────────────────────────────────────
    const setSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    setSize();
    const ro = new ResizeObserver(setSize);
    ro.observe(canvas);

    // ── Pause when off-screen ────────────────────────────────
    const io = new IntersectionObserver(
      ([entry]) => { activeRef.current = entry.isIntersecting; },
      { threshold: 0 }
    );
    io.observe(canvas);

    // ── Draw ─────────────────────────────────────────────────
    const draw = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const t = (ts - startRef.current) / 1000;

      const dpr = window.devicePixelRatio || 1;
      const W = canvas.width / dpr;
      const H = canvas.height / dpr;

      ctx.clearRect(0, 0, W, H);

      if (activeRef.current) {
        const STEP = 3;

        for (const band of bandsRef.current) {
          const yBase = H * band.baseFactor;

          ctx.beginPath();

          for (let x = 0; x <= W; x += STEP) {
            const y =
              yBase
              - Math.sin(x * band.freq + t * band.speed + band.phase) * band.amplitude
              - Math.sin(x * band.freq * band.harmonicMult + t * band.speed * 0.7 + band.phase * 1.3) * band.amplitude * band.harmonicRatio;

            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }

          // Close down to canvas bottom
          ctx.lineTo(W, H + 2);
          ctx.lineTo(0, H + 2);
          ctx.closePath();

          ctx.fillStyle = `rgba(4, 120, 87, ${band.opacity})`;
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <div className="wave-canvas-wrapper">
      <canvas ref={canvasRef} className="wave-canvas" aria-hidden="true" />
    </div>
  );
}
