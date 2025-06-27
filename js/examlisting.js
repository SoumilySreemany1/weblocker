document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchExam");
  const categorySelect = document.getElementById("category");
  const statusSelect = document.getElementById("status");
  const examCards = document.querySelectorAll(".exam-card");

  function normalize(text) {
    return text.toLowerCase().trim();
  }

  function filterExams() {
    const searchText = normalize(searchInput.value);
    const selectedCategory = categorySelect.value;
    const selectedStatus = statusSelect.value;

    examCards.forEach((card) => {
      const title = normalize(card.querySelector(".exam-title").textContent);
      const type = normalize(card.querySelector(".exam-type").textContent);
      const status = normalize(card.querySelector(".status").textContent);

      const matchesSearch = title.includes(searchText);
      const matchesCategory =
        selectedCategory === "all" || type === normalize(selectedCategory);
      const matchesStatus =
        selectedStatus === "all" ||
        status.includes(normalize(selectedStatus)) ||
        (selectedStatus === "open" && status.includes("registration open"));

      if (matchesSearch && matchesCategory && matchesStatus) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  // Event listeners for dynamic filtering
  searchInput.addEventListener("input", filterExams);
  categorySelect.addEventListener("change", filterExams);
  statusSelect.addEventListener("change", filterExams);
});
