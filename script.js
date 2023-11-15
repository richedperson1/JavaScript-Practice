const blackContainer = document.querySelector(".main-container");
const redContainer = document.querySelector(".sub-container");

blackContainer.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  console.log("black container clicked");
});

redContainer.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  console.log("red container clicked");
});
