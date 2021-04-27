import React, { useState, useEffect } from "react";
import geneticAlgorithm from "./geneticAlgorithm/geneticAlgorithm";
import InputBox from "./components/InputBox";
import GenerationInputBox from "./components/GenerationResultBox";
import useInterval from "./useInterval";

function App() {
  const [globalState, setState] = useState({
    isRunning: false,
    populationAmount: 1000,
    mutation: 0.01,
  });

  const [targetSentence, setSentence] = useState({ value: "" });
  const [currentGeneration, setGeneration] = useState(undefined);
  const [generationNumber, setGenerationNumber] = useState(0);
  const [isRunning, setRunning] = useState(false);

  function generateSentences(sentence) {
    setSentence({ value: sentence });
    setGenerationNumber(1);
    let currentGeneration = geneticAlgorithm(
      sentence,
      globalState.populationAmount,
      globalState.mutation,
      undefined
    );
    setGeneration(currentGeneration);
    setRunning(true);
  }

  useInterval(
    () => {
      if (currentGeneration[0][0] === targetSentence.value) setRunning(false);
      else {
        let newGeneration = geneticAlgorithm(
          targetSentence.value,
          globalState.populationAmount,
          globalState.mutation,
          currentGeneration
        );
        setGeneration(newGeneration);
        let currentGenerationNumber = generationNumber + 1;
        setGenerationNumber(currentGenerationNumber);
      }
    },
    isRunning ? 40 : null
  );

  useEffect(() => {
    // Listens to keyinput
    window.addEventListener("keypress", (e) => {
      e.stopImmediatePropagation();
      stopTheLoop(e);
    });
  });

  function stopTheLoop(e) {
    if (e.key === "s") {
      setRunning(false);
    }
  }
  // use setInterval maybe
  // while (currentGeneration[0][0] !== sentence) {
  //   let newGeneration = geneticAlgorithm(
  //     sentence,
  //     globalState.populationAmount,
  //     globalState.mutation,
  //     currentGeneration
  //   );
  //   currentGeneration = newGeneration;
  // }
  // setGeneration(currentGeneration);

  return (
    <div className="App">
      <InputBox
        generateSentences={generateSentences}
        generationNumber={generationNumber}
        targetSentence={targetSentence}
      />
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
