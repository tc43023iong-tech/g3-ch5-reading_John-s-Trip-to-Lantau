import React, { useState } from 'react';
import { BookOpen, PenTool, Star, MapPin, Calendar, Smile } from 'lucide-react';
import { STORY_CONTENT, QUIZ_QUESTIONS } from './constants';
import { ContentType } from './types';
import { StoryParagraph } from './components/StoryParagraph';
import { ChatBubble } from './components/ChatBubble';
import { QuizCard } from './components/QuizCard';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'read' | 'quiz'>('read');
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [score, setScore] = useState(0);

  const handleAnswer = (questionId: number, selectedOptionId: string) => {
    const question = QUIZ_QUESTIONS.find(q => q.id === questionId);
    if (!question) return;

    const isCorrect = question.correctAnswerId === selectedOptionId;
    
    setAnswers(prev => ({
      ...prev,
      [questionId]: isCorrect
    }));
  };

  // Calculate progress for the progress bar
  const solvedCount = Object.values(answers).filter(Boolean).length;
  const progressPercent = (solvedCount / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="min-h-screen bg-[#F0F9FF] font-sans pb-20 selection:bg-yellow-200">
      
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-action-blue p-2 rounded-xl text-white shadow-sm transform rotate-3">
              <MapPin size={20} />
            </div>
            <div>
              <h1 className="text-lg font-extrabold text-slate-700 leading-tight tracking-tight">Trip to Lantau</h1>
              <p className="text-xs text-slate-400 font-bold tracking-wide">(大嶼山之旅)</p>
            </div>
          </div>

          <div className="flex bg-slate-100/80 p-1.5 rounded-2xl gap-1">
            <button 
              onClick={() => setActiveTab('read')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'read' 
                  ? 'bg-white text-action-blue shadow-sm scale-100 ring-1 ring-black/5' 
                  : 'text-slate-400 hover:text-slate-600 hover:bg-slate-200/50'
              }`}
            >
              <BookOpen size={16} className={activeTab === 'read' ? 'fill-current' : ''} />
              Read
            </button>
            <button 
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'quiz' 
                  ? 'bg-white text-teal-600 shadow-sm scale-100 ring-1 ring-black/5' 
                  : 'text-slate-400 hover:text-slate-600 hover:bg-slate-200/50'
              }`}
            >
              <PenTool size={16} className={activeTab === 'quiz' ? 'fill-current' : ''} />
              Quiz
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        
        {/* Date Display */}
        <div className="flex justify-end mb-8">
           <div className="bg-white px-5 py-2.5 rounded-2xl border-2 border-slate-100 text-slate-400 text-sm flex items-center gap-3 shadow-sm rotate-1 hover:rotate-0 transition-transform">
             <Calendar size={16} className="text-action-blue" />
             <span className="font-bold tracking-widest text-slate-300">DATE: _______________</span>
           </div>
        </div>

        {activeTab === 'read' && (
          <div className="animate-fade-in space-y-6">
             
             {/* Instruction Banner */}
             <div className="bg-indigo-50 border-2 border-indigo-100 rounded-2xl p-4 text-center mb-4 shadow-sm">
                <span className="text-2xl font-black text-indigo-900 block sm:inline leading-tight">Open your book to page 17 and 18</span>
                <span className="text-indigo-400 font-bold ml-0 sm:ml-3 block sm:inline text-lg mt-1 sm:mt-0">(請翻開書本第 17 和 18 頁)</span>
             </div>

             <div className="bg-gradient-to-r from-yellow-100 to-orange-50 rounded-3xl p-6 mb-10 border-2 border-white shadow-md relative overflow-hidden">
               <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4">
                  <BookOpen size={120} />
               </div>
               <div className="relative z-10">
                 <div className="flex items-center gap-2 mb-2">
                    <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">Part A</span>
                    <span className="text-yellow-600 font-bold text-sm tracking-wide uppercase">Reading Task</span>
                 </div>
                 <h2 className="font-extrabold text-slate-800 text-2xl mb-1">
                   Read the story
                 </h2>
                 <p className="text-slate-500 font-bold text-sm">(閱讀故事)</p>
               </div>
             </div>

             {STORY_CONTENT.map((block) => {
               if (block.type === ContentType.PARAGRAPH) {
                 // Pass the new 'lines' prop to the updated component
                 return <StoryParagraph key={block.id} lines={block.lines || []} emoji={block.emoji} />;
               }
               
               if (block.type === ContentType.CHAT) {
                 return (
                   <div key={block.id} className="bg-slate-50 p-6 rounded-[2rem] border-2 border-slate-100 my-10 max-w-sm mx-auto relative group">
                     {/* Phone decoration elements */}
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-white rounded-b-xl border-b border-x border-slate-200"></div>
                     <div className="text-center text-xs text-slate-400 font-bold uppercase tracking-wider mb-6 flex items-center justify-center gap-2 mt-4">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        John's Phone
                     </div>
                     <div className="space-y-1">
                        {block.messages?.map((msg, idx) => (
                          <ChatBubble key={idx} message={msg} />
                        ))}
                     </div>
                   </div>
                 );
               }
               
               return null;
             })}

             <div className="mt-16 text-center pb-8">
               <div className="inline-block relative group">
                  <div className="absolute inset-0 bg-action-blue rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
                  <button 
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setActiveTab('quiz');
                    }}
                    className="relative bg-white border-4 border-action-blue text-action-blue hover:bg-action-blue hover:text-white text-xl font-bold py-4 px-10 rounded-full shadow-xl transition-all transform hover:-translate-y-1 hover:rotate-1 flex items-center gap-3"
                  >
                    <span>Let's do the Quiz!</span>
                    <Smile size={24} />
                  </button>
                  <p className="mt-4 text-slate-400 text-sm font-bold">(去做題目！)</p>
               </div>
             </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="animate-fade-in">
             <div className="bg-teal-50 rounded-3xl p-6 mb-8 border-2 border-teal-100 flex justify-between items-center relative overflow-hidden">
                <div className="absolute right-0 top-0 opacity-5 transform rotate-12 translate-x-4 -translate-y-4">
                  <PenTool size={100} />
                </div>
               <div className="relative z-10">
                 <h2 className="font-extrabold text-teal-800 text-xl flex items-center gap-3">
                   <div className="bg-teal-200 p-2 rounded-lg text-teal-700">
                     <PenTool size={20} />
                   </div>
                   Blacken ● the circles
                 </h2>
                 <p className="text-teal-600/70 font-bold text-sm ml-12">(塗黑圓圈)</p>
               </div>
               
               <div className="relative z-10 flex items-center gap-2 bg-white px-4 py-2 rounded-2xl shadow-sm border border-teal-100 text-teal-700 font-bold text-sm">
                 <Star className={solvedCount === QUIZ_QUESTIONS.length ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} size={18} />
                 <span>{solvedCount} / {QUIZ_QUESTIONS.length}</span>
               </div>
             </div>
             
             {/* Progress Bar */}
             <div className="w-full h-4 bg-slate-100 rounded-full mb-10 overflow-hidden p-1">
               <div 
                  className="h-full bg-gradient-to-r from-teal-300 to-action-blue rounded-full transition-all duration-700 ease-out shadow-sm relative"
                  style={{ width: `${progressPercent}%` }}
               >
                  <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')]"></div>
               </div>
             </div>

             {QUIZ_QUESTIONS.map((q) => (
               <QuizCard 
                 key={q.id} 
                 question={q} 
                 isCorrect={answers[q.id]} 
                 onAnswer={handleAnswer} 
               />
             ))}

             {solvedCount === QUIZ_QUESTIONS.length && (
               <div className="bg-gradient-to-br from-yellow-100 to-orange-50 p-10 rounded-[3rem] text-center shadow-xl border-8 border-white animate-bounce-in relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                 <div className="text-7xl mb-6 transform hover:scale-110 transition-transform duration-300 cursor-default">🏆</div>
                 <h3 className="text-4xl font-black text-orange-500 mb-3 tracking-tight">Great Job!</h3>
                 <p className="text-xl text-orange-800/80 font-bold mb-6">You finished the reading task!</p>
                 <div className="inline-block bg-white/50 px-6 py-2 rounded-full backdrop-blur-sm">
                   <p className="text-orange-700 font-bold">(做得好！你完成了閱讀任務！)</p>
                 </div>
               </div>
             )}
          </div>
        )}

      </main>
      
      {/* Footer */}
      <footer className="text-center py-8">
        <div className="inline-flex items-center gap-2 text-slate-300 text-xs font-bold uppercase tracking-widest bg-slate-50 px-4 py-2 rounded-full">
          <BookOpen size={12} />
          Keep Reading • 繼續閱讀
        </div>
      </footer>
    </div>
  );
};

export default App;