let userName = document.querySelector("#myName");
let myClock = document.querySelector("#myClock");
userName.innerHTML = prompt("Adınız nedir");

function showTime() {
    console.log("click");
    let gunler = ["Bazar Ertəsi", "Çərşənbə Axşamı", "Çərşənbə", "Cümə Axşamı", "Cümə", "Şənbə", "Bazar"];
    let date = new Date();
    myClock.innerHTML = `${date.getHours().toString().padStart(2, "0")}:${date
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")} ${gunler[date.getDay()]}`;

    setTimeout(showTime, 1000);
}
showTime();
