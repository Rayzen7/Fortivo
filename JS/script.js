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

// Tips Map Start
const tipsContainer = document.querySelector('.tips-body');
tipsData.forEach(tips => {
    const tipsElement = document.createElement("div");
    tipsElement.classList.add('tips-body-container');

    tipsElement.innerHTML = `
        <div class="tips-body-container-text">
            <div class="tips-body-container-text-head">
                <h2>${tips.id}</h2>
                <h1>${tips.title}</h1>
            </div>
            <p>${tips.desc}</p>
        </div>
        <img src="${tips.img}" style="width: ${tips.imgScale}px;" alt="${tips.title}">
    `;

    tipsContainer.appendChild(tipsElement);
});
// Tips Map End