document.addEventListener('DOMContentLoaded', function() {
  const historyHeader = document.querySelector('.history-header');
  const historyList = document.getElementById('historyList');
  const chevron = document.querySelector('.history-chevron');

  if (historyHeader && historyList && chevron) {
    historyHeader.addEventListener('click', async function() {
      historyList.classList.toggle('expanded');
      historyHeader.parentElement.classList.toggle('active');
      
      if (historyList.classList.contains('expanded')) {
        await window.updateHistoryList();
      }
    });
  }
});