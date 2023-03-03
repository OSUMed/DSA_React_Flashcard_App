import React from "react";
import { useState } from "react";
import { ShowQuestions } from "./showquestions";
export const Trees = ({ color, questionType }) => {
  const [cardNumber, setCardNumber] = useState(0);
  const [questionList, setQuestionList] = useState(questions);
  return (
    <>
      <h2>Tree Questions {color}</h2>
      <h3> Number of Cards {cardNumber} </h3>
      {questionList} &&{" "}
      <ShowQuestions
        questionSet={questionList}
        questionType={questionType}
        color={color}
      />
    </>
  );
};

const questions = [
  {
    id: 0,
    Question: "What is the fastest time complexity runtime for string problems",
    Answer:
      "O(1) soemtimes because there can only be 256 characters or 26 letter limit",
  },
  {
    id: 1,
    Question:
      "What is the best way to keep a character count for string questions?",
    Answer:
      "using the ord(c) method you can do it in O(1) time. Don't need to do O(n)",
  },
  {
    id: 2,
    Question: "What is the best way to see if two strings are anagrams?",
    Answer:
      "sorting takes nlogn but can be faster with frequency counting--O(1) space if using ord",
  },
  {
    id: 3,
    Question: "Palindromes: best way?",
    Answer: "jsut return s==s[::-1] BUT you can do 2 pointers too ",
  },
  {
    id: 4,
    Question: "To concatenate a string, how long is the runtime?",
    Answer: "O(n)",
  },
  {
    id: 5,
    Question: "For 2sum, what are the different ways to do it?",
    Answer:
      "if you can sort, do 2 pointers. If you can't sort, use a dictionary and track Potential Answer ",
  },
  {
    id: 6,
    Question: "How do you use ord and chr?",
    Answer:
      "use ord to make it into a number and use chr to make it into a char",
  },
];
