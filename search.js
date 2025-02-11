// Fetch data from external JSON files
const fetchData = () => {
    return Promise.all([
        fetch('allHeadphones.json').then(res => res.json()),
        fetch('allLaptops.json').then(res => res.json()),
        fetch('allPowerbanks.json').then(res => res.json()),
        fetch('allSmartphones.json').then(res => res.json()),
        fetch('allSmartTvs.json').then(res => res.json()),
        fetch('allSpeakers.json').then(res => res.json())
    ]);
};

const displayProducts = (products, containerId) => {
    const productList = document.getElementById(containerId);
    productList.innerHTML = "";

    products.forEach(product => {
        const productBox = document.createElement("div");
        productBox.classList.add("product-box");

        const productLink = document.createElement("a");
        productLink.href = product.url || "#";
        productLink.target = "_blank";

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name || "Product Image";
        productImage.loading = "lazy"; // Enable lazy loading
        productBox.appendChild(productImage);

        const productName = document.createElement("div");
        productName.classList.add("product-name");

        const fullName = product.nameprice || product.name || "";
        const truncatedName = fullName.length > 34 ? fullName.slice(0, 34) + "..." : fullName;
        productName.textContent = truncatedName;
        productBox.appendChild(productName);

        if (product.price) {
            const productPrice = document.createElement("div");
            productPrice.classList.add("product-price");
            productPrice.textContent = product.price;
            productBox.appendChild(productPrice);
        }

        productLink.appendChild(productBox);
        productList.appendChild(productLink);
    });
};

// Search functionality
const searchInput = document.getElementById("search");
const searchButton = document.getElementById("search-btn");
const categoryFilter = document.getElementById("category-filter");

searchButton.addEventListener("click", function () {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    // Save data in localStorage for filtering
    localStorage.setItem('searchTerm', searchTerm);
    localStorage.setItem('selectedCategory', selectedCategory);

    window.location.href = 'search-results.html';
});

searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        searchButton.click();
    }
});
