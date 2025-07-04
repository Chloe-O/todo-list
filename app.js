const listInput = document.getElementById("listInput");
const submitListItemBtn = document.getElementById("listSubmit");
const list = document.getElementById("list");
const clearDataBtn = document.getElementById("clearData");

let listArr = [];

const stringifiedArr = JSON.stringify(listArr);

function saveListToLocalStorage(arr) {
  localStorage.setItem("todoList", arr);
  console.log(arr);
}

function renderListItems(x) {
  let NewItemHTML = document.createElement("li");
  NewItemHTML.classList = "list-item";
  NewItemHTML.innerText = x;
  list.appendChild(NewItemHTML);
}

submitListItemBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (listInput.value) {
    let newItem = listInput.value;
    listArr.push(newItem);
    saveListToLocalStorage(listArr);
    renderListItems(newItem);
    listInput.value = "";
  }
});

// user wants to clear all list items
function clearAllData() {
  list.innerHTML = "";
  localStorage.removeItem("todoList");
}

// user wants to retrieve list items when document has loaded
function getListFromStorage() {
  const json = localStorage.getItem("todoList");
  if (json) {
    const toArr = json.split(",");
    toArr.forEach((i) => {
      renderListItems(i);
    });
  }
}

getListFromStorage();
clearDataBtn.addEventListener("click", clearAllData);
