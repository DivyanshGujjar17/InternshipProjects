import { useState } from 'react';
import './index.css'
import Home from './Pages/Home';

import Quiz from './pages/Quiz';

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div className="font-sans w-screen h-screen bg-[#2d2f59] text-white">
      {selectedTopic ? (
        <Quiz topic={selectedTopic} goHome={() => setSelectedTopic(null)} />
      ) : (
        <Home onSelectTopic={setSelectedTopic} />
      )}
    </div>
  );
}

export default App;