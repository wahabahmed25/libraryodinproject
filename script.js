// DOM Elements
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("name");
const pagesInput = document.getElementById("pages");
const submitButton = document.querySelector(".submit");
const libraryButton = document.querySelector(".library");
const clearButton = document.querySelector(".reset");
const libraryDisplay = document.getElementById("libraryDisplay");
const bookInfo = document.getElementById("bookInfo");

// Create a "Back" button to go back to the original form view
const backButton = document.createElement('button');
backButton.textContent = "Back";
backButton.classList.add('back');
backButton.style.display = "none";

// Insert the "Back" button into the DOM before the library display
document.querySelector('.container').insertBefore(backButton, libraryDisplay);

// Library array to store books
let library = [];

// Function to handle adding books
function addBookToLibrary() {
    // Get input values
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;

    // Create a book object
    const book = {
        title: title,
        author: author,
        pages: pages
    };

    // Add the book to the library array
    library.push(book);
}

// Function to clear inputs
function clearInputs() {
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
}

// Function to display the library
function displayLibrary() {
    libraryDisplay.innerHTML = ''; // Clear the display first

    // Loop through library and display each book
    library.forEach(book => {
        const bookElement = document.createElement('p');
        bookElement.textContent = `${book.title} by ${book.author}, ${book.pages} pages`;
        libraryDisplay.appendChild(bookElement);
    });

    // Hide the input form and buttons, show the back button
    libraryDisplay.style.display = 'block';
    bookInfo.style.display = 'none';
    submitButton.style.display = 'none';
    clearButton.style.display = 'none';
    backButton.style.display = 'block';
    libraryButton.style.display = 'none'; // Hide the Library button
}

// Function to go back to the input form
backButton.addEventListener('click', () => {
    // Hide the library and show the input form again
    libraryDisplay.style.display = 'none';
    bookInfo.style.display = 'block';
    submitButton.style.display = 'block';
    clearButton.style.display = 'block';
    backButton.style.display = 'none'; // Hide the back button
    libraryButton.style.display = 'block'; // Show the Library button
});

// Add event listeners
submitButton.addEventListener('click', () => {
    addBookToLibrary();
    clearInputs();
    displayLibrary();
});

clearButton.addEventListener('click', clearInputs);

libraryButton.addEventListener('click', displayLibrary);
