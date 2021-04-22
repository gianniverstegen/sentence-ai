import React from 'react'

const GenerationResultBox = () => {
    const topSentences = ["Top Sentences", "sentence1", "sentence2","sentence3", "sentence4","sentence5"]
    const topFitness = ["Top Fitness",0.77, 0.60, 0.58, 0.54, 0.53]

    return (
        <div id="generationResultBox">
            <div id="topSentenceBlock">
            {topSentences.map((element, IDX) => {
                return (
                    <div className="topSentence" key={IDX} id={`${IDX}-element`}>{element}</div>
                )
            })}
            </div>
            <div id="topFitnessBlock">
            {topFitness.map((element, IDX) => {
                return (
                    <div className="topFitness" key={IDX} id={`${IDX}-element`}>{element}</div>
                )
            })}
            </div>
        </div>
    )
}

export default GenerationResultBox
