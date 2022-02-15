function percentageOfWorld1(population) {
  return population / 79;
}

function describePopulation(country, population) {
  return `${country} has ${population} million population, which is about ${percentageOfWorld1(
    population
  )}% of the world.`;
}

const myCountry = {
  country: "India",
  capital: "Delhi",
  language: "Hindi",
  population: 130,
  neighbours: ["Malives", "Bhutan", "Nepal"],
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  },
  checkIsland: function () {
    return (this.isIsland = this.neighbours.length ? true : false);
  },
};
console.log(myCountry.describe());
console.log(myCountry.checkIsland());
