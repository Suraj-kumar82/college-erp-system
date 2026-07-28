let loginform = document.getElementById("login-form");
let emailinput = document.getElementById("user-email");
let passwordinput = document.getElementById("user-password");

loginform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const email =emailinput.value;
    const password= passwordinput.value;
    console.log('email:',email);
    console.log('password:',password);

    if(email==="admin@srgc.edu" && password==="123456"){
        alert("Login Successful! Welcome to SRGC ERP.");
    }else{
        alert("Invalid Email or password! Try Again.");
    }
});