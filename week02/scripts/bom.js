const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapterList');

button.addEventListener("click", function() {
    if (input.value.trim() === '') {
        alert("Please enter a chapter.");
        input.focus();
        return;
    } else {
        
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = ' ❌';

        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus(); 
        });

            input.value = '';
            input.focus();
    }
});