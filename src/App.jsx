import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Strings } from "./components/strings";
import { ShowQuestions } from "./components/showquestions";
import { Trees } from "./components/trees";
import { LinkedLists } from "./components/linkedlists";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [problemSet, setProblemSet] = useState("");
  const [startQuiz, setStartQuiz] = useState(false);
  const showProblems = () => {
    return;
  };
  const problemSetUp = (choice) => {
    setProblemSet(choice);
    setStartQuiz(false);
  };

  return (
    <div className="App">
      <h3>Choose problem set:</h3>
      <button onClick={() => problemSetUp("strings")}>String Problems</button>
      <button onClick={() => problemSetUp("trees")}>Tree Problems</button>
      <button onClick={() => problemSetUp("linkedlists")}>
        Linked List Problems
      </button>
      {problemSet && (
        <div>
          <span>Start {problemSet} problems? ==> </span>
          <button onClick={() => setStartQuiz(true)}>Press OK to start</button>
        </div>
      )}
      {startQuiz && <ShowProblems choice={problemSet} />}
    </div>
  );
}

const ShowProblems = ({ choice }) => {
  if (choice == "linkedlists") {
    return <LinkedLists questionType="linkedlists" />;
  }
  if (choice == "trees") {
    return <Trees questionType="trees" />;
  }
  if (choice == "strings") {
    return <Strings questionType="strings" />;
  }
};
export default App;
