import react from "react";

export const ShowQuestions = ({ questionSet }) => {
  console.log(questionSet, typeof questionSet, typeof questionSet);
  return (
    <>
      <h2>Show questions page</h2>
      {Object.keys(questionSet.map((question) => {
        return <h2>{question}.Question</h2>;
      })}
    </>
    //   )<h2>{questionSet} will be shown here</h2>;
  );
};
