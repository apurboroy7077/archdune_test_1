export const cardFunctionOfCompetitionList = () => {
  const myCards = Array.from(document.getElementsByClassName("container-fmx"));
  for (let i = 0; i < myCards.length; i++) {
    const singleCard = myCards[i];

    const div1 = singleCard.children[0];
    const div2 = singleCard.children[1];
    singleCard.addEventListener("mouseover", () => {
      div2.style.opacity = "0";
      div2.style.pointerEvents = "none";
      div2.style.scale = "0.8";
      div1.style.opacity = "1";
      div1.style.pointerEvents = "all";
      div1.style.scale = "1";
    });
    singleCard.addEventListener("mouseout", () => {
      div2.style.opacity = "1";
      div2.style.pointerEvents = "all";
      div2.style.scale = "1";
      div1.style.opacity = "0";
      div1.style.pointerEvents = "none";
      div1.style.scale = "0.8";
    });
  }
};
