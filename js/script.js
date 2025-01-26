
const library = [];
const bookCreator = document.getElementById('book-creator');
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
        <div class="book-card">
            <h2>${element.title}</h2>
            <h3>${element.author}</h3>
            <p>${pages} pages</p>
            <p>${read}</p>
        </div>
    `;
    libraryCards.append(cardHtml);
    }
);


}
