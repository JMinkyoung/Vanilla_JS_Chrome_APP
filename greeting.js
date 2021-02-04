const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHWOING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function asfForName(){
    form.classList.add(SHWOING_CN)
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHWOING_CN);
    greeting.classList.add(SHWOING_CN);
    greeting.innerText = `Hello, ${text}`;
}


function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        asfForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();