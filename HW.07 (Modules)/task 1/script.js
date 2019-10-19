let gs = sel => document.querySelector(sel);


const User = (function () {
    let name = 'Yura';
    let age = 18;

    function showName() {
        alert(`Your name: ${name}`);
    }

    function showAge() {
        alert(`Your age: ${age}`);
    }
    function setName() {
        let sName = prompt('Enter your name');
        name = sName;
        showName();
    }
    function setAge() {
        let sAge = prompt('Enter your age');
        age = sAge;
        showAge();
    }
    return {
        name: showName,
        age: showAge,
        setName: setName,
        setAge: setAge
    }
}());

User.age();
User.name();
User.setName();
User.setAge();