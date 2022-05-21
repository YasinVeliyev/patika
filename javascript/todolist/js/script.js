let list=document.querySelector("#list")
let liveToast = document.querySelector("#liveToast")


document.querySelectorAll("li").forEach((item)=>{
    item.innerHTML+=`<div class='liclose'>
    <button type="button">
      <span >&times;</span>
    </button>
  </div>`
  item.addEventListener('click',checked)
  item.firstElementChild.addEventListener('click',deleteList)
})



function newElement(){
    let input = document.querySelector("#task");
    if(input.value.trim()){
        let li=document.createElement("li");
        li.innerHTML = `${input.value.trim()} <div class='liclose'>
        <button type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
        list.appendChild(li)
        li.firstElementChild.addEventListener("click",deleteList)
        input.value=""
        $('#liveToast').toast('show')
        
    }
    else{
        $('.toast.error').toast('show')
    }
}


function checked(event){
    event.currentTarget.classList.toggle("checked")
}

function deleteList(event){
    event.currentTarget.parentElement.remove()
}