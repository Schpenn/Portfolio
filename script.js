
document.addEventListener("DOMContentLoaded", () => {
  var medals = document.querySelectorAll('.medal');
  var modals = document.querySelectorAll('.modal');
  var modal = document.getElementsByClassName('.modal');
  console.log("Hello World!");

  function showModal(id){
    var m = document.getElementById(id);
    console.log('Så da viser jeg modalen '+id)
    m.classList.remove('hidden');
  }
  
  function hideModals() {
    modals.forEach(m => {
      m.classList.add('hidden');
    });
  }
  medals.forEach(m => {
    m.addEventListener('click', event => {
      console.log('nå klikka du på medaljen ' + m.dataset.id)
      hideModals();
      showModal(m.dataset.id);
    });
  });
  modals.forEach(m => {
    var x = m.querySelector('.close');
    x.addEventListener('click', hideModals);
  });

  window.onclick = function(event) {
    if (event.target.classList == 'modal') {
      hideModals();
    };
  }
});
