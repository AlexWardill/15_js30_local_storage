const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const inputItem = document.querySelector('input[type=text]');
const submitBtn = document.querySelector('input[type=submit]');
const items = [];

// Submit item
// render item
inputItem.value = '';

window.onload = addFromStorage();

function addFromStorage() {
    let keys = Object.keys(localStorage);
    console.log(keys);
    for (let i = 0; i < keys.length; i++) {
        console.log(localStorage[keys[i]]);
        renderItems(localStorage[keys[i]]);
    }
}

function clearInput() {
    inputItem.value = '';
}

function loadItems() {
    items.unshift(inputItem.value);
    let count = items.length;
    localStorage.setItem(`Item${count}`, inputItem.value);
}

addItems.addEventListener('submit', (e) => {
    e.preventDefault();
    loadItems();
    renderItems(items[0]);
    clearInput();
    });

function renderItems(item) {
    let newItem =  `<li>
                    <input type="checkbox">
                    <label>${item}</label>
                    </li>`
    itemsList.innerHTML += newItem;
}

