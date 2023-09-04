const btnClick = document.querySelector("#liveToastBtn");

const listDOM = document.querySelector("#list");

const INPUT_TODO = document.querySelector("#task");

btnClick.addEventListener("click", newElement);

function newElement(event) {
    
    event.preventDefault();

    if (INPUT_TODO.value.trim().length !== "") {

        const liDOM = document.createElement("li")
        
        const liClose = document.createElement("span");

        liDOM.innerHTML = INPUT_TODO.value;

        liClose.innerHTML = "&times";

        liClose.classList.add("close");

        liDOM.appendChild(liClose);
        
        liDOM.classList.add("listElement");

        listDOM.appendChild(liDOM);

        // Save the task to localStorage
        saveTaskToLocalStorage(INPUT_TODO.value);

        INPUT_TODO.value = "";

        liDOM.addEventListener("click", elementSelect);

        liClose.addEventListener("click", closeClick);        

        successToast();

    }
     
    else {

        errorToast();

    }    

}


function closeClick(e) {

    e.preventDefault();

    const liDOM = e.target.parentNode;

    // Remove the task from localStorage
    removeTaskFromLocalStorage(liDOM.textContent);

    liDOM.remove();
      
}

function removeTaskFromLocalStorage(task) {

    console.log("burasi calisiyor")

    let tasks = JSON.parse(localStorage.getItem('tasks'));

    if (tasks.indexOf(task) !== -1) {

        // Remove the task from the array
        tasks.splice(taskIndex, 1);

        // Update localStorage with the modified tasks array
        localStorage.setItem('tasks', JSON.stringify(tasks));

        console.log("calisiyor")
        
    }   
 
}

function saveTaskToLocalStorage(task) {

    let tasks = [];

    if (localStorage.getItem('tasks')) {

        tasks = JSON.parse(localStorage.getItem('tasks'));

    }    

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

document.addEventListener('DOMContentLoaded', () => {
   
    loadTasksFromLocalStorage();

});

function loadTasksFromLocalStorage() {

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    

    tasks.forEach((task) => {        

        const liDOM = document.createElement('li');

        const liClose = document.createElement("span");

        liDOM.innerHTML = task;

        liClose.innerHTML = "&times";

        liClose.classList.add("close");

        liDOM.appendChild(liClose);
        
        liDOM.classList.add("listElement");

        listDOM.appendChild(liDOM);

        liDOM.addEventListener("click", elementSelect);

        liClose.addEventListener("click", closeClick);      

})}


function errorToast() {

    $(".toast.error").toast("show")

}


function successToast() {

    $(".toast.success").toast("show")

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

let liCloseParent = document.querySelector("#list")

liCloseParent.addEventListener("click", function (e) {

    if (e.target && e.target.classList.contains("close")) {

        e.preventDefault();

        e.target.parentNode.remove(); // Removing the parent <li> element

    }
});

// used event delegation to reach to the parent element and target the clicked element. (e.target meaning the clicked element!)