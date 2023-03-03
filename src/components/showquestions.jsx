import react from "react";
import { useState } from "react";

export const ShowQuestions = ({ questionSet, color, questionType }) => {
  const [questions, setQuestions] = useState(Object.values(questionSet));
  const [cardNumber, setCardNumber] = useState(0);
  const [question, setQuestion] = useState(questions[0].Question);
  const [answer, setAnswer] = useState(questions[1].Answer);
  const [turnCard, setTurnCard] = useState(false);
  //   console.log(questions, question, answer);
  const nextQuestion = () => {
    if (cardNumber + 1 == questionSet.length) {
      setCardNumber(0);
      setQuestion(questions[0].Question);
      setAnswer(questions[0].Answer);
      return;
    }
    setCardNumber(cardNumber + 1);
    setQuestion(questions[cardNumber + 1].Question);
    setAnswer(questions[cardNumber + 1].Answer);
    // setCardNumber((cardNumber) => cardNumber + 1);
  };
  const previousQuestion = () => {
    if (cardNumber - 1 < 0) {
      setCardNumber(0);
      setQuestion(questions[0].Question);
      setAnswer(questions[0].Answer);
      return;
    }
    setCardNumber(cardNumber - 1);
    setQuestion(questions[cardNumber - 1].Question);
    setAnswer(questions[cardNumber - 1].Answer);
    // setCardNumber((cardNumber) => cardNumber + 1);
  };
  return (
    <>
      {" "}
      <div className={"card-" + questionType}>
        {!turnCard && question}
        {turnCard && answer}
      </div>
      <button onClick={previousQuestion}>Previous Card</button>
      <button onClick={() => setTurnCard(() => !turnCard)}>Turn Card</button>
      <button onClick={nextQuestion}>Next Card</button>
    </>
  );
};

// {Object.values(questionSet).map((question) => {
//     return (
//       <>
//         <h2>{question}</h2>
//         <h2>{question.Answer}</h2>
//       </>
//     );
//   })}