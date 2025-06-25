import { useState } from 'react';
import { questions } from '../data/questions';

function Quiz({ topic, goHome }) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const current = questions[topic][index];

  const handleAnswer = (option) => {
    if (option === current.answer) {
      setScore(score + 1);
    }
    const nextIndex = index + 1;
    if (nextIndex < questions[topic].length) {
      setIndex(nextIndex);
    } else {
      setShowResult(true);
    }
  };

  const restart = () => {
    setIndex(0);
    setScore(0);
    setShowResult(false);
    goHome();
  };

  return (
    <div className="min-h-screen px-8 py-12 flex flex-col items-start gap-8">
      {showResult ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-lg">You scored {score} out of {questions[topic].length}</p>
          <button
            onClick={restart}
            className="mt-6 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="w-full max-w-xl">
          <h2 className="text-xl mb-4">Question {index + 1} of {questions[topic].length}</h2>
          <p className="mb-6 text-lg font-medium">{current.question}</p>
          <div className="flex flex-col gap-4">
            {current.options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                className="w-full text-left bg-[#3b3f7a] hover:bg-[#5054a5] p-3 rounded"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
