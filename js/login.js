document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const signUpButton = document.querySelector("button[type='button']");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission

    const email = form.querySelector("input[type='email']").value.trim();
    const password = form.querySelector("input[type='password']").value.trim();
    const remember = form.querySelector("#remember").checked;

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // Simulate login success
    alert(`Logged in successfully!\nEmail: ${email}\nRemember Me: ${remember}`);
    // Redirect or process further here
  });

  signUpButton.addEventListener("click", function () {
  window.location.href = "../html/SignUp.html"; // or "../pages/signup.html" based on your folder structure
});

});
