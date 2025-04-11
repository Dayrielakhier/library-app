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
        const row = document.createElement('tr')
        for (const property in book) {
            if (property.includes("id")) continue;
            const cell = document.createElement('td');
            cell.textContent = book[property];
            row.appendChild(cell);
        }
        tbody.appendChild(row)
    }
}

const showDialog = document.querySelector("#showDialog")
const dialog = document.querySelector("dialog")

showDialog.addEventListener("click", () => {
    dialog.showModal()
})

const submit = document.querySelector('#submit')
const title = document.querySelector("#title")
const author = document.querySelector("#author")
const pages = document.querySelector("#pages")
const read = document.querySelector("#read")

submit.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary(title.value, author.value, pages.value, read.value);
    display();
    dialog.close();
})

