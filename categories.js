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
const isMobile = /Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent);

// Listen for category selection
subcategoryFilter.addEventListener("change", function () {
    const selectedCategory = subcategoryFilter.value;
    subcategoryList.innerHTML = ""; // Clear previous subcategories

    if (selectedCategory !== "all" && categories[selectedCategory]) {
        if (isMobile) {
            // Create a dropdown (select) for mobile
            const subcategorySelect = document.createElement("select");
            subcategorySelect.id = "subcategory-dropdown";
            subcategorySelect.innerHTML = '<option value="">Select a subcategory</option>';
            
            categories[selectedCategory].forEach(subcategory => {
                const option = document.createElement("option");
                option.value = subcategory.page;
                option.textContent = subcategory.name;
                subcategorySelect.appendChild(option);
            });

            subcategorySelect.addEventListener("change", function () {
                if (subcategorySelect.value) {
                    window.location.href = subcategorySelect.value;
                }
            });

            subcategoryList.appendChild(subcategorySelect);
            subcategoryList.style.display = "block"; 
        } else {
            // Create a floating list for desktop
            categories[selectedCategory].forEach(subcategory => {
                const listItem = document.createElement("li");
                listItem.textContent = subcategory.name;
                listItem.style.cursor = "pointer";
                listItem.addEventListener("click", () => {
                    window.location.href = subcategory.page;
                });
                subcategoryList.appendChild(listItem);
            });

            subcategoryContainer.style.display = "block";
        }
    } else {
        subcategoryContainer.style.display = "none";
    }
});
