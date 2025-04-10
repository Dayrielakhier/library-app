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
            const cell = document.createElement('td')
            cell.textContent = book[property]
            row.appendChild(cell)
        }
        tbody.appendChild(row)
    }
}