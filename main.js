const myLibrary = [
    {
        author: 'John Doe',
        title: 'Lorem Ipsum',
        read_status: true
    }
];

const author_input = document.querySelector("#author");
const title_input = document.querySelector("#title");
const read_status_input = document.querySelector("#read_status");

const books = document.querySelector("#books");

var books_table;

printLibrary();

function updateInput(){
    author = author_input.value;
    title = title_input.value;
    read_status = read_status_input.value;
}

function resetInput(){
    author_input.value = '';
    title_input.value = '';
    read_status_input.value = '';
}

function Book() {
    this.author = author;
    this.title = title;
    this.read_status = read_status;
}

function addBookToLibrary() {
    updateInput();
    if(title && author && read_status){
    const newBook = new Book(author, title, read_status);
    myLibrary.push(newBook);
    printLibrary();
    resetInput();
    }
}

function printLibrary() {
    books_table = '<table>';
    var counter = 0;
    myLibrary.forEach(element => {
        books_table += `<tr><td>${element.title}</td><td class='separator'>―</td><td>${element.author}</td><td class='readStatus' onclick='updateReadStatus(${counter});'>${element.read_status}</td><td class='remove' onclick='removeBook(${counter});'>x</td></tr>`;
        counter++;
    });
    books_table += '</table>';
    books.innerHTML = books_table;
}

function removeBook(x) {
    myLibrary.splice(x, 1);
    printLibrary();
}

function updateReadStatus(x) {
    myLibrary[x].read_status = !myLibrary[x].read_status;
    printLibrary();
}
