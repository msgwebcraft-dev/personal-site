import React, { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-4 py-2 rounded-full border-2 border-brandOrange text-brandOrange dark:text-white dark:border-white transition"
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
