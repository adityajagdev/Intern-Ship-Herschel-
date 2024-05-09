fetch('http://localhost:3000/Shop_Categories_Slider').then(res => res.json()).then(data => sliderData(data))

function sliderData(data) {
    let Fetch_Data = data.map((el, i) => slide(el.images, el.slider_title));
    document.querySelector('.slider').innerHTML = Fetch_Data.join("");
}

function slide(image, title) {
    let content = `
    <div class="slide col-lg-2 col-md-3 col-sm-4 col-6">
    <img
      src=${image}
      alt=""
      class="col-12"
    />
    <h6 style="font-size: 13px">${title}</h6>
  </div>
    `
    return content;
}

fetch('http://localhost:3000/Shop_Categories').then((res) => res.json()).then(data => shopCategori_Data(data));

function shopCategori_Data(data) {
    let categorie_Data = data.map((el) => Categorie(el.images,el.title,el.discription))
    document.querySelector('.shop-categorie').innerHTML = categorie_Data;
}

function Categorie(images,title,discription) {
    let content = `
    <div class="categorie col-lg-5 col-md-5 col-sm-10 col-10 mt-5 m-auto">
    <img src=${images} alt="" class="col-12">
    <div class="shop-categorie-text col-12 lh-1">
        <h3 class="fw-bolder">${title}</h3>
            <p>${discription}</p>
            <a href="" style="color: gray; font-size: 15px;" class=" col-12">Shop Bags</a>
    </div> 
</div>
    `

    return content;
}