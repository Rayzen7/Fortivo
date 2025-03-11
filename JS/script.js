// Accordion Start
document.addEventListener('DOMContentLoaded', function() {
    const gambleAccordion = document.querySelector('.gamble-body-accordion');

    accordionData.forEach((accordionItem, index) => {
        const accordionElement = document.createElement('div');
        accordionElement.classList.add('gamble-body-accordion-content');

        accordionElement.innerHTML = `
            <div class="gamble-body-accordion-container">
                <div class="gamble-body-accordion-container-head" data-index="${index}">
                    <h1>${accordionItem.title}</h1>
                    <i class="bx bx-chevron-down accordion-chevron"></i>
                </div>
                <div class="gamble-body-accordion-container-content" style="display: none;">
                    <p>${accordionItem.desc}</p>
                </div>
            </div>
        `;

        gambleAccordion.appendChild(accordionElement);
    });

    const accordionHeads = document.querySelectorAll('.gamble-body-accordion-container-head');

    accordionHeads.forEach(head => {
        head.addEventListener('click', function() {
            const parent = this.parentElement;
            const content = parent.querySelector('.gamble-body-accordion-container-content');
            const chevron = this.querySelector('.accordion-chevron');

            const isActive = parent.classList.contains('active');

            document.querySelectorAll('.gamble-body-accordion-container').forEach(container => {
                container.classList.remove('active');
                container.querySelector('.accordion-chevron').classList.remove('active');
            });

            if (!isActive) {
                parent.classList.add('active');
                chevron.classList.add('active');
                content.style.display = 'block';
            }
        });
    });
});
// Accordion End

// Gambler Data Start
const dataGambler = {
    "< 10 Years": [30, 60, 20, 5, 10], 
    "10-20 Years": [50, 80, 30, 20, 25], 
    "21-30 Years": [60, 90, 40, 30, 35], 
    "31-50 Years": [70, 100, 50, 40, 45], 
    "> 50 Years": [20, 40, 15, 10, 12]
};

const labels = ["2019", "2020", "2021", "2022", "2023"];
const ctx = document.getElementById("gamblingChart").getContext("2d");

let gamblerChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: labels,
        datasets: [{
            label: "Persentase Data",
            data: dataGambler["< 10 Years"], 
            borderColor: "white",
            backgroundColor: "#468585",
            fill: true,
            pointRadius: 5
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    stepSize: 10,
                    callback: function(value) {
                        return value + "%"; 
                    }
                }
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    title: function(tooltipItems) {
                        return tooltipItems[0].label;
                    },
                    label: function(context) {
                        let ageGroup = document.querySelector(".selected")?.textContent.trim() || "";
                        return `${ageGroup}\nYears ${context.label} by ${context.raw}%`;
                    }
                }
            }
        }
    }
});

document.querySelectorAll(".gambler-data-container").forEach(button => {
    if (button.querySelector("h1").textContent.trim() === "< 10 Years") {
        button.classList.add("selected");
        button.style.backgroundColor = "#468585";
        button.style.color = "#fff";
        button.style.border = "2px solid white";
    }

    button.addEventListener("click", function() {
        document.querySelectorAll(".gambler-data-container").forEach(btn => {
            btn.classList.remove("selected");
            btn.style.backgroundColor = "";
            btn.style.border = "";
            btn.style.color = "";
        });
        this.classList.add("selected");
        this.style.backgroundColor = "#468585";
        this.style.border = "2px solid white";
        const ageGroup = this.querySelector("h1").textContent.trim();
        if (dataGambler[ageGroup]) {
            gamblerChart.data.datasets[0].data = dataGambler[ageGroup];
            gamblerChart.update();
        }
    });
});
// Gambler Data End

// Data Doctor start
document.addEventListener("DOMContentLoaded", function () {
    function counterAnimation(element, target) {
        let start = 0;
        let duration = target * 20; 
        let stepTime = Math.abs(Math.floor(duration / target));

        let timer = setInterval(() => {
            start += Math.ceil(target / 100);
            if (start >= target) {
                start = target;
                clearInterval(timer);
            }
            element.innerText = start.toLocaleString();
        }, stepTime);
    }

    function checkScroll() {
        if (window.scrollY >= 3900) {
            document.querySelectorAll(".data-doctor-content h3").forEach((el) => {
                if (!el.classList.contains("animated")) {
                    el.classList.add("animated");
                    let targetNumber = parseInt(el.innerText.replace(",", ""));
                    el.innerText = "0";
                    counterAnimation(el, targetNumber);
                }
            });
        }
    }

    window.addEventListener("scroll", checkScroll);
});
// Data Doctor end

// Article Map Start
const articleContainer = document.querySelector(".article-container")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")
const page1 = document.getElementById("page1")
const page2 = document.getElementById("page2")

let currentPage = 1
const itemsPerPage = 6

function renderArticles(page) {
  articleContainer.innerHTML = ""
  const start = (page - 1) * itemsPerPage
  const end = start + itemsPerPage
  const paginatedArticles = articleData.slice(start, end)

  paginatedArticles.forEach(article => {
    const articleElement = document.createElement("div")
    articleElement.classList.add("article-body")
    articleElement.innerHTML = `
      <img src="${article.img}" alt="Article Image">
      <h4>${article.date}</h4>
      <h1>${article.title}</h1>
      <p>${article.desc}</p>
    `
    articleContainer.appendChild(articleElement)
  })

  updatePaginationButtons()
}

function updatePaginationButtons() {
  page1.classList.remove("active")
  page2.classList.remove("active")
  if (currentPage === 1) {
    page1.classList.add("active")
    prevBtn.disabled = true
    nextBtn.disabled = false
  } else if (currentPage === 2) {
    page2.classList.add("active")
    prevBtn.disabled = false
    nextBtn.disabled = true
  }
}

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--
    renderArticles(currentPage)
  }
})

nextBtn.addEventListener("click", () => {
  if (currentPage < 2) {
    currentPage++
    renderArticles(currentPage)
  }
})

page1.addEventListener("click", () => {
  currentPage = 1
  renderArticles(currentPage)
})

page2.addEventListener("click", () => {
  currentPage = 2
  renderArticles(currentPage)
})

renderArticles(currentPage)
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

// Report Form Start
const form = document.getElementById("reportForm");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const link = document.getElementById("link").value;
  const info = document.getElementById("info").value;
  const message = `*REPORT FORM*\nName: ${name}\nEmail: ${email}\nLink: ${link}\nAdditional Info: ${info}`;
  const phoneNumber = "6281398876687";
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
});
// Report Form End

// Navbar start
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('navbar-list');
    const navbarContent = document.querySelector('.navbar-container');

    hamburger.addEventListener('click', function() {
        navbarContent.classList.toggle('active');
    });
});
// Navbar end

// Fly button start
document.addEventListener('DOMContentLoaded', function () {
    const btnPlus = document.getElementById('fly-btn-plus');
    const flyBtnContent = document.querySelector('.fly-btn-content');
    const flyBtnStack = document.querySelector('.image-stack');

    const iconOpen = './assets/images/gambling-test/fly-btn.svg';
    const iconClose = './assets/images/gambling-test/fly-btn-close.svg';

    btnPlus.addEventListener('click', function () {
        flyBtnStack.classList.toggle('active');
        flyBtnContent.classList.toggle('active');
        
        if (flyBtnStack.classList.contains('active')) {
            btnPlus.src = iconClose;
        } else {
            btnPlus.src = iconOpen;
        }
    });
});
// Fly button end

// splash start
const splashScreen = document.getElementById("splash-screen");
const mainContent = document.getElementById("main-content");
const splashVideo = document.getElementById("splashVideo");

splashVideo.onended = function () {
  splashScreen.style.height = "0";
  splashScreen.style.opacity = "0";
  setTimeout(() => {
    splashScreen.style.display = "none";
    mainContent.style.display = "block";
  }, 1600);
};
// splash end