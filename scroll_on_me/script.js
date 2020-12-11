'use strict';
function setup(){
  let aantal = 0
  let resetText = "..."
  let knop0 = document.getElementById('knop0');

    knop0.addEventListener('wheel', function(){
      aantal +=1
      document.getElementById('knop0').innerHTML = aantal
  })
  document.getElementById('button0').addEventListener('click', function(){
    document.getElementById('text').innerHTML = resetText
  })
}
window.addEventListener("DOMContentLoaded", setup);
