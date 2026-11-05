import { useEffect, useState } from 'react';
import LatticeLoader from './LatticeLoader';

/**
 * Full-screen loading overlay shown while the app is initialising.
 * Fades out once `onDone` signals completion, then unmounts itself.
 *
 * Usage: mount it at the app root and pass `onDone` — call that callback
 * when you're ready to reveal the page.
 */
export default function LoadingScreen({ onDone }) {
  const [status, setStatus] = useState('working');
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Signal done immediately — the overlay will animate out then unmount.
    // Replace this with real async logic (fonts, data, etc.) if needed.
    const id = setTimeout(() => {
      setStatus('done');
      // After the "Done" state is shown briefly, fade out and unmount
      setTimeout(() => setVisible(false), 800);
    }, 1200);

    return () => clearTimeout(id);
  }, []);

  // Once invisible, notify parent and stop rendering
  useEffect(() => {
    if (!visible) onDone?.();
  }, [visible, onDone]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] transition-opacity duration-500 ${
        status === 'done' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <LatticeLoader
        status={status}
        label="Loading"
        doneLabel="Done in"
        errorLabel="Failed after"
        pattern="orbit"
        grid={3}
        shape="round"
        color="#a5d8ff"
        doneColor="#22c55e"
        errorColor="#ef4444"
        cellSize={6}
        gap={2}
        fontSize={14}
        step={90}
        idleOpacity={0.15}
        glow={false}
        glowColor=""
        showTimer
      />
    </div>
  );
}

