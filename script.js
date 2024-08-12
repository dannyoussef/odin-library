const myLibrary = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

const bookExample1 = new Book(
  "Harry Potter: The Sorcerer's Stone",
  "J.K. Rowling"
);
const bookExample2 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
myLibrary.push(bookExample1);
displayLibrary();
myLibrary.push(bookExample2);
displayLibrary();

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
  let bookCardHeader = bookCard.appendChild(document.createElement("h4"));
  let bookCardAuthor = bookCard.appendChild(document.createElement("p"));

  bookCard.classList.add("book-cards");
  bookCardHeader.classList.add("book-card-headers");
  bookCardAuthor.classList.add("book-card-authors");

  myLibrary.forEach((book) => {
    bookCardHeader.textContent = book.title;
    bookCardAuthor.textContent = book.author;

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
