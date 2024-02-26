//galeria
function filterGallery(filter) {
    var galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(function (item) {
      if (filter === 'all') {
        item.style.display = 'block';
      } else if (item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }