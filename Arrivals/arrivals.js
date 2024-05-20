let filterData = [];
fetch("http://localhost:3000/Arrivals_Data")
  .then((res) => res.json())
  .then((data) => {
    makeCards(data);
    filterData = data;
  });

function makeCards(data) {
  let store = data.map((el) => singleCard(el.title, el.image_url, el.price));
  document.querySelector(".arrMainBar-column").innerHTML = store;
}

function singleCard(title, images, price) {
  let card = `
 
    <a href="/Add To Cart/Add.html"
                class="cart-item col-lg-3 col-md-5 col-sm-5 col-12 p-lg-3 p-md-3 p-sm-4 ps-5"
              >
                <img
                  src=${images}
                  alt=""
                  class="col-12 w-100"
                />
                <p id="cart-item-name" class="mt-2 lh-sm">${title}</p>
                <p id="cart-item-price">Price: $${price}</p>
              </a>
            
    `;

  return card;
}

// Filters
document.querySelector(".Backpacks").addEventListener("click", () => {
  let store = filterData.filter((el) => el.category == "Backpack");
  makeCards(store);
});
document.querySelector(".Duffles").addEventListener("click", () => {
  let store = filterData.filter((el) => el.category == "duffle");
  makeCards(store);
});
document.querySelector(".Hard-Shells").addEventListener("click", () => {
  let store = filterData.filter((el) => el.category == "Hard Shells");
  makeCards(store);
});
document.querySelector(".Hard-Shells").addEventListener("click", () => {
  let store = filterData.filter((el) => el.category == "Hard Shells");
  makeCards(store);
});
document.querySelector(".Hip-Packs").addEventListener("click", () => {
  let store = filterData.filter((el) => el.category == "Hip Packs");
  makeCards(store);
});
document.querySelector(".Organizers").addEventListener("click", () => {
  let store = filterData.filter((el) => el.category == "organizers");
  makeCards(store);
});
document.querySelector(".Soft-Shells").addEventListener("click", () => {
  let store = filterData.filter((el) => el.category == "Soft shell");
  makeCards(store);
});
document.querySelector(".Totes").addEventListener("click", () => {
  let store = filterData.filter((el) => el.category == "Totes");
  makeCards(store);
});

// High And Loo Filter
document.querySelector("#HL").addEventListener("click", () => {
  const my = filterData.sort((a, b) => b.price - a.price);
  makeCards(my);
});
document.querySelector("#LH").addEventListener("click", () => {
  const my = filterData.sort((a, b) => a.price - b.price);
  makeCards(my);
});

// Responsive Filters
document.querySelector("#Backpacks").addEventListener("click", () => {
  let store = filterData.filter((el) => el.category == "Backpack");
  makeCards(store);
});
document.querySelector("#Duffles").addEventListener("click", () => {
  let store = filterData.filter((el) => el.category == "duffle");
  makeCards(store);
});
document.querySelector("#Hard-Shells").addEventListener("click", () => {
  let store = filterData.filter((el) => el.category == "Hard Shells");
  makeCards(store);
});
document.querySelector("#Hip-Packs").addEventListener("click", () => {
  let store = filterData.filter((el) => el.category == "Hip Packs");
  makeCards(store);
});
document.querySelector("#Organizers").addEventListener("click", () => {
  let store = filterData.filter((el) => el.category == "organizers");
  makeCards(store);
});
document.querySelector("#Soft-Shells").addEventListener("click", () => {
  let store = filterData.filter((el) => el.category == "Soft shell");
  makeCards(store);
});
document.querySelector("#Totes").addEventListener("click", () => {
  let store = filterData.filter((el) => el.category == "Totes");
  makeCards(store);
});
