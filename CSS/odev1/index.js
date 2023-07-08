let numbers = []
for (let i = 1; i <= 48; i++) {
    numbers.push(i)
}

let images = document.querySelectorAll(".image")


function paginate(event) {
    let element = document.querySelector(".images")
    element.style.opacity = 0
    document.querySelector(".current").classList.toggle("current")
    let currentValue = event.currentTarget.innerText
    let values = numbers.slice((parseInt(currentValue) - 1) * 12, parseInt(currentValue) * 12)
    let interval = setInterval(() => {
        element.style.opacity = parseFloat(element.style.opacity) + 0.1
        console.log("bla")
        if (parseFloat(element.style.opacity) == 1) {
            clearInterval(interval)
        }
    }, 20)
    images.forEach((element, index) => element.innerText = values[index])

    event.currentTarget.classList.toggle("current")
}

document.querySelectorAll("span").forEach(element => {
    element.addEventListener("click", paginate)
});