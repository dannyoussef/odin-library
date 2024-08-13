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
  let removeButton = bookCard.appendChild(document.createElement("button"));
  let readUnreadButton = bookCard.appendChild(document.createElement("button"));

  bookCard.classList.add("book-cards");
  bookCardHeader.classList.add("book-card-headers");
  bookCardAuthor.classList.add("book-card-authors");
  removeButton.classList.add("remove-btns");
  readUnreadButton.classList.add("read-unread-btns");

  myLibrary.forEach((book) => {
    bookCard.dataset.value = myLibrary.length;
    removeButton.dataset.value = bookCard.dataset.value;
    removeButton.textContent = "Remove";
    readUnreadButton.textContent = "Read";
    bookCardHeader.textContent = book.title;
    bookCardAuthor.textContent = book.author;

    console.log(myLibrary.length);
  });

  removeButton.addEventListener("click", () => {
    removeButton.parentElement.remove();
  });

  readUnreadButton.addEventListener("click", () => {
    if (readUnreadButton.textContent == "Read") {
      readUnreadButton.textContent = "Unread";
    } else {
      readUnreadButton.textContent = "Read";
    }
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
