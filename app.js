const selectBtn = [...document.querySelectorAll(".filters__button")];
const cards = [...document.querySelectorAll(".card")];

const activeBeer = item => {
  removeClass();
  item.classList.add("active");
  const type = item.dataset["type"];

  if (type === "all") {
    cards.forEach(card => (card.style.display = "grid"));
  } else {
    cards.forEach(card => (card.style.display = "grid"));
    let arrBeer = cards.filter(card => card.dataset["type"] !== type);
    arrBeer.filter(item => {
      item.style.display = "none";
    });
  }
};

const removeClass = () => {
  selectBtn.forEach(item => {
    item.classList.remove("active");
  });
};

selectBtn.forEach(item => {
  item.addEventListener("click", () => activeBeer(item));
});
