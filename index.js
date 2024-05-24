// Slider Data
fetch('http://localhost:3000/Shop_Categories_Slider').then(res => res.json()).then(data => sliderData(data))
function sliderData(data) {
  let Fetch_Data = data.map((el, i) => slide(el.images, el.slider_title));
  document.querySelector('.slider').innerHTML = Fetch_Data.join("");
}
function slide(image, title) {
  let content = `
    <a href="Arrivals/arrivals.html" class="slide col-lg-2 col-md-3 col-sm-4 col-6 text-decoration-none">
    <img
      src=${image}
      alt=""
      class="col-12"
    />
    <h6 style="font-size: 13px;  color: black; ">${title}</h6>
  </a>
    `
  return content;
}

// Suggested Data
fetch('http://localhost:3000/Shop_Categories').then((res) => res.json()).then(data => shopCategori_Data(data));
function shopCategori_Data(data) {
  let categorie_Data = data.map((el) => Categorie(el.images, el.title, el.discription))
  document.querySelector('.shop-categorie').innerHTML = categorie_Data;
}
function Categorie(images, title, discription) {
  let content = `
  <a href="Arrivals/arrivals.html " class="text-decoration-none">
    <div class="categorie col-lg-5 col-md-5 col-sm-10 col-11 mt-5 m-auto">
            <img src=${images} alt="" class="col-12 ">
            <div class="shop-categorie-text col-12 lh-1">
                <h3 class="fw-bolder text-dark">${title}</h3>
                    <p class="text-dark">${discription}</p>
                    <a href="" style="color: gray; font-size: 15px;">Shop Bags</a>
            </div>  
        </div>
        </a>
    `
  return content;
}

// Fetch Data And Show Them In Cart Menu
fetch('http://localhost:3000/cart').then((res) => res.json()).then(data => cartData(data));
function cartData(data) {
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