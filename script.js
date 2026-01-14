const books = [
    { title: "The Alchemist", category: "fiction", author: "Paulo Coelho", price: 500 },
    { title: "Brief History of Time", category: "science", author: "Stephen Hawking", price: 800 },
    { title: "Sapiens", category: "history", author: "Yuval Noah Harari", price: 700 },
    { title: "Harry Potter", category: "fiction", author: "J.K. Rowling", price: 600 },
    { title: "Physics Fundamentals", category: "science", author: "Isaac Newton", price: 900 }
];

const bookList = document.getElementById("bookList");

function displayBooks(items) {
    bookList.innerHTML = "";
    items.forEach(b => {
        bookList.innerHTML += `
            <div class="book">
                <h3>${b.title}</h3>
                <p>Author: ${b.author}</p>
                <p>Category: ${b.category}</p>
                <p>Rs. ${b.price}</p>
            </div>
        `;
    });
}

function filterBooks() {
    const category = document.getElementById("categoryFilter").value;
    const author = document.getElementById("authorFilter").value.toLowerCase();
    const price = document.getElementById("priceFilter").value;

    let filtered = books.filter(b =>
        (category === "all" || b.category === category) &&
        (author === "" || b.author.toLowerCase().includes(author)) &&
        (price === "" || b.price <= price)
    );

    displayBooks(filtered);
}

// Display all books initially
displayBooks(books);
