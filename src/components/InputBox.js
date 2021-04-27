import React, { useState } from "react";

const InputBox = ({ generateSentences, generationNumber, targetSentence }) => {
  const [currentSentence, setIntermediateSentence] = useState({ value: "" });
  function setTargetSentence(event) {
    setIntermediateSentence({ value: event.target.value });
  }

  function infoBoxAppear() {
    document.getElementById("pop-up").style.display = "inline-block";
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
      <button
        id="goButton"
        onClick={() => generateSentences(currentSentence.value)}
      >
        GO
      </button>
      <div id="generationAmountDisplayer">
        Current Generation: {generationNumber}
      </div>
      <div id="infoBox">
        Using a population of a thousand, approximately{" "}
        {generationNumber * 1000} possible sentences were considered.{""}
      </div>
      <button id="infoButton" onClick={infoBoxAppear}>
        i
      </button>
    </div>
  );
};

export default InputBox;
