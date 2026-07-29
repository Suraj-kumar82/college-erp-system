let loginform = document.getElementById("login-form");
let emailinput = document.getElementById("user-email");
let passwordinput = document.getElementById("user-password");
const authsection = document.querySelector("#auth-section"); 
const studentdashboard = document.getElementById("student-dashboard");
const facultydashboard = document.getElementById("faculty-dashboard");
const admindashboard = document.getElementById("admin-dashboard");

const logoutbtn = document.querySelector(".btn-logout");

loginform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const email =emailinput.value;
    const password= passwordinput.value;
   
    
  if(email.includes("student") && password==="123456"){
    authsection.classList.add("hidden");
    studentdashboard.classList.remove("hidden");
  }else if(email.includes("admin") && password==="123456"){
    authsection.classList.add("hidden");
    admindashboard.classList.remove("hidden");
  }else if(email.includes("faculty") && password==="123456"){
    authsection.classList.add("hidden");
    facultydashboard.classList.remove("hidden");
  }else{
    alert("Invalid email or password! Try again");
  }
});
if(logoutbtn){
    logoutbtn.addEventListener("click",()=>{
        studentdashboard.classList.add("hidden");
        facultydashboard.classList.add("hidden");
        admindashboard.classList.add("hidden");

        authsection.classList.remove("hidden");
    })
}