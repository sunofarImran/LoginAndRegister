const container = document.querySelector(".container"),
    pwShowHide =   document.querySelectorAll(".showHidePw"),
    pwFields =document.querySelectorAll(".password"),
    signUp =document.querySelector(".signup-link"),
    login =document.querySelector(".login-link"),
    btnPopup =document.querySelector(".btnLogin-popup"),
    btnPopup1 =document.querySelector(".btnSignup-popup"),
    iconClose =document.querySelector(".uil-times");

    //Js code to show/Hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click",()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash","uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye","uil-eye-slash");
                    })
                }
            })
        })
    })

    //js code to appear signup and login form
    signUp.addEventListener("click",()=>{
        container.classList.add("active");
    });
    login.addEventListener("click",()=>{
        container.classList.remove("active");
    });


    btnPopup1.addEventListener("click",()=>{
        container.classList.add("active-popup1");
    });

    iconClose.addEventListener("click",()=>{
        container.classList.remove("active-popup1");
    });

    btnPopup.addEventListener("click",()=>{
        container.classList.add("active-popup");
    });

    iconClose.addEventListener("click",()=>{
        container.classList.remove("active-popup");
    });

    

     
    
    