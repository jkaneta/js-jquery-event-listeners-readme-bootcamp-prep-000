//define functions here
function getIt() {
  $('p').on('click', function(e) {
    alert('Hey!');
  };
}

function frameIt() {
  $(window).on('load', function(e) {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('$typing').on('keydown', function(e) {
    if ($(this).keyCode == 71) {
    alert('g was pressed.');
    }  
  })
}

function submitIt() {
  $('form').on('submit', function(e) {
    alert('Your form is going to be submitted now.');
  });
}

$(document).ready(function(){

// call functions here
getIt();

frameIt();

pressIt();

submitIt();
  
});


