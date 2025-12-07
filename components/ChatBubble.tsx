import React from 'react';
import { ChatMessage } from '../types';

interface ChatBubbleProps {
  message: ChatMessage;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isDad = message.sender === 'Dad';
  
  return (
    <div className={`flex flex-col mb-6 ${isDad ? 'items-start' : 'items-end'}`}>
       <span className="text-sm text-slate-400 mb-1 px-2 font-bold">
        {isDad ? 'Dad (爸爸)' : 'John (約翰)'}
      </span>
      <div 
        className={`max-w-[85%] p-5 rounded-3xl shadow-sm relative ${
          isDad 
            ? 'bg-white text-slate-800 rounded-tl-none border border-slate-200' 
            : 'bg-action-blue text-white rounded-tr-none'
        }`}
      >
        <p className="font-bold text-xl mb-2 leading-snug">{message.en}</p>
        <p className={`text-lg ${isDad ? 'text-slate-500' : 'text-blue-100'} font-medium`}>({message.cn})</p>
      </div>
    </div>
  );
};