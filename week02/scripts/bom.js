let input = document.querySelector('#favchap');
let btn = document.querySelector('button');
let list = document.querySelector('#list');

const li = document.createElement('li');
const delBtn = document.createElement('button');
li.textContent = input.value;
delBtn.textContent = '❌';
li.append(delBtn);
list.append(li);