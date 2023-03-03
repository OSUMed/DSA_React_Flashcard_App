import React from "react";
import { useState } from "react";
import { ShowQuestions } from "./showquestions";
export const LinkedLists = ({ questionType }) => {
  const [cardNumber, setCardNumber] = useState(0);
  const [questionList, setQuestionList] = useState(questions);
  return (
    <>
      <h2>
        Linked List QuestionsQuestions: common linked list patterns in DSA
        technical exam questions
      </h2>
      <h3> Number of Cards: 6 </h3>

      <ShowQuestions questionSet={questionList} questionType={questionType} />
    </>
  );
};

const questions = [
  {
    id: 0,
    Question:
      "Insertion and deletion into a linked list is what complexity vs arrays?",
    Answer: "O(1). Arrays are O(n)",
  },
  {
    id: 1,
    Question: "What does a dummy node ensure?",
    Answer:
      "Operations are never executed on the head or tail. Removes headache of conditional checks for edge cases",
  },
  {
    id: 2,
    Question: "To get the kth last node, where do our two pointers start at?",
    Answer: "One is kth node ahead of the other one",
  },
  {
    id: 3,
    Question: "How to detect a cycle in a linked list?",
    Answer:
      "Have two pointers where one moves twice the speed as the other. If they meet, cycle exists",
  },
  {
    id: 4,
    Question: "How to get the middle node of a linked list?",
    Answer:
      "Two pointers where one moves twice as fast. When faster reached end of the list, the slower will be at the middle node.",
  },
  {
    id: 5,
    Question: "How are linked list and array questions similar?",
    Answer: "You can use 2 pointer techniques with both",
  },
  {
    id: 6,
    Question:
      "To reverse a linked list what pointers do you return at the end?",
    Answer: "the previous pointer.",
  },
];
