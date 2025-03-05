// Article Map Start
const articleContainer = document.querySelector(".article-container");
articleData.forEach(article => {
    const articleElement = document.createElement("div");
    articleElement.classList.add("article-body");

    articleElement.innerHTML = `
        <img src="${article.img}" alt="Article Image">
        <h4>${article.date}</h4>
        <h1>${article.title}</h1>
        <p>${article.desc}</p>
    `;

    articleContainer.appendChild(articleElement);
});
// Article Map End