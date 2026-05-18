import { LocationData } from './types';

export const LOCATIONS: LocationData[] = [
  {
    id: 'pearlharbor',
    name: 'Pearl Harbor',
    shortDescription: 'A surprise attack. A sunken ship. A memory.',
    introImage: '/pearlharbor.jpg',
    readingText: [
      "Pearl Harbor is a naval base on the island of Oahu, Hawaii.",
      "On December 7, 1941, Japan attacked the American naval base.",
      "It was a surprise attack that happened early in the morning.",
      "More than 2,400 Americans were killed in the attack.",
      "The USS Arizona was one of the ships that sank that day.",
      "The attack brought the United States into World War II.",
      "Today, Pearl Harbor is a famous memorial site.",
      "Visitors can see the USS Arizona Memorial above the sunken ship.",
      "The ship still lies at the bottom of the harbor.",
      "Oil slowly rises to the surface from the wreck every day.",
      "More than 1.8 million people visit Pearl Harbor every year.",
      "Some say the souls of the sailors are still there, guarding the harbor."
    ],
    mysterySentence: "Some say the souls of the sailors are still there, guarding the harbor.",
    symbol: 'Anchor',
    symbolMeaning: 'Memory & Courage',
    questions: [
      {
        id: 1,
        text: "Where is Pearl Harbor?",
        options: ["On the island of Maui", "On the island of Oahu", "On the island of Kauai"],
        correctIndex: 1,
        hint: "Read the first sentence carefully."
      },
      {
        id: 2,
        text: "When did Japan attack Pearl Harbor?",
        options: ["In 1939", "In 1945", "In 1941"],
        correctIndex: 2,
        hint: "Look for the year in the text."
      },
      {
        id: 3,
        text: "What happened to the USS Arizona?",
        options: ["It escaped safely", "It sank", "It was repaired"],
        correctIndex: 1,
        hint: "The text says it was 'one of the ships that...'"
      },
      {
        id: 4,
        text: "What did the attack cause the USA to do?",
        options: ["Leave the Pacific Ocean", "Join World War II", "Attack Germany first"],
        correctIndex: 1,
        hint: "Look for what the attack 'brought' the USA into."
      },
      {
        id: 5,
        text: "How many people visit Pearl Harbor every year?",
        options: ["500,000", "1 million", "1.8 million"],
        correctIndex: 2,
        hint: "Look for the number in the text."
      }
    ],
    sentenceBuilderTasks: [
      {
        id: 1,
        blocks: ["Japan", "attacked", "Pearl Harbor", "in 1941"]
      },
      {
        id: 2,
        blocks: ["The USS Arizona", "still lies", "at the bottom", "of the harbor"]
      }
    ],
    missingWordsTasks: [
      {
        id: 1,
        sentenceParts: ["Pearl Harbor is a naval base on the island of", "."],
        options: ["Oahu", "Maui", "Kauai"],
        correctOption: "Oahu"
      },
      {
        id: 2,
        sentenceParts: ["The attack brought the United States into World War", "."],
        options: ["II", "I", "III"],
        correctOption: "II"
      },
      {
        id: 3,
        sentenceParts: ["More than 2,400 Americans were", "in the attack."],
        options: ["killed", "saved", "captured"],
        correctOption: "killed"
      }
    ]
  },
  {
    id: 'volcanoes',
    name: 'Volcanoes National Park',
    shortDescription: 'Fire and lava. Pele and power.',
    introImage: '/volcanoesnationalpark.jpg',
    readingText: [
      "Hawaii Volcanoes National Park is on the Big Island of Hawaii.",
      "It is home to two of the world's most active volcanoes.",
      "The two volcanoes are called Kilauea and Mauna Loa.",
      "Kilauea has been erupting almost continuously since 1983.",
      "Hot lava flows from the volcanoes and reaches the ocean.",
      "When lava meets the sea, it creates steam and new land.",
      "The Hawaiian Islands were formed by volcanoes millions of years ago.",
      "Mauna Loa is the largest volcano on Earth by volume.",
      "The park has many craters, lava tubes, and steam vents.",
      "Tourists can walk on old lava fields and see glowing lava at night.",
      "Hawaiian people believe the goddess Pele lives in the volcanoes.",
      "Nobody knows when the next big eruption will happen."
    ],
    mysterySentence: "Nobody knows when the next big eruption will happen.",
    symbol: 'Flame',
    symbolMeaning: 'Fire & Creation',
    questions: [
      {
        id: 1,
        text: "Which island is Volcanoes National Park on?",
        options: ["Oahu", "Maui", "The Big Island"],
        correctIndex: 2,
        hint: "Read the first sentence."
      },
      {
        id: 2,
        text: "What are the two active volcanoes called?",
        options: ["Haleakala and Diamond Head", "Kilauea and Mauna Loa", "Mauna Kea and Waikiki"],
        correctIndex: 1,
        hint: "Look for the two names in the text."
      },
      {
        id: 3,
        text: "Since when has Kilauea been erupting?",
        options: ["Since 1941", "Since 1959", "Since 1983"],
        correctIndex: 2,
        hint: "Look for the year in the sentence about Kilauea."
      },
      {
        id: 4,
        text: "Who do Hawaiians believe lives in the volcanoes?",
        options: ["King Kamehameha", "The goddess Pele", "Captain James Cook"],
        correctIndex: 1,
        hint: "Look for the Hawaiian belief in the text."
      },
      {
        id: 5,
        text: "What happens when lava meets the sea?",
        options: ["It stops immediately", "It creates steam and new land", "It turns to rock instantly"],
        correctIndex: 1,
        hint: "Read the sentence about lava meeting the ocean."
      }
    ],
    sentenceBuilderTasks: [
      {
        id: 1,
        blocks: ["Kilauea", "has been erupting", "almost continuously", "since 1983"]
      },
      {
        id: 2,
        blocks: ["When lava", "meets the sea", "it creates", "new land"]
      }
    ],
    missingWordsTasks: [
      {
        id: 1,
        sentenceParts: ["Volcanoes National Park is on the", "Island of Hawaii."],
        options: ["Big", "Small", "North"],
        correctOption: "Big"
      },
      {
        id: 2,
        sentenceParts: ["When lava meets the sea, it creates steam and new", "."],
        options: ["land", "water", "fire"],
        correctOption: "land"
      },
      {
        id: 3,
        sentenceParts: ["Hawaiians believe the goddess", "lives in the volcanoes."],
        options: ["Pele", "Laka", "Hina"],
        correctOption: "Pele"
      }
    ]
  },
  {
    id: 'waikiki',
    name: 'Waikiki Beach',
    shortDescription: 'Golden sand. Blue waves. The birthplace of surfing.',
    introImage: '/waikikibeach.jpg',
    readingText: [
      "Waikiki Beach is one of the most famous beaches in the world.",
      "It is located in Honolulu, the capital city of Hawaii.",
      "The beach is known for its golden sand and calm blue water.",
      "Surfing was invented by the ancient Hawaiians thousands of years ago.",
      "Waikiki was the home of Hawaiian royalty for many centuries.",
      "Today, millions of tourists visit Waikiki every year.",
      "The beach is surrounded by hotels, shops, and restaurants.",
      "Duke Kahanamoku was a famous Hawaiian surfer from Waikiki.",
      "He is known as the father of modern surfing.",
      "You can rent surfboards and take lessons right on the beach.",
      "Diamond Head, a famous volcanic crater, stands behind the beach.",
      "Old stories say the beach was once protected by powerful sea spirits."
    ],
    mysterySentence: "Old stories say the beach was once protected by powerful sea spirits.",
    symbol: 'Waves',
    symbolMeaning: 'Surf & Spirit',
    questions: [
      {
        id: 1,
        text: "Where is Waikiki Beach?",
        options: ["In Maui", "In Honolulu", "In Kauai"],
        correctIndex: 1,
        hint: "It is in the capital city of Hawaii."
      },
      {
        id: 2,
        text: "Who invented surfing?",
        options: ["The Americans", "The Australians", "The ancient Hawaiians"],
        correctIndex: 2,
        hint: "Read the fourth sentence."
      },
      {
        id: 3,
        text: "What is Diamond Head?",
        options: ["A hotel", "A famous volcanic crater", "A surfboard brand"],
        correctIndex: 1,
        hint: "Look for Diamond Head near the end of the text."
      },
      {
        id: 4,
        text: "Who was Duke Kahanamoku?",
        options: ["A Hawaiian king", "A famous Hawaiian surfer", "A hotel owner"],
        correctIndex: 1,
        hint: "He is called the father of something."
      },
      {
        id: 5,
        text: "What was Waikiki in the past?",
        options: ["A fishing village", "A military base", "Home of Hawaiian royalty"],
        correctIndex: 2,
        hint: "Read the fifth sentence."
      }
    ],
    sentenceBuilderTasks: [
      {
        id: 1,
        blocks: ["Surfing", "was invented", "by", "the ancient Hawaiians"]
      },
      {
        id: 2,
        blocks: ["Duke Kahanamoku", "is known as", "the father", "of modern surfing"]
      }
    ],
    missingWordsTasks: [
      {
        id: 1,
        sentenceParts: ["Waikiki Beach is located in", ", the capital city of Hawaii."],
        options: ["Honolulu", "Maui", "Kauai"],
        correctOption: "Honolulu"
      },
      {
        id: 2,
        sentenceParts: ["Surfing was invented by the", "Hawaiians."],
        options: ["ancient", "modern", "young"],
        correctOption: "ancient"
      },
      {
        id: 3,
        sentenceParts: ["Diamond Head is a famous volcanic", "."],
        options: ["crater", "beach", "river"],
        correctOption: "crater"
      }
    ]
  },
  {
    id: 'maunakea',
    name: 'Mauna Kea',
    shortDescription: 'White mountain. Sacred peak. Stars above.',
    introImage: '/maunakea.jpg',
    readingText: [
      "Mauna Kea is the highest mountain in Hawaii.",
      "It is a dormant volcano on the Big Island.",
      "From its base on the ocean floor, it is the tallest mountain on Earth.",
      "The summit is 4,205 meters above sea level.",
      "At the top, the air is very thin and very cold.",
      "There is sometimes snow on Mauna Kea in winter.",
      "Mauna Kea means 'white mountain' in Hawaiian.",
      "The mountain is sacred to the Hawaiian people.",
      "Many observatories have been built near the summit.",
      "Scientists use them to study stars, planets, and galaxies.",
      "Some Hawaiians are unhappy about the telescopes on their sacred land.",
      "Some believe the spirits of the ancestors live on the mountain forever."
    ],
    mysterySentence: "Some believe the spirits of the ancestors live on the mountain forever.",
    symbol: 'Star',
    symbolMeaning: 'Sky & Sacred',
    questions: [
      {
        id: 1,
        text: "What does 'Mauna Kea' mean in Hawaiian?",
        options: ["Black mountain", "White mountain", "Sacred mountain"],
        correctIndex: 1,
        hint: "Look for the translation in the text."
      },
      {
        id: 2,
        text: "How high is Mauna Kea above sea level?",
        options: ["2,000 meters", "3,000 meters", "4,205 meters"],
        correctIndex: 2,
        hint: "Look for the exact number in the text."
      },
      {
        id: 3,
        text: "What is built near the summit?",
        options: ["Hotels", "Observatories", "Temples"],
        correctIndex: 1,
        hint: "Scientists use them to study stars."
      },
      {
        id: 4,
        text: "Why are some Hawaiians unhappy?",
        options: ["The mountain is too cold", "Telescopes are on their sacred land", "There are too many tourists"],
        correctIndex: 1,
        hint: "Read the eleventh sentence."
      },
      {
        id: 5,
        text: "What is special about Mauna Kea from the ocean floor?",
        options: ["It is the oldest mountain", "It is the widest mountain", "It is the tallest mountain on Earth"],
        correctIndex: 2,
        hint: "Read the third sentence."
      }
    ],
    sentenceBuilderTasks: [
      {
        id: 1,
        blocks: ["Mauna Kea", "is the highest", "mountain", "in Hawaii"]
      },
      {
        id: 2,
        blocks: ["The mountain", "is sacred", "to the", "Hawaiian people"]
      }
    ],
    missingWordsTasks: [
      {
        id: 1,
        sentenceParts: ["Mauna Kea means '", "mountain' in Hawaiian."],
        options: ["white", "black", "tall"],
        correctOption: "white"
      },
      {
        id: 2,
        sentenceParts: ["Scientists use observatories to study stars, planets, and", "."],
        options: ["galaxies", "animals", "volcanoes"],
        correctOption: "galaxies"
      },
      {
        id: 3,
        sentenceParts: ["The mountain is", "to the Hawaiian people."],
        options: ["sacred", "dangerous", "unknown"],
        correctOption: "sacred"
      }
    ]
  },
  {
    id: 'hanauma',
    name: 'Haunauma Bay',
    shortDescription: 'Volcanic crater. Colorful fish. Sacred turtles.',
    introImage: '/haunaumabay.jpg',
    readingText: [
      "Haunauma Bay is a beautiful bay on the island of Oahu.",
      "It was formed inside an ancient volcanic crater.",
      "The bay is one of the best snorkeling spots in Hawaii.",
      "The clear blue water is full of colorful fish and coral.",
      "Green sea turtles, called Honu, live in the bay.",
      "It is illegal to touch or disturb the sea turtles.",
      "More than one million people used to visit the bay every year.",
      "The bay was damaged by too many visitors, so new rules were made.",
      "Today, visitors must watch an educational video before entering.",
      "Lava rocks must never be removed from the island.",
      "Some Hawaiians believe that removing lava rocks brings a curse.",
      "Nobody knows exactly how old the volcanic crater really is."
    ],
    mysterySentence: "Some Hawaiians believe that removing lava rocks brings a curse.",
    symbol: 'Droplets',
    symbolMeaning: 'Ocean & Life',
    questions: [
      {
        id: 1,
        text: "How was Haunauma Bay formed?",
        options: ["By an earthquake", "Inside a volcanic crater", "By the ocean waves"],
        correctIndex: 1,
        hint: "Read the second sentence."
      },
      {
        id: 2,
        text: "What are Honu?",
        options: ["Hawaiian birds", "Types of coral", "Green sea turtles"],
        correctIndex: 2,
        hint: "The text explains what Honu means."
      },
      {
        id: 3,
        text: "What is illegal at Haunauma Bay?",
        options: ["Swimming", "Snorkeling", "Touching the sea turtles"],
        correctIndex: 2,
        hint: "Read the sixth sentence."
      },
      {
        id: 4,
        text: "What must visitors do before entering the bay?",
        options: ["Pay a large fee", "Watch an educational video", "Sign a safety form"],
        correctIndex: 1,
        hint: "Read the ninth sentence."
      },
      {
        id: 5,
        text: "What do some Hawaiians believe about lava rocks?",
        options: ["They bring good luck", "They are very valuable", "Removing them brings a curse"],
        correctIndex: 2,
        hint: "Read the eleventh sentence."
      }
    ],
    sentenceBuilderTasks: [
      {
        id: 1,
        blocks: ["Haunauma Bay", "was formed", "inside", "a volcanic crater"]
      },
      {
        id: 2,
        blocks: ["It is illegal", "to touch", "or disturb", "the sea turtles"]
      }
    ],
    missingWordsTasks: [
      {
        id: 1,
        sentenceParts: ["Haunauma Bay was formed inside an ancient volcanic", "."],
        options: ["crater", "cave", "tunnel"],
        correctOption: "crater"
      },
      {
        id: 2,
        sentenceParts: ["Green sea turtles, called", ", live in the bay."],
        options: ["Honu", "Pele", "Aloha"],
        correctOption: "Honu"
      },
      {
        id: 3,
        sentenceParts: ["It is", "to touch or disturb the sea turtles."],
        options: ["illegal", "allowed", "encouraged"],
        correctOption: "illegal"
      }
    ]
  },
  {
    id: 'napali',
    name: 'Na Pali Coast',
    shortDescription: 'Wild cliffs. Hidden valleys. Jurassic scenery.',
    introImage: '/napalicoast.jpg',
    readingText: [
      "The Na Pali Coast is on the island of Kauai.",
      "It is one of the most beautiful and wild places in Hawaii.",
      "High green cliffs rise up to 1,200 meters above the sea.",
      "The cliffs are covered in thick tropical plants.",
      "Na Pali means 'the cliffs' in Hawaiian.",
      "The coast is so steep that there are no roads along it.",
      "You can only reach it by boat, helicopter, or hiking.",
      "The Kalalau Trail is a famous and difficult hiking trail along the coast.",
      "Hollywood directors chose Na Pali Coast as a film location.",
      "Parts of Jurassic Park and King Kong were filmed here.",
      "Ancient Hawaiians used to live in the hidden valleys along the coast.",
      "Some people say the valleys are still guarded by ancient spirits."
    ],
    mysterySentence: "Some people say the valleys are still guarded by ancient spirits.",
    symbol: 'Leaf',
    symbolMeaning: 'Wild & Wonder',
    questions: [
      {
        id: 1,
        text: "Which island is the Na Pali Coast on?",
        options: ["Oahu", "Maui", "Kauai"],
        correctIndex: 2,
        hint: "Read the first sentence."
      },
      {
        id: 2,
        text: "What does 'Na Pali' mean in Hawaiian?",
        options: ["The ocean", "The cliffs", "The valley"],
        correctIndex: 1,
        hint: "The text explains this directly."
      },
      {
        id: 3,
        text: "How high are the cliffs?",
        options: ["Up to 500 meters", "Up to 900 meters", "Up to 1,200 meters"],
        correctIndex: 2,
        hint: "Look for the number in the third sentence."
      },
      {
        id: 4,
        text: "How can you reach the Na Pali Coast?",
        options: ["By car or bus", "By boat, helicopter, or hiking", "Only by plane"],
        correctIndex: 1,
        hint: "Read the seventh sentence."
      },
      {
        id: 5,
        text: "Which famous films were made here?",
        options: ["Avatar and Star Wars", "Moana and Frozen", "Jurassic Park and King Kong"],
        correctIndex: 2,
        hint: "Look for the film titles in the text."
      }
    ],
    sentenceBuilderTasks: [
      {
        id: 1,
        blocks: ["The cliffs", "rise up to", "1,200 meters", "above the sea"]
      },
      {
        id: 2,
        blocks: ["Parts of", "Jurassic Park", "were filmed", "here"]
      }
    ],
    missingWordsTasks: [
      {
        id: 1,
        sentenceParts: ["The Na Pali Coast is on the island of", "."],
        options: ["Kauai", "Oahu", "Maui"],
        correctOption: "Kauai"
      },
      {
        id: 2,
        sentenceParts: ["Parts of Jurassic", "and King Kong were filmed here."],
        options: ["Park", "World", "Land"],
        correctOption: "Park"
      },
      {
        id: 3,
        sentenceParts: ["The cliffs are covered in thick tropical", "."],
        options: ["plants", "snow", "sand"],
        correctOption: "plants"
      }
    ]
  }
];
