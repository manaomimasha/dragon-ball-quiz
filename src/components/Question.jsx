function Question({ question, onAnswer }) {
    return (
      <div className="p-4 max-w-md mx-auto text-center">
        <h2 className="text-xl font-bold mb-4">{question.text}</h2>
        <div className="grid gap-2">
          {/* {question.options.map((opt, idx) => (
            <button
              key={idx}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => onAnswer(opt)}
            >
              {opt}
            </button>
          ))} */}
  
          {question.options.map((opt, idx) => (
            <button
              key={idx}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => onAnswer(String.fromCharCode(65 + idx))} // Sends "A", "B", "C", "D"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    );
  }
  
  export default Question;
  