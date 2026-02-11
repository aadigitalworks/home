$(document).ready(function() {
  // Array of roles
  var roles = ["Design", "Development", "Google Ads", "Search Engine Optimization",  "Social Media Ads", "Digital Ads","Web Apps","Websites", "QR-Menus" , "Digital Menus"];
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
    event.preventDefault(); // Prevent the default link behavior

    var $fullText = $("#fullText");
    var $introText = $("#introText");
    var scrollPosition = $(window).scrollTop(); // Store current scroll position

    if ($fullText.is(":visible")) {
        // If the text is already visible, smoothly collapse it
        $fullText.slideUp(300, function() {
            $(window).scrollTop(scrollPosition); // Restore scroll position
        });
        $("#readMoreLink").text("Read More");
        $introText.show();
    } else {
        // If the text is hidden, smoothly expand it
        $introText.hide();
        $fullText.slideDown(300, function() {
            $(window).scrollTop(scrollPosition); // Keep the user's position
        });
        $("#readMoreLink").text("Read Less");
    }
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

// Initialize Owl Carousel
var owl = $('.owl-carousel').owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  dots: true,
});

// Custom navigation handlers
$('.google-nav .prev').click(function() {
  owl.trigger('prev.owl.carousel');
});

$('.google-nav .next').click(function() {
  owl.trigger('next.owl.carousel');
});

// Set aria-labels for dots
owl.on('initialized.owl.carousel changed.owl.carousel', function(event) {
  var dots = $('.owl-dot');
  dots.each(function(index) {
    $(this).attr('aria-label', 'Slide ' + (index + 1));
  });
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

  $(document).ready(function(){
    // Initialize the carousel
    $('.owl-carousel').owlCarousel({
        // Your Owl Carousel settings
        loop: true,
        margin: 10,
        nav: true,
        items: 1
    });
});

document.getElementById("year").textContent = new Date().getFullYear();


  // Toggle dropdown functionality
         function toggleDropdown(element) {
             const dropdown = element.closest('.dropdown');
             const dropdownContent = dropdown.querySelector('.dropdown-content');
             const chevron = dropdown.querySelector('.fa-chevron-down');
             const isActive = dropdownContent.classList.contains('show');
             
             // Close all other dropdowns
             document.querySelectorAll('.dropdown-content').forEach(content => {
                 if (content !== dropdownContent) {
                     content.classList.remove('show');
                     content.closest('.dropdown').querySelector('.fa-chevron-down').style.transform = 'rotate(0deg)';
                 }
             });
             
             // Toggle current dropdown
             if (!isActive) {
                 dropdownContent.classList.add('show');
                 chevron.style.transform = 'rotate(180deg)';
             } else {
                 dropdownContent.classList.remove('show');
                 chevron.style.transform = 'rotate(0deg)';
             }
         }
         
         // Newsletter form submission
         function submitForm(event) {
             event.preventDefault();
             
             const emailInput = document.getElementById('newsletter-email');
             const responseDiv = document.getElementById('newsletter-response');
             const email = emailInput.value.trim();
             
             // Simple email validation
             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
             
             if (!emailRegex.test(email)) {
                 responseDiv.innerHTML = 'Please enter a valid email address.';
                 responseDiv.className = 'error';
                 responseDiv.style.display = 'block';
                 
                 // Shake animation for error
                 emailInput.style.animation = 'shake 0.5s ease';
                 setTimeout(() => {
                     emailInput.style.animation = '';
                 }, 500);
                 
                 return false;
             }
             
             // Simulate form submission
             responseDiv.innerHTML = 'Thank you for subscribing! Check your email for confirmation.';
             responseDiv.className = 'success';
             responseDiv.style.display = 'block';
             emailInput.value = '';
             
             // Hide response after 5 seconds
             setTimeout(() => {
                 responseDiv.style.display = 'none';
             }, 5000);
             
             return false;
         }
         
         // Close dropdowns when clicking outside
         document.addEventListener('click', function(event) {
             if (!event.target.closest('.dropdown')) {
                 document.querySelectorAll('.dropdown-content').forEach(content => {
                     content.classList.remove('show');
                     content.closest('.dropdown').querySelector('.fa-chevron-down').style.transform = 'rotate(0deg)';
                 });
             }
         });
         
         // Add shake animation for errors
         const style = document.createElement('style');
         style.textContent = `
             @keyframes shake {
                 0%, 100% { transform: translateX(0); }
                 25% { transform: translateX(-5px); }
                 75% { transform: translateX(5px); }
             }
         `;
         document.head.appendChild(style);
         
           function toggleWhatsAppBox() {
             const box = document.getElementById('whatsappBox');
             if (box.style.display === 'block') {
                 box.style.display = 'none';
             } else {
                 box.style.display = 'block';
             }
         }
         
           // Animated counter function
         // Business Statistics Class
         class BusinessStats {
             constructor() {
                 this.currentYear = new Date().getFullYear();
                 this.counters = [];
                 this.initialized = false;
             }
         
             initialize() {
                 this.counters = Array.from(document.querySelectorAll('.counter'));
                 
                 // Calculate current values based on year
                 this.counters.forEach(counter => {
                     const base = parseInt(counter.getAttribute('data-base'));
                     const yearStart = parseInt(counter.getAttribute('data-year-start'));
                     const annualIncrease = parseInt(counter.getAttribute('data-annual-increase'));
                     
                     // Calculate years passed
                     const yearsPassed = this.currentYear - yearStart;
                     
                     // Calculate current value
                     let currentValue;
                     if (counter.parentElement.querySelector('i.fa-business-time')) {
                         // Years of business - just add years passed
                         currentValue = yearsPassed;
                     } else {
                         // Other metrics - apply annual percentage increase
                         currentValue = this.calculateCompoundGrowth(base, annualIncrease, yearsPassed);
                     }
                     
                     // Update data attributes
                     counter.setAttribute('data-current', Math.round(currentValue));
                     counter.setAttribute('data-annual-increase', annualIncrease);
                     
                     // Store current value for display
                     const counterValue = counter.querySelector('.counter-value');
                     counterValue.setAttribute('data-display', Math.round(currentValue).toLocaleString());
                     
                     // Update percentage display
                     this.updatePercentageDisplay(counter, base, currentValue);
                 });
                 
                 this.initialized = true;
             }
         
             calculateCompoundGrowth(base, annualPercent, years) {
                 // Compound growth formula: final = base * (1 + rate)^years
                 const rate = annualPercent / 100;
                 return base * Math.pow((1 + rate), years);
             }
         
             updatePercentageDisplay(counter, base, current) {
                 const percentageElement = counter.querySelector('.percentage');
                 const increase = ((current - base) / base) * 100;
                 
                 if (percentageElement) {
                     percentageElement.textContent = `+${increase.toFixed(1)}%`;
                     percentageElement.title = `${increase.toFixed(1)}% total increase since start`;
                 }
             }
         
             simulateAnnualUpdate() {
                 // This would be called annually or could be connected to real-time data
                 this.counters.forEach(counter => {
                     if (!counter.classList.contains('animated')) return;
                     
                     const current = parseInt(counter.getAttribute('data-current'));
                     const annualIncrease = parseInt(counter.getAttribute('data-annual-increase'));
                     
                     // For years counter, just add 1
                     if (counter.parentElement.querySelector('i.fa-business-time')) {
                         const newValue = current + 1;
                         counter.setAttribute('data-current', newValue);
                         this.animateCounterUpdate(counter, current, newValue);
                     } else {
                         // For other counters, add percentage
                         const increase = current * (annualIncrease / 100);
                         const newValue = current + increase;
                         counter.setAttribute('data-current', Math.round(newValue));
                         this.animateCounterUpdate(counter, current, newValue);
                     }
                 });
             }
         
             animateCounterUpdate(counter, oldValue, newValue) {
                 const counterValue = counter.querySelector('.counter-value');
                 const percentageElement = counter.querySelector('.percentage');
                 
                 // Animate the counter
                 this.animateNumber(counterValue, oldValue, newValue, 1500);
                 
                 // Update percentage
                 const base = parseInt(counter.getAttribute('data-base'));
                 this.updatePercentageDisplay(counter, base, newValue);
             }
         
             animateNumber(element, start, end, duration) {
                 const startTime = Date.now();
                 const endTime = startTime + duration;
                 
                 const animate = () => {
                     const now = Date.now();
                     const progress = Math.min((now - startTime) / duration, 1);
                     
                     // Easing function for smooth animation
                     const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                     const current = start + (end - start) * easeOutQuart;
                     
                     // Format with commas
                     element.textContent = Math.round(current).toLocaleString();
                     
                     if (now < endTime) {
                         requestAnimationFrame(animate);
                     } else {
                         element.textContent = Math.round(end).toLocaleString();
                     }
                 };
                 
                 requestAnimationFrame(animate);
             }
         }
         
         // Animated counter function for initial load
         function animateCounter(element, target) {
             const counter = element.querySelector('.counter-value');
             const speed = 50;
             const increment = Math.ceil(target / 100);
             let current = 0;
             
             const timer = setInterval(() => {
                 current += increment;
                 if (current >= target) {
                     current = target;
                     clearInterval(timer);
                 }
                 
                 counter.textContent = Math.round(current).toLocaleString();
             }, speed);
         }
         
         // Scroll animation detection
         function isElementInViewport(el) {
             const rect = el.getBoundingClientRect();
             return (
                 rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
                 rect.bottom >= 0
             );
         }
         
         // Animate counters when in viewport
         function checkCounters() {
             const counters = document.querySelectorAll('.counter');
             counters.forEach(counter => {
                 if (isElementInViewport(counter) && !counter.classList.contains('animated')) {
                     counter.classList.add('animated');
                     const target = parseInt(counter.getAttribute('data-current') || counter.getAttribute('data-base'));
                     animateCounter(counter, target);
                     
                     // Animate progress bar
                     const progressBar = counter.closest('.stats-container').querySelector('.year-progress-fill');
                     if (progressBar) {
                         progressBar.style.width = '100%';
                     }
                 }
             });
         }
         
         // Scroll animation for section
         function checkScroll() {
             const section = document.querySelector('.scrolling-text');
             if (isElementInViewport(section)) {
                 section.classList.add('visible');
             }
         }
         
         // Initialize on load
         document.addEventListener('DOMContentLoaded', function() {
             // Initialize business stats
             const businessStats = new BusinessStats();
             businessStats.initialize();
             
             // Set current year in years counter
             const yearCounter = document.querySelector('.counter[data-year-start="2009"]');
             const yearStart = parseInt(yearCounter.getAttribute('data-year-start'));
             const yearsPassed = new Date().getFullYear() - yearStart;
             const yearsValue = yearCounter.querySelector('.counter-value');
             yearsValue.setAttribute('data-display', yearsPassed.toString());
             
             // Set initial display values
             businessStats.counters.forEach(counter => {
                 const displayValue = counter.querySelector('.counter-value').getAttribute('data-display') || 
                                    counter.getAttribute('data-base');
                 counter.querySelector('.counter-value').textContent = displayValue;
             });
             
             checkScroll();
             checkCounters();
             
             // Simulate annual update (for demo purposes - in real app, this would be based on real data)
             // Uncomment to simulate annual growth
             /*
             setTimeout(() => {
                 businessStats.simulateAnnualUpdate();
             }, 8000);
             */
             
             // Store stats in global for potential updates
             window.businessStats = businessStats;
         });
         
         // Check on scroll
         window.addEventListener('scroll', function() {
             checkScroll();
             checkCounters();
         });
         
         // Optional: Add loading animation delay
         setTimeout(() => {
             const section = document.querySelector('.scrolling-text');
             if (isElementInViewport(section)) {
                 section.classList.add('visible');
             }
         }, 300);
         
         
         
             document.addEventListener("DOMContentLoaded", function() {
        const track = document.getElementById('projectTrack');
        // This line doubles your project list instantly to allow a seamless loop
        const content = track.innerHTML;
        track.innerHTML = content + content;
    });

    function openService(service) {
   const services = {
      seo: {
         title: "Search Engine Optimization (SEO)",
         text: "Our SEO services include full on-page, technical, and off-page optimization, helping you rank higher on Google and attract local customers through targeted strategies."
      },
      googleads: {
         title: "Google Ads & PPC Campaigns",
         text: "We create and manage ROI-focused Google Ads campaigns that drive qualified traffic to your website. From Search and Display to Shopping Ads, we maximize your conversions."
      },
      webdesign: {
         title: "Web Design & UI/UX",
         text: "We craft responsive, visually stunning websites that focus on user experience (UX) and interface design (UI) — ensuring better engagement and lead conversions."
      },
      webdev: {
         title: "Web Development",
         text: "Our developers build high-performance websites using modern technologies like HTML5, CSS3, JS, and frameworks to ensure security, scalability, and speed."
      },
      webapps: {
         title: "Custom Web Applications",
         text: "We develop advanced web applications — dashboards, admin systems, or portals — built for automation, real-time analytics, and business efficiency."
      },
      ecommerce: {
         title: "E-Commerce Solutions",
         text: "From Shopify to custom e-commerce systems, we build scalable online stores optimized for SEO, conversions, and seamless checkout experiences."
      },
      digitalmenus: {
         title: "Digital Menus",
         text: "Engage customers with modern, touch-friendly digital menus that are easy to manage and designed to enhance your restaurant or café's image."
      },
      qrmenus: {
         title: "QR Code Menus",
         text: "Transform your dining experience with QR menus that customers can scan and browse instantly — contactless, fast, and fully branded."
      },
      digitalsignage: {
         title: "Digital Signage",
         text: "Display your promotions, menus, or videos on smart screens using our cloud-based signage systems. Update instantly from anywhere."
      },
      branding: {
         title: "Branding & Visual Identity",
         text: "We help you stand out with custom branding, logo design, and visual storytelling that connect emotionally with your audience."
      },
      analytics: {
         title: "Analytics & Performance Tracking",
         text: "Gain deep insights into your marketing performance with real-time dashboards, analytics, and reporting designed to track growth and ROI."
      }
   };

   const data = services[service];
   document.getElementById('modalTitle').innerText = data.title;
   document.getElementById('modalText').innerText = data.text;
   document.getElementById('serviceModal').style.display = 'block';
}

function closeService() {
   document.getElementById('serviceModal').style.display = 'none';
}