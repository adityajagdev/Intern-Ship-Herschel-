let filterData = [];

// Fetch Card Data And Showing
fetch("http://localhost:3000/Arrivals_Data")
  .then((res) => res.json())
  .then((data) => {
    makeCards(data);
    filterData = data;
  });
function makeCards(data) {
  let store = data.map((el) => singleCard(el.title, el.image_url, el.price, el.category));
  document.querySelector(".arrMainBar-column").innerHTML = store;
}
function singleCard(title, images, price, category) {
  let card = `
    <a href="/Add To Cart/Add.html?title=${encodeURIComponent(title)}&images=${encodeURIComponent(images)}&price=${encodeURIComponent(price)}&category=${encodeURIComponent(category)}" class="cart-item col-lg-3 col-md-5 col-sm-5 col-12 p-lg-3 p-md-3 p-sm-4 ps-5 text-decoration-none text-dark"
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

// Fetch Data And Show Them In Cart Menu
fetch('http://localhost:3000/cart').then((res) => res.json()).then(data => {
  let  dataLength = data.length
  cartData(data, dataLength) 
});
function cartData(data,dataLength) {
  if(dataLength == 0){
    document.getElementById('Empty').innerHTML = 'Your Cart Is Empty!!'
  }
  let cartData2 = data.map((el) => createCart(el.images, el.title, el.pricel,el.id))
  document.querySelector('#cart-card').innerHTML = cartData2;
}
function createCart(images, title, price, id) {
  let my = `
    <div class="cart-item col-lg-4 col-md-4 col-sm-4 col-6">
    <img
      src=${images}
      alt=""
      class="col-12"
    />
    <p id="cart-item-name" class="mt-2 lh-1">${title}</p>
    <p id="cart-item-price">$${price}</p>
    <button data-id=${id} class="delete-cart btn border">Delete</button>
  </div>
    `
  return my;
}

document.addEventListener('click',(e)=>{
  if(e.target.classList.contains('delete-cart')){
    deleteCart(e.target.dataset.id)
  }
})

function deleteCart(id){
  fetch(`http://localhost:3000/cart/${id}`,{
    method: 'DELETE'
  }).then((res) => res.json()).then(data => cartData(data));
}