document.addEventListener("DOMContentLoaded", function () {
  const nextStepBtn = document.querySelector(".btn.btn-primary");
  const previousBtn = document.querySelector(".btn.btn-secondary:nth-of-type(2)");
  const saveDraftBtn = document.querySelector(".btn.btn-secondary:first-of-type");

  nextStepBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const requiredFields = [
      "firstName", "lastName", "fatherName", "motherName",
      "email", "mobileNumber", "permanentAddress", "state",
      "district", "pinCode", "dob", "gender", "category",
      "nationality", "aadhaarNumber", "prefExamState",
      "prefExamCity"
    ];

    let isValid = true;
    requiredFields.forEach((id) => {
      const field = document.getElementById(id);
      if (field && field.value.trim() === "") {
        field.style.border = "1px solid red";
        isValid = false;
      } else if (field) {
        field.style.border = "1px solid #ccc";
      }
    });

    // Additional checks
    const aadhaar = document.getElementById("aadhaarNumber").value.trim();
    const mobile = document.getElementById("mobileNumber").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!/^\d{12}$/.test(aadhaar)) {
      alert("⚠️ Aadhaar number must be exactly 12 digits.");
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      alert("⚠️ Mobile number must be exactly 10 digits.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    if (!isValid) {
      alert("⚠️ Please fill in all required fields marked with *");
      return;
    }

    alert("✅ All details are valid. Proceeding to next step...");
    // You can redirect or load next section here
  });

  previousBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("⬅️ Returning to previous step...");
  });

  saveDraftBtn.addEventListener("click", () => {
    alert("💾 Your progress has been saved as draft.");
  });

  // Optional: dynamic dropdowns (example)
  const categorySelect = document.getElementById("category");
  const examState = document.getElementById("prefExamState");
  const examCity = document.getElementById("prefExamCity");

  // Populate category options
  const categories = ["General", "OBC", "SC", "ST", "EWS"];
  categories.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    categorySelect.appendChild(opt);
  });

  // Populate exam states and cities
  const examData = {
    "Delhi": ["New Delhi", "Dwarka", "Rohini"],
    "West Bengal": ["Kolkata", "Howrah", "Asansol"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur"]
  };

  Object.keys(examData).forEach(state => {
    const opt = document.createElement("option");
    opt.value = state;
    opt.textContent = state;
    examState.appendChild(opt);
  });

  examState.addEventListener("change", () => {
    const cities = examData[examState.value] || [];
    examCity.innerHTML = '<option>Select City</option>';
    cities.forEach(city => {
      const opt = document.createElement("option");
      opt.value = city;
      opt.textContent = city;
      examCity.appendChild(opt);
    });
  });
});
