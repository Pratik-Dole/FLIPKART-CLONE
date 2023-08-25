
// We Can Write Some Code In jQuery For POP-UP SignIn & SignUp Form ::

$(document).ready(function () {
    
    // Adding The showSignUp Class For SignUp Form : 
    $('#rOpen').click(function () { 
        $('#rForm').addClass('showSignUp');
    });

    $('#rClose').click(function () { 
        $('#rForm').removeClass('showSignUp');
    });

    // Adding The showSignIn Class For SignIn Form : 
    $('#lOpen').click(function () { 
        $('#lForm').addClass('showSignIn');
    });

    $('#lClose').click(function () { 
        $('#lForm').removeClass('showSignIn');
    });

});