import React, { useState } from "react";

const InputBox = ({ generateSentences, generationNumber }) => {
  const [currentSentence, setIntermediateSentence] = useState({ value: "" });

  function setTargetSentence(event) {
    setIntermediateSentence({ value: event.target.value });
  }

  return (
    <div id="inputBox">
      <form>
        <input
          autoComplete="off"
          type="text"
          name="targetSentence"
          onChange={setTargetSentence}
        />
      </form>
      <button onClick={() => generateSentences(currentSentence.value)}>
        GO
      </button>
      <div id="generationAmountDisplayer">
        Current Generation: {generationNumber}
      </div>
    </div>
  );
};

export default InputBox;
