import React from "react";
import { useState } from "react";
export const LinkedLists = () => {
  const [cardNumber, setCardNumber] = useState(0);
  return (
    <>
      <h2>LinkedLists Questions</h2>
      <h3> Number of Cards {cardNumber} </h3>
    </>
  );
};