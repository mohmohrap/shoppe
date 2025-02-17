const categories = {
    electronics: [
        { name: "Smartphones", page: "smartphones.html" },
        { name: "Laptops", page: "laptops.html" },
        { name: "Tablets", page: "tablets.html" },
        { name: "Smart TVs", page: "smart-tvs.html" },
        { name: "TVs", page: "tvs.html" },
        { name: "Headphones", page: "headphones.html" },
        { name: "Speakers", page: "speakers.html" },
        { name: "Power Banks", page: "powerbanks.html" }
    ],
    fashion: [
        { name: "Men's Clothing", page: "mens-clothing.html" },
        { name: "Women's Clothing", page: "womens-clothing.html" },
        { name: "Children's Clothing", page: "childrens-clothing.html" },
        { name: "Shoes", page: "shoes.html" },
        { name: "Accessories", page: "accessories.html" }
    ]
};

const subcategoryFilter = document.getElementById("category-filter");
const subcategoryContainer = document.getElementById("subcategory-container");
const subcategoryList = document.getElementById("subcategory-list");

// Detect if mobile
const mobileRegex = /Mobi|Android|iPhone|iPad|iPod/;
const isMobile = mobileRegex.test(navigator.userAgent);
// Create mobile menu elements
if (isMobile) {
    // Add close button
    const closeBtn = document.createElement("button");
    closeBtn.className = "close-btn";
    closeBtn.innerHTML = "&times;";
    closeBtn.addEventListener("click", () => {
        const menuOverlay = document.querySelector('.menu-overlay');
        if (menuOverlay) {
            menuOverlay.remove();
        }
        document.querySelector('.menu-overlay')?.remove();
    });
    subcategoryContainer.prepend(closeBtn);

    // Add overlay
    subcategoryContainer.insertAdjacentHTML('afterend', '<div class="menu-overlay"></div>');
    document.querySelector('.menu-overlay').addEventListener('click', () => {
        subcategoryContainer.classList.remove("active");
        document.querySelector('.menu-overlay').style.display = 'none';
    });
}

subcategoryFilter.addEventListener("change", function () {
    const selectedCategory = subcategoryFilter.value.trim().toLowerCase();
    subcategoryList.innerHTML = "";

    if (selectedCategory !== "all" && categories[selectedCategory]) {
        categories[selectedCategory].forEach(subcategory => {
            const listItem = document.createElement(isMobile ? "div" : "li");
            listItem.className = "subcategory-item";
            listItem.textContent = subcategory.name;
            listItem.addEventListener("click", () => {
                window.location.href = subcategory.page;
                if (isMobile) {
                    subcategoryContainer.classList.remove("active");
                    document.querySelector('.menu-overlay')?.remove();
                }
            });
            subcategoryList.appendChild(listItem);
        });

        if (isMobile) {
            subcategoryContainer.classList.add("active");
            document.querySelector('.menu-overlay').style.display = 'block';
            subcategoryContainer.style.display = "block";
        } else {
            subcategoryContainer.style.display = "block";
            // Position under the category filter
            const filterRect = subcategoryFilter.getBoundingClientRect();
            subcategoryContainer.style.top = `${filterRect.bottom + window.scrollY}px`;
            subcategoryContainer.style.left = `${filterRect.left}px`;
        }
    } else {
        subcategoryContainer.style.display = "none";
        if (isMobile) {
            document.querySelector('.menu-overlay')?.remove();
        }
    }
});

// Close subcategories when clicking outside (desktop)
if (!isMobile) {
    document.addEventListener("click", (e) => {
        if (!subcategoryContainer.contains(e.target) &&
            e.target !== subcategoryFilter) {
            subcategoryContainer.style.display = "none";
        }
    });
}