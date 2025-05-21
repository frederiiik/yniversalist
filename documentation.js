document.addEventListener('DOMContentLoaded', () => {
  const docButton = document.getElementById('docButton');
  const overlay = document.getElementById('docOverlay');
  const closeButton = document.getElementById('closeDoc');

  docButton.addEventListener('click', () => {
    overlay.style.display = 'block';
    document.getElementById('russianDoc').classList.add('active');
  });

  closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.style.display = 'none';
    }
  });
});