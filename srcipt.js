
const filters = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".product");

filters.forEach(function(button) {
  button.addEventListener("click", function() {

    filters.forEach(function(item) {
      item.classList.remove("active");
    });

    button.classList.add("active");

    const category = button.dataset.filter;

    products.forEach(function(product) {
      const match =
        category === "all" ||
        product.dataset.category === category;

      product.style.display = match ? "block" : "none";
    });

  });
});
