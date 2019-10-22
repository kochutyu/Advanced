let gs = sel => document.querySelector(sel);
let badWords = ['java', 'lol'];
let updateUser = (function () {
    let add = gs('.add');
    let reset = gs('.reset');
    function render() {
        gs('.badWordsBlock').textContent = badWords.join(', ');
    }
    add.onclick = function () {
        let value = gs('.wordIn').value;
        if (value != '') {
            badWords.push(value);
            console.log(badWords);
        }
        gs('.wordIn').value = '';
        render();
    };
    reset.onclick = function () {
        badWords.forEach(index=>{
            badWords.splice(0, index);
        })
        gs('.badWordsBlock').textContent = '';
    };
    return {
        render: render
    };
}());
updateUser;
