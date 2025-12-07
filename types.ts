export enum ContentType {
  PARAGRAPH = 'PARAGRAPH',
  CHAT = 'CHAT',
  ILLUSTRATION = 'ILLUSTRATION'
}

export interface ChatMessage {
  sender: 'John' | 'Dad';
  en: string;
  cn: string;
}

export interface SentencePair {
  en: string;
  cn: string;
}

export interface ContentBlock {
  id: string;
  type: ContentType;
  lines?: SentencePair[]; // New: Array of sentence pairs for granular display
  emoji?: string; 
  messages?: ChatMessage[]; // For Chat
  description?: string; // For Illustration alt text
  imageUrl?: string; // For Illustration
}

export interface QuizOption {
  id: string;
  text: string;
  cn: string;
}

export interface Question {
  id: number;
  questionEn: string;
  questionCn: string;
  options: QuizOption[];
  correctAnswerId: string;
}