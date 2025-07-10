const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('');
const li = document.createElement('')
const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);

button.addEventListener("click", function() {
    if (input.value.trim() === '') { 
        alert("Please enter a chapter.");
        return;
    } else {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';

        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
        });

        input.value = ''; 
        input.focus();
    }
});