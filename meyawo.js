

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
  
    var message = document.getElementById("comment").value;

if (name == "") {
    document.getElementById("name1").innerHTML = "Name must be filled out";
    setTimeout(function () {
      document.getElementById("name1").innerHTML = "";
    }, 5000);
    return false;
  }
  if (/\d/.test(name)) {
    document.getElementById("name2").innerHTML = "Name must be a character ";
    setTimeout(function () {
      document.getElementById("name2").innerHTML = "";
    }, 5000);
    return false;
  }

  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("name3").innerHTML = "Enter a valid email address";
    setTimeout(function () {
      document.getElementById("name3").innerHTML = "";
    }, 5000);
    return false;
  }

  if (message == "") {
    document.getElementById("error").innerHTML = "Message must be filled out";
    setTimeout(function () {
      document.getElementById("error").innerHTML = "";
    }, 5000);
    return false;
  }

  return true;
}

