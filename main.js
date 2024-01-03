const myLibrary = [
    {
        author: 'John Doe',
        title: 'Lorem Ipsum',
        read_status: true
    }
];

var author = document.querySelector("#author");
var title = document.querySelector("#title");
var read_status = document.querySelector("#read_status");

const books = document.querySelector("#books");

function updateInput(){
    author = author.value;
    title = title.value;
    read_status = read_status.value;
}

function Book() {
    this.author = author;
    this.title = title;
    this.read_status = read_status;
}

function addBookToLibrary() {
    updateInput();
    const newBook = new Book(author, title, read_status);
    myLibrary.push(newBook);
    printLibrary();
}

function printLibrary() {
    myLibrary.forEach(element => {
        books.innerHTML += `<h1>${element.title}</h1>`;
    });
}
