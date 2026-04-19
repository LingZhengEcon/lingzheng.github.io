document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.timeline-toggle').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var box = this.closest('.bib-entry, li').querySelector('.timeline-box');
      if (box) box.classList.toggle('hidden');
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".tldr-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const box = btn.closest("li, div").querySelector(".tldr-box");
      if (box) box.classList.toggle("hidden");
    });
  });
});