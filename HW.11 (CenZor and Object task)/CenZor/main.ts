let gs = sel => document.querySelector(sel);


let badWords: Array<string> = ['java', 'lol'];

let updateUser = (function (): any {
    let add = gs('.add');
    let reset = gs('.reset');

    function render():void{
        gs('.badWordsBlock').textContent = badWords.join(', ');
    }

    add.onclick = function ():void{
        /* let value: string = gs('.wordIn').value;
        if (value != '') {
            badWords.push(value);
            console.log(badWords);
        } */
        console.log('lol');
        
        // render();
    };
    console.log('lol');
    
    reset.onclick = function ():void{
        badWords.forEach(function (v:string, i:number):void {
            badWords.splice(+v, 1);
            gs('.badWordsBlock').textContent = '';
        });
    };
    
    // console.log(typeof function():void{});
    
    return {
        render: render
    }

}());
updateUser;