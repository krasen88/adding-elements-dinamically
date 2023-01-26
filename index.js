document.body.addEventListener('click', function() {
    for (let i = 1; i <= 5; i++) {
        let message = document.createElement('article');
        message.classList.add('message');
        message.innerHTML = `Sample text content for message ${i}`;
        document.body.appendChild(message);
    }
});
