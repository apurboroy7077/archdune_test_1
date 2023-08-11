const fotographyButton = document.querySelectorAll(
  ".photography-button-filter button"
);

fotographyButton.forEach((button) =>
  button.addEventListener(
    "click",
    (filterCard = () => {
      const fotographyCard = document.querySelectorAll(
        ".filterabol-card .card"
      );

      document.querySelector(".active-btn").classList.remove("active-btn");
      button.classList.add("active-btn");

      fotographyCard.forEach((card) => {
        card.classList.add("hiden");

        console.log(button.dataset.name);

        if (
          card.dataset.name == button.dataset.name ||
          button.dataset.name === "all"
        ) {
          card.classList.remove("hiden");
        }
      });
    })
  )
);
