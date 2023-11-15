// Object in the javascript is like dictionary in the python

// Object has key value pairs

let object = { name: "rutvik", lastName: "jaiswal" };

let obj = object;
obj["roll"] = 5;

// ! Object is mutable but we can make it immutable by following.

//* Object.freeze will make object immutable now we can't able to change it.
Object.freeze(obj);

console.log(obj);
