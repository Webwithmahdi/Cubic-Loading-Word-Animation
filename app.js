const words = document.querySelectorAll(".loading-word");
const wordsCount = document.querySelector(".loading-area").childElementCount;
function wordsTransformStart() {
  for (let j = 0; j < wordsCount; j++) {
    setTimeout(function () {
      words[j].classList.add("word-style");
    }, j * 250);
  }
}
function wordsTransformStop() {
  for (let i = 0; i < wordsCount; i++) {
    setTimeout(function () {
      words[i].classList.remove("word-style");
    }, i * 250);
  }
}
setTimeout(wordsTransformStart, 100);
setInterval(wordsTransformStop, 2000);
setInterval(wordsTransformStart, 4000);
