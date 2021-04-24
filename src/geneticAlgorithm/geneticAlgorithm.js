import numberToCharacter from "./numberToCharacter";

function geneticAlgorithm(sentence, populationAmount, mutation, oldPopulation) {
  const targetSentence = sentence;
  const amountOfNeurons = targetSentence.length;

  if (oldPopulation === undefined) {
    var currentPopulation = getInitialPopulation(
      populationAmount,
      amountOfNeurons
    );
  } else {
    var untreatedOldPopulation = oldPopulation;
  }

  let evaluatedPopulation = evaluateFitness(currentPopulation, targetSentence);
  let sorted_population = sort_object(evaluatedPopulation);
  return sorted_population;
}

function evaluateFitness(population, targetSentence) {
  for (const [key] of Object.entries(population)) {
    let fitness = 0;
    for (let i = 0; i < key.length; i++) {
      if (key.charAt(i) === targetSentence.charAt(i)) {
        fitness += 1;
      }
    }
    population[key] =
      Math.round((fitness / targetSentence.length) * 10000) / 10000;
  }
  return population;
}

function sort_object(dict) {
  var items = Object.keys(dict).map(function (key) {
    return [key, dict[key]];
  });

  // Sort the array based on the second element
  items.sort(function (first, second) {
    return second[1] - first[1];
  });
  return items;
}

function getInitialPopulation(populationAmount, amountOfNeurons) {
  const initialPopulation = {};
  for (let i = 0; i < populationAmount; i++) {
    let chromosone = [];
    for (let i = 0; i < amountOfNeurons; i++) {
      let neuronNumber = Math.floor(Math.random() * 90);
      // 62 alphanumeric (A-Z, a-z, 0-9) and 28 special characters
      let neuron = numberToCharacter(neuronNumber);
      chromosone.push(neuron);
    }
    chromosone = chromosone.join();
    chromosone = _removeOddCharacters(chromosone);
    initialPopulation[chromosone] = "undefined";
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
