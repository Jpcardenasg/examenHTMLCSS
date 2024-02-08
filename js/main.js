

function selectProduct(event) {
    const selectedProduct = event.target.dataset.product;

    const productSections = document.querySelectorAll(".productSection");
    productSections.forEach(section => {
        if (section.id === selectedProduct) {
            section.classList.remove("hidden");
        } else {
            section.classList.add("hidden");
        }
    });
}
