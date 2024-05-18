'use client'

import Image from "next/image";
import { useState } from "react";
import ChatbotUseCase from "@/domain/use_case/ChatbotUseCase"; // Adjust the path as needed

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [sessionTitle, setSessionTitle] = useState("");
  const [history, setHistory] = useState([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = async () => {
    const chatbotUseCase = new ChatbotUseCase();
    const result = await chatbotUseCase.sessionCreate(userInput, 1, 1, new Date()); // Adjust userId and teamCode as needed
    setResponse(result.payload);
    
    const sessionData = await chatbotUseCase.loadSession(1, result.payload.sessionId);
    setSessionTitle(sessionData.title);
    setHistory(sessionData.history);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Input field and submit button */}
      <div className="w-full max-w-md mx-auto mt-8">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Enter your question"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          onClick={handleSubmit}
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
      </div>

      {/* Display response */}
      {response && (
        <div className="w-full max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded">
          <h3 className="text-xl font-semibold">Response:</h3>
          <p>{response}</p>
        </div>
      )}

      {/* Display session title and history */}
      {sessionTitle && (
        <div className="w-full max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded">
          <h3 className="text-xl font-semibold">{sessionTitle}</h3>
          <div>
            {history.map((message, index) => (
              <div key={index} className="mb-4">
                <p><strong>{message.role === 'user' ? 'User' : 'Bot'}:</strong> {message.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
