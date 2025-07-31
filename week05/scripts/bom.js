const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapterList');

let chaptersArray = getChapterList() || [];


function getChapterList(){
    const storedChapters = localStorage.getItem('myFavBOM');
    if (storedChapters) {
        return JSON.parse(storedChapters);
    }
    return undefined;
}

function saveChapterList() {
    localStorage.setItem("myFavBOM" , JSON.stringify(chaptersArray));
}

function displayChapter(chapterName) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    
    li.textContent = chapterName;
    deleteButton.textContent = ' ❌';

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function() {
        list.removeChild(li);
        chaptersArray = chaptersArray.filter(item => item !== chapterName);

        saveChapterList();
        input.focus(); 
    })
}

chaptersArray.forEach(chapter => displayChapter(chapter));

button.addEventListener("click", function() {
    if (input.value.trim() === '') {
        alert("Please enter a chapter.");
        input.focus();
        return;
    }
    else{
        const newChapter = input.value.trim();
        chaptersArray.push(newChapter);
        displayChapter(newChapter);
        saveChapterList();
        input.value = '';
        input.focus();  
    }
});