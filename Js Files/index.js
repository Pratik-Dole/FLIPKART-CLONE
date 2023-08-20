
// We Can Create A Logic For The Pop-Up Form :: 

// Creating A Function For Over-Writing The CSS Property :: 
showUp = () => {
    document.querySelector('.signUp').classList.add('.showSignUp');
}

closeUp = () => {
    document.querySelector('.signUp').classList.remove('.showSignUp');
}

let a = document.querySelector(".ncBton");
a.addEventListener("click", showUp)

let b = document.querySelector(".crossBton");
b.addEventListener("click", closeUp)

