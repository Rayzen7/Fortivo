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
    "< 10 Tahun": [30, 60, 20, 5, 10], 
    "10-20 Tahun": [50, 80, 30, 20, 25], 
    "21-30 Tahun": [60, 90, 40, 30, 35], 
    "31-50 Tahun": [70, 100, 50, 40, 45], 
    "> 50 Tahun": [20, 40, 15, 10, 12]
};

const labels = ["2019", "2020", "2021", "2022", "2023"];
const ctx = document.getElementById("gamblingChart").getContext("2d");

let gamblerChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: labels,
        datasets: [{
            label: "Persentase Data",
            data: dataGambler["10-20 Tahun"], 
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
                        return `${ageGroup}\nTahun ${context.label} sebanyak ${context.raw}%`;
                    }
                }
            }
        }
    }
});

document.querySelectorAll(".gambler-data-container").forEach(button => {
    if (button.querySelector("h1").textContent.trim() === "10-20 Tahun") {
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