// src/components/ThemeToggle.jsx
import { useEffect, useState } from 'react';

function getSystemPrefersDark() {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches;
}
function applyTheme(theme) {
  const root = document.documentElement; // toggles .dark at :root
  if (theme === 'dark') root.classList.add('dark');
  else root.classList.remove('dark');
}

export function ThemeToggle({ className = '' }) {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'system';
    const effective = saved === 'system' ? (getSystemPrefersDark() ? 'dark' : 'light') : saved;
    setTheme(saved);
    applyTheme(effective);

    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      if (localStorage.getItem('theme') === 'system') {
        applyTheme(getSystemPrefersDark() ? 'dark' : 'light');
      }
    };
    mql.addEventListener?.('change', handler);
    return () => mql.removeEventListener?.('change', handler);
  }, []);

  const cycle = () => {
    const next = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    const effective = next === 'system' ? (getSystemPrefersDark() ? 'dark' : 'light') : next;
    applyTheme(effective);
  };

  return (
    <button
      onClick={cycle}
      className={`theme-toggle ${className}`}
      aria-label={`Theme: ${theme}`}
      title={`Theme: ${theme}`}
    >
      {theme.toUpperCase()}
    </button>
  );
}