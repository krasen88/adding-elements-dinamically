import "../scss/app.scss";

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    for (let i = 0; i < 5; i++) {
      let article = document.createElement("article");
      article.classList.add("message");
      article.innerHTML = "This is message " + (i+1);
      document.body.appendChild(article);
    }
  });
});
