//1. Given an array of objects that have a field called population, sort the objects by population size. Return the sorted array.

var arr = [
    {
        "city": "Cluj",
        "population": "19000",
        "size": "20"
    }, {
        "city": "Brasov",
        "population": "25000",
        "size": "35"
    }, {
        "city": "Bacau",
        "population": "8000",
        "size": "9"
    }
];

arr.sort((firstPop, lastPop) =>firstPop.population - lastPop.population);
console.log(arr);