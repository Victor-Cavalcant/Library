const lib = (() => {
    const booktitle = document.getElementById("booktitle");
    const bookauthor = document.getElementById("bookauthor");
    const bookpages = document.getElementById("bookpages");
    const read = document.getElementById("read");
    const addbook = document.querySelector("button");
    const books = document.getElementById("books");


    class Book {
        constructor(title, author, pages, read) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.read = read;
        }
    }

    const library = [];

    addbook.addEventListener("click", (e) => {
        e.preventDefault();
        const newbook = new Book(booktitle.value, bookauthor.value, bookpages.value, read.checked);
        library.push(newbook);
        booktitle.value = "";
        bookauthor.value = "";
        bookpages.value = "";
        read.checked = false;
        renderLibrary();
    });

    function renderLibrary() {
        books.innerHTML = "";
        library.forEach((book, index) => {
            const bookcard = document.createElement("div");
            bookcard.classList.add("bookcard");
            bookcard.innerHTML = `
                <h2>${book.title}</h2>
                <h3>${book.author}</h3>
                <p>${book.pages} pages</p>
                <p>Read: ${book.read ? 'Yes' : 'No'}</p>
                <button class="toggle">Read?</button>
                <button class="remove">Remove</button>
            `;
            books.appendChild(bookcard);

            const toggle = bookcard.querySelector(".toggle");
            toggle.addEventListener("click", () => {
                book.read = !book.read;
                renderLibrary();
            });

            const remove = bookcard.querySelector(".remove");
            remove.addEventListener("click", () => {
                library.splice(index, 1);
                renderLibrary();
            });
        });
    }
})();
