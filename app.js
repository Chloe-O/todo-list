const listInput = document.getElementById("listInput");
const submitListItemBtn = document.getElementById("listSubmit");
const list = document.getElementById("list");
const clearDataBtn = document.getElementById("clearData");

const modal = document.getElementById("confirmDataClearModal");
const modalBtnsContainer = document.getElementById("#btn-wrap");
const deleteDataBtn = document.getElementById("deleteData");
const keepDataBtn = document.getElementById("keepData");

let listArr = [];

const stringifiedArr = JSON.stringify(listArr);

// To implement

/*
- add modal to confirm user wants to delete data
- click on list item adds strike through and adds 'complete' (class or data-val?)
- add individual delete item button for each list item
*/

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
  if (listInput.value && !listInput.value == " ") {
    let newItem = listInput.value;
    listArr.push(newItem);
    saveListToLocalStorage(listArr);
    renderListItems(newItem);
    listInput.value = "";
  }
});

// user wants to clear all list items
function clearAllData() {
  modal.style.display = "flex";
  modalBtnsContainer.addEventListener("click", (e) => {
    if ((e.target.value = "delete")) {
      // list.innerHTML = "";
      // localStorage.removeItem("todoList");
      console.log(e.target.value);

    }
  });
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
