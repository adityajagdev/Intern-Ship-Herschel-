let form1 = document.getElementById('form1'); // Login Form
let form2 = document.getElementById('form2');  // Register Form
let arr = JSON.parse(localStorage.getItem('Registration')) || []

// Login Form
form1.addEventListener('submit',(e)=>{
    e.preventDefault();
    let loginEmail = document.getElementById('loginEmail').value;
    let loginPassword = document.getElementById('loginPassword').value;
    let RegistrationData = JSON.parse(localStorage.getItem('Registration'));
    for(let i=0; i<RegistrationData.length; i++){
        if(RegistrationData[i].email == loginEmail && RegistrationData[i].password == loginPassword){
            alert('You Are Login Successfully')
        }
        else{
            alert('Your E-mail or Password Is Wrong!!')
        }
    }
})

// Register Form
form2.addEventListener('submit',(e)=>{
    e.preventDefault();
    form2Obj={
        firstName: document.getElementById('fname').value,
        lastName: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        cpassword: document.getElementById('cpassword').value
    }
    arr.push(form2Obj)
        localStorage.setItem('Registration',JSON.stringify(arr))
        
       let reg1 = JSON.parse(localStorage.getItem('Registration'))

       reg1.map((e,i)=>{
        if(e.email !== form2Obj.email){
            alert('You Are Register Successfully')
        }
        else{
            alert('You Are Already Registered')
       }
})
        
})