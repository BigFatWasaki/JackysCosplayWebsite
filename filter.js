// Script to filter products based on category selection
function filterProducts(category) {
  const products = document.querySelectorAll(".product");

  // If the page has no products (aboutme, contact, faq, etc), exit safely
  if (products.length === 0) return;

  products.forEach((product) => {
    const productCategory = product.getAttribute("data-category");

    // if you press on all it will show all products
    if (!category || category.toLowerCase() === "all") {
      product.style.display = "flex";
    }
    // matches the category selected
    else if (
      productCategory &&
      productCategory.toLowerCase() === category.toLowerCase()
    ) {
      product.style.display = "flex";
    }
    // when there is no matches
    else {
      product.style.display = "none";
    }
  });
}

// category to the home page
function setCategory(category) {
  localStorage.setItem("selectedCategory", category);
  window.location.href = "Index.html";
}

// auto runs when the page loads
window.addEventListener("DOMContentLoaded", () => {
  const savedCategory = localStorage.getItem("selectedCategory");

  if (savedCategory) {
    filterProducts(savedCategory);
    localStorage.removeItem("selectedCategory");
  }
});
