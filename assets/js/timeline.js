document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.timeline-toggle').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var box = this.closest('.bib-entry, li').querySelector('.timeline-box');
      if (box) box.classList.toggle('hidden');
    });
  });
});