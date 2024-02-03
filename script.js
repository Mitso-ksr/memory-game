/* the handle function should add the class show to the
 card-font and remove class hide from the card. and also use the data- attribute
 to check if the selected cards refer to the same picture.
 */
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
  } else if (clickedImage.className == "card-back show card-face") {
    const cardBack = clickedImage;
    const Card = cardBack.parentNode;
    const cardFront = Card.querySelector(".card-front");
    cardBack.classList.remove("show");
    cardBack.classList.add("hide");
    cardFront.classList.remove("hide");
    cardFront.classList.add("show");
  }
}

document
  .querySelectorAll(".card-back")
  .forEach((qImage) => qImage.addEventListener("click", handleImageClick));
