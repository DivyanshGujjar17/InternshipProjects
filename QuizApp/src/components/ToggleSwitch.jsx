import { useState } from 'react';

function ToggleSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#44477e] shadow-md">
      <span className="text-xs">🌞</span>
      <div
        onClick={() => setEnabled(!enabled)}
        className={`w-10 h-5 rounded-full p-1 cursor-pointer transition-colors duration-300 ${
          enabled ? 'bg-purple-500' : 'bg-gray-300'
        }`}
      >
        <div
          className={`w-3 h-3 bg-white rounded-full transition-transform duration-300 transform ${
            enabled ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </div>
      <span className="text-xs">🌙</span>
    </div>
  );
}
export default ToggleSwitch;