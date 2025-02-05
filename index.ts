import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Function to generate random items from an array
const getRandomItem = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

// Sample data
const users = [
  { id: 1, name: "Alice", age: 25, profession: "Engineer" },
  { id: 2, name: "Bob", age: 30, profession: "Designer" },
  { id: 3, name: "Charlie", age: 22, profession: "Student" },
];

const products = [
  { id: 101, name: "Laptop", price: 999, brand: "TechCorp" },
  { id: 102, name: "Smartphone", price: 699, brand: "MobileX" },
  { id: 103, name: "Headphones", price: 199, brand: "SoundWave" },
];

const quotes = [
  { author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance you must keep moving." },
  { author: "Steve Jobs", quote: "Stay hungry, stay foolish." },
  { author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken." },
];

const animalFacts = [
  { animal: "Cat", fact: "Cats can make over 100 different sounds." },
  { animal: "Dog", fact: "Dogs have three eyelids." },
  { animal: "Elephant", fact: "Elephants can ‘hear’ with their feet." },
];

// Route to return random data
app.get("/test", (req, res) => {
  const responseData = {
    randomUser: getRandomItem(users),
    randomProduct: getRandomItem(products),
    randomQuote: getRandomItem(quotes),
    randomAnimalFact: getRandomItem(animalFacts),
    timestamp: new Date().toISOString(),
  };

  res.json(responseData);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
