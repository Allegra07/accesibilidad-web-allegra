document.querySelectorAll('.folder').forEach((folder) => {
    const papers = folder.querySelectorAll('.paper');
    let isOpen = false;
  
    folder.addEventListener('click', () => {
      isOpen = !isOpen;
      folder.classList.toggle('open', isOpen);
      if (!isOpen) {
        papers.forEach((paper) => {
          paper.style.transform = '';
        });
      }
    });

  });
  