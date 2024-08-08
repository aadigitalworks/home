$(document).ready(function() {
    // Array of roles
    var roles = ["Designer", "Developer", "Google Ads", "Search Engine Optimization",  "Social Media Ads", "Digital Ads","Web Apps","Websites", "QR-Menus" , "Digital Menus"];
    var currentRoleIndex = 0;
  
    // Function to simulate typing effect
    function typeText(index, text, callback) {
        if (index < text.length) {
            $("#changingText").text(text.substring(0, index + 1));
            setTimeout(function() {
                typeText(index + 1, text, callback);
            }, 100); // Adjust the typing speed (milliseconds)
        } else {
            setTimeout(callback, 1000); // Wait for 1 second after typing
        }
    }
  
    // Function to change the text
    function changeText() {
        var currentRole = roles[currentRoleIndex];
        typeText(0, currentRole, function() {
            // Move to the next role in the array
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            // Trigger the next role after a delay (e.g., 1 second)
            setTimeout(changeText, 1000);
        });
    }
  
    // Start the typing animation
    changeText();
  
    // About us more text
    $("#readMoreLink").click(function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
  
        // Toggle between showing and hiding the full text
        $("#fullText").toggle();
        $("#introText").toggle();
  
        // Change the text of the "Read More" link based on its current state
        var linkText = ($("#fullText").is(":visible")) ? "Read Less" : "Read More";
        $("#readMoreLink").text(linkText);
    });
  
    // Intersection observer for scrolling animations
    const elements = document.querySelectorAll(".scrolling-text, .scrolling-text2");
  
    const callbackFunction = function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateX(0%) translateY(0%)";
            }
        });
    };
  
    const observerOptions = {
        threshold: 0.3
    };
  
    const observer = new IntersectionObserver(callbackFunction, observerOptions);
  
    elements.forEach(element => {
        observer.observe(element);
    });
  
  
    // About us more text
    $("#readMoreLink").click(function (event) {
        event.preventDefault(); // Prevent the default behavior of the link
  
        // Toggle the visibility of the #fullText with a smooth CSS animation
        $("#fullText").toggleClass("show-text");
  
        // Toggle the text of the "Read More" link based on its current state
        var linkText = ($("#fullText").hasClass("show-text")) ? "Read Less" : "Read More";
        $("#readMoreLink").text(linkText);
    });
  
    // ... (rest of your code)
  });

$('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true, // Enable autoplay
    autoplayTimeout: 10000, // Set autoplay timeout in milliseconds (adjust as needed)
    responsive: {
      1000: {
        items: 1, 
      }
    }
});
function loadFacebookSDK() {
    var script = document.createElement('script');
    script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v20.0';
    script.async = true;
    script.onload = function() {
      document.getElementById('fb-placeholder').style.display = 'none';
      if (typeof FB !== 'undefined') {
        FB.XFBML.parse();
      }
    };
    document.body.appendChild(script);
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Use Intersection Observer to lazy load
    var observer = new IntersectionObserver(function(entries) {
      if (entries[0].isIntersecting === true) {
        loadFacebookSDK();
        observer.disconnect();
      }
    }, { threshold: [0] });

    observer.observe(document.getElementById('fb-placeholder'));
  });

  // background img
  document.addEventListener("DOMContentLoaded", function() {
    var heroArea = document.getElementById('hero-area');
    var img = new Image();
    img.src = 'images/background.webp';
    img.onload = function() {
      heroArea.style.backgroundImage = 'url(images/background.webp)';
    };
  });

  // for css
  document.addEventListener("DOMContentLoaded", function() {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'css/non-critical.css';
    document.head.appendChild(link);
  });

 // Toggle dropdown on click for small screens
 document.addEventListener('DOMContentLoaded', function() {
  var dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevent click from bubbling up

      // Close all other dropdowns
      dropdowns.forEach(function(otherDropdown) {
        if (otherDropdown !== dropdown) {
          otherDropdown.classList.remove('active');
        }
      });

      // Toggle the current dropdown
      dropdown.classList.toggle('active');
    });
  });

  // Close dropdowns if clicking outside
  document.addEventListener('click', function() {
    dropdowns.forEach(function(dropdown) {
      dropdown.classList.remove('active');
    });
  });
});

// Tawk.to Script - Load after page load with a delay
    function loadTawkToScript() {
        var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/66983cf8becc2fed6926deeb/1i31asb44';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    }

    // Load the Tawk.to script 20 seconds after the page has loaded
    window.addEventListener('load', function() {
        setTimeout(loadTawkToScript, 20000); // 20,000 milliseconds = 20 seconds
    });

// Google Tag Manager (gtag.js) 
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-M74XDBHG7P');