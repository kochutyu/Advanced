const gs = sel => document.querySelector(sel);
const gsAll = sel => document.querySelector(sel);

let arr = [];
let saveObjs = [];

/* let arr_id = [];
let save_id = {}; */

let countSearch = 0;

function search() {

    let fromSearch = gs('.inputSearch').value;
    const API_MOVIE = `http://www.omdbapi.com/?s=${fromSearch}&apikey=2dd0470d`;
    const xhr = new XMLHttpRequest();

    // delete outdated information
    arr.forEach(index => {
        arr.splice(index, 1)
    });
    console.log('remove arr', arr);

    xhr.open('GET', API_MOVIE, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {

            // push obj
            let data = JSON.parse(xhr.responseText);
            arr.push(data);

            // get movie
            let searchAll = [...arr[0].Search];
            saveObjs = [...searchAll];

            // create block for movie
            createBlockForMovie(searchAll);

        }
    }
    xhr.send();
    gs('.inputSearch').value = '';
}

function createBlockForMovie(arr) {
    gs('.section').innerHTML = '';
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

function moreDetails(count) {
    let fromSearch = saveObjs[count].imdbID;
    const API_GET_INFO = `http://www.omdbapi.com/?i=${fromSearch}&apikey=2dd0470d`;
    const xhr_id = new XMLHttpRequest();
    xhr_id.open('GET', API_GET_INFO, true);
    xhr_id.onreadystatechange = () => {
        if (xhr_id.readyState === 4 && xhr_id.status === 200) {
            let data_id = JSON.parse(xhr_id.responseText);
            console.log(data_id);
            for (let i = 0; i < data_id.Ratings.length; i++) {
                gs('.forRatings').innerHTML = ``
            }
            gs('.img_modal').style.backgroundImage = `url(${data_id.Poster})`;
            gs('.forRated_modal').textContent = `${data_id.Rated}, ${data_id.Genre}`;
            gs('.forWriter').innerHTML = `</br><span>${data_id.Writer}</span>`
            gs('.forDirector').innerHTML = `</br><span>${data_id.Director}</span>`
            for (let i = 0; i < data_id.Ratings.length; i++) {
                gs('.forRatings').innerHTML += `</br><span>${data_id.Ratings[i].Source} - ${data_id.Ratings[i].Value}</span>`
            }
        }
    }
    xhr_id.send();

}