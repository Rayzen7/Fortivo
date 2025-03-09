const searchInput = document.querySelector('.doctor-input input');
const doctorCards = document.querySelectorAll('.doctor-content');
const noDoctorText = document.getElementById('no-doctor');

searchInput.addEventListener('input', function () {
  const keyword = this.value.toLowerCase();
  let visibleCount = 0;

  doctorCards.forEach(card => {
    const name = card.querySelector('h1').textContent.toLowerCase();
    const desc = card.querySelector('p').textContent.toLowerCase();
    if (name.includes(keyword) || desc.includes(keyword)) {
      card.style.display = 'block';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  noDoctorText.style.display = visibleCount === 0 ? 'block' : 'none';
});