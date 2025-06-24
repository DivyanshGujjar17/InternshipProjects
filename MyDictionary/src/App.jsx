import { useState } from "react";
import Header from "./components/Header";
import WordResult from "./components/WordResult";

export default function App() {
  const [wordData, setWordData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("All");

  const handleSearch = async (term) => {
    if (!term) return;
    setLoading(true);
    setError("");
    setWordData(null);

    try { 
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${term}`);
      const data = await res.json();

      if (Array.isArray(data)) {
        setWordData(data[0]);
      } else {
        setError(data.message || "No definition found.");
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 dark:text-white transition-colors">
      <Header onSearch={handleSearch} filter={filter} setFilter={setFilter} />

      <main className="px-6 py-8">
        {loading && <p className="text-center text-blue-500 text-lg">Loading...</p>}
        {error && <p className="text-center text-red-500 text-lg">{error}</p>}
        {wordData && <WordResult wordData={wordData} filter={filter} />}
      </main>
    </div>
  );
}