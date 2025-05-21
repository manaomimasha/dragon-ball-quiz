import "./index.css";
import { useState, useEffect } from "react";
import { fetchQuestions, submitAnswers } from "./api/quizApi";
import Question from "./components/Question";
import Result from "./components/Result";

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [gender, setGender] = useState("");
  const [result, setResult] = useState(null);

  const restart = () => {
    setCurrent(0);
    setAnswers([]);
    setGender("");
    setResult(null);
  };

  useEffect(() => {
    fetchQuestions().then((data) => {
      console.log("Fetched questions:", data);
      setQuestions(data);
    });
  }, []);

  const handleAnswer = (option) => {
    if (current === 0) {
      // const genderValue = option === "A" ? "masculine" : "femenine";
      // setGender(option === "Male" ? "masculine" : "feminine");

      const genderValue = option === "A" ? "masculine" : "feminine";
      setGender(genderValue);

      // setGender(genderValue);
      setCurrent(current + 1);
      return;
    }

    const newAnswers = [...answers, option];

    if (newAnswers.length === 10) {
      // Submit after exactly 10 answers
      console.log("Submitting:", { gender, answers: newAnswers });
      submitAnswers(gender, newAnswers)
        .then((res) => setResult(res))
        .catch((err) => console.error("Error fetching character result:", err));
    } else {
      // Continue to next question
      setAnswers(newAnswers);
      setCurrent(current + 1);
    }
  };

  if (questions.length === 0) return <p>Loading...</p>;

  if (result) return <Result result={result} restart={restart} />;

  return (
    <div className="App">
      <div className="p-4 bg-blue-100 rounded-lg shadow">
        <h1 className="text-xl font-bold text-blue-800">
          Welcome to the Dragon Ball Quiz!
        </h1>
      </div>

      <Question question={questions[current]} onAnswer={handleAnswer} />
    </div>
  );
}
