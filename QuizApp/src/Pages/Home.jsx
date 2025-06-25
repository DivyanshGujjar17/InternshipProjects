import ToggleSwitch from '../components/ToggleSwitch';

const topics = [
  { name: 'HTML', icon: '🔤' },
  { name: 'CSS', icon: '🎨' },
  { name: 'Javascript', icon: '📜' },
  { name: 'Accessibility', icon: '♿' },
];

function Home({ onSelectTopic }) {
  return (
   <div className="relative flex flex-col md:flex-row justify-between items-start min-h-screen px-10 py-20 gap-6">
      <div className="flex flex-col gap-4 md:w-1/2">
        <h1 className="text-3xl font-light">
          Welcome to the <span className="font-bold">Frontend Quiz!</span>
        </h1>
        <p className="text-gray-400">Pick a subject to get started.</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 md:w-1/2 items-end">
        <div className="self-end">
          <ToggleSwitch />
        </div>
        <div className="flex flex-col gap-3 w-full max-w-sm">
          {topics.map((topic) => (
            <button
              key={topic.name}
              onClick={() => onSelectTopic(topic.name.toLowerCase())}
              className="flex items-center gap-4 p-4 rounded-lg bg-[#3b3f7a] hover:bg-[#5054a5] transition"
            >
              <span className="text-xl">{topic.icon}</span>
              <span className="text-lg">{topic.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;