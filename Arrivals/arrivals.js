fetch('http://localhost:3000/Arrivals_Data').then((res)=>res.json()).then((data)=>makeCards(data))

function makeCards(data){
    let store = data.map((el)=>singleCard(el.title,el.image_url,el.price))
    document.querySelector('.arrMainBar-column').innerHTML = store;
}

function singleCard(title,images,price){
    let card = `
    <div
                class="cart-item col-lg-3 col-md-6 col-sm-6 col-12 p-lg-3 p-md-3 p-sm-4 ps-5"
              >
                <img
                  src=${images}
                  alt=""
                  class="col-12"
                />
                <p id="cart-item-name" class="mt-2 lh-sm">${title}</p>
                <p id="cart-item-price">Price: ${price}</p>
              </div>
    `

    return card;
}