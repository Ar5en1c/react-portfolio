import { useEffect, useRef, useState } from 'react';
import { FiPause, FiPlay } from 'react-icons/fi';

// A projected particle sphere uses Canvas 2D; no WebGL context is needed.
export default function OrbitalScene() {
  const canvasRef = useRef(null);
  const [mode, setMode] = useState('orbit');
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return undefined;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointer = { x: 0, y: 0 };
    let width = 0, height = 0, frame = 0, angle = 0, previousTime = 0;
    let visible = true;
    const particles = Array.from({ length: 1350 }, (_, i) => {
      const y = 1 - (i / 1349) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = i * Math.PI * (3 - Math.sqrt(5));
      return [Math.cos(theta) * radius, y, Math.sin(theta) * radius];
    });
    const draw = () => {
      context.clearRect(0, 0, width, height);
      const radius = Math.min(width, height) * .30;
      const centerX = width * .5, centerY = height * .48;
      const turn = angle + pointer.x * .18;
      const tilt = -.25 + pointer.y * .12;
      // A deterministic star field keeps the scene stable between renders.
      for (let i = 0; i < 65; i++) {
        const x = ((Math.sin(i * 127.1) * 43758.5) % 1 + 1) % 1;
        const y = ((Math.cos(i * 311.7) * 19341.3) % 1 + 1) % 1;
        context.fillStyle = `rgba(222,229,211,${.1 + (i % 4) * .08})`;
        context.fillRect(x * width, y * height, i % 9 === 0 ? 2 : 1, 1);
      }
      const halo = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius * 1.7);
      halo.addColorStop(0, mode === 'orbit' ? '#b8d96614' : '#aca6ef18');
      halo.addColorStop(1, '#11130e00');
      context.fillStyle = halo;
      context.fillRect(0, 0, width, height);
      const project = (x, y, z) => {
        const rx = x * Math.cos(turn) - z * Math.sin(turn);
        const rz = x * Math.sin(turn) + z * Math.cos(turn);
        return [centerX + rx * radius, centerY + (y * Math.cos(tilt) - rz * Math.sin(tilt)) * radius, y * Math.sin(tilt) + rz * Math.cos(tilt)];
      };
      const points = particles.map(([x, y, z]) => project(x, y, z));
      if (mode === 'network') {
        context.lineWidth = .45;
        for (let i = 0; i < points.length - 35; i += 3) {
          const a = points[i], b = points[i + 34];
          if (a[2] > .05 && b[2] > .05) {
            context.strokeStyle = `rgba(180,174,240,${a[2] * .18})`;
            context.beginPath(); context.moveTo(a[0], a[1]); context.lineTo(b[0], b[1]); context.stroke();
          }
        }
      }
      for (const [x, y, z] of points) {
        const opacity = .12 + ((z + 1) / 2) * .75;
        context.fillStyle = mode === 'orbit' ? `rgba(209,233,163,${opacity})` : `rgba(193,185,255,${opacity})`;
        context.beginPath(); context.arc(x, y, z > .5 ? 1.3 : .8, 0, Math.PI * 2); context.fill();
      }
      for (let ring = 0; ring < 3; ring++) {
        context.save(); context.translate(centerX, centerY); context.rotate(-.47 + ring * .07);
        context.strokeStyle = `rgba(219,231,185,${.23 - ring * .065})`;
        context.lineWidth = .75;
        context.beginPath(); context.ellipse(0, 0, radius * (1.55 + ring * .08), radius * (.35 + ring * .04), 0, 0, Math.PI * 2); context.stroke();
        if (ring === 0) {
          const phase = angle * 1.5;
          context.fillStyle = '#ddf6a1'; context.shadowColor = '#ddf6a1'; context.shadowBlur = 13;
          context.beginPath(); context.arc(Math.cos(phase) * radius * 1.55, Math.sin(phase) * radius * .35, 3, 0, Math.PI * 2); context.fill();
        }
        context.restore();
      }
    };
    const tick = time => {
      if (visible && !document.hidden) {
        angle += Math.min((time - previousTime) / 1000 || 0, .04) * .10;
        draw();
      }
      previousTime = time;
      frame = requestAnimationFrame(tick);
    };
    const syncAnimation = () => {
      cancelAnimationFrame(frame);
      draw();
      if (!paused && !motion.matches) { previousTime = 0; frame = requestAnimationFrame(tick); }
    };
    const resize = new ResizeObserver(entries => {
      const bounds = entries[0].contentRect;
      width = bounds.width; height = bounds.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * ratio; canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0); draw();
    });
    const intersection = new IntersectionObserver(entries => {visible = entries[0].isIntersecting;});
    resize.observe(canvas); intersection.observe(canvas);
    const move = event => {
      if (motion.matches || paused) return;
      const bounds = canvas.getBoundingClientRect();
      pointer.x = (event.clientX - bounds.left) / bounds.width - .5;
      pointer.y = (event.clientY - bounds.top) / bounds.height - .5;
    };
    canvas.addEventListener('pointermove', move);
    motion.addEventListener('change', syncAnimation);
    syncAnimation();
    return () => {cancelAnimationFrame(frame); resize.disconnect(); intersection.disconnect(); canvas.removeEventListener('pointermove', move); motion.removeEventListener('change', syncAnimation);};
  }, [mode, paused]);
  return <div className={`scene scene-${mode}`}>
    <div className="scene-top"><span><i/> SYSTEMS IN ORBIT</span><span>FIG. 001</span></div>
    <canvas ref={canvasRef} aria-hidden="true"/>
    <div className="scene-coordinate" aria-hidden="true">41°52′41″N<br/>87°37′47″W</div>
    <div className="scene-caption"><span>{mode === 'orbit' ? 'Many layers. One experience.' : 'Intelligence. Interconnected.'}</span><span>AN EXPLORATION IN PARTICLES</span></div>
    <div className="scene-controls" role="group" aria-label="Interactive artwork controls">
      <button aria-pressed={mode === 'orbit'} onClick={() => setMode('orbit')}>Orbit</button>
      <button aria-pressed={mode === 'network'} onClick={() => setMode('network')}>Neural</button>
      <button className="scene-pause" aria-label={paused ? 'Play artwork animation' : 'Pause artwork animation'} onClick={() => setPaused(!paused)}>{paused ? <FiPlay/> : <FiPause/>}</button>
    </div>
  </div>;
}
