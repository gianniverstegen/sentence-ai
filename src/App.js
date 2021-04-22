import React, { useState } from "react";
import geneticAlgorithm from "./geneticAlgorithm/main";
import InputBox from "./components/InputBox";
import GenerationInputBox from "./components/GenerationResultBox";

function App() {
  const [globalState, setState] = useState({
    isRunning: false,
    populationAmount: 1,
    mutation: 0.01,
  });

  const [targetSentence, setSentence] = useState({ value: "hi" });
  const [generationTopPlayer, setGeneration] = useState(1);

  function generateSentences(sentence) {
    setSentence({ value: sentence });
    geneticAlgorithm(
      sentence,
      globalState.populationAmount,
      globalState.mutation
    );
  }

  return (
    <div className="App">
      <InputBox generateSentences={generateSentences} />
      <GenerationInputBox targetSentence={targetSentence} />
    </div>
  );
}

export default App;
