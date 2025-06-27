document.addEventListener('DOMContentLoaded', () => {
  const editBtn = document.querySelector('.edit-btn');
  const saveBtn = document.querySelector('.save-btn');
  const inputs = document.querySelectorAll('.form-section input');

  editBtn.addEventListener('click', () => {
    // Make inputs editable
    inputs.forEach(input => input.removeAttribute('readonly'));
    // Toggle buttons
    editBtn.style.display = 'none';
    saveBtn.style.display = 'inline-block';
  });

  saveBtn.addEventListener('click', () => {
    // Make inputs readonly again
    inputs.forEach(input => input.setAttribute('readonly', true));
    // Toggle buttons
    saveBtn.style.display = 'none';
    editBtn.style.display = 'inline-block';

    // Here you can add save functionality (e.g., send data to server)
    alert('Profile changes saved successfully!');
  });

  // Initially hide save button
  saveBtn.style.display = 'none';
});
