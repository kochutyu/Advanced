function gs(sel) {
    return document.querySelector(sel);
}
var textSearch = gs('.wordIn'); // get input
var textArea = gs('.textarea'); // get textarea
var arrBadWord = []; // arr for bad words
var arrTextarea = []; // arr for textarea
var newWords = ""; // new string
var changeTextarea = ""; // new textarea
function addBadWords() {
    arrBadWord.push(textSearch.value); // push new word
    newWords = arrBadWord.join(", "); // new string with new word
    gs('.badWordsBlock').textContent = "" + newWords; // push new string
    textSearch.value = ""; // clear input
}
function reset() {
    arrBadWord = []; // delete all bad words
    gs('.badWordsBlock').textContent = ''; // clear bad words from user
}
function censor() {
    arrTextarea = textArea.value.split(' '); // create arr for textarea
    arrBadWord.forEach(function (item) {
        arrTextarea.forEach(function (el, index) {
            var word = new RegExp("^" + item + "$"); // create regExp for this bad word
            var wordRight = new RegExp(item + "[.,/[0-9]+", 'gm'); // create regExp for this bad word
            var wordLeft = new RegExp("[.,/[0-9]+" + item, 'gm'); // create regExp for this bad word
            function change() {
                changeTextarea = arrTextarea.join(' '); // change teaxarea content
                textArea.value = "" + changeTextarea; // push new teaxarea content
            }
            if (el.match(wordRight)) {
                arrTextarea[index] = arrTextarea[index].replace(el.slice(0, item.length), "*".repeat(item.length)); // replace * for bad words right
                change();
            }
            if (el.match(wordLeft)) {
                arrTextarea[index] = arrTextarea[index].replace(el.slice(-item.length), "*".repeat(item.length)); // replace * for bad words left
                change();
            }
            if (el.match(word)) {
                arrTextarea[index] = arrTextarea[index].replace(item, "*".repeat(item.length)); // replace * for bad words
                change();
            }
        });
    });
}
