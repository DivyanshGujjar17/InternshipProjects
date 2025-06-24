import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react"; // 

export default function Header({ onSearch, filter, setFilter }) {
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleSubmit = () => {
    if (input.trim()) onSearch(input.trim());
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-zinc-800 shadow-md">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between gap-4 p-4">
        {/* Logo / Title */}
        <div className="text-2xl font-bold text-gray-800 dark:text-white tracking-wide">
          📘 MyDictionary
        </div>

        {/* Search Form */}
        <div className="flex flex-1 flex-wrap items-center justify-center gap-3 max-w-3xl w-full">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search word..."
            className="flex-grow px-4 py-2 rounded border border-gray-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleSubmit}
            className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Search
          </button>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border rounded dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
          >
            <option value="All">All</option>
            <option value="noun">Noun</option>
            <option value="verb">Verb</option>
            <option value="adjective">Adjective</option>
            <option value="adverb">Adverb</option>
            <option value="conjunction">Conjunction</option>
            <option value="preposition">Preposition</option>
            <option value="interjection">Interjection</option>
          </select>
        </div>

        {/* Toggle Mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white hover:scale-105 transition"
          title="Toggle Theme"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
}