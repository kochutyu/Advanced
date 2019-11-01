import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.css']
})
export class CenzorComponent implements OnInit {
  textSearch: string = ""; // get input
  textArea: string = ""; // get textarea
  arrBadWord: Array<string> = []; // arr for bad words
  arrTextarea: Array<string> = []; // arr for textarea
  newWords: string = ""; // new string
  constructor() { }

  ngOnInit() {
  }

  addBadWords(): void {
    this.arrBadWord.push(this.textSearch); // push new word
    this.newWords = this.arrBadWord.join(", "); // new string with new word
    this.textSearch = ""; // clear input
  }

  reset(): void {
    this.arrBadWord = []; // delete all bad words
    this.newWords = ""; // // clear bad words from user
  }

  censor(): void {
    // console.log(this.newWords);
    let arrBadWord: Array<string> = this.arrBadWord;
    let arrTextarea: Array<string> = this.textArea.split(' '); // create arr for textarea
    
    arrBadWord.forEach((item: string) => { // sort index bad words
      arrTextarea.forEach((el: string, index: number) => { // sort index textarea

        let word = new RegExp(`^${item}$`); // create regExp for this bad word
        let wordRight = new RegExp(`${item}[.,\/[0-9]+`, 'gm'); // create regExp for this bad word
        let wordLeft = new RegExp(`[.,\/[0-9]+${item}`, 'gm'); // create regExp for this bad word

        if (el.match(wordRight)) arrTextarea[index] = arrTextarea[index].replace(el.slice(0, item.length), "*".repeat(item.length)); // replace * for bad words right
        
        if (el.match(wordLeft)) arrTextarea[index] = arrTextarea[index].replace(el.slice(-item.length), "*".repeat(item.length)); // replace * for bad words left
        
        if (el.match(word)) arrTextarea[index] = arrTextarea[index].replace(item, "*".repeat(item.length)); // replace * for bad words

      });
    });

    this.textArea = arrTextarea.join(' '); // update textarea
  
  }
}
