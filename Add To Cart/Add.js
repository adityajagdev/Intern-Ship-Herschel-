let a = new URLSearchParams(window.location.search)
document.getElementById('title').innerHTML = a.get('title')
document.getElementById('price').innerHTML = a.get('price')
document.getElementById('category').innerHTML = a.get('category')
document.getElementById('images').src = a.get('images')

fetch('http://localhost:3000/cart').then((res) => res.json()).then(data => cartData(data));

function cartData(data){
    let cartData2 = data.map((el) => createCart(el.image_url,el.title,el.price))
    document.querySelector('#cart-card').innerHTML = cartData2;
}

function createCart(images,title,price){
    let my = `
    <div class="cart-item col-lg-4 col-md-4 col-sm-4 col-6">
    <img
      src=${images}
      alt=""
      class="col-12"
    />
    <p id="cart-item-name" class="mt-2 lh-1">${title}</p>
    <p id="cart-item-price">$${price}</p>
  </div>
    `
    return my;
}