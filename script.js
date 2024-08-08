const myLibrary = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBookToLibrary() {
  const book = new Book();
  const book2 = new Book("something", "someone");
  const book3 = new Book("something else", "someone else");

  book.title = prompt("Book Title:");
  book.author = prompt("Author:");

  myLibrary.push(book);
  myLibrary.push(book2);
  myLibrary.push(book3);

  return "Book title was " + book.title + " Author was " + book.author;
}

function displayLibrary() {
  myLibrary.forEach((book) => {
    console.log("Book Title:" + book.title + "Author: " + book.author);
  });
}

console.log(addBookToLibrary());
console.log(displayLibrary());
