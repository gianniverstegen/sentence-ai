import numberToCharacter from "./numberToCharacter";

function geneticAlgorithm(sentence, populationAmount, mutation) {
  const targetSentence = sentence;
  const amountOfNeurons = targetSentence.length;

  const initialPopulation = [];

  for (let i = 0; i < populationAmount; i++) {
    let chromosone = [];
    for (let i = 0; i < amountOfNeurons; i++) {
      let neuronNumber = Math.floor(Math.random() * 90);
      // 62 alphanumeric (A-Z, a-z, 0-9) and 28 special characters
      let neuron = numberToCharacter(neuronNumber);
      chromosone.push(neuron);
    }
    chromosone = chromosone.join();
    chromosone = removeOddCharacters(chromosone);
    initialPopulation.push(chromosone);
  }

  console.log(initialPopulation);
}

function removeOddCharacters(string) {
  var new_string = "";
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 1) continue;
    new_string += string[i];
  }
  return new_string;
}

export default geneticAlgorithm;
