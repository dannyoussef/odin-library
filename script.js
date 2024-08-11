const myLibrary = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBookToLibrary() {
  const book = new Book();
  let bookTitleInput = document.getElementById("book-title");
  let bookAuthorInput = document.getElementById("book-author");

  book.title = bookTitleInput.value;
  book.author = bookAuthorInput.value;

  //   console.log(book.title);
  //   console.log(book.author);

  if (book.title != "" && book.author != "") {
    myLibrary.push(book);
    displayLibrary();
  }
}

function displayLibrary() {
  let bookCardContainer = document.getElementById("book-card-container");
  let bookCard = bookCardContainer.appendChild(document.createElement("div"));
  bookCard.classList.add("book-cards");

  myLibrary.forEach((book) => {
    bookCard.textContent =
      "Book Title: " + book.title + " Author: " + book.author;
    console.log(myLibrary.length);
  });
}

const addBook = document.getElementById("add-book-btn");
const cancel = document.getElementById("cancel");
const confirm = document.getElementById("confirm");
const dialog = document.getElementById("new-book-dialog");

// Update button opens a modal dialog
addBook.addEventListener("click", () => {
  dialog.showModal();
});

confirm.addEventListener("click", addBookToLibrary);

// Form cancel button closes the dialog box
cancel.addEventListener("click", () => {
  dialog.close("Closed");
});
