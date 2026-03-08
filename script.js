


// login section 


const inputName = document.getElementById("Inbut-name");
const inputPassword = document.getElementById("Inbut-Password");

const clickBtn = document.getElementById("click-Btn");

clickBtn.addEventListener("click", function () {
  const name = inputName.value;
  const Password = inputPassword.value;

if(name ===""|| Password===""){
    alert("invalid Input")
return;

}

if(name==="admin" && Password==="admin123"){
    window.location.href="homepage.html"

}
else{

    document.getElementById("massage").innerText="Wrong ID or Password"
}


});


