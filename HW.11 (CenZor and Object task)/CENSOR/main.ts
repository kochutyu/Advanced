function gs(sel: string): any {
    return document.querySelector(sel);
}

let textSearch = gs('.wordIn'); // get input
let textArea = gs('.textarea'); // get textarea
let arrBadWord: Array<string> = []; // arr for bad words
let arrTextarea: Array<string> = []; // arr for textarea
let newWords: string = ""; // new string
let changeTextarea: string = ""; // new textarea

function addBadWords(): void {
    arrBadWord.push(textSearch.value); // push new word
    newWords = arrBadWord.join(", "); // new string with new word
    gs('.badWordsBlock').textContent = `${newWords}`; // push new string
    textSearch.value = ""; // clear input
}

function reset(): void {
    arrBadWord = []; // delete all bad words
    gs('.badWordsBlock').textContent = ''; // clear bad words from user
}

function censor(): void {
    arrTextarea = textArea.value.split(' '); // create arr for textarea

    arrBadWord.forEach((item: string) => { // sort index bad words
        arrTextarea.forEach((el: string, index: number) => { // sort index textarea
            var word = new RegExp(`^${item}$`); // create regExp for this bad word
            let wordRight = new RegExp(`${item}[.,\/[0-9]+`, 'gm'); // create regExp for this bad word
            let wordLeft = new RegExp(`[.,\/[0-9]+${item}`, 'gm'); // create regExp for this bad word
            function change() {
                changeTextarea = arrTextarea.join(' '); // change teaxarea content
                textArea.value = `${changeTextarea}`; // push new teaxarea content
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


