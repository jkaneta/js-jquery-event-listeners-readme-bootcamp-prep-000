//define functions here
function getIt() {
  alert('Hey!');
}

function frameIt() {
  $('img').addClass('tasty');
}

function pressIt() {
  if ($(this).keyCode == 71) {
    alert('g was pressed.');
  }
  console.log('pressit called');
  console.log($(this).which);
}

function submitIt() {
  alert('Your form is going to be submitted now.');
}

$(document).ready(function(){

// call functions here
$('p').on('click', getIt);

$(window).on('load', frameIt);

$('form input[type=text]').on('keydown', pressIt);

$('form').on('submit', submitIt);
  
});


