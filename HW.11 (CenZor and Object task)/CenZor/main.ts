let gs = sel => document.querySelector(sel);

let badWords: Array<string> = ['java', 'lol'];

let updateUser = (function (): object {
    let add = gs('.add');
    let reset = gs('.reset');

    function render():void{
        gs('.badWordsBlock').textContent = badWords.join(', ');
    }

    add.onclick = function ():void{
        let value: string = gs('.wordIn').value;
        if (value != '') {
            badWords.push(value);
            console.log(badWords);
        }
        // render();
    };
    reset.onclick = function ():void{
        badWords.forEach(function (i:number):void {
            badWords.splice(i, 0);
        });
        gs('.badWordsBlock').textContent = '';
    };

    // console.log(typeof function():void{});
    
    return {
        render: render
    }

}());
updateUser;