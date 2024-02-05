myLibrary = [
    {
        author: 'John Doe',
        title: 'Lorem Ipsum',
        read_status: true
    }
];

AUTHOR_INPUT = document.querySelector("#author");
TITLE_INPUT = document.querySelector("#title");
READ_STATUS_INPUT = document.querySelector("#read_status");

BOOKS = document.querySelector("#books");

var books_table;

class Library {

updateInput(){
    this.author = AUTHOR_INPUT.value;
    this.title = TITLE_INPUT.value;
    this.read_status = READ_STATUS_INPUT.value;
}

resetInput(){
    AUTHOR_INPUT.value = '';
    TITLE_INPUT.value = '';
    READ_STATUS_INPUT.value = '';
}

constructor(title,author,read_status) {
    this.author = author;
    this.title = title;
    this.read_status = read_status;
}

addBookToLibrary() {
    this.updateInput();
    if(this.title && this.author && this.read_status){
    const newBook = new Library(this.author, this.title, this.read_status);
    myLibrary.push(newBook);
    this.printLibrary();
    this.resetInput();
    }
}

printLibrary() {
    books_table = '<table>';
    var counter = 0;
    console.log(myLibrary);
    myLibrary.forEach(element => {
        books_table += `<tr><td>${element.title}</td><td class='separator'>―</td><td>${element.author}</td><td class='readStatus' onclick='app.updateReadStatus(${counter});'>${element.read_status}</td><td class='remove' onclick='app.removeBook(${counter});'>x</td></tr>`;
        counter++;
    });
    books_table += '</table>';
    BOOKS.innerHTML = books_table;
}

removeBook(x) {
    myLibrary.splice(x, 1);
    this.printLibrary();
}

updateReadStatus(x) {
    myLibrary[x].read_status = !myLibrary[x].read_status;
    this.printLibrary();
}
}

let app = new Library;
app.printLibrary();