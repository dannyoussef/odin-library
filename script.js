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
  let bookCardContainer = document.querySelector("#book-card-container");
  let bookCard = bookCardContainer.appendChild(document.createElement("div"));
  bookCard.classList.add("book-cards");

  myLibrary.forEach((book) => {
    bookCard.textContent =
      "Book Title: " + book.title + " Author: " + book.author;
    console.log(myLibrary.length);
  });
}

// const newBook = document.querySelector("#new-book-btn");
// newBook.addEventListener("click", addBookToLibrary);

const addBook = document.getElementById("add-book-btn");
const cancel = document.getElementById("cancel");
const dialog = document.getElementById("new-book-dialog");

// Update button opens a modal dialog
addBook.addEventListener("click", () => {
  dialog.showModal();
});

// Form cancel button closes the dialog box
cancel.addEventListener("click", () => {
  dialog.close("animalNotChosen");
});
