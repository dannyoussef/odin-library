const myLibrary = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBookToLibrary() {
  const book = new Book();

  book.title = prompt("Book Title:");
  book.author = prompt("Author:");

  if (book.title != "" && book.author != "") {
    myLibrary.push(book);
  }

  console.log(displayLibrary());
}

function displayLibrary() {
  myLibrary.forEach((book) => {
    console.log("Book Title:" + book.title + " Author: " + book.author);
    console.log(myLibrary.length);
  });
}

const newBook = document.querySelector("#new-book-btn");
newBook.addEventListener("click", addBookToLibrary);
