let form1 = document.getElementById('form1'); // Login Form
let form2 = document.getElementById('form2');  // Register Form
let arr = JSON.parse(localStorage.getItem('Registration')) || []

// Login Form
form1.addEventListener('submit', (e) => {
    e.preventDefault();
    let loginEmail = document.getElementById('loginEmail').value;
    let loginPassword = document.getElementById('loginPassword').value;
    let RegistrationData = JSON.parse(localStorage.getItem('Registration'));
    if(loginEmail == "" || loginPassword == ""){
      alert("Filed The Fileds")
    }
    else{
      RegistrationData.map((el)=>{
        if(el.email == loginEmail && el.password == loginPassword){
          alert("Login SuccessFully")
          window.location.href = 'http://127.0.0.1:5500/index.html';
        }
      })
    }
   
})

// Register Form
form2.addEventListener('submit', (e) => {
    e.preventDefault();
    form2Obj = {
        firstName: document.getElementById('fname').value,
        lastName: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        cpassword: document.getElementById('cpassword').value
    }
    if(form2Obj.firstName == "" || form2Obj.lastName == "" || form2Obj.email == "" || form2Obj.password == "" || form2Obj.cpassword == ""){
      alert("Filed The Fileds")
    }
    else{
      if(form2Obj.password == form2Obj.cpassword){
        
        arr.push(form2Obj)
      localStorage.setItem('Registration', JSON.stringify(arr)) 
        let reg1 = JSON.parse(localStorage.getItem('Registration'))
        alert("Register SuccessFully")
        window.location.href = 'http://127.0.0.1:5500/index.html';
      }
      else{
        alert("Password And Conform Password Can't Match")
      }
    }
})



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
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-cart')) {
    deleteCart(e.target.dataset.id)
  }
})
function deleteCart(id) {
  fetch(`http://localhost:3000/cart/${id}`, {
    method: 'DELETE'
  }).then((res) => res.json()).then(data => cartData(data));
}
