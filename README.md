# Quiz App

A simple React-based quiz application that allows users to answer multiple-choice questions, receive feedback, and save quiz history using IndexedDB.

---

## 🚀 Live Demo

[Live Demo](https://your-live-demo-link.com)

---

## Features

- 🕒 **Timer-Based Quiz**: Each question has a countdown timer.
- ✅ **Feedback System**: Provides positive or negative feedback based on the user's answer.
- 📜 **Quiz History Storage**: Saves quiz attempts using IndexedDB.
- 📊 **Score Tracking**: Displays the final score at the end of the quiz.
- 🔄 **Responsive UI**: Works on desktop and mobile devices.

---

## 📦 Installation

### Prerequisites
Make sure you have **Node.js** and **npm** installed.

### Clone the Repository
```sh
git clone https://github.com/SuhaniKapasiya/quiz-platform.git
cd quiz-platform
```

### Install Dependencies
```sh
npm install
```

### Start the Development Server
```sh
npm start
```
This will start the app on `http://localhost:3000/`

---

## 🛠 Project Structure
```
QUIZ-PLATFORM/
│-- node_modules/
│-- public/
│-- src/
│   ├── components/
│   │   ├── History.jsx
│   │   ├── Home.jsx
│   │   ├── Quiz.jsx
│   │   ├── Results.jsx
│   ├── hook/
│   │   ├── useQuizTimer.js
│   ├── App.js
│   ├── App.test.js
│   ├── db.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── questions.json
│   ├── reportWebVitals.js
│-- README.md
│-- package.json
```

---

## 📌 Usage

1. **Start the Quiz**: Select an answer from multiple choices.
2. **Receive Feedback**: Get instant feedback after each answer.
3. **Score Calculation**: Your score updates dynamically.
4. **Save Quiz Attempt**: Your quiz history is saved using IndexedDB.
5. **View Quiz History**: Past quiz attempts can be viewed on the Results page.

---

## 💾 Working with IndexedDB
This project uses the `idb` library to store quiz attempts.

### Initialize Database
```js
import { openDB } from "idb";
export const initDB = async () => {
  return openDB("quizDB", 1, {
    upgrade(db) {
      db.createObjectStore("attempts", { keyPath: "id", autoIncrement: true });
    },
  });
};
```

### Save an Attempt
```js
export const saveAttempt = async (attempt) => {
  const db = await initDB();
  await db.add("attempts", attempt);
};
```

### Retrieve Attempts
```js
export const getAttempts = async () => {
  const db = await initDB();
  return await db.getAll("attempts");
};
```

---

## 🤝 Contributing
Feel free to contribute! Open an issue or submit a pull request.

---

## 📝 License
This project is licensed under the MIT License.

---

## 📧 Contact
For any questions, reach out at **suhanikapasiya2018@gmail.com**.
