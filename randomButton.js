// List of subcategory URLs
const subcategoryLinks = [
    'smartphones.html',
    'laptops.html',
    //'tablets.html',
    'smart-tvs.html',
    //'tvs.html',
    'headphones.html',
    'speakers.html',
    'powerbanks.html',
    //'mens-clothing.html',
    //'womens-clothing.html',
    //'childrens-clothing.html',
    //'shoes.html',
    //'accessories.html'
];

// Event listener for the button
document.getElementById("random").addEventListener("click", function () {
    const randomLink = subcategoryLinks[Math.floor(Math.random() * subcategoryLinks.length)];
    window.location.href = randomLink;
});
