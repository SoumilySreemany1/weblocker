document.addEventListener('DOMContentLoaded', () => {
    const now = new Date();
    console.log(`Dashboard loaded on: ${now.toLocaleString()}`);

    const addNewExamBtn = document.querySelector('.quick-actions .btn.blue');
    const createAnnouncementBtn = document.querySelector('.quick-actions .btn.orange');
    const generateReportBtn = document.querySelector('.quick-actions .btn.green');
    const manageUsersBtn = document.querySelector('.quick-actions .btn.purple');

    if (addNewExamBtn) {
        addNewExamBtn.addEventListener('click', () => {
            alert('Adding New Exam... (This would navigate to a form)');
        });
    }

    if (createAnnouncementBtn) {
        createAnnouncementBtn.addEventListener('click', () => {
            alert('Creating Announcement... (This would open an announcement editor)');
        });
    }

    if (generateReportBtn) {
        generateReportBtn.addEventListener('click', () => {
            alert('Generating Report... (This would trigger report generation)');
        });
    }

    if (manageUsersBtn) {
        manageUsersBtn.addEventListener('click', () => {
            alert('Managing Users... (This would navigate to a user management page)');
        });
    }

    const analyticsPeriodSelect = document.querySelector('.analytics select');
    if (analyticsPeriodSelect) {
        analyticsPeriodSelect.addEventListener('change', (event) => {
            console.log(`Analytics period changed to: ${event.target.value}`);
        });
    }

    console.log('Analytics chart placeholder: This is where a charting library would initialize.');
    console.log('Exam Categories Distribution chart placeholder: This is where a charting library would initialize.');

    const viewAllExamsLink = document.querySelector('.recent-exams h3 a');
    if (viewAllExamsLink) {
        viewAllExamsLink.addEventListener('click', (event) => {
            event.preventDefault();
            alert('Navigating to All Exams page...');
        });
    }

    const examTableRows = document.querySelectorAll('.recent-exams tbody tr');
    examTableRows.forEach(row => {
        row.addEventListener('mouseover', () => {
            row.style.backgroundColor = '#f0f0f0';
        });
        row.addEventListener('mouseout', () => {
            row.style.backgroundColor = '';
        });
    });
});