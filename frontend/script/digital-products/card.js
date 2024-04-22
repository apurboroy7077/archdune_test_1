const cards = document.getElementsByClassName("digital-product-card");
const oldCode = `<div>
<img
  class="digital-product-card-image-1"
  src="./images/digital-products/product-2.jpg"
  alt=""
/>
</div>
<div>
<div class="digital-product-card-text-1">
  Flat Vector People
</div>
</div>
<div>
<div class="digital-product-card-text-2">$9.00</div>
</div>`;
const updatedCode = `
<div class="fade-in">
                <div class="digital-product-card-image-div">
                  <img
                    class="digital-product-card-image-1"
                    src="./images/digital-products/product-3.jpg"
                    alt=""
                  />
                  <button class="digital-product-card-quick-view-button">
                    Quick View
                  </button>
                </div>
              </div>
              <div>
                <div class="digital-product-card-text-1">
                  Flat Vector People
                </div>
              </div>
              <div>
                <div class="digital-product-card-text-2">$9.00</div>
              </div>
`;

for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  let isFirstTime = "YES";
  card.addEventListener("mouseover", () => {
    if (isFirstTime === "YES") {
      card.innerHTML = updatedCode;
      isFirstTime = "NO";
      console.log(isFirstTime);
    }
  });
  card.addEventListener("mouseleave", () => {
    if (isFirstTime === "NO") {
      card.innerHTML = oldCode;
      isFirstTime = "YES";
    }
  });
}
