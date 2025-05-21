const API_BASE = "https://linen-aromatic-pewter.glitch.me";

export async function fetchQuestions() {
  const res = await fetch(`${API_BASE}/api/questions`);
  return res.json();
}

export async function submitAnswers(gender, answers) {
  try {
    const response = await fetch(
      "https://linen-aromatic-pewter.glitch.me/api/get-character",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gender, answers }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching character result:", error);
    throw error;
  }
}
