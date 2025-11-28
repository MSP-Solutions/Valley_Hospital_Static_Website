const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
 const categoryBtns = document.querySelectorAll(".category-btn");
      const doctorCards = document.querySelectorAll(".doctor-card");
      const searchInput = document.getElementById("searchInput");
      const doctorsGrid = document.getElementById("doctorsGrid");
      
      // Function to show no results message
      function showNoResults() {
        let noResults = document.querySelector('.no-results');
        if (!noResults) {
          noResults = document.createElement('div');
          noResults.className = 'no-results';
          noResults.textContent = 'No doctors found matching your criteria.';
          doctorsGrid.appendChild(noResults);
        }
      }
      
      // Function to hide no results message
      function hideNoResults() {
        const noResults = document.querySelector('.no-results');
        if (noResults) {
          noResults.remove();
        }
      }
      
      // Function to filter doctors
      function filterDoctors() {
        const selectedCategory = document.querySelector('.category-btn.active').dataset.category;
        const searchQuery = searchInput.value.toLowerCase();
        
        let visibleCount = 0;
        
        doctorCards.forEach((card) => {
          const cardCategory = card.dataset.category;
          const name = card.querySelector('.doctor-name').textContent.toLowerCase();
          const specialty = card.querySelector('.doctor-specialty').textContent.toLowerCase();
          
          const categoryMatch = selectedCategory === 'all' || cardCategory === selectedCategory;
          const searchMatch = name.includes(searchQuery) || specialty.includes(searchQuery);
          
          if (categoryMatch && searchMatch) {
            card.style.display = 'block';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });
        
        // Show/hide no results message
        if (visibleCount === 0) {
          showNoResults();
        } else {
          hideNoResults();
        }
      }
      
      // Initialize - show all doctors
      filterDoctors();
      
      // Category button event listeners
      categoryBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          categoryBtns.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          filterDoctors();
        });
      });
      
      // Search input event listener
      searchInput.addEventListener("keyup", filterDoctors);

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.innerHTML = navMenu.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking on nav links
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';

    // Update active link
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

categoryBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    categoryBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Show more buttons
const showMoreBtns = document.querySelectorAll(".show-more-btn");

showMoreBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("More content would be loaded here in a real implementation.");
  });
});

// Book appointment button
const bookAppointmentBtn = document.querySelector(".book-appointment-btn");

bookAppointmentBtn.addEventListener("click", () => {
  alert("Appointment booking form would open here in a real implementation.");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerHeight = document.querySelector(".header").offsetHeight;
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Sticky header
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
  }
});

// Animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    ".service-card, .department-card, .doctor-card, .package-card"
  );

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    if (elementTop < window.innerHeight && elementBottom > 0) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

// Initial setup for animation
document
  .querySelectorAll(
    ".service-card, .department-card, .doctor-card, .package-card"
  )
  .forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

window.addEventListener("scroll", animateOnScroll);
animateOnScroll();
