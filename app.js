const listInput = document.getElementById("listInput");
const submitListItemBtn = document.getElementById("listSubmit");
const list = document.getElementById("list");

let listArr = [];

function renderListItems(x) {
  let NewItemHTML = document.createElement("li");
  NewItemHTML.classList = "list-item";
  NewItemHTML.innerText = x;
  list.appendChild(NewItemHTML);
  console.log(NewItemHTML);
  console.log(listArr);
}

submitListItemBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (listInput.value) {
    let newItem = listInput.value;
    listArr.push(newItem);
    renderListItems(newItem);

    listInput.value = "";
  }
});
