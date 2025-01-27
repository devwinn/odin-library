
const library = [];
const bookCreator = document.getElementById('book-creator');
const bookSubmit = document.getElementById('form-submit')
const libraryCards = document.getElementById('library-cards');

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

    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${read}`
    };

}

function displayBooks(library) {
    libraryCards.innerHTML = "";

    let i = 0;

    library.forEach(element => {
        let cardHtml = `
            <h2 class="book-title">${element.title}</h2>
            <h3 class="book-author">${element.author}</h3>
            <p class="book-pages">${element.pages} pages</p>
            <p class="book-read">${element.read}</p>
            <button class="book-reset">Remove</button>

        `;
        let insertCard = document.createElement("div");

        insertCard.classList.add('book-card', `book-index${i}`);
        insertCard.classList.add
        insertCard.innerHTML = cardHtml;
        libraryCards.append(insertCard);
        i++;
        console.log(element.info);
    }
);
}

function resetForm() {
    document.getElementById('author').value = "";
    document.getElementById('pages').value = "";
    document.getElementById('title').value = "";
    noRead.checked = false;
    yesRead.checked = false;
    
}

function submitBook () {
    let newAuthor = document.getElementById('author').value;
    let newPages = document.getElementById('pages').value;
    let newRead = document.forms.create.elements.read['value'];
    let newTitle = document.getElementById('title').value;

    if (newAuthor && newPages && newRead && newTitle) {
        let newBook = new createBook(newAuthor, newPages, newRead, newTitle);
        
        addToLibrary(newBook);
        resetForm();
        displayBooks(library);
    } else {
        console.log('unsuccessful')
    }
}
