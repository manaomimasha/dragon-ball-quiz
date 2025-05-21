import React from "react";

const Result = ({ result, restart }) => {
  if (!result) return null;

  return (
    <div className="result-container">
      <h2>You are: {result.character}</h2>
      <p>{result.description}</p>

      <button onClick={restart} className="btn-restart">
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;
