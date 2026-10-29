document.addEventListener("DOMContentLoaded", function () {

    const tiles = document.querySelectorAll(".section-tile");
    const sections = document.querySelectorAll(".content-section");

    function showSection(sectionId) {

        // Find the content that matches the clicked block
        const target = document.getElementById(sectionId);

        if (!target || !target.classList.contains("content-section")) {
            console.error("Section not found:", sectionId);
            return;
        }

        // Hide all content sections
        sections.forEach(function (section) {
            section.classList.remove("visible");
        });

        // Show selected content
        target.classList.add("visible");

        // Update selected block state
        tiles.forEach(function (tile) {
            const isSelected = tile.dataset.section === sectionId;

            tile.setAttribute("aria-pressed", String(isSelected));
        });
    }

    // Add click functionality to all eight blocks
    tiles.forEach(function (tile) {

        tile.addEventListener("click", function () {

            const sectionId = tile.getAttribute("data-section");

            showSection(sectionId);

        });

    });

    // Sidebar Contact Me button
    const contactButton = document.querySelector(".sidebar-button");

    if (contactButton) {
        contactButton.addEventListener("click", function (event) {
            event.preventDefault();
            showSection("contact");
        });
    }

    // Show About Me by default
    showSection("about");

    // Update footer year
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});
