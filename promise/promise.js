// Promise : It's a placeholder for the future values

const somePromise = new Promise((hoga, nahihoga) => {
  setTimeout(() => {
    return hoga("Mission completed");
  }, 3000);
  return nahihoga("Mission incompleted");
});

console.log(somePromise);
somePromise
  .then((result) => {
    console.log("Mere mission ka status : ", result);
  })
  .catch((data) => {
    console.log("The final result is : ", data);
  });
