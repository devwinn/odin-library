
const library = [];
const bookCreator = document.getElementById('book-creator');
const bookSubmit = document.getElementById('form-submit')
const libraryCards = document.getElementById('library-cards');



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

    library.forEach(element => {
        let cardHtml = `
            <h2>${element.title}</h2>
            <h3>${element.author}</h3>
            <p>${element.pages} pages</p>
            <p>${element.read}</p>
        `;
        let insertCard = document.createElement("div");

        insertCard.classList.add("book-card");
        insertCard.innerHTML = cardHtml;
        libraryCards.append(insertCard);
        console.log(element.info);
    }
);


}

function submitBook () {
    let newAuthor = document.getElementById('author');
    let newPages = document.getElementById('pages');
    let newRead = document.forms.create.elements.read['value'];
    let newTitle = document.getElementById('title');

    if (newAuthor && newPages && newRead && newTitle) {
        let newBook = new createBook(newAuthor, newPages, newRead, newTitle);
        addToLibrary(newBook);
    }

    console.log(library)
}
