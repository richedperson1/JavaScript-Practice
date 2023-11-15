// Q.1
// Write a javascript program to find the frequency of items of as array

// Method 1

let arr = [1, 1, 2, 3, 4, 5, 6, 5, 8, 6, 4, 2, 1, 1, 2];

let obj = {};

arr.forEach((val) => {
  if (obj[val]) {
    obj[val]++;
  } else {
    obj[val] = 1;
  }
});

// console.log(obj);

// Method 2
let element = 1;
const output = arr.filter((val) => {
  return val == element;
}).length;

// console.log(arr);

// Q.2

const inputStr = 12235068;

//  Swapping the case of the string
// string = "Rutvik Jaiswal"
// output : rUTVIK jAISWAL

let string = "Your Are The Best";

let newForm = "";

for (let ind = 0; ind < string.length; ind++) {
  if (string[ind] == " ") {
    newForm += " ";
    continue;
  }

  if (string[ind] == string[ind].toLowerCase()) {
    newForm = newForm + string[ind].toUpperCase();
  } else {
    newForm = newForm + string[ind].toLowerCase();
  }
}
console.log(newForm);

// Printing the elements in the array

let arr1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

arr1.forEach((val) => {
  val.forEach((val) => {
    console.log("value : ", val);
  });
});
