import { useCallback, useState, useEffect } from 'react';

function App() {
  const [length, setLength] = useState(20);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = useCallback(() => {
    let chars = '';
    if (includeUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) chars += '0123456789';
    if (includeSymbols) chars += '!@#$%^&*(){}[]<>~`';

    let generated = '';
    for (let i = 0; i < length; i++) {
      const rand = Math.floor(Math.random() * chars.length);
      generated += chars[rand];
    }

    setPassword(generated);
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
  <div className="w-screen h-screen flex items-center justify-center bg-green-500 px-2">
    <div className="bg-gray-900 text-white p-4 sm:p-5 rounded-xl shadow-xl w-full max-w-sm text-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-sm font-medium whitespace-nowrap">
          &gt; Generate Secure Password
        </h1>
        <button className="text-yellow-400 text-base">🌙</button>
      </div>

      {/* Password Display */}
      <div className="relative mb-4">
        <input
          type="text"
          readOnly
          value={password}
          className="w-full px-3 py-2 bg-gray-800 text-white rounded-md border border-gray-700 pr-10 text-sm"
        />
        <button
          onClick={copyToClipboard}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-gray-600 p-1.5 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75M14.25 6.75h6a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-6"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v5.25a.75.75 0 00.75.75H18"
            />
          </svg>
        </button>
      </div>

      <hr className="border-gray-700 mb-4" />

      {/* Customize Section */}
      <p className="mb-2 font-medium">Customize Options</p>
      <div className="border border-gray-700 p-3 rounded-lg">
        <div className="flex flex-col sm:flex-row justify-between gap-3">
          {/* Checkboxes */}
          <div className="flex flex-col gap-2">
            {[
              ['Uppercase', includeUppercase, setIncludeUppercase],
              ['Lowercase', includeLowercase, setIncludeLowercase],
              ['Numbers', includeNumbers, setIncludeNumbers],
              ['Symbols', includeSymbols, setIncludeSymbols],
            ].map(([label, value, setter], i) => (
              <label key={i} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() => setter(!value)}
                  className="accent-green-500"
                />
                {label}
              </label>
            ))}
          </div>

          {/* Length Control */}
          <div className="flex flex-col items-center sm:items-end gap-2">
            <div className="text-right">
              <label className="font-medium">PasswordLength:</label>
              <input
                type="number"
                value={length}
                min={6}
                max={30}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-14 text-center bg-gray-800 border border-gray-600 rounded-md px-2 py-0.5 mt-1 text-sm"
              />
            </div>
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full sm:w-36 accent-green-500"
            />
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <button
        onClick={generatePassword}
        className="mt-4 w-full bg-green-500 text-black py-2 rounded-md font-bold hover:bg-green-400 transition"
      >
        Generate
      </button>

      {/* Footer */}
      <p className="text-center text-xs mt-4 text-gray-400">
        Made with <span className="text-red-500">❤</span> by{' '}
        <span className="text-green-400">DivyanshGujjar</span>
      </p>
    </div>
  </div>

  );

    
}

export default App;