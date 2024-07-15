document.addEventListener("DOMContentLoaded", function () {
  const showAllBtn = document.getElementById("show-all-btn");
  const showLessBtn = document.getElementById("show-less-btn");

  // Fungsi untuk menampilkan tombol "Show Less" dan menyembunyikan tombol "Show All"
  function showAll() {
    const hiddenCards = document.querySelectorAll(
      "#product-container .product-card.d-none"
    );
    hiddenCards.forEach((card) => {
      card.classList.remove("d-none");
    });
    showAllBtn.classList.add("d-none"); // Menyembunyikan tombol "Show All"
    showLessBtn.classList.remove("d-none"); // Menampilkan tombol "Show Less"
  }

  // Fungsi untuk menampilkan tombol "Show All" dan menyembunyikan tombol "Show Less"
  function showLess() {
    const visibleCards = document.querySelectorAll(
      "#product-container .product-card:not(.d-none)"
    );
    visibleCards.forEach((card, index) => {
      if (index >= 3) {
        card.classList.add("d-none");
      }
    });
    showAllBtn.classList.remove("d-none"); // Menampilkan tombol "Show All"
    showLessBtn.classList.add("d-none"); // Menyembunyikan tombol "Show Less"
  }

  if (showAllBtn) {
    showAllBtn.addEventListener("click", showAll);
  }

  if (showLessBtn) {
    showLessBtn.addEventListener("click", showLess);
  }
});
