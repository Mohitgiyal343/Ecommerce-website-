
    function changeColor(element, color) {
      document.body.style.backgroundColor = color;
      document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('active'));
      element.classList.add('active');
    }
