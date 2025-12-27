/* =========================
   PORTFOLIO FILTER & GALLERY
========================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

/* =========================
   FILTER LOGIC
========================= */

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {

        /* Remove active class from all buttons */
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filterValue = button.textContent.toLowerCase();

        portfolioItems.forEach((item) => {
            const category = item.getAttribute("data-category");

            if (filterValue === "all") {
                item.style.display = "block";
            } 
            else if (category === filterValue) {
                item.style.display = "block";
            } 
            else {
                item.style.display = "none";
            }
        });
    });
});

/* =========================
   IMAGE PREVIEW (LIGHTBOX)
========================= */

const modal = document.createElement("div");
modal.classList.add("image-modal");

const modalImg = document.createElement("img");
modal.appendChild(modalImg);

document.body.appendChild(modal);

/* Open image */
portfolioItems.forEach(item => {
    item.addEventListener("click", () => {
        const img = item.querySelector("img");
        modalImg.src = img.src;
        modal.classList.add("open");
    });
});

/* Close image */
modal.addEventListener("click", () => {
    modal.classList.remove("open");
});
