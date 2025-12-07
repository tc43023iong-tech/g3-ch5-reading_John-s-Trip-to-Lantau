import React from 'react';
import { SentencePair } from '../types';

interface StoryParagraphProps {
  lines: SentencePair[];
  emoji?: string;
}

export const StoryParagraph: React.FC<StoryParagraphProps> = ({ lines, emoji = "✨" }) => {
  return (
    <div className="relative group">
      {/* Decorative background blob */}
      <div className="absolute -left-2 -top-2 w-12 h-12 bg-yellow-200 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-300"></div>
      
      <div className="relative bg-white p-6 rounded-[2rem] shadow-sm border-2 border-slate-100 hover:border-action-blue hover:shadow-md transition-all duration-300 mb-8">
        <div className="flex gap-5">
          {/* Emoji Column */}
          <div className="flex-shrink-0 flex flex-col items-center pt-2">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-4xl shadow-inner border border-blue-100">
              {emoji}
            </div>
          </div>

          {/* Text Column - List of sentences */}
          <div className="flex-1 space-y-6">
            {lines.map((line, index) => (
              <div key={index} className={`flex flex-col ${index !== lines.length - 1 ? 'border-b border-slate-50 pb-4' : ''}`}>
                <p className="text-2xl font-bold text-slate-700 leading-relaxed tracking-wide">
                  {line.en}
                </p>
                <div className="mt-2">
                  <span className="text-lg text-slate-500 font-medium">({line.cn})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};