// Line Chart: Registration Trends
const ctxLine = document.getElementById('lineChart').getContext('2d');
new Chart(ctxLine, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Registrations',
      data: [1200, 1900, 3000, 2450, 2200, 2800],
      fill: true,
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4,
      pointBackgroundColor: '#3b82f6'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  }
});

// Donut Chart: Exam Categories
const ctxDonut = document.getElementById('donutChart').getContext('2d');
new Chart(ctxDonut, {
  type: 'doughnut',
  data: {
    labels: ['SSC', 'UPSC', 'Banking', 'Railway', 'State Exams'],
    datasets: [{
      label: 'Category Distribution',
      data: [35, 25, 20, 15, 5],
      backgroundColor: ['#1e1e91', '#ff7800', '#2ca02c', '#1f77b4', '#e53935']
    }]
  },
  options: {
    responsive: true,
    cutout: '70%',
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  }
});
