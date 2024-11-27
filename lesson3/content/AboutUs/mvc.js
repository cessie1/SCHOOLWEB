
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.mission, .vision, .corevalues');
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (sectionTop < windowHeight - 100) {
        section.classList.add('in-view');
      }
    });
  });
  