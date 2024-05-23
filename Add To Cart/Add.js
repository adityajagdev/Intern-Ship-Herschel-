// Get Data From URL
let a = new URLSearchParams(window.location.search)
document.getElementById('title').innerHTML = a.get('title')
document.getElementById('price').innerHTML = a.get('price')
document.getElementById('category').innerHTML = a.get('category')
document.getElementById('images').src = a.get('images')

// Add To Cart
document.querySelector('#addCart').addEventListener('click', () => {
  let cartOBJ = {
    images: a.get('images'),
    title: a.get('title'),
    price: a.get('price')
  }

  fetch('http://localhost:3000/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cartOBJ)
  }).then((res) => res.json()).then(data => alert("Prodect Added"));
})


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