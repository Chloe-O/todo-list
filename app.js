const listInput = document.getElementById("listInput");
const submitListItemBtn = document.getElementById("listSubmit");
const list = document.getElementById("list");

let listArr = ['do the laundry', 'buy chicken', 'feed the cat', 'send letter'];

function displayListItems(arr) {
    arr.forEach(item => {
        // console.log(`<li class="list-item">${item}</li>`);
        document.createElement('li');
    });
}

displayListItems(listArr);

submitListItemBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (listInput.value) {
    listArr.push(listInput.value);
    listInput.value = "";
    console.log(listArr);
  }
});

console.log(listArr);
