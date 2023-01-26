import "../scss/app.scss";

document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 5; i++) {
        let article = document.createElement("article");
        article.classList.add("message");
        article.innerHTML = "This is message " + (i+1);
        document.body.appendChild(article);
    }
});
