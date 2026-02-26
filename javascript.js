function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator call the constructor");
  }

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    console.log(
      `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read already" : "not read yet"}`,
    );
  };
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);

book1.info();

// console.log(ans);
