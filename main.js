const booktitle = document.getElementById("booktitle");
const bookauthor = document.getElementById("bookauthor");
const bookpages = document.getElementById("bookpages");
const read = document.getElementById("read");
const addbook = document.querySelector("button");
const books = document.getElementById("books");


function book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const library = [];

addbook.addEventListener("click", (e) => {
    e.preventDefault();
    const newbook = new book(booktitle.value, bookauthor.value, bookpages.value, read.value);
    library.push(newbook);
    console.log(library);
    booktitle.value = "";
    bookauthor.value = "";
    bookpages.value = "";
    read.value = "";
    books.innerHTML = "";
    library.forEach((book, index) => {
        const bookcard = document.createElement("div");
        bookcard.classList.add("bookcard");
        bookcard.innerHTML = `
        <h2>${book.title}</h2>
        <h3>${book.author}</h3>
        <p>${book.pages} pages</p>
        <p>Read: ${book.read ? 'Yes' : 'No'}</p>
        <button class="remove">remove</button>
        `;
        books.appendChild(bookcard);
        const remove = bookcard.querySelector(".remove");
        remove.addEventListener("click", () => {
            library.splice(index, 1);
            books.removeChild(bookcard);
        })
    })
})