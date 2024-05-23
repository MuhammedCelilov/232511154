function checkLength() {
  var input = document.getElementById("textuzun");
  if(input.value.length < 5) {
      alert("Metin çok kısa!");
  }
}

function showDateTime() {
  var now = new Date();
  alert("Şu anki zaman: " + now);
}

function refreshPage() {
  location.reload();
}

function showMousePosition() {
  document.onmousemove = function(event) {
      console.log("Mouse konumu: " + event.clientX + ", " + event.clientY);
  }
}

function getCurrentDateTime() {
  var now = new Date();
  document.getElementById("Saat").innerText = "Şu anki zaman: " + now.toLocaleString();
}

function getRandomNumber(min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

function showRandomNumber() {
  var min = 1; 
  var max = 100; 
  var randomNumber = getRandomNumber(min, max);
  var displayElement = document.getElementById("randomNumberDisplay");
  displayElement.textContent = "Rastgele Sayı: " + randomNumber;
}

function capitalizeText() {
  var text = document.getElementById("buyuk").value;
  document.getElementById("result").innerText = text.toUpperCase();
}

function countCharacters() {
  var text = document.getElementById("bulucu").value;
  document.getElementById("bul").innerText = "Karakter sayısı: " + text.length;
}

function scrollToTop() {
  window.scrollTo(0, 0);
}

function validateForm() {
  var name = document.getElementById("textInput").value;
  if (name == "") {
      alert("İsim alanı boş olamaz!");
      return false;
  }
}

function reverseText() {
  var text = document.getElementById("metinters").value;
  document.getElementById("ters").innerText = text.split("").reverse().join("");
}

function getWindowSize() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  alert("Sayfa genişliği: " + width + ", Sayfa yüksekliği: " + height);
}

function changeImage() {
  document.getElementById("myImage").src = "yazilim-nedir-1.jpg";
}

function changeBackgroundColor() {
  var colors = ["red", "green", "blue", "yellow", "orange", "purple"];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
function toggleDiv() {
  var div = document.getElementById("jsornek");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

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

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});


// google maps
function initMap() {
// Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 36.99833468618962, lng: 35.29786330701033},
        zoom: 20,
        scrollwheel:  false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: true,
      styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    });
}
