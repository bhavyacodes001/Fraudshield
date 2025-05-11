import React, { useState } from 'react';

const HelpAssistant = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('http://13.232.134.130:5000/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "message": message }),
      });
      console.log("Request sent");
    
      const data = await res.json();
      setResponse(data.message); // Backend returns "message" key in response
    } catch (error) {
      console.error('Error:', error);
      setResponse('Sorry, there was an error connecting to the server. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="mb-4">
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your question here..."
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 disabled:bg-blue-300"
        >
          {isLoading ? 'Loading...' : 'Get Help'}
        </button>
      </form>

      {response && (
        <div className="mt-6 max-w-2xl mx-auto">
          <h3 className="font-semibold mb-2">Response:</h3>
          <div className="text-foreground">
            {response}
          </div>
        </div>
      )}
    </>
  );
};

export default HelpAssistant;