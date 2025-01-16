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

let lastSelectedCategory = ""; // Store the last selected category

// Listen for category selection
subcategoryFilter.addEventListener("click", function () {
    const selectedCategory = subcategoryFilter.value;

    // Clear previous subcategories only if the selection is different
    if (selectedCategory !== lastSelectedCategory || subcategoryContainer.style.display === "none") {
        subcategoryList.innerHTML = ""; // Clear the subcategory list

        if (selectedCategory !== "all" && categories[selectedCategory]) {
            // Populate subcategories
            categories[selectedCategory].forEach(subcategory => {
                const listItem = document.createElement("li");
                listItem.textContent = subcategory.name;
                listItem.style.cursor = "pointer";
                listItem.addEventListener("click", () => {
                    // Redirect to subcategory page
                    window.location.href = subcategory.page;
                });
                subcategoryList.appendChild(listItem);
            });

            // Show the subcategories container
            subcategoryContainer.style.display = "block";
        } else {
            // Hide the subcategories container if "All Categories" is selected
            subcategoryContainer.style.display = "none";
        }

        lastSelectedCategory = selectedCategory; // Update the last selected category
    }
});

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
    if (!subcategoryContainer.contains(event.target) && !subcategoryFilter.contains(event.target)) {
        subcategoryContainer.style.display = "none";
        lastSelectedCategory = ""; // Reset the last selected category
    }
});
