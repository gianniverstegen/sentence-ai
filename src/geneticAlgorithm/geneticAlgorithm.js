import numberToCharacter from "./numberToCharacter";
import getNewPopulation from "./getNewPopulation";

function geneticAlgorithm(sentence, populationAmount, mutation, oldPopulation) {
  const targetSentence = sentence;
  const amountOfNeurons = targetSentence.length;
  var currentPopulation = undefined;

  // Old population things
  if (oldPopulation === undefined) {
    currentPopulation = getInitialPopulation(populationAmount, amountOfNeurons);
  } else {
    let untreatedOldPopulation = oldPopulation;
    currentPopulation = getNewPopulation(
      untreatedOldPopulation,
      populationAmount,
      mutation
    );
    // console.log(currentPopulation);
  }

  // treat the current population
  let evaluatedPopulation = getFitness(currentPopulation, targetSentence);
  let sorted_population = sort_object(evaluatedPopulation);
  // let newPopulation = getNewPopulation(sorted_population, populationAmount); // This function is here for testing
  return sorted_population;
}

function getFitness(population, targetSentence) {
  for (let i = 0; i < population.length; i++) {
    let amountRight = 0;
    for (let j = 0; j < population[i][0].length; j++) {
      if (population[i][0].charAt(j) === targetSentence.charAt(j)) {
        amountRight += 1;
      }
    }
    let fitness =
      Math.round((amountRight / targetSentence.length) * 1000) / 1000;
    population[i].push(fitness);
  }
  return population;
}

function sort_object(population) {
  population.sort(function (a, b) {
    return b[1] - a[1];
  });
  return population;
}

function getInitialPopulation(populationAmount, amountOfNeurons) {
  const initialPopulation = [];
  for (let i = 0; i < populationAmount; i++) {
    let chromosone = [];
    for (let i = 0; i < amountOfNeurons; i++) {
      let neuronNumber = Math.floor(Math.random() * 80);
      // 62 alphanumeric (A-Z, a-z, 0-9) and 28 special characters
      let neuron = numberToCharacter(neuronNumber);
      chromosone.push(neuron);
    }
    chromosone = chromosone.join();
    chromosone = _removeOddCharacters(chromosone);
    initialPopulation.push([chromosone]);
  }
  return initialPopulation;
}

function _removeOddCharacters(string) {
  var new_string = "";
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 1) continue;
    new_string += string[i];
  }
  return new_string;
}

export default geneticAlgorithm;
