function getNewPopulation(oldPopulation, populationAmount) {
  // This function is responsible for generating a new population based on the previous' fitness

  let newPopulation = [];
  let totalFitness = 0;

  for (let i = 0; i < oldPopulation.length; i++) {
    // calculating total fitness
    totalFitness += oldPopulation[i][1];
  }

  let sum = 0;
  let relativeChance = [[0]];
  for (let i = 0; oldPopulation[i][1] !== 0; i++) {
    // giving each sentence a cumulative chance based on their fitness
    sum += oldPopulation[i][1] / totalFitness;
    relativeChance.push([sum, oldPopulation[i][0]]);
  }

  while (newPopulation.length < populationAmount) {
    // making the new population
    let newChildren = getChild(relativeChance);
    newPopulation.push([newChildren[0]]);
    newPopulation.push([newChildren[1]]);
  }
  return newPopulation;
}

function getChild(relativeChance) {
  // generating two random numbers
  let randomNumber1 = Math.random();
  let randomNumber2 = Math.random();
  let parent1 = undefined;
  let parent2 = undefined;

  for (let i = 1; i < relativeChance.length; i++) {
    // finding out which random number belongs to which sentence
    if (
      randomNumber1 < relativeChance[i][0] &&
      randomNumber1 > relativeChance[i - 1][0]
    ) {
      parent1 = relativeChance[i][1];
      if (parent2 !== undefined) break;
      // if both parents have a sentence assigned, we can break
    }
    if (
      randomNumber2 < relativeChance[i][0] &&
      randomNumber2 > relativeChance[i - 1][0]
    ) {
      parent2 = relativeChance[i][1];
      if (parent1 !== undefined) break;
      // if both parents have a sentence assigned, we can break
    }
  }

  // crossing over the two parents to get two children
  let child1 =
    parent1.slice(0, Math.round(parent1.length / 2)) +
    parent2.slice(Math.round(parent1.length / 2));
  let child2 =
    parent2.slice(0, Math.round(parent1.length / 2)) +
    parent1.slice(Math.round(parent1.length / 2));
  // add a mutation function here
  return [child1, child2];
}

export default getNewPopulation;
