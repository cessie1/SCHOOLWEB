// JavaScript code for additional features, e.g., smooth scrolling or scroll animations
// Example: Animate the page when it loads
window.onload = function() {
    const elements = document.querySelectorAll('.w3-animate-left, .w3-animate-right, .w3-animate-bottom');
    elements.forEach(element => {
      element.classList.add('w3-animate-fade');
    });
  };
  