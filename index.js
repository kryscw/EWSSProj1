let listObjectPrefix = "<li>"
let listObjectSuffix = "</li>"
let listArray = [];
let listCheckedArray = [];

let todoList = document.getElementById("todoList")
let todoInput = document.getElementById("todoInput")

function addItem() {
    listArray.push(todoInput.value);
    listCheckedArray.push("");
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
            listObjectSuffix
    }
}

function deleteItem(id) {
    listArray.splice(id, 1);
    listCheckedArray.splice(id, 1);
    updateList();
}