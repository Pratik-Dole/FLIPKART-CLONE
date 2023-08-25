// We Can Create A Logic For The Pop-Up SignIn & SignUp Form :: 

// Creating A Function For Over-Writing The CSS Property For SignUp Form :: 
open1 = () =>{
    console.log("I Am Click For Open")
    const a = document.querySelector('.signUp');
    a.classList.add('.showSignUp')
    console.log(a)
}

close1 = () =>{
    console.log("I Am Click For Close")
    const b = document.querySelector('.signUp');
    b.classList.remove('.showSignUp')
    console.log(b)
}

// Creating A Function For Over-Writing The CSS Property For SignIn Form ::
open2 = () =>{
    console.log("I Am Click For Open")
    const c = document.querySelector('.signIn');
    c.classList.add('.showSignIn')
    console.log(c)
}

close2 = () =>{
    console.log("I Am Click For Close")
    const d = document.querySelector('.signIn');
    d.classList.remove('.showSignIn')
    console.log(d)
}
