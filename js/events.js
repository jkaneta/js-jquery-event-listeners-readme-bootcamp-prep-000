//define functions here
function getIt() {
  $('p').on('click', function(e) {
    alert('Hey!');
  };
}

function frameIt() {
  
  $('img').addClass('tasty');
}

function pressIt() {
  if ($(this).keyCode == 71) {
    alert('g was pressed.');
  }
  console.log('pressit called');
  console.log($(this).target);
  console.log(this.target);
}

function submitIt() {
  alert('Your form is going to be submitted now.');
}

$(document).ready(function(){

// call functions here
getIt();

$(window).on('load', frameIt);

$('input[type=text]').on('keydown', pressIt);

$('form').on('submit', submitIt);
  
});


