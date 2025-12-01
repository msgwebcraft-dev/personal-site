import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 text-white py-4 text-center">
      © {new Date().getFullYear()} Mmeli Gabriel Dyantyi
    </footer>
  );
}
