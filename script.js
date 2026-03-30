const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// NO button movement (FINAL FIX)
noBtn.addEventListener("mouseover", () => {
  const parent = document.querySelector(".button-container");

  const maxX = parent.clientWidth - noBtn.clientWidth;
  const maxY = parent.clientHeight - noBtn.clientHeight;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// YES button works
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  resultContainer.style.display = "block";
  gifResult.play();
});
