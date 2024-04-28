let input = document.querySelector('#favchap');
let btn = document.querySelector('button');
let list = document.querySelector('#list');

btn.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const delBtn = document.createElement('button');
        li.textContent = input.value;
        delBtn.textContent = '❌';
        delBtn.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });
        li.append(delBtn);
        list.append(li);
        input.value = '';
        input.focus();
    }
});