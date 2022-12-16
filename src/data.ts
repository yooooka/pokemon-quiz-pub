export type Response = { text: string; isCorrect: boolean };

export type Question = {
  text: string;
  responses: Response[];
};

export const questions: Question[] = [
  {
    text: "Who’s the main character in Pokémon?",
    responses: [
      { text: "Ash", isCorrect: true },
      { text: "Professor Oak", isCorrect: false },
      { text: "Pikachu", isCorrect: false },
      { text: "Goh", isCorrect: false }
    ]
  },
  {
    text: "Which of these Pokémon types don’t exist?",
    responses: [
      { text: "Fire", isCorrect: false },
      { text: "Light", isCorrect: true },
      { text: "Glass", isCorrect: true },
      { text: "Water", isCorrect: false }
    ]
  },
  {
    text: "What color is Ash’s hat?",
    responses: [
      { text: "White", isCorrect: false },
      { text: "Red", isCorrect: true },
      { text: "Yellow", isCorrect: false },
      { text: "Navy", isCorrect: false }
    ]
  },
  {
    text: "Fill in the blank. “ I want to be _____”",
    responses: [
      { text: "The very best!", isCorrect: true },
      { text: "The ultimate Pokémon catcher!", isCorrect: false },
      { text: "Amazing!", isCorrect: false },
      { text: "The best Pokémon trainer!", isCorrect: false }
    ]
  },
  {
    text: "How many types of Pokémon are there?",
    responses: [
      { text: "8", isCorrect: false },
      { text: "12", isCorrect: false },
      { text: "18", isCorrect: true },
      { text: "24", isCorrect: false }
    ]
  }
];
