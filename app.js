const listInput = document.getElementById("listInput");
const submitListItemBtn = document.getElementById("listSubmit");
const list = document.getElementById("list");
const clearDataBtn = document.getElementById("clearData");

const modal = document.getElementById("confirmDataClearModal");
const modalBtnsContainer = document.getElementById("btnWrap");
const deleteDataBtn = document.getElementById("deleteData");
const keepDataBtn = document.getElementById("keepData");

let listArr = [];

const stringifiedArr = JSON.stringify(listArr);

// To implement

/*
- add modal to confirm user wants to delete data [ ✓ ]
- click on list item adds strike through and adds 'complete' (class or data-val?)
- add individual delete item button for each list item
*/

// users add new items to list
function sumbitListItem(e) {
  e.preventDefault();
  if (listInput.value && !listInput.value == " ") {
    let newItem = listInput.value;
    listArr.push(newItem);
    renderListItems(newItem);
    listInput.value = "";
  }
  saveListToLocalStorage(listArr);
};

// users add item by click or enter
submitListItemBtn.addEventListener("click", (e) => sumbitListItem(e));
listInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sumbitListItem(e);
  }
});

// user data stored
function saveListToLocalStorage(arr) {
  localStorage.setItem("todoList", arr);
}

// items are rendered in the DOM
function renderListItems(x) {
  let NewItemHTML = document.createElement("li");
  NewItemHTML.classList = "list-item";
  NewItemHTML.innerText = x;
  list.appendChild(NewItemHTML);
}

// user wants to clear all list items
function clearAllData() {
  modal.style.display = "flex";
  modal.addEventListener("click", (e) => {
    let btnClick = e.target;
    if (btnClick.value == "delete") {
      localStorage.clear("todoList");
      list.innerHTML = "";
      modal.style.display = "none";
    } else if (btnClick.value == "keep") {
      modal.style.display = "none";
    } else if (btnClick.classList.contains("modal")) {
      modal.style.display = "none";
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

// function deleteSingleItem() {
//   list.addEventListener()
// }

getListFromStorage();
clearDataBtn.addEventListener("click", clearAllData);
