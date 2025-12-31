// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.


// ===============================
// index.js
// DOM Testing & User Behavior Simulation
// ===============================

// ---------- Add an element to the DOM ----------
function addElementToDOM(id, textContent) {
  let element = document.getElementById(id);

  if (!element) {
    // If it doesn't exist, create it
    element = document.createElement('p');
    element.id = id;

    const container = document.getElementById('container') || document.body;
    container.appendChild(element);
  }

  // Set the text content
  element.textContent = textContent;
}

// ---------- Remove an element from the DOM ----------
function removeElementFromDOM(id) {
  const element = document.getElementById(id);
  if (element) element.remove();
}

// ---------- Simulate button click ----------
function simulateClick(id, textContent) {
  const button = document.getElementById(id);
  if (!button) return;

  button.addEventListener('click', () => {
    button.textContent = textContent;
  });

  // Simulate click for testing
  button.click();
}

// ---------- Handle form submission ----------
function handleFormSubmit(formId, targetId) {
  const form = document.getElementById(formId);
  const target = document.getElementById(targetId);
  if (!form || !target) return;

  const input = form.querySelector('input');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (input.value.trim() === '') {
      let error = document.getElementById('error-message');
      if (!error) {
        error = document.createElement('p');
        error.id = 'error-message';
        form.appendChild(error);
      }
      error.textContent = 'Input cannot be empty';
      error.classList.remove('hidden');
    } else {
      target.textContent = input.value;
      input.value = '';
    }
  });

  // Simulate submission for testing
  form.dispatchEvent(new Event('submit'));
}

// ---------- Export functions for Jest ----------
module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit
};
