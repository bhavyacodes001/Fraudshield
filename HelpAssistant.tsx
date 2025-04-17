import React, { useState } from 'react';

const HelpAssistant = () => {
  const [hasSSL, setHasSSL] = useState('');
  const [score, setScore] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (hasSSL === 'yes') {
      const scoreValue = parseInt(score);
      if (scoreValue > 70) {
        setResult('✅ This website appears safe. You can proceed.');
      } else if (scoreValue >= 60 && scoreValue <= 70) {
        setResult('⚠️ This website might be risky. Proceed at your own risk.');
      } else {
        setResult('🚫 This website is not secure. We do not recommend proceeding.');
      }
    } else {
      setResult('🔒 This website does not have an SSL certificate. It is not secure.');
    }
  };

  return (
    <div className="rounded-xl p-6 shadow-md bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 transition-all duration-300 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🛡️ Help Assistant</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Does the website have an SSL certificate?</label>
          <select
            value={hasSSL}
            onChange={(e) => setHasSSL(e.target.value)}
            required
            className="w-full p-2 rounded bg-neutral-200 text-neutral-900 dark:bg-neutral-1200 dark:text-neutral-100"
          >
            <option value="">-- Select --</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {hasSSL === 'yes' && (
          <div>
            <label className="block font-medium mb-1">Enter website safety score (0–100)</label>
            <input
              type="number"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              min="0"
              max="100"
              required
              className="w-full p-2 rounded bg-neutral-200 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100"
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition"
        >
          Check
        </button>
      </form>

      {result && (
        <div className="mt-4 p-3 rounded-md border border-neutral-400 bg-neutral-200 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100">
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default HelpAssistant;
