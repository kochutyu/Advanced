var gs = function (sel) { return document.querySelector(sel); };
var badWords = ['java', 'lol'];
var updateUser = (function () {
    var add = gs('.add');
    var reset = gs('.reset');
    function render() {
        gs('.badWordsBlock').textContent = badWords.join(', ');
    }
    add.onclick = function () {
        var value = gs('.wordIn').value;
        if (value != '') {
            badWords.push(value);
        }
    };
    reset.onclick = function () {
        badWords.forEach(function (v, i) {
            badWords.splice(i, 1);
        });
        console.log(badWords);
        gs('.badWordsBlock').textContent = '';
    };
    // console.log(typeof function():void{});
    return {
        render: render
    };
}());
updateUser;
