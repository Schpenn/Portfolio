document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById("istqb-foundation-modal");
  var btn = document.getElementsByClassName("medal");
  var medals = Array.from(btn);
 
 medals.forEach(b => {
    b.addEventListener('click', function(){
      console.log(this )
      openModal(this);
    })
  });
  function openModal(){
    modal.style.display = "block";
  }
  var span = document.getElementsByClassName("close")[0];
 // btn[0].onclick = function() {
 //   console.log(btn.findIndex);
 //   modal.style.display = "block";
 // }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});
