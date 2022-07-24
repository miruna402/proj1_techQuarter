// 2. Write a function that takes two objects as arguments.
//     Merge both objects and create another object that has fields from the arguments.
//     Return the resulting object
//     Ex: For an input {'a': 1, 'b': 2}, {'c': 3, 'd': 4} it should return another object with the properties 'a', 'b', 'c', 'd'.

const obj1={
'a':1,
'b':2
};

const obj2={
    'c':3,
    'd':4
    };
function merging(a,b){
    const finalObj = Object.assign(a, b);
    return finalObj;
};
console.log(merging(obj1,obj2));