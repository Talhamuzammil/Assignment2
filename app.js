// Q#1

function addNumber(num) {
  return function (x) {
    return x + num;
  };
}

let addFive = addNumber(5);
console.log(addFive(10));
console.log(addFive(20));

// Q#2

let myArray = [1, 2, 3, 4, 5];

let a = myArray.slice(1,3);
console.log(a);

function searchArray(arr, val) {
  if (arr.length === 0) {
    return false;
  }

  if (arr[0] === val) {
    return true;
  } else {
    return searchArray(arr.slice(1), val);
  }
}

console.log(searchArray(myArray, 3));
console.log(searchArray(myArray, 6));

// Q#3

function addParagraph(text) {
  const newParagraph = document.createElement("p");
  const paragraphText = document.createTextNode(text);
  newParagraph.appendChild(paragraphText);
  document.body.appendChild(newParagraph);
}
addParagraph("This is a new paragraph!");

// Q#4

function addListItem(text) {
    const newListItem = document.createElement('li');
    const listItemText = document.createTextNode(text);
    newListItem.appendChild(listItemText);
    const unorderedList = document.querySelector('ul');
    unorderedList.appendChild(newListItem);
  }

  addListItem('This is a new list item!');

// Q#5

function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }
  const myElement = document.querySelector('#my-element');
  changeBackgroundColor(myElement, 'red');

// Q#6

function saveToLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }
  const user = { name: 'hasan', age: 18 };
  saveToLocalStorage('a', user);
  console.log(localStorage.getItem("a"));

// Q#7

function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
  }
  const b = getFromLocalStorage('b');
  console.log(b);
function getFromLocalStorage(key) {
  const item = localStorage.getItem(key);
  return item === null ? null : JSON.parse(item);
}

// Q#8

function saveObjectToLocalStorage(obj) {
    Object.entries(obj).forEach(([key, value]) => {
      localStorage.setItem(key, JSON.stringify(value));
    });

    const newObj = {};
    Object.keys(obj).forEach(key => {
      newObj[key] = JSON.parse(localStorage.getItem(key));
    });
    return newObj;
  }

  const c = { name: 'ahmed', age: 20, city: 'karachi' };
const newObj = saveObjectToLocalStorage(c);
console.log(newObj);
