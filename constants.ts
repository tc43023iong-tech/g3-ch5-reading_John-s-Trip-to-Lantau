import { ContentType, ContentBlock, Question } from './types';

export const STORY_CONTENT: ContentBlock[] = [
  {
    id: 'intro',
    type: ContentType.PARAGRAPH,
    emoji: "🏝️",
    lines: [
      { en: "John is reading a travel brochure.", cn: "約翰正在閱讀一本旅遊手冊。" },
      { en: "'I want to go to Lantau,' he says to Mum.", cn: "「我想去大嶼山，」他對媽媽說。" },
      { en: "'What do you want to do there?' she asks.", cn: "「你想去那裡做什麼？」她問。" },
      { en: "'First, I want to climb trees.", cn: "「首先，我想爬樹。" },
      { en: "Then, I want to swim in the sea.", cn: "然後，我想在海裡游泳。" },
      { en: "Next, I want to have a barbecue.", cn: "接下來，我想燒烤。" },
      { en: "Finally, I want to sleep in a tent,' says John.", cn: "最後，我想睡在帳篷裡，」約翰說。" }
    ]
  },
  {
    id: 'mum-refusal',
    type: ContentType.PARAGRAPH,
    emoji: "🏠",
    lines: [
      { en: "Mum doesn't like the countryside.", cn: "媽媽不喜歡郊外。" },
      { en: "She wants to stay at home because she likes her comfortable bed, clean toilet and air-conditioning.", cn: "她想待在家裡，因為她喜歡她那舒適的床、乾淨的廁所和冷氣。" },
      { en: "'Why don't you ask Dad to go with you?' she says.", cn: "「你為什麼不問問爸爸要不要和你一起去？」她說。" }
    ]
  },
  {
    id: 'chat-header',
    type: ContentType.PARAGRAPH,
    emoji: "📱",
    lines: [
      { en: "John messages Dad at work.", cn: "約翰發訊息給正在上班的爸爸。" }
    ]
  },
  {
    id: 'chat-exchange',
    type: ContentType.CHAT,
    messages: [
      { sender: 'John', en: "Dad, I want to go to Lantau. Can we?", cn: "爸爸，我想去大嶼山。我們可以去嗎？" },
      { sender: 'Dad', en: "OK. I know a great place there.", cn: "好的。我知道那裡有一個很棒的地方。" },
      { sender: 'John', en: "Can we go climbing?", cn: "我們可以去爬山嗎？" },
      { sender: 'Dad', en: "Yes. We can go swimming too.", cn: "可以。我們也可以去游泳。" },
      { sender: 'John', en: "Great! I want to eat outside.", cn: "太棒了！我想在戶外吃飯。" },
      { sender: 'Dad', en: "Ok, we can do that too.", cn: "好的，我們也可以那樣做。" }
    ]
  },
  {
    id: 'weekend-trip',
    type: ContentType.PARAGRAPH,
    emoji: "🎒",
    lines: [
      { en: "That weekend John and Dad go to Lantau.", cn: "那個週末，約翰和爸爸去了大嶼山。" }
    ]
  },
  {
    id: 'hotel-dialogue',
    type: ContentType.PARAGRAPH,
    emoji: "🏨",
    lines: [
      { en: "'This hotel is great!' says Dad.", cn: "「這家酒店太棒了！」爸爸說。" },
      { en: "'Look, we can go climbing and swimming.'", cn: "「看，我們可以去爬山和游泳。」" },
      { en: "'I want to eat outside,' says John.", cn: "「我想在戶外吃飯，」約翰說。" },
      { en: "'I know,' says Dad. 'There's an outdoor café.'", cn: "「我知道，」爸爸說。「那裡有一個戶外咖啡廳。」" }
    ]
  },
  {
    id: 'resolution',
    type: ContentType.PARAGRAPH,
    emoji: "👨‍👩‍👦",
    lines: [
      { en: "'But ...' says John.", cn: "「但是……」約翰說。" },
      { en: "He looks at Dad's happy face.", cn: "他看著爸爸快樂的臉。" },
      { en: "'Let's ask Mum to join us. She would love it,' John says.", cn: "「我們叫媽媽一起來吧。她會喜歡的，」約翰說。" },
      { en: "Mum catches the next ferry and in the end they all have a great weekend.", cn: "媽媽搭上了下一班渡輪，最後他們都度過了一個很棒的週末。" }
    ]
  }
];

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    questionEn: "Why doesn't Mum want to go with John?",
    questionCn: "為什麼媽媽不想和約翰一起去？",
    options: [
      { id: 'A', text: "She doesn't like Lantau.", cn: "她不喜歡大嶼山。" },
      { id: 'B', text: "She doesn't like eating and sleeping outside.", cn: "她不喜歡在戶外吃飯和睡覺。" },
      { id: 'C', text: "She is busy this weekend.", cn: "她這個週末很忙。" },
      { id: 'D', text: "She thinks camping is better than staying in a hotel.", cn: "她認為露營比住酒店好。" }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 2,
    questionEn: "Read Dad's reply to John: 'I know a great place there.' The word 'there' refers to ___.",
    questionCn: "讀爸爸給約翰的回覆：「我知道那裡有一個很棒的地方。」這個 'there'（那裡）指的是___。",
    options: [
      { id: 'A', text: "home", cn: "家" },
      { id: 'B', text: "Dad's work", cn: "爸爸的工作地點" },
      { id: 'C', text: "Lantau", cn: "大嶼山" },
      { id: 'D', text: "a hotel", cn: "一家酒店" }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 3,
    questionEn: "In the last paragraph, why doesn't John tell Dad what he wants to do?",
    questionCn: "在最後一段，為什麼約翰不告訴爸爸他真正想做什麼？",
    options: [
      { id: 'A', text: "He wants to see Mum.", cn: "他想見媽媽。" },
      { id: 'B', text: "He thinks Dad is right.", cn: "他認為爸爸是對的。" },
      { id: 'C', text: "He doesn't like camping.", cn: "他不喜歡露營。" },
      { id: 'D', text: "He doesn't want to make Dad unhappy.", cn: "他不想讓爸爸不高興。" }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 4,
    questionEn: "Which of the following is NOT true?",
    questionCn: "下列哪一項是不正確的？",
    options: [
      { id: 'A', text: "Mum doesn't join them.", cn: "媽媽沒有加入他們。" },
      { id: 'B', text: "Dad wants to eat outdoors.", cn: "爸爸想在戶外吃飯。" },
      { id: 'C', text: "Dad wants to go climbing in the hotel.", cn: "爸爸想去酒店攀岩（或爬山）。" },
      { id: 'D', text: "John wants to do outdoor activities.", cn: "約翰想做戶外活動。" }
    ],
    correctAnswerId: 'A'
  }
];