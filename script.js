let form1 = document.getElementById('form1');
let form2 = document.getElementById('form2');
let arr = JSON.parse(localStorage.getItem('Registration')) || []

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

form2.addEventListener('submit',(e)=>{
    e.preventDefault();
    form2Obj={
        firstName: document.getElementById('fname').value,
        lastName: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        cpassword: document.getElementById('cpassword').value
    }
    if(form2Obj.password != form2Obj.cpassword){
        alert("Password And Conform Password Not Match !!")
    }
    else{
        arr.push(form2Obj)
        localStorage.setItem('Registration',JSON.stringify(arr))  
        alert("You Are Registerd** Now You Can Login")
        
        // let reg1 = JSON.parse(localStorage.getItem('Registration'))
        // for(let i=0; i<reg1.length; i++){
        //     if(reg1[i].email == form2Obj.email){
        //         alert('That Email Is Already Registerd');
        //     }
        //     else{
        //         alert("You Are Registerd**")
        //     }
        // }
    } 
})