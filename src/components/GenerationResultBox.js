import React from "react";

const GenerationResultBox = ({ currentGeneration }) => {
  const topSentences = [];
  const topFitness = [];

  if (currentGeneration !== undefined) {
    for (let i = 0; i < 20; i++) {
      topSentences.push(currentGeneration[i][0]);
      topFitness.push(currentGeneration[i][1]);
    }
  }

  return (
    <div id="generationResultBox">
      <div id="topSentenceBlock">
        {topSentences.map((element, IDX) => {
          return (
            <div className="topSentence" key={IDX} id={`${IDX}-element`}>
              {element}
            </div>
          );
        })}
      </div>
      <div id="topFitnessBlock">
        {topFitness.map((element, IDX) => {
          return (
            <div className="topFitness" key={IDX} id={`${IDX}-element`}>
              {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GenerationResultBox;
