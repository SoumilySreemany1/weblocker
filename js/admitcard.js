document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form-grid');
  const downloadBtn = form.querySelector('.primary-btn');
  const checkStatusBtn = form.querySelector('.secondary-btn');

  // Form submit (Download Admit Card)
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const exam = document.getElementById('exam').value.trim();
    const reg = document.getElementById('reg').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const mobile = document.getElementById('mobile').value.trim();

    if (!exam || !reg || !dob || !mobile) {
      alert('⚠️ Please fill in all required fields before downloading your admit card.');
      return;
    }

    alert(`✅ Admit Card for ${exam} is being prepared for download...`);
    // Here you can trigger actual download or backend request
  });

  // Check Status button
  checkStatusBtn.addEventListener('click', () => {
    const reg = document.getElementById('reg').value.trim();
    if (!reg) {
      alert('⚠️ Please enter your registration number to check status.');
    } else {
      alert(`ℹ️ Status for registration number ${reg} is: Approved.`);
    }
  });

  // Green "Download" buttons on available cards
  const downloadButtons = document.querySelectorAll('.green-card .status');
  downloadButtons.forEach(button => {
    button.style.cursor = 'pointer';
    button.addEventListener('click', () => {
      const examName = button.closest('.exam-card').querySelector('strong').innerText;
      alert(`📄 Downloading Admit Card for ${examName}...`);
    });
  });

  // Help Buttons
  const helpButtons = document.querySelectorAll('.help-btn');
  helpButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const label = btn.innerText.trim();
      if (label.includes('FAQ')) {
        alert('📘 Redirecting to Frequently Asked Questions...');
      } else if (label.includes('Support')) {
        alert('📞 Connecting to support team...');
      } else if (label.includes('Guide')) {
        alert('📄 Downloading the exam guide...');
      }
    });
  });
});
