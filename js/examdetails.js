document.addEventListener("DOMContentLoaded", function () {
  // Quick Action Buttons
  const registerBtn = document.querySelector(".btn.btn-primary");
  const syllabusBtn = document.querySelectorAll(".btn.btn-secondary")[0];
  const papersBtn = document.querySelectorAll(".btn.btn-secondary")[1];
  const shareBtn = document.querySelectorAll(".btn.btn-secondary")[2];

  // Help & Support Buttons
  const faqBtn = document.querySelector(".help-support .btn:nth-child(2)");
  const contactSupportBtn = document.querySelector(".help-support .btn:nth-child(3)");
  const liveChatBtn = document.querySelector(".help-support .btn:nth-child(4)");

  // Register for Exam
  registerBtn.addEventListener("click", () => {
    alert("You have been registered for the SSC CGL Exam!");
    // You can replace with actual form or redirect
    // window.location.href = 'registration.html';
  });

  // Download Syllabus
  syllabusBtn.addEventListener("click", () => {
    alert("Downloading syllabus PDF...");
    // window.open('syllabus.pdf');
  });

  // Previous Year Papers
  papersBtn.addEventListener("click", () => {
    alert("Redirecting to Previous Year Papers...");
    // window.location.href = 'previous-papers.html';
  });

  // Share Exam Details
  shareBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        alert("Exam details link copied to clipboard!");
      })
      .catch(() => {
        alert("Failed to copy the link.");
      });
  });

  // Help & Support Buttons
  faqBtn.addEventListener("click", () => {
    alert("Opening FAQ section...");
    // window.location.href = 'faq.html';
  });

  contactSupportBtn.addEventListener("click", () => {
    alert("Contact support at: support@example.com");
  });

  liveChatBtn.addEventListener("click", () => {
    alert("Live chat feature coming soon!");
  });
});
