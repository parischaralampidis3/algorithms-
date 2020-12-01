
//find the city whose population is greater than 3 million


let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];


//make a variable to store array results

let bigCities = [];
/*
//iterate the array of objects
//create a for loop 

for( let i = 0; i < cities.length; i++){

    if( cities[i].population > 3000000 ){
        bigCities.push(cities[i]);
    }
}
console.log(bigCities);
*/


// use filter method

const populationResult = cities.filter( city=> city.population > 3000000)

console.log(populationResult)