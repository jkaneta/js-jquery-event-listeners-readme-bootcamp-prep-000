//define functions here
function getIt() {
  alert('Hey!');
}

function frameIt() {
  $('img').addClass('tasty');
}

function pressIt(e) {
  if (e.which == 71) {
    alert('g was pressed.');
  }
  console.log('pressit called');
  console.log(this);
}

function submitIt() {
  alert('Your form is going to be submitted now.');
}

$(document).ready(function(){

// call functions here
$('p').on('click', getIt);

$(window).on('load', frameIt);

$('input[type=text]').on('keydown', pressIt);

$('form').on('submit', submitIt);
  
});


