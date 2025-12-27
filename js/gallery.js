/* =========================
   PORTFOLIO FILTER + LOAD MORE (FIXED)
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = Array.from(document.querySelectorAll(".portfolio-item"));
    const loadMoreBtn = document.getElementById("loadMoreBtn");

    if (!loadMoreBtn || portfolioItems.length === 0) return;

    let visibleCount = 0;
    let currentFilter = "all";

    /* =========================
       DEVICE BASED INITIAL COUNT
    ========================= */

    function getInitialCount() {
        const width = window.innerWidth;
        if (width <= 576) return 3;   // Mobile
        if (width <= 768) return 6;   // Tablet
        return 8;                     // Laptop+
    }

    /* =========================
       GET FILTERED ITEMS
    ========================= */

    function getFilteredItems() {
        if (currentFilter === "all") return portfolioItems;
        return portfolioItems.filter(
            item => item.dataset.category === currentFilter
        );
    }

    /* =========================
       UPDATE GALLERY
    ========================= */

    function updateGallery() {
        const filteredItems = getFilteredItems();

        portfolioItems.forEach(item => {
            item.style.display = "none";
        });

        filteredItems.forEach((item, index) => {
            if (index < visibleCount) {
                item.style.display = "block";
            }
        });

        // Show / hide Load More button
        loadMoreBtn.style.display =
            visibleCount < filteredItems.length ? "inline-block" : "none";
    }

    /* =========================
       INIT
    ========================= */

    function initGallery() {
        visibleCount = getInitialCount();
        updateGallery();
    }

    /* =========================
       LOAD MORE
    ========================= */

    loadMoreBtn.addEventListener("click", () => {
        visibleCount += getInitialCount();
        updateGallery();
    });

    /* =========================
       FILTER BUTTONS
    ========================= */

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {

            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            // 🔥 IMPORTANT FIX
            currentFilter = btn.textContent.trim().toLowerCase();

            visibleCount = getInitialCount();
            updateGallery();
        });
    });

    initGallery();
});
