import React, { useState } from 'react';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import { Question } from '../types';

interface QuizCardProps {
  question: Question;
  isCorrect?: boolean | null;
  onAnswer: (questionId: number, selectedOptionId: string) => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({ question, isCorrect, onAnswer }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = (optionId: string) => {
    setSelectedId(optionId);
    onAnswer(question.id, optionId);
  };

  return (
    <div className="bg-white rounded-3xl p-8 mb-10 shadow-lg border-2 border-slate-100 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-teal-400 to-action-blue"></div>
      
      {/* Question Header */}
      <div className="flex gap-4 mb-8">
        <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center font-bold text-2xl flex-shrink-0 mt-1">
          {question.id}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-2 leading-snug">{question.questionEn}</h3>
          <p className="text-xl text-slate-500 font-medium">({question.questionCn})</p>
        </div>
      </div>

      {/* Options */}
      <div className="space-y-4">
        {question.options.map((option) => {
          const isSelected = selectedId === option.id;
          // Determine styling based on selection state
          let baseStyle = "w-full p-5 rounded-2xl border-2 text-left transition-all duration-200 flex items-center justify-between group";
          let colorStyle = "border-slate-200 hover:border-action-blue hover:bg-sky-50 bg-slate-50";
          let icon = <div className="w-8 h-8 rounded-full border-2 border-slate-300 group-hover:border-action-blue"></div>;

          if (isSelected) {
            if (isCorrect) {
              colorStyle = "border-green-500 bg-green-50 text-green-900";
              icon = <CheckCircle2 className="w-8 h-8 text-green-500 fill-green-100" />;
            } else if (isCorrect === false) {
              colorStyle = "border-red-400 bg-red-50 text-red-900";
              icon = <XCircle className="w-8 h-8 text-red-400 fill-red-100" />;
            } else {
               // Waiting for validation
               colorStyle = "border-action-blue bg-sky-50";
            }
          }

          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              disabled={isCorrect === true} // Disable changing after correct answer
              className={`${baseStyle} ${colorStyle}`}
            >
              <div className="flex-1 pr-4">
                <span className="font-bold mr-3 text-2xl align-middle">{option.id}.</span>
                <span className="font-bold text-xl align-middle">{option.text}</span>
                <span className="ml-3 text-lg opacity-70 block sm:inline sm:mt-0 mt-1">({option.cn})</span>
              </div>
              <div className="flex-shrink-0">
                {icon}
              </div>
            </button>
          );
        })}
      </div>

      {/* Feedback Message */}
      {selectedId && (
        <div className={`mt-6 p-4 rounded-xl flex items-center gap-3 animate-bounce-short text-lg ${
          isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {isCorrect ? (
            <>
              <CheckCircle2 size={24} />
              <span className="font-bold">Excellent! Correct answer. (太棒了！答對了！)</span>
            </>
          ) : (
            <>
              <XCircle size={24} />
              <span className="font-bold">Not quite. Try again! (不太對，再試一次！)</span>
            </>
          )}
        </div>
      )}
    </div>
  );
};