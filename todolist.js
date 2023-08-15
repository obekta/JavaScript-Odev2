let btnClick = document.querySelector("#liveToastBtn")

btnClick.addEventListener("click", newElement)

function newElement(event) {
    
    event.preventDefault();

    const INPUT_TODO = document.querySelector("#task")

    if (INPUT_TODO.value) {

        const listDOM = document.querySelector("#list")

        const liDOM = document.createElement("li")
        
        const liClose = document.createElement("span")

        liDOM.innerHTML = INPUT_TODO.value

        liClose.innerHTML = "&times"

        liClose.classList.add("close")

        liDOM.appendChild(liClose)
        
        liDOM.classList.add("listElement")

        listDOM.appendChild(liDOM)

        INPUT_TODO.value = "";

        liDOM.addEventListener("click", elementSelect);

        liClose.addEventListener("click", closeClick)

        function closeClick(e) {
             
            e.preventDefault()

            liDOM.remove();
        }

        }

}




let liClick = document.querySelectorAll(".listElement")

liClick.forEach((item) => {

    item.addEventListener("click", elementSelect)

})

function elementSelect(event) {

    event.preventDefault();

    if (this.classList.contains("checked")) {

        this.classList.remove("checked")

    }
    else {

        this.classList.add("checked")

    }
   
}

// let liCloseParent = document.querySelectorAll(".close")

// liCloseParent.forEach((item) => {

//     item.addEventListener("click", elementRemove)

// })

// function elementRemove(e) {

//     if (e.target && e.target.classList.contains("close")) {

//         e.preventDefault()

//         e.target.parentnode.remove();

//     }


// }




document.querySelector("#list").addEventListener("click", function (e) {

    if (e.target && e.target.classList.contains("close")) {

        e.preventDefault();

        e.target.parentNode.remove(); // Remove the parent <li> element

    }
});












