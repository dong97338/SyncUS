'use client'

import React, { useState } from 'react';
import ChatbotUseCase from '@/domain/use_case/ChatbotUseCase'; // Adjust the import path

interface Message {
  role: 'user' | 'bot';
  content: string;
}

interface Session {
  id: string;
  userKey: number;
  teamCode: number;
  history: Message[];
}

interface ChatInterfaceProps {
  session: Session;
}

function ChatInterface({ session }: ChatInterfaceProps) {
  const [input, setInput] = useState([]);
  const [history, setHistory] = useState(session ? session.history : []);

  const handleSend = async () => {
    const chatbotUseCase = new ChatbotUseCase();
    const response = await chatbotUseCase.userQuery(input, session.userKey, session.teamCode, new Date());
    setHistory([...input, { role: 'bot', content: response.payload }]);
  };

  return (
    <div>
      <div>
        {history.map((item, index) => (
          <div key={index} className={`message ${item.role}`}>
            {item.content}
          </div>
        ))}
      </div>
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default ChatInterface;
