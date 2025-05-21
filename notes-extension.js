document.addEventListener('DOMContentLoaded', function() {
  const notesContainers = document.querySelectorAll('.notes-container');
  
  notesContainers.forEach(container => {
    const header = container.querySelector('.notes-header');
    
    if (header) {
      header.addEventListener('click', function() {
        container.classList.toggle('active');
      });
    }
  });
  
  const noteReferences = document.querySelectorAll('.note-reference');
  
  noteReferences.forEach(ref => {
    ref.addEventListener('click', function(e) {
      e.preventDefault();
      
      const noteNumber = this.getAttribute('data-note');
      
      const notesContainer = document.querySelector('.notes-container');
      
      if (notesContainer && !notesContainer.classList.contains('active')) {
        notesContainer.classList.add('active');
      }
      
      const specificNote = document.querySelector(`.text[data-note="${noteNumber}"]`);
      if (specificNote) {
        setTimeout(() => {
          specificNote.scrollIntoView({ behavior: 'smooth' });
          specificNote.classList.add('highlight');
          
          setTimeout(() => {
            specificNote.classList.remove('highlight');
          }, 1500);
        }, 300);
      }
    });
  });
});
