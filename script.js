function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator call the constructor");
  }

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  // Create unique idea for this book
  this.id = crypto.randomUUID();

  this.info = function () {
    console.log(
      `${this.id}: ${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read already" : "not read yet"}`,
    );
  };
}

function addBookToLibrary(title, author, pages, read) {
  // Create book
  const book = new Book(title, author, pages, read);

  // Add book to the books array
  library.push(book);
}

function displayBooks(library) {
  // Loops through array and displays each book on the page
  for (let book of library) {
    console.table(book);
  }
}

// Create library array to store all the books added
let library = [];

// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
// addBookToLibrary("Warrior Cats", "Erin Hunter", 374, true);
// addBookToLibrary("Shoe Dog", "Phil Knight", 214, true);

// displayBooks(library);

//////////////////////////////
// Interacting with the DOM //
//////////////////////////////

function addBookCard(bookCards, book) {
  // Adds the new book that has been submitted via the form to display as a card in the UI.

  // Add a new book card
  const bookCardEl = document.createElement("div");
  bookCardEl.classList.add("book-card");
  bookCards.appendChild(bookCardEl);

  // Add the title to the book card
  const titleEl = document.createElement("h2");
  titleEl.classList.add("title");
  titleEl.textContent = book.title;
  bookCardEl.appendChild(titleEl);

  // Add author name to book card
  const authorEl = document.createElement("h3");
  authorEl.classList.add("author-name");
  authorEl.textContent = book.authorName;
  bookCardEl.appendChild(authorEl);

  // Add number of pages
  const pagesEl = document.createElement("p");
  pagesEl.classList.add("pages");
  pagesEl.textContent = `${book.pages} pages`;
  bookCardEl.appendChild(pagesEl);

  // Add if read or not
  const hasReadEl = document.createElement("p");
  hasReadEl.classList.add("has-read");
  hasReadEl.textContent = book.hasRead ? "✔ Read" : "✘ Not read";
  bookCardEl.appendChild(hasReadEl);
}

const addBookBtn = document.querySelector("#add-book-btn");
const addBookForm = document.querySelector("#add-book-form");

addBookBtn.addEventListener("click", () => {
  addBookForm.classList.toggle("hidden");
  addBookBtn.classList.toggle("hidden");
});

const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", () => {
  addBookForm.classList.toggle("hidden");
  addBookBtn.classList.toggle("hidden");
});

const form = document.querySelector("#add-book-form");

form.addEventListener("submit", (e) => {
  // stops form submitting normally
  e.preventDefault();

  const book = {
    title: document.querySelector("#title").value,
    authorName: document.querySelector("#author-name").value,
    pages: document.querySelector("#pages").value,
    hasRead: document.querySelector("#has-read").checked,
  };

  const bookCards = document.querySelector("#book-cards");

  // Add new book card to the UI
  addBookCard(bookCards, book);
});
