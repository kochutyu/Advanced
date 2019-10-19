let gs = selector => document.querySelector(selector);

const regEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z]{2,4})$/;
const invalidValue = "";

const checkValue = function () {
    if (gs('.firstNameSU').value != invalidValue && gs('.lastNameSU').value != invalidValue && gs('.emailSU').value.match(regEmail) && gs('.passwordSU').value != invalidValue) {
        return true;
    } else {
        $('.inputFieldsNone').css({
            display: 'block'
        });
    }
}

function clearSign() {
    gs('.firstNameSU').value = '';
    gs('.lastNameSU').value = '';
    gs('.emailSU').value = '';
    gs('.passwordSU').value = '';
    gs('.emailLogin').value = '';
    gs('.passwordLogin').value = '';
    gs('.emailSU').classList.remove('is-invalid');
    $('.invalidExist').css({
        display: 'none'
    });
    $('.invalisPassOrLogin ').css({
        display: 'none'
    });
    $('.inputFieldsNone ').css({
        display: 'none'
    });
}


$('.emailControl').blur(function () {
    if (!gs('.emailSU').value.match(regEmail)) {
        gs('.emailSU').className += " is-invalid";
        $('.invalid').css({
            display: 'block'
        });
        $('.invalidExist').css({
            display: 'none'
        });
    } else {
        gs('.emailSU').classList.remove('is-invalid');
        $('.invalid').css({
            display: 'none'
        });
    }
});

// new user
function User() {
    this.firstName = gs('.firstNameSU').value;
    this.lastName = gs('.lastNameSU').value;
    this.email = gs('.emailSU').value;
    this.password = gs('.passwordSU').value;
}

// sign in change
$('.signIn').click(() => {
    $('#signInBlock').css({
        display: 'block'
    });
    $('#signUpBlock').css({
        display: 'none'
    });
    clearSign();
});

// sign up change
$('.signUn').click(() => {
    $('#signUpBlock').css({
        display: 'block'
    });
    $('#signInBlock').css({
        display: 'none'
    });
    clearSign();
})

// Exit from Profile
$('#goToSignUp').click(() => {
    $('#blockProfile').css({
        display: 'none'
    });
    $('#signUpBlock').css({
        display: 'block'
    });
    clearSign();
})

let arrUsers = [];
let localUsers = [];

// onlick signUp
$('#signUp').click(() => {
    if (checkValue()) {
        let count = 0;
        localUsers.forEach(index => {
            let getKeyAndValues = Object.assign(index);
            let emailLogin = getKeyAndValues.email;
            if (gs('.emailSU').value == emailLogin) {
                gs('.emailSU').className += " is-invalid";
                $('.invalidExist').css({
                    display: 'block'
                });
                count++;
                console.log(emailLogin);
            }
        })

        if (count == 0) {
            let newUser = new User();

            // save User
            let toLocalNewUser = localStorage.setItem('myUser', JSON.stringify(newUser));
            arrUsers.push(JSON.parse(localStorage.getItem('myUser')));
            console.log(arrUsers);

            // save All Users
            let toLocalAllUsers = localStorage.setItem('AllUsers', JSON.stringify(arrUsers));
            localUsers = JSON.parse(localStorage.getItem('AllUsers'));
            console.log(localUsers);

            $('.inputFieldsNone').css({
                display: 'none'
            });

            clearSign();
            count = 0;
        }
    }

});




// onclick signIn
$('#signIn').click(() => {
    if (localUsers.length>0) {
        console.log('yes');
        login();
        
    }else{
        localUsers = JSON.parse(localStorage.getItem('AllUsers'));
        console.log('no');
        console.log(localUsers);
        login();
    }
});

// login
function login() {
    localUsers.forEach(function (index) {
        let getKeyAndValues = Object.assign(index);
        let firstNameLogin = getKeyAndValues.firstName;
        let lastNameLogin = getKeyAndValues.lastName;
        let emailLogin = getKeyAndValues.email;
        let passwordLogin = getKeyAndValues.password;
        // enter to profile
        if (gs('.emailLogin').value == emailLogin && gs('.passwordLogin').value == passwordLogin) {
            $('#signInBlock').css({
                display: 'none'
            });
            $('#blockProfile').css({
                display: 'flex'
            });
            gs('.name').textContent = `${firstNameLogin} ${lastNameLogin}`;
            gs('.emailProfile').textContent = `${emailLogin}`;

            clearSign()
        } else {
            $('.invalisPassOrLogin').css({
                display: 'block'
            });
        }
    })
}
