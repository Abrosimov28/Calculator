// = function
function getResult() {
  document.getElementById('calculation').innerHTML = document.getElementById('number').value;
  document.getElementById('number').value = eval(document.getElementById('number').value);
}

// Will show the result upon hitting the enter key
function enterGetResult(e){
 var key=e.keyCode || e.which;
  if (key==13){
     getResult();
  }
}

// CE function
function removeLastChar() {
  document.getElementById('number').value = document.getElementById('number').value.slice(0, -1);
}

$(document).ready(function(){
    $('.number_button').on('click', function(e){
        number = $(this).attr('value');
        console.log(number);
    })
})
