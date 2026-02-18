let listObjectPrefix = "<li>"
let listObjectSuffix = "</li>"
let listArray = [];
let listCheckedArray = [];
let listDateArray = [];

let todoList = document.getElementById("todoList")
let todoInput = document.getElementById("todoInput")

function addItem() {
    listArray.push(todoInput.value);
    listCheckedArray.push("");
    
    let currentDate = new Date();
    // I have no idea if there's a better way to do format time lmao
    let additionalZeroMinutes = "";
    let additionalZeroSeconds = "";
    let additionalZeroHours = "";
    if (currentDate.getUTCMinutes() < 10) { additionalZeroMinutes = "0"; }
    if (currentDate.getUTCSeconds() < 10) { additionalZeroSeconds = "0"; }
    if (currentDate.getUTCHours() < 10) { additionalZeroHours = "0"; }
    listDateArray.push(additionalZeroHours + currentDate.getHours() + ":" + additionalZeroMinutes + currentDate.getUTCMinutes() + ":" + additionalZeroSeconds + currentDate.getUTCSeconds());
    
    updateList();
}

function check(box, id) {
    if (box.checked) {
        listCheckedArray[id] = "checked='checked'";
    } else {
        listCheckedArray[id] = "";
    }
}

function updateList() {
    todoList.innerHTML = '';
    for (let i = 0; i < listArray.length; i++) {
        todoList.innerHTML +=
            listObjectPrefix +
            "   <input type='checkbox' onclick='check(this," + i + ")'" + listCheckedArray[i] + ">  " +
            listArray[i] +
            "   <button onclick='deleteItem(" + i + ")'> X </button>" +
            listObjectSuffix +
            listDateArray[i]
    }
}

function deleteItem(id) {
    listArray.splice(id, 1);
    listCheckedArray.splice(id, 1);
    listDateArray.splice(id, 1);
    updateList();
}