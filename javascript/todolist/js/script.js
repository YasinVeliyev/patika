let list = document.querySelector("#list");
let liveToast = document.querySelector("#liveToast");

render();
function render() {
    JSON.parse(localStorage.getItem("lists")).forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    });
    let lists = document.querySelectorAll("li");
    lists.forEach((item) => {
        item.innerHTML += `<div class='liclose'><button type="button"><span >&times;</span></button></div>`;
        item.addEventListener("click", checked);
        item.firstElementChild.addEventListener("click", deleteList);
    });
}

function createListElement(task) {
    let lists = JSON.parse(localStorage.getItem("lists")) || [];
    let li = document.createElement("li");
    li.innerHTML = `${task} <div class='liclose'><button type="button"><span aria-hidden="true">&times;</span></button></div>`;
    lists.push(task);
    list.appendChild(li);
    li.firstElementChild.addEventListener("click", deleteList);
    localStorage.setItem("lists", JSON.stringify(lists));
    $("#liveToast").toast("show");
}

function newElement() {
    let input = document.querySelector("#task");
    let task = input.value.trim();
    input.value = "";
    if (task) {
        createListElement(task);
    } else {
        $(".toast.error").toast("show");
    }
}

function checked(event) {
    event.currentTarget.classList.toggle("checked");
}

function deleteList(event) {
    localStorage.setItem(
        "lists",
        JSON.stringify(
            JSON.parse(localStorage.getItem("lists")).filter((data) => {
                data == event.currentTarget.parentElement.firstChild;
            }),
        ),
    );
    event.currentTarget.parentElement.remove();
}
