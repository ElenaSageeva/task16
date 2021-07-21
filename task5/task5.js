let name = localStorage.getItem('name');
let date = localStorage.getItem('time');
if(name === null || date === null){
    let name = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
    let date_time = new date();
    localStorage.setItem('name',name);
    localStorage.setItem('time',date_time);
}else{
    alert(`Добрый день, ${name}! Давно не виделись. В последний раз вы были у нас ${date}`);
    let date_time = new date();
    localStorage.setItem('time',date_time);
    
}