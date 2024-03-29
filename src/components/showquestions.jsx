import React from "react";
import react from "react";
import { useState } from "react";

export const ShowQuestions = ({ questionSet, questionType }) => {
  const [questions, setQuestions] = useState(Object.values(questionSet));
  const [cardNumber, setCardNumber] = useState(0);
  const [question, setQuestion] = useState(questions[0].Question);
  const [answer, setAnswer] = useState(questions[1].Answer);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [turnCard, setTurnCard] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [divColor, setDivColor] = useState("black");
  //   console.log(questions, question, answer);
  const pickRandom = () => {
    setDivColor("black");
    const integer = Math.floor(Math.random() * 6);
    console.log("random integer is: ", integer);
    setCardNumber(integer);
    setQuestion(questions[integer].Question);
    setAnswer(questions[integer].Answer);
    setTurnCard(false);
  };
  const nextQuestion = () => {
    setDivColor("black");
    if (cardNumber + 1 == questionSet.length) {
      setCardNumber(0);
      setQuestion(questions[0].Question);
      setAnswer(questions[0].Answer);
      setTurnCard(false);
      return;
    }
    setCardNumber(cardNumber + 1);
    setQuestion(questions[cardNumber + 1].Question);
    setAnswer(questions[cardNumber + 1].Answer);
    setTurnCard(false);
    // setCardNumber((cardNumber) => cardNumber + 1);
  };
  const previousQuestion = () => {
    setDivColor("black");
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

  const handleChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("What is submitted? ", e.value);
    const includesAnswer = answer.includes(userAnswer);
    console.log("the user answer is: ", includesAnswer, userAnswer);
    if (answer === userAnswer || includesAnswer) {
      const maxStreak = Math.max(longestStreak, currentStreak + 1);
      setLongestStreak(maxStreak);
      setCurrentStreak(currentStreak + 1);
      console.log(answer, userAnswer);
      if (answer === userAnswer) {
        setDivColor("green");
      } else if (includesAnswer) {
        setDivColor("yellow");
      }
    } else if (!includesAnswer) {
      setCurrentStreak(0);
      setDivColor("red");
    }
  };
  const divStyle = {
    padding: "10px",
    border: `10px ${{ divColor }}`,
    borderColor: divColor,
    borderWidth: "5px",
    borderStyle: "solid",
  };

  return (
    <>
      <h2>Current Streak: {currentStreak}</h2>
      <h2>Longest Streak: {longestStreak}</h2>
      <div
        // style={{ borderColor: "purple", padding: "5px" }}

        className={"card card-" + questionType}
        onClick={() => setTurnCard(() => !turnCard)}
      >
        {!turnCard && question}
        {turnCard && answer}
      </div>
      <button onClick={previousQuestion}>Previous Card</button>
      <button onClick={() => setTurnCard(() => !turnCard)}>Turn Card</button>
      <button onClick={nextQuestion}>Next Card</button>
      <button onClick={pickRandom}>Pick Random Card</button>
      <form onSubmit={handleSubmit}>
        <input
          style={divStyle}
          type="text"
          name="name"
          placeholder="Place answer here"
          value={userAnswer}
          onChange={handleChange}
        ></input>
        <button type="submit">Submit Guess</button>
        <p>
          Yellow Border = Partial Answer ; Green Border = "Complete Answer"; Red
          Border: "Answer is wrong"
        </p>
      </form>
      {userAnswer}
    </>
  );
};
