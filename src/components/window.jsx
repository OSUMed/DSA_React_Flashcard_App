import React from "react";
import { useState } from "react";
export const Window = () => {
  const [cardNumber, setCardNumber] = useState(0);
  return (
    <>
      <h2>Window Questions</h2>
      <h3> Number of Cards {cardNumber} </h3>
    </>
  );
};
