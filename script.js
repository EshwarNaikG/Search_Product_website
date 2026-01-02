const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product");
const noResult = document.getElementById("noResult");

searchInput.addEventListener("keyup", function () {
    let filter = searchInput.value.toLowerCase();
    let found = false;

    products.forEach(product => {
        let text = product.textContent.toLowerCase();
        if (text.includes(filter)) {
            product.style.display = "block";
            found = true;
        } else {
            product.style.display = "none";
        }
    });

    noResult.style.display = found ? "none" : "block";
});
