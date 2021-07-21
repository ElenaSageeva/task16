let inputValue = document.querySelector('.id_user');
let go_user = document.querySelector('.go_user');
let do_user = document.querySelector('.do_user');
go_user.addEventListener('click', () =>{
    fetch(`https://jsonplaceholder.typicode.com/users/${inputValue.value}/todos`).then((response)=>{
    const result = response.json();
    return result;
}).then((data) => {
    if(data.length === 0){
        do_user.innerHTML = '';
        alert('Пользователь с указанным id не найден')
    }else{
        do_user.innerHTML = '';
        data.forEach(element => {
            let listHtml = 
            `
            <li>Название задачи ${element.title}</li> 
            <li>Статус задачи ${element.completed}</li> 
            `;
            do_user.innerHTML += listHtml;
        })
        
    }
}).catch(()=>{
    console.log('error');
});
})