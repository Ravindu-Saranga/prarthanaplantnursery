
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick =()=>{
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

// Get the product link and the subcategories menu
const productLink = document.getElementById('product-link');
const productSubcategories = document.getElementById('product-subcategories');
const navbar = document.querySelector('.navbar');

// Toggle subcategories visibility on product link click
productLink.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation(); // Prevents the document click event from triggering

    // Toggle the subcategories visibility
    productSubcategories.style.display = 
        productSubcategories.style.display === 'block' ? 'none' : 'block';
// Add styling when the box is visible
if (productSubcategories.style.display === 'block') {
    productSubcategories.style.borderRadius = '5px';  //productSubcategories.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // Adds shadow for depth
    productSubcategories.style.zIndex = '10'; // Ensures the box appears above other elements
    
}
});


// Hide subcategories when clicking outside of it
document.addEventListener('scroll', function() {
    productSubcategories.style.display = 'none';
});
document.addEventListener('click', function() {
    productSubcategories.style.display = 'none';
});


document.querySelector('#menu-icon').onclick =()=>{
    navbar.classList.toggle('active');
    search.classList.remove('active');
}
window.onscroll =()=>{
    navbar.classList.remove('active');
    search.classList.remove('active');
}

