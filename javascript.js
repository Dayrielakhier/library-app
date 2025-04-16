const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID()
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read)
    myLibrary.push(book)
}

const tbody = document.querySelector('tbody')

function display() {
    for (const book of myLibrary) {
        if (tbody.querySelector(`[data-id="${book.id}"]`)) continue;
        const row = document.createElement('tr');
        row.setAttribute("data-id", book.id);
        for (const property in book) {
            if (property.includes("id")) continue;
            const cell = document.createElement('td');
            cell.textContent = book[property];
            row.appendChild(cell);
            if (cell.textContent === book.read) {
                cell.setAttribute("contenteditable", "true");
                cell.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        book.read = cell.textContent;
                        cell.blur();
                    }
                });
            }
        }
        const remove = document.createElement("button");
        remove.textContent = "Remove";
        row.appendChild(remove);
        tbody.appendChild(row);
        remove.addEventListener("click", () => {
            myLibrary.splice(myLibrary.findIndex(book => book.id === row.getAttribute("data-id")), 1);
            row.remove();
        })
    }
}

const showDialog = document.querySelector("#showDialog")
const dialog = document.querySelector("dialog")

showDialog.addEventListener("click", () => {
    dialog.showModal()
})

const cancel = document.querySelector("#cancel")
const form = document.querySelector("form")
const title = document.querySelector("#title")
const author = document.querySelector("#author")
const pages = document.querySelector("#pages")
const read = document.querySelector("#read")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibrary(title.value, author.value, pages.value, read.value);
    display();
    form.reset();
    dialog.close();
})

cancel.addEventListener("click", () => {
    dialog.close()
})