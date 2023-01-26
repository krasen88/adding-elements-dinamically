import "../scss/app.scss";

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".button");
  let articles = [];
  for (let i = 0; i < 5; i++) {
    let article = document.createElement("article");
    article.classList.add("message");
    article.innerHTML = "This is message " + (i+1);
    articles.push(article);
  }
  button.addEventListener("click", () => {
    articles.forEach(article => {
      document.body.appendChild(article);
    });
  });
});
