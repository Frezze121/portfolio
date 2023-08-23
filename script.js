var elementisClicked = false;
// Warte, bis das DOM vollständig geladen ist
document.addEventListener('DOMContentLoaded', function() {
  // Selektiere alle Elemente mit der Klasse 'middle-icon-div'
  const middleIconDivs = document.querySelectorAll('.middle-icon-div');

  // Füge für jedes Element den Event Listener hinzu
  middleIconDivs.forEach(element => {
    element.addEventListener('mouseover', function() {
      // Setze die Opacity des aktuellen Elements auf 1, wenn es angehört wird
      this.style.opacity = '1';
    });

    element.addEventListener('mouseout', function() {
      // Setze die Opacity des aktuellen Elements zurück auf 0.5, wenn es nicht mehr angehört wird
      this.style.opacity = '0';
    });
  });
});




document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".topmenu");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      var checkbox = document.getElementById("active");
      checkbox.checked = false;
    });
  });
});

