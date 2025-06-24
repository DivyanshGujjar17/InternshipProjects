export default function WordResult({ wordData, filter }) {
  const { word, meanings } = wordData;

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(word);
    speechSynthesis.speak(utterance);
  };

  const hindiWord = /^[\u0900-\u097F]/.test(word);

  const filteredMeanings =
    filter === "All"
      ? meanings
      : meanings.filter((m) => m.partOfSpeech.toLowerCase() === filter.toLowerCase());

  return (
    <div className="space-y-6">
      {/* Word title */}
      <div className="flex items-center gap-4">
        <h1 className="text-4xl font-bold uppercase text-blue-600 dark:text-blue-400">
          {word}
        </h1>
        <button
          onClick={speak}
          className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white shadow"
          title="Speak"
        >
          🎤
        </button>
      </div>

      {hindiWord && (
        <p className="text-lg text-gray-600 dark:text-gray-400">
          (Detected Hindi word — definition may vary)
        </p>
      )}

      {/* Meanings */}
      <div className="space-y-4">
        {filteredMeanings.map((meaning, idx) => (
          <div
            key={idx}
            className="border border-gray-200 dark:border-zinc-700 rounded p-4 shadow-sm bg-white dark:bg-zinc-800"
          >
            <h3 className="text-xl font-semibold capitalize mb-2">
              {meaning.partOfSpeech}
            </h3>
            {meaning.definitions.slice(0, 2).map((def, i) => (
              <p key={i} className="text-gray-700 dark:text-gray-300 mb-2">
                • {def.definition}
              </p>
            ))}
            {meaning.synonyms?.length > 0 && (
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium">Synonyms:</span>{" "}
                {meaning.synonyms.slice(0, 5).join(", ")}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}