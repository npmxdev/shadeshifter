import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
      <div className="w-10 h-5 bg-gray-300 rounded-full p-1 flex items-center">
        <div
          className={`w-4 h-4 bg-white rounded-full transition-transform ${
            darkMode ? "translate-x-5 bg-gray-800" : "translate-x-0"
          }`}
        ></div>
      </div>
      <span className="ml-2 text-sm">{darkMode ? "Dark" : "Light"}</span>
    </label>
  );
};

export default DarkModeToggle;
