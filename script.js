/* the handle function should add the class show to the
 card-font and remove class hide from the card. and also use the data- attribute
 to check if the selected cards refer to the same picture.
 */
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  function shuffleCards() {
    cards.forEach((card) => {
      const randomPos = Math.floor(Math.random() * cards.length);
      card.style.order = randomPos;
    });
  }
  shuffleCards();
});
let dataValue = [];
let HideElements = [];
let ShowElements = [];
function handleImageClick(clickedImageEvent) {
  const clickedImage = clickedImageEvent.target;
  console.log(clickedImage.className);
  if (clickedImage.className == "question-mark") {
    const cardBack = clickedImage.parentNode;
    const Card = cardBack.parentNode;
    const cardFront = Card.querySelector(".card-front");
    cardBack.classList.remove("show");
    cardBack.classList.add("hide");
    cardFront.classList.remove("hide");
    cardFront.classList.add("show");
    dataValue.push(cardFront.getAttribute("data-value"));
    HideElements.push(cardBack);
    ShowElements.push(cardFront);
    check();
  } else if (clickedImage.className == "card-back show card-face") {
    const cardBack = clickedImage;
    const Card = cardBack.parentNode;
    const cardFront = Card.querySelector(".card-front");
    cardBack.classList.remove("show");
    cardBack.classList.add("hide");
    cardFront.classList.remove("hide");
    cardFront.classList.add("show");
    HideElements.push(cardBack);
    ShowElements.push(cardFront);
    dataValue.push(cardFront.getAttribute("data-value"));
    check();
  }
}

async function check() {
  setTimeout(() => {
    if (dataValue.length == 2) {
      if (dataValue[0] != dataValue[1]) {
        HideElements[0].classList.remove("hide");
        HideElements[1].classList.remove("hide");
        HideElements[0].classList.add("show");
        HideElements[1].classList.add("show");
        ShowElements[0].classList.remove("show");
        ShowElements[1].classList.remove("show");
        ShowElements[0].classList.add("hide");
        ShowElements[1].classList.add("hide");
        ShowElements = [];
        HideElements = [];
        dataValue = [];
        console.log("not same");
      } else {
        console.log("same");
        ShowElements = [];
        HideElements = [];
        dataValue = [];
      }
    }
  }, 1000);
}

document
  .querySelectorAll(".card-back")
  .forEach((qImage) => qImage.addEventListener("click", handleImageClick));
