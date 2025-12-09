// ======================= NAVBAR & MENU ==========================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.innerHTML = navMenu.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking nav links
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

// ======================= CATEGORY FILTER ==========================
const categoryBtns = document.querySelectorAll(".category-btn");
const doctorCards = document.querySelectorAll(".doctor-card");
const searchInput = document.getElementById("searchInput");
const doctorsGrid = document.getElementById("doctorsGrid");

// Show no results message
function showNoResults() {
  if (!document.querySelector(".no-results")) {
    const noResults = document.createElement("div");
    noResults.className = "no-results";
    noResults.textContent = "No doctors found matching your criteria.";
    doctorsGrid.appendChild(noResults);
  }
}

// Hide no results message
function hideNoResults() {
  const noResults = document.querySelector(".no-results");
  if (noResults) noResults.remove();
}

// Filter doctors
function filterDoctors() {
  const selectedCategory =
    document.querySelector(".category-btn.active")?.dataset.category || "all";
  const searchQuery = searchInput.value.toLowerCase();
  let visibleCount = 0;

  doctorCards.forEach((card) => {
    const cardCategory = card.dataset.category;
    const name = card.querySelector(".doctor-name").textContent.toLowerCase();
    const specialty = card
      .querySelector(".doctor-specialty")
      .textContent.toLowerCase();

    const categoryMatch =
      selectedCategory === "all" || cardCategory === selectedCategory;
    const searchMatch =
      name.includes(searchQuery) || specialty.includes(searchQuery);

    if (categoryMatch && searchMatch) {
      card.style.display = "block";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  visibleCount === 0 ? showNoResults() : hideNoResults();
}

// Category button handler
categoryBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    categoryBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    filterDoctors();
  });
});

// Search typing
searchInput.addEventListener("keyup", filterDoctors);

// Initialize
filterDoctors();

// ======================= SHOW MORE BUTTON ==========================
document.querySelectorAll(".show-more-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("More content would be loaded here in a real implementation.");
  });
});

// ======================= SMOOTH SCROLL ==========================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerHeight = document.querySelector(".header").offsetHeight;
      const topPos =
        target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }
  });
});

// ======================= STICKY HEADER ==========================
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.style.boxShadow =
    window.scrollY > 100
      ? "0 4px 12px rgba(0, 0, 0, 0.1)"
      : "0 2px 4px rgba(0, 0, 0, 0.1)";
});

// ======================= ANIMATION ON SCROLL ==========================
const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    ".service-card, .department-card, .doctor-card, .package-card"
  );

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

// Initial animation setup
document
  .querySelectorAll(
    ".service-card, .department-card, .doctor-card, .package-card"
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

window.addEventListener("scroll", animateOnScroll);
animateOnScroll();

// ======================= SLIDER ==========================
let index = 0;
const slides = document.querySelectorAll(".slides img");
const dots = document.querySelectorAll(".dot");

function showSlide(i) {
  slides.forEach((slide, n) => slide.classList.toggle("active", n === i));
  dots.forEach((dot, n) => dot.classList.toggle("active", n === i));
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

setInterval(nextSlide, 4000);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    showSlide(i);
  });
});

showSlide(index);

// ======================= DIALOG (BOOK APPOINTMENT) ==========================
const openBtn = document.getElementById("openDialogBtn");
const closeBtn = document.getElementById("closeDialogBtn");
const overlay = document.getElementById("dialogOverlay");
const appointmentForm = document.getElementById("appointmentForm");

// Open dialog
openBtn.addEventListener("click", () => {
  overlay.style.display = "flex";
});

// Close dialog
closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

// Close if clicking outside the box
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) overlay.style.display = "none";
});

// ======================= EMAILJS INTEGRATION ==========================
const PUBLIC_KEY = "p9XUkJJF3-8x3P5Yw";
const SERVICE_ID = "service_d5lwgmc";
const TEMPLATE_ID = "template_kuxcqkp";
emailjs.init(PUBLIC_KEY);

// Form submission
appointmentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const templateParams = {
    user_name: document.getElementById("name").value,
    user_email: document.getElementById("email").value,
    user_phone: document.getElementById("phone").value,
  };

  // Send email
  emailjs
    .send(SERVICE_ID, TEMPLATE_ID, templateParams)
    .then((response) => {
      alert("Appointment booked successfully!");
      appointmentForm.reset();
      overlay.style.display = "none"; // Close dialog
      console.log("SUCCESS!", response.status, response.text);
    })
    .catch((error) => {
      alert("Failed to send appointment. Please try again.");
      console.error("FAILED...", error);
    });
});
