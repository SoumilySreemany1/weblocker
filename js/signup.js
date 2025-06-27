document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const passwordInputs = form.querySelectorAll("input[type='password']");
  const eyeIcons = form.querySelectorAll(".eye-icon");
  const createBtn = form.querySelector(".create-account-btn");

  // Toggle password visibility
  eyeIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      const input = passwordInputs[index];
      if (input.type === "password") {
        input.type = "text";
        icon.textContent = "🙈";
      } else {
        input.type = "password";
        icon.textContent = "👁️";
      }
    });
  });

  // Form submit handler
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = form.querySelector("input[placeholder='First name']").value.trim();
    const lastName = form.querySelector("input[placeholder='Last name']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const mobile = form.querySelector("input[type='tel']").value.trim();
    const password = passwordInputs[0].value;
    const confirmPassword = passwordInputs[1].value;
    const termsChecked = form.querySelectorAll("input[type='checkbox']")[0].checked;

    // Validate required fields
    if (!firstName || !lastName || !email || !mobile || !password || !confirmPassword) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    // Validate password strength
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password)) {
      alert("⚠️ Password must be at least 8 characters long, contain at least one uppercase letter, and one number.");
      return;
    }

    // Check password match
    if (password !== confirmPassword) {
      alert("⚠️ Passwords do not match.");
      return;
    }

    // Check terms agreement
    if (!termsChecked) {
      alert("⚠️ Please agree to the Terms of Service and Privacy Policy.");
      return;
    }

    // Simulate success
    alert(`✅ Account created successfully for ${firstName} ${lastName}!`);
    // You can redirect or save data as needed
    // window.location.href = 'login.html';
  });
});
