$(document).ready(function () {
  // 1. Check if the page is in Arabic mode
  var isArabic = $("html").attr("dir") === "rtl" || $("body").hasClass("rtl");

  // 2. Define the roles for both languages
  var rolesEn = [
    "Design",
    "Development",
    "Google Ads",
    "Search Engine Optimization",
    "Social Media Ads",
    "Digital Ads",
    "Web Apps",
    "Websites",
    "QR-Menus",
    "Digital Menus",
  ];
  var rolesAr = [
    "تصميم",
    "تطوير",
    "اعلانات جوجل",
    "تحسين محركات البحث",
    "إعلانات التواصل الاجتماعي",
    "إعلانات رقمية",
    "تطبيقات الويب",
    "مواقع إلكترونية",
    "منيو QR",
    "منيو رقمي",
  ];

  // 3. Select the correct array based on the language
  var roles = isArabic ? rolesAr : rolesEn;
  var currentRoleIndex = 0;

  function typeText(index, text, callback) {
    if (index < text.length) {
      // Use .text() to safely render the Arabic characters
      $("#changingText").text(text.substring(0, index + 1));
      setTimeout(function () {
        typeText(index + 1, text, callback);
      }, 100);
    } else {
      setTimeout(callback, 1500); // Increased wait time for better readability
    }
  }

  function changeText() {
    var currentRole = roles[currentRoleIndex];
    typeText(0, currentRole, function () {
      currentRoleIndex = (currentRoleIndex + 1) % roles.length;
      // Short delay before starting to "erase" or move to the next word
      setTimeout(changeText, 500);
    });
  }

  changeText();
});
$("#readMoreLink").click(function (event) {
  event.preventDefault();

  var $fullText = $("#fullText");
  var $introText = $("#introText");
  var $link = $(this);
  var scrollPosition = $(window).scrollTop();

  var isArabic =
    $("html").attr("dir") === "rtl" || $("html").attr("lang") === "ar";

  if ($fullText.is(":visible")) {
    $fullText.slideUp(300, function () {
      $introText.fadeIn(200);
      $(window).scrollTop(scrollPosition);
    });

    $link.text(isArabic ? "اقرأ المزيد" : "Read More");

    $fullText.removeClass("show-text");
  } else {
    $introText.fadeOut(200, function () {
      $fullText.slideDown(300).addClass("show-text");
      $(window).scrollTop(scrollPosition);
    });

    $link.text(isArabic ? "عرض أقل" : "Read Less");
  }
});
// Intersection observer for scrolling animations
const elements = document.querySelectorAll(".scrolling-text, .scrolling-text2");

const callbackFunction = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateX(0%) translateY(0%)";
    }
  });
};

const observerOptions = {
  threshold: 0.3,
};

const observer = new IntersectionObserver(callbackFunction, observerOptions);

elements.forEach((element) => {
  observer.observe(element);
});

// Initialize Owl Carousel
var owl = $(".owl-carousel").owlCarousel({
  rtl: $("html").attr("dir") === "rtl" ? true : false,
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  dots: true,
  margin: 10,
});

// Custom navigation handlers
$(".google-nav .prev").click(function () {
  owl.trigger("prev.owl.carousel");
});

$(".google-nav .next").click(function () {
  owl.trigger("next.owl.carousel");
});

// Set aria-labels for dots
owl.on("initialized.owl.carousel changed.owl.carousel", function (event) {
  var dots = $(".owl-dot");
  dots.each(function (index) {
    $(this).attr("aria-label", "Slide " + (index + 1));
  });
});

// background img
document.addEventListener("DOMContentLoaded", function () {
  var heroArea = document.getElementById("hero-area");
  var img = new Image();
  img.src = "images/background.webp";
  img.onload = function () {
    heroArea.style.backgroundImage = "url(images/background.webp)";
  };
});

// Toggle dropdown on click for small screens
document.addEventListener("DOMContentLoaded", function () {
  var dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent click from bubbling up

      // Close all other dropdowns
      dropdowns.forEach(function (otherDropdown) {
        if (otherDropdown !== dropdown) {
          otherDropdown.classList.remove("active");
        }
      });

      // Toggle the current dropdown
      dropdown.classList.toggle("active");
    });
  });

  // Close dropdowns if clicking outside
  document.addEventListener("click", function () {
    dropdowns.forEach(function (dropdown) {
      dropdown.classList.remove("active");
    });
  });
});

// Tawk.to Script - Load after page load with a delay
function loadTawkToScript() {
  var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/66983cf8becc2fed6926deeb/1i31asb44";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
}

// Load the Tawk.to script 20 seconds after the page has loaded
window.addEventListener("load", function () {
  setTimeout(loadTawkToScript, 20000); // 20,000 milliseconds = 20 seconds
});

// Google Tag Manager (gtag.js)
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-M74XDBHG7P");

$(document).ready(function () {
  // Initialize the carousel
  $(".owl-carousel").owlCarousel({
    // Your Owl Carousel settings
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Toggle dropdown functionality
function toggleDropdown(element) {
  const dropdown = element.closest(".dropdown");
  const dropdownContent = dropdown.querySelector(".dropdown-content");
  const chevron = dropdown.querySelector(".fa-chevron-down");
  const isActive = dropdownContent.classList.contains("show");

  // Close all other dropdowns
  document.querySelectorAll(".dropdown-content").forEach((content) => {
    if (content !== dropdownContent) {
      content.classList.remove("show");
      content
        .closest(".dropdown")
        .querySelector(".fa-chevron-down").style.transform = "rotate(0deg)";
    }
  });

  // Toggle current dropdown
  if (!isActive) {
    dropdownContent.classList.add("show");
    chevron.style.transform = "rotate(180deg)";
  } else {
    dropdownContent.classList.remove("show");
    chevron.style.transform = "rotate(0deg)";
  }
}

// Newsletter form submission
function submitForm(event) {
  event.preventDefault();

  const emailInput = document.getElementById("newsletter-email");
  const responseDiv = document.getElementById("newsletter-response");
  const email = emailInput.value.trim();

  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    responseDiv.innerHTML = "Please enter a valid email address.";
    responseDiv.className = "error";
    responseDiv.style.display = "block";

    // Shake animation for error
    emailInput.style.animation = "shake 0.5s ease";
    setTimeout(() => {
      emailInput.style.animation = "";
    }, 500);

    return false;
  }

  // Simulate form submission
  responseDiv.innerHTML =
    "Thank you for subscribing! Check your email for confirmation.";
  responseDiv.className = "success";
  responseDiv.style.display = "block";
  emailInput.value = "";

  // Hide response after 5 seconds
  setTimeout(() => {
    responseDiv.style.display = "none";
  }, 5000);

  return false;
}

// Close dropdowns when clicking outside
document.addEventListener("click", function (event) {
  if (!event.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown-content").forEach((content) => {
      content.classList.remove("show");
      content
        .closest(".dropdown")
        .querySelector(".fa-chevron-down").style.transform = "rotate(0deg)";
    });
  }
});

// Add shake animation for errors
const style = document.createElement("style");
style.textContent = `
             @keyframes shake {
                 0%, 100% { transform: translateX(0); }
                 25% { transform: translateX(-5px); }
                 75% { transform: translateX(5px); }
             }
         `;
document.head.appendChild(style);

function toggleWhatsAppBox() {
  const box = document.getElementById("whatsappBox");
  if (box.style.display === "block") {
    box.style.display = "none";
  } else {
    box.style.display = "block";
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
    this.counters = Array.from(document.querySelectorAll(".counter"));

    // Calculate current values based on year
    this.counters.forEach((counter) => {
      const base = parseInt(counter.getAttribute("data-base"));
      const yearStart = parseInt(counter.getAttribute("data-year-start"));
      const annualIncrease = parseInt(
        counter.getAttribute("data-annual-increase"),
      );

      // Calculate years passed
      const yearsPassed = this.currentYear - yearStart;

      // Calculate current value
      let currentValue;
      if (counter.parentElement.querySelector("i.fa-business-time")) {
        // Years of business - just add years passed
        currentValue = yearsPassed;
      } else {
        // Other metrics - apply annual percentage increase
        currentValue = this.calculateCompoundGrowth(
          base,
          annualIncrease,
          yearsPassed,
        );
      }

      // Update data attributes
      counter.setAttribute("data-current", Math.round(currentValue));
      counter.setAttribute("data-annual-increase", annualIncrease);

      // Store current value for display
      const counterValue = counter.querySelector(".counter-value");
      counterValue.setAttribute(
        "data-display",
        Math.round(currentValue).toLocaleString(),
      );

      // Update percentage display
      this.updatePercentageDisplay(counter, base, currentValue);
    });

    this.initialized = true;
  }

  calculateCompoundGrowth(base, annualPercent, years) {
    // Compound growth formula: final = base * (1 + rate)^years
    const rate = annualPercent / 100;
    return base * Math.pow(1 + rate, years);
  }

  updatePercentageDisplay(counter, base, current) {
    const percentageElement = counter.querySelector(".percentage");
    const increase = ((current - base) / base) * 100;

    if (percentageElement) {
      percentageElement.textContent = `+${increase.toFixed(1)}%`;
      percentageElement.title = `${increase.toFixed(1)}% total increase since start`;
    }
  }

  simulateAnnualUpdate() {
    // This would be called annually or could be connected to real-time data
    this.counters.forEach((counter) => {
      if (!counter.classList.contains("animated")) return;

      const current = parseInt(counter.getAttribute("data-current"));
      const annualIncrease = parseInt(
        counter.getAttribute("data-annual-increase"),
      );

      // For years counter, just add 1
      if (counter.parentElement.querySelector("i.fa-business-time")) {
        const newValue = current + 1;
        counter.setAttribute("data-current", newValue);
        this.animateCounterUpdate(counter, current, newValue);
      } else {
        // For other counters, add percentage
        const increase = current * (annualIncrease / 100);
        const newValue = current + increase;
        counter.setAttribute("data-current", Math.round(newValue));
        this.animateCounterUpdate(counter, current, newValue);
      }
    });
  }

  animateCounterUpdate(counter, oldValue, newValue) {
    const counterValue = counter.querySelector(".counter-value");
    const percentageElement = counter.querySelector(".percentage");

    // Animate the counter
    this.animateNumber(counterValue, oldValue, newValue, 1500);

    // Update percentage
    const base = parseInt(counter.getAttribute("data-base"));
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
  const counter = element.querySelector(".counter-value");
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
    rect.top <=
      (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
    rect.bottom >= 0
  );
}

// Animate counters when in viewport
function checkCounters() {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    if (
      isElementInViewport(counter) &&
      !counter.classList.contains("animated")
    ) {
      counter.classList.add("animated");
      const target = parseInt(
        counter.getAttribute("data-current") ||
          counter.getAttribute("data-base"),
      );
      animateCounter(counter, target);

      // Animate progress bar
      const progressBar = counter
        .closest(".stats-container")
        .querySelector(".year-progress-fill");
      if (progressBar) {
        progressBar.style.width = "100%";
      }
    }
  });
}

// Scroll animation for section
function checkScroll() {
  const section = document.querySelector(".scrolling-text");
  if (isElementInViewport(section)) {
    section.classList.add("visible");
  }
}

// Initialize on load
document.addEventListener("DOMContentLoaded", function () {
  // Initialize business stats
  const businessStats = new BusinessStats();
  businessStats.initialize();

  // Set current year in years counter
  const yearCounter = document.querySelector(
    '.counter[data-year-start="2009"]',
  );
  const yearStart = parseInt(yearCounter.getAttribute("data-year-start"));
  const yearsPassed = new Date().getFullYear() - yearStart;
  const yearsValue = yearCounter.querySelector(".counter-value");
  yearsValue.setAttribute("data-display", yearsPassed.toString());

  // Set initial display values
  businessStats.counters.forEach((counter) => {
    const displayValue =
      counter.querySelector(".counter-value").getAttribute("data-display") ||
      counter.getAttribute("data-base");
    counter.querySelector(".counter-value").textContent = displayValue;
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
window.addEventListener("scroll", function () {
  checkScroll();
  checkCounters();
});

// Optional: Add loading animation delay
setTimeout(() => {
  const section = document.querySelector(".scrolling-text");
  if (isElementInViewport(section)) {
    section.classList.add("visible");
  }
}, 300);

document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("projectTrack");
  // This line doubles your project list instantly to allow a seamless loop
  const content = track.innerHTML;
  track.innerHTML = content + content;
});
/**
 * Service Modal Controller
 * Handling bilingual content (AR/EN) and Modal state.
 */
function openService(serviceKey) {
  // 1. Detect page language/direction
  const isArabic =
    document.documentElement.dir === "rtl" ||
    document.documentElement.lang === "ar";

  // 2. Bilingual Content Data Object
  /**
   * Global services data object for bilingual support.
   * Structure: { serviceKey: { en: {title, text}, ar: {title, text} } }
   */
  const services = {
    seo: {
      en: {
        title: "Search Engine Optimization (SEO)",
        text: "Our SEO services include full on-page, technical, and off-page optimization, helping you rank higher on Google.",
      },
      ar: {
        title: "تحسين محركات البحث (SEO)",
        text: "تتضمن خدماتنا تحسين الصفحات الكامل، السيو التقني، والروابط الخارجية لمساعدتك على التصدر في نتائج جوجل.",
      },
    },
    googleads: {
      en: {
        title: "Google Ads & PPC Campaigns",
        text: "We create and manage ROI-focused Google Ads campaigns that drive qualified traffic to your website.",
      },
      ar: {
        title: "إعلانات جوجل وحملات PPC",
        text: "نقوم بإنشاء وإدارة حملات إعلانية تركز على العائد على الاستثمار لجذب الزيارات المستهدفة إلى موقعك.",
      },
    },
    webdesign: {
      en: {
        title: "Web Design & UI/UX",
        text: "We craft responsive, visually stunning websites focusing on user experience (UX) and interface design (UI).",
      },
      ar: {
        title: "تصميم المواقع و UI/UX",
        text: "نبتكر مواقع متوافقة مع الأجهزة بتصاميم جذابة تركز على تجربة المستخدم وواجهة التصميم.",
      },
    },
    webdev: {
      en: {
        title: "Web Development",
        text: "High-performance websites built with modern technologies ensuring security, scalability, and speed.",
      },
      ar: {
        title: "تطوير الويب",
        text: "نبني مواقع عالية الأداء باستخدام أحدث التقنيات لضمان الأمان، السرعة، وقابلية التوسع.",
      },
    },
    webapps: {
      en: {
        title: "Custom Web Applications",
        text: "Advanced web applications — dashboards or portals — built for automation and business efficiency.",
      },
      ar: {
        title: "تطبيقات الويب المخصصة",
        text: "نطور تطبيقات ويب متقدمة مثل لوحات التحكم وأنظمة الإدارة المصممة للأتمتة وكفاءة العمل.",
      },
    },
    ecommerce: {
      en: {
        title: "E-Commerce Solutions",
        text: "Scalable online stores optimized for SEO, conversions, and seamless checkout experiences.",
      },
      ar: {
        title: "حلول التجارة الإلكترونية",
        text: "نبني متاجر إلكترونية قابلة للتوسع، محسنة لمحركات البحث وتوفر تجربة شراء سلسة.",
      },
    },
    digitalmenus: {
      en: {
        title: "Digital Menus",
        text: "Modern, touch-friendly digital menus designed to enhance your restaurant or café's image.",
      },
      ar: {
        title: "القوائم الرقمية",
        text: "اجذب عملائك بقوائم رقمية حديثة تعمل باللمس، مصممة لتحسين صورة مطعمك أو مقهاك.",
      },
    },
    qrmenus: {
      en: {
        title: "QR Code Menus",
        text: "Contactless QR menus that customers can scan and browse instantly — fast and fully branded.",
      },
      ar: {
        title: "قوائم الـ QR Code",
        text: "حول تجربة تناول الطعام إلى تجربة سريعة وبدون تلامس مع قوائم الـ QR المخصصة لعلامتك.",
      },
    },
    digitalsignage: {
      en: {
        title: "Digital Signage",
        text: "Display promotions or menus on smart screens using cloud-based signage systems.",
      },
      ar: {
        title: "اللوحات الإعلانية الرقمية",
        text: "اعرض عروضك وقوائمك على شاشات ذكية باستخدام أنظمة سحابية سهلة التحديث من أي مكان.",
      },
    },
    branding: {
      en: {
        title: "Branding & Visual Identity",
        text: "Custom branding and logo design that connect emotionally with your audience.",
      },
      ar: {
        title: "العلامات التجارية والهوية البصرية",
        text: "نساعدك على التميز من خلال تصميم هوية بصرية وشعارات تربطك بجمهورك عاطفياً.",
      },
    },
    analytics: {
      en: {
        title: "Analytics & Performance Tracking",
        text: "Deep insights into your marketing performance with real-time dashboards and reporting.",
      },
      ar: {
        title: "التحليلات وتتبع الأداء",
        text: "احصل على رؤى دقيقة حول أداء حملاتك التسويقية من خلال تقارير وتحليلات فورية.",
      },
    },
  };

  // 3. Validation: Check if the serviceKey exists in our data
  const serviceData = services[serviceKey];

  if (serviceData) {
    const langData = isArabic ? serviceData.ar : serviceData.en;

    // 4. Update Modal Elements (Checking existence to prevent null errors)
    const titleElem = document.getElementById("modalTitle");
    const textElem = document.getElementById("modalText");
    const modalElem = document.getElementById("serviceModal");

    if (titleElem) titleElem.innerText = langData.title;
    if (textElem) textElem.innerText = langData.text;

    // 5. Display Modal
    if (modalElem) {
      modalElem.style.display = "block";
      // Trigger animation after a slight delay
      setTimeout(() => modalElem.classList.add("show"), 10);
    }
  } else {
    console.error(
      `Service Error: Key "${serviceKey}" was not found in the services object.`,
    );
  }
}

/**
 * Closes the Service Modal and resets state.
 */
function closeService() {
  const modal = document.getElementById("serviceModal");
  if (modal) {
    modal.style.display = "none";
    modal.classList.remove("show");
  }
}

/**
 * Global Event Listener: Closes modal when clicking outside the content area.
 */
window.addEventListener("click", function (event) {
  const modal = document.getElementById("serviceModal");
  if (event.target === modal) {
    closeService();
  }
});
