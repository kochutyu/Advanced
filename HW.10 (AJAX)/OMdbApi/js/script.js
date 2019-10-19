const gs = sel => document.querySelector(sel);
const gsAll = sel => document.querySelector(sel);

let arr = [];
let saveObjs = [];

let arr_id = [];
let save_id = {};

let countSearch = 0;

/* function deleteBlick() {
    for(var i = 0; i < gsAll('.block').length; i++){
        if (gsAll('.block')[i]==null) {
            
            gs('.section').removeChild(gsAll('.block')[i]);
        }
    }
} */

function search() {
    let fromSearch = gs('.inputSearch').value;

    const API_MOVIE = `http://www.omdbapi.com/?s=${fromSearch}&apikey=2dd0470d`;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', API_MOVIE, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {

            // delete outdated information
            arr.forEach(index => {
                arr.splice(index, 1)
            });
            saveObjs.forEach(index => {
                saveObjs.splice(index, 1)
            });

            let data = JSON.parse(xhr.responseText);
            arr.push(data);

            // all movie
            let searchAll = arr[0].Search;
            saveObjs = [...searchAll];


            // create blocks for movie
            createBlockForMovie(searchAll);
            console.log(searchAll);


        }
    }

    xhr.send();
    // xhr_id.send();
    gs('.inputSearch').value = '';
}

function createBlockForMovie(arr) {
    for (let i = 0; i < arr.length; i++) {
        let block = document.createElement('div');
        block.className = 'block';

        // img
        let img_block = document.createElement('div');
        img_block.className = 'img_block';
        img_block.style.backgroundImage = `url(${arr[i].Poster})`;
        img_block.style.backgroundSize = `100% 100%`;

        // head text
        let head_block = document.createElement('div');
        head_block.className = 'head_block';
        head_block.textContent = `${arr[i].Title}`;

        // type
        let type_block = document.createElement('div');
        type_block.className = 'type_block';
        type_block.textContent = `${arr[i].Type}`;

        // year
        let year_block = document.createElement('div');
        year_block.className = 'year_block';
        year_block.textContent = `${arr[i].Year}`;

        // btn 
        let addInfo = document.createElement('div');
        addInfo.classList.add('btn');
        addInfo.classList.add('btn-success');
        addInfo.classList.add('btn-primary');
        addInfo.classList.add('addInfo');
        addInfo.textContent = 'More details';
        addInfo.setAttribute('onclick', `moreDetails(${i})`);
        addInfo.setAttribute('data-toggle', `modal`);
        addInfo.setAttribute('data-target', `#exampleModal`);


        block.appendChild(img_block);
        block.appendChild(head_block);
        block.appendChild(type_block);
        block.appendChild(year_block);
        block.appendChild(addInfo);
        gs('.section').appendChild(block);
    }
}
/* function createBlockForMovieInfo(arr) {
    for (let i = 0; i < save_id.length; i++) {
        console.log(i);
    }
} */

function moreDetails(count) {
    let fromSearch = saveObjs[count].imdbID;
    const API_GET_INFO = `http://www.omdbapi.com/?i=${fromSearch}&apikey=2dd0470d`;
    const xhr_id = new XMLHttpRequest();
    xhr_id.open('GET', API_GET_INFO, true);
    xhr_id.onreadystatechange = () => {
        if (xhr_id.readyState === 4 && xhr_id.status === 200) {
            // delete outdated information
            arr_id.forEach(index => {
                arr_id.splice(index, 1)
            });
            console.log(arr_id);


            let data_id = JSON.parse(xhr_id.responseText);
            save_id = data_id;
            console.log(save_id);

            gs('.img_modal').style.backgroundImage = `url(${saveObjs[count].Poster})`;
            gs('.forRated_modal').textContent = `${save_id.Rated}, ${save_id.Genre}`;
            gs('.forWriter').textContent = `${save_id.Writer}`;
            gs('.forDirector').textContent = `${save_id.Director}`;
            for (let i = 0; i < save_id.Ratings.length; i++) {
                if (i==save_id.Ratings.length-1) {
                    gs('.forRatings').textContent += `${save_id.Ratings[i].Source} - ${save_id.Ratings[i].Value} `;
                }else{
                    gs('.forRatings').textContent += `${save_id.Ratings[i].Source} - ${save_id.Ratings[i].Value} \n`;
                }

            }
            console.log(save_id.Ratings);

        }
    }
    xhr_id.send();

}

function addInfo() {
    console.log('lol');
}