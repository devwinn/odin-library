
const library = [];
const bookCreator = document.getElementById('create');
const bookSubmit = document.getElementById('form-submit')
const libraryCards = document.getElementById('library-cards');
const submitContainers = document.getElementsByClassName('submit-div')
const noRead = document.getElementById('read');
const yesRead = document.getElementById('not-read');



function addToLibrary(book) {

    library.push(book);
}

function createBook(author, pages, read, title) {

    this.author = author;
    this.pages = pages;
    this.read = read;
    this.title = title;

    this.changeRead = function () {
        if (this.read == 'Yes') {
            this.read = 'No';
        } else {
            this.read = 'Yes';
        }
    };
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    };
}

function displayBooks(array) {

    libraryCards.innerHTML = "";

    let i = 0;

    array.forEach(element => {
        let cardHtml = `
            <h2 class="book-title">"${element.title}"</h2>
            <h2 class="book-author">by ${element.author}</h2>
            <p class="book-pages">${element.pages} <b>Pages</b></p>
            <div>
                <p class="book-read"><b>Read?</b> ${element.read}</p>
                <button class="book-read-reset book-index-${i}">Change</button>
            </div>
            <button class="book-reset book-index-${i}">Remove</button>

        `;
        let insertCard = document.createElement("div");

        insertCard.classList.add(`index-${i}`, 'book-card');
        insertCard.innerHTML = cardHtml;
        libraryCards.append(insertCard);
        i++;
    }
    );

    const changeButtons = document.querySelectorAll('.book-read-reset');

    changeButtons.forEach(button => {

        button.addEventListener( 'click', function(event) {
            let bookClass = button.classList[1];
            let index = bookClass.charAt(bookClass.length-1);
            library[index].changeRead();
            displayBooks(library);
        })
    });

    const resetButtons = document.querySelectorAll('.book-reset');
   
    // function to remove book card when corresponding reset button is clicked
    resetButtons.forEach(button => {

        button.addEventListener('click', function(event) {

          // get library index from remove button classlist
          let bookClass = button.classList[1];
          let index = bookClass.charAt(bookClass.length-1);
          removeBook(index);
          console.log('Clicked element:', button);
          console.log('reset class index', index);
        });
      });
}

function hideForm() {
    bookCreator.style.display = 'none';
    submitContainers[0].style.display = 'none';
    submitContainers[1].style.display = 'flex';
}

function removeBook(bookIndex) {

    library.splice(bookIndex, 1);
    displayBooks(library);
}

function resetForm() {

    document.getElementById('author').value = "";
    document.getElementById('pages').value = "";
    document.getElementById('title').value = "";
    noRead.checked = false;
    yesRead.checked = false;
}

function showForm() {
    
    bookCreator.style.display = 'flex';
    submitContainers[0].style.display = 'flex';
    submitContainers[1].style.display = 'none';

}

function submitBook() {
    
    let newAuthor = document.getElementById('author').value;
    let newPages = document.getElementById('pages').value;
    let newRead = document.forms.create.elements.read['value'];
    let newTitle = document.getElementById('title').value;
    
    if (newAuthor && newPages && newRead && newTitle) {
        let newBook = new createBook(newAuthor, newPages, newRead, newTitle);
        addToLibrary(newBook);
        resetForm();
        hideForm();
        displayBooks(library);
    } else {
        console.log('Unsuccessful Submission')
    }
}
