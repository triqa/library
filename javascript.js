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

const addBookBtn = document.querySelector("#add-book-btn");
const addBookForm = document.querySelector("#add-book-form");

addBookBtn.addEventListener("click", () => {
  addBookForm.classList.toggle("hidden");
  addBookBtn.classList.toggle("hidden");
});
