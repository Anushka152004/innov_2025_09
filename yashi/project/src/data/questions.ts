import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "My plant's leaves are turning yellow. What should I do?",
    options: [
      {
        text: "Water it more",
        outcome: {
          description: "Leaves turn brown and soggy due to overwatering",
          image: "https://images.unsplash.com/photo-1611145434336-2b77f9645bc0?w=800&auto=format&fit=crop"
        },
        isCorrect: false
      },
      {
        text: "Move it to a sunnier spot",
        outcome: {
          description: "Leaves dry up completely from too much sun",
          image: "https://images.unsplash.com/photo-1620558601903-5e31c893cd88?w=800&auto=format&fit=crop"
        },
        isCorrect: false
      },
      {
        text: "Check for pests and trim affected leaves",
        outcome: {
          description: "Plant recovers slowly - this is the right approach!",
          image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=800&auto=format&fit=crop"
        },
        isCorrect: true
      },
      {
        text: "Ignore it",
        outcome: {
          description: "Plant continues to wilt from neglect",
          image: "https://images.unsplash.com/photo-1578679664512-2e28a966ca87?w=800&auto=format&fit=crop"
        },
        isCorrect: false
      }
    ]
  },
  {
    id: 2,
    text: "The soil of my plant looks too dry and cracked. What should I do?",
    options: [
      {
        text: "Add lots of water all at once",
        outcome: {
          description: "Soil becomes muddy, plant struggles to adapt",
          image: "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?w=800&auto=format&fit=crop"
        },
        isCorrect: false
      },
      {
        text: "Water it gradually over time",
        outcome: {
          description: "Plant absorbs water properly and recovers - perfect!",
          image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&auto=format&fit=crop"
        },
        isCorrect: true
      },
      {
        text: "Leave it as it is",
        outcome: {
          description: "Soil remains dry, plant continues to wilt",
          image: "https://images.unsplash.com/photo-1586968793577-bf57324c8cd5?w=800&auto=format&fit=crop"
        },
        isCorrect: false
      },
      {
        text: "Move the plant to a shadier spot",
        outcome: {
          description: "No effect on soil moisture, plant remains stressed",
          image: "https://images.unsplash.com/photo-1509223197845-458d87318791?w=800&auto=format&fit=crop"
        },
        isCorrect: false
      }
    ]
  },
  {
    id: 3,
    text: "I see small bugs on my plant. What should I do?",
    options: [
      {
        text: "Wash the leaves with mild soap water",
        outcome: {
          description: "Bugs go away, plant stays healthy - excellent choice!",
          image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&auto=format&fit=crop"
        },
        isCorrect: true
      },
      {
        text: "Ignore them",
        outcome: {
          description: "Bugs multiply, plant health deteriorates",
          image: "https://images.unsplash.com/photo-1580507999246-62013fd1543a?w=800&auto=format&fit=crop"
        },
        isCorrect: false
      },
      {
        text: "Spray chemical pesticides immediately",
        outcome: {
          description: "Plant gets damaged from harsh chemicals",
          image: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?w=800&auto=format&fit=crop"
        },
        isCorrect: false
      },
      {
        text: "Move the plant indoors",
        outcome: {
          description: "Bugs spread to other indoor plants",
          image: "https://images.unsplash.com/photo-1524492449090-a4e289316d9c?w=800&auto=format&fit=crop"
        },
        isCorrect: false
      }
    ]
  },
  {
    id: 4,
    text: "My plant is growing very slowly. What could be the reason?",
    options: [
      {
        text: "Not enough sunlight",
        outcome: {
          description: "Plant stays small and weak",
          image: "https://images.unsplash.com/photo-1507567235578-0fbf8f73e07d?w=800&auto=format&fit=crop"
        },
        isCorrect: false
      },
      {
        text: "Overwatering",
        outcome: {
          description: "Roots start rotting from excess water",
          image: "https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?w=800&auto=format&fit=crop"
        },
        isCorrect: false
      },
      {
        text: "Poor soil nutrients",
        outcome: {
          description: "Leaves turn pale, growth is stunted",
          image: "https://images.unsplash.com/photo-1628696029741-f72048ad9b7b?w=800&auto=format&fit=crop"
        },
        isCorrect: false
      },
      {
        text: "Any of the above",
        outcome: {
          description: "Correct! All these factors affect plant growth",
          image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&auto=format&fit=crop"
        },
        isCorrect: true
      }
    ]
  },
  {
    id: 5,
    text: "My plant's leaves have brown spots on them. What should I do?",
    options: [
      {
        text: "Water the plant more",
        outcome: {
          description: "Spots remain and possibly worsen",
          image: "https://images.unsplash.com/photo-1580507999246-62013fd1543a?w=800&auto=format&fit=crop"
        },
        isCorrect: false
      },
      {
        text: "Check for fungal infections and remove affected leaves",
        outcome: {
          description: "Plant heals over time - great solution!",
          image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&auto=format&fit=crop"
        },
        isCorrect: true
      },
      {
        text: "Add more fertilizer",
        outcome: {
          description: "Spots remain, excess fertilizer may harm plant",
          image: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?w=800&auto=format&fit=crop"
        },
        isCorrect: false
      },
      {
        text: "Move it to a darker place",
        outcome: {
          description: "No improvement, plant may weaken further",
          image: "https://images.unsplash.com/photo-1507567235578-0fbf8f73e07d?w=800&auto=format&fit=crop"
        },
        isCorrect: false
      }
    ]
  }
];