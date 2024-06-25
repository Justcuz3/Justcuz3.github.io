// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Form submitted!');
        alert('Thank you for your message!');
        form.reset();
    });
});
