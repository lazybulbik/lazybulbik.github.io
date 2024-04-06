let tg = window.Telegram.WebApp

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function(){
    if (tg,MainButton.isvisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("You added item number 1");
        itme = "1";
        tg.MainButton.show();
    }
});

btn2.addEventListener("click", function(){
    if (tg,MainButton.isvisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("You added item number 2");
        itme = "2";
        tg.MainButton.show();
    }
})

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(itme);
})

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg,initDataUnsafe.first_name} ${tg,initDataUnsafe.last_name}`;

usercard.appendChild(p);