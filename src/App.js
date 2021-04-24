import React, { useState } from "react";
import geneticAlgorithm from "./geneticAlgorithm/geneticAlgorithm";
import InputBox from "./components/InputBox";
import GenerationInputBox from "./components/GenerationResultBox";

function App() {
  const [globalState, setState] = useState({
    isRunning: false,
    populationAmount: 1000,
    mutation: 0.01,
  });

  const [targetSentence, setSentence] = useState({ value: "hi" });
  const [currentGeneration, setGeneration] = useState(undefined);

  function generateSentences(sentence) {
    setSentence({ value: sentence });
    let newGeneration = geneticAlgorithm(
      sentence,
      globalState.populationAmount,
      globalState.mutation,
      undefined
    );
    setGeneration(newGeneration);
  }

  return (
    <div className="App">
      <InputBox generateSentences={generateSentences} />
      <GenerationInputBox
        currentGeneration={
          currentGeneration === undefined
            ? undefined
            : currentGeneration.slice(0, 20)
        }
      />
    </div>
  );
}

export default App;
