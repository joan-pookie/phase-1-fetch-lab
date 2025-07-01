

function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(json => renderBooks(json));
}

// Renders a list of book titles
function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach(book => {
    const li = document.createElement("li");
    li.textContent = book.name;
    main.appendChild(li);
  });
}

// Initialize rendering once DOM is ready
document.addEventListener("DOMContentLoaded", function() {
  fetchBooks();
});
