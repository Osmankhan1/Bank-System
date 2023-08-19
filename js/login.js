document.getElementById('btn-submit').addEventListener('click' , function(){
    // console.log('click by button')
    const emailField = document.getElementById('email-user');
    const email = emailField.value;
    // console.log(email);
    const passwordField = document.getElementById('pass-user');
    const password = passwordField.value;
    // console.log(email,password);
    if (email === "osmankhan@gmail.com" && password === 'secret'){
        console.log('valid');
    }
    else{
        console.log('Invalid ');
    }
})