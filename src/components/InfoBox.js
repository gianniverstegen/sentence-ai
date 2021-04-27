import React from "react";

const InfoBox = ({ goNext }) => {
  function removeAll() {
    document.getElementById("pop-up").style.display = "none";
  }
  return (
    <div className="pop-up" id="pop-up">
      <h2 id="pop-upHeader">Sentence-AI</h2>
      <p id="popupTextFirstSlide">
        Enter a sentence in the text-box, and the program will generate that
        sentence using a genetic algorithm. The pink text under the input box
        will show the amount of sentences considered. A genetic algorithm is way
        more efficient than a bruteforce solution. A bruteforce solution will
        consider up to the length of the sentence to the power of 75 sentences
        to arrive at the solution.
      </p>
      <button id="firstButton" onClick={removeAll}>
        OK
      </button>
    </div>
  );
};

export default InfoBox;
