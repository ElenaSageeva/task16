const list = document.querySelector('.list');
const limit = document.querySelector('.limit');
const btn = document.querySelector('.btn');
const main = document.querySelector('.main');
let urlStorage = localStorage.getItem('urlStorage');
let error;

const checkInput = (input, text) => {
    let label = document.querySelector(`[for="${input.className}"]`);

    if (input.value > 10 || input.value == '') {

        label.innerHTML = `${text} вне диапазона от 1 до 10`;
        error = true;

    } else {
        label.innerHTML = '';
        error = false;
    }
}

const createElement = (url) =>{
    localStorage.setItem('urlStorage',JSON.stringify(url));
    url.forEach(element => {

        let listHtml = 
        `
        <img src="${element.download_url}" alt="">
        `;
        main.innerHTML += listHtml;
    })
}

btn.addEventListener('click', () => {
    console.log(error);
    checkInput(list, 'Номер страницы');
    checkInput(limit, 'Лимит');
    if(error === false){
        fetch(`https://picsum.photos/v2/list?page=${list.value}&limit=${limit.value}`)
        .then((response)=>{
            const result = response.json();
            return result;
        }).then((data) => {
            createElement(data);
            
        });
    }
})

const checkStorge = () =>{
    if(urlStorage !== null){
        urlStorage = JSON.parse(urlStorage);
        urlStorage.forEach(element => {

            let storageHtml = 
            `
            <img src="${element.download_url}" alt="">
            `;
            main.innerHTML += storageHtml;
        })
        localStorage.clear();
    }
}
checkStorage();