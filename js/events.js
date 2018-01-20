//define functions here
function getIt() {
  alert('Hey!');
}

function frameIt() {
  $('img').addClass('tasty');
}

function pressIt() {
  $('input[type=text]').on('keydown', function(e) {
    if (e.which == 71) {
      alert('g was pressed.');
    }
  });
}

function submitIt() {
  alert('Your form is going to be submitted now.');
}

$(document).ready(function(){

// call functions here
$('p').on('click', getIt);

$(window).on('load', frameIt);



$('form').on('submit', submitIt);
  
});


