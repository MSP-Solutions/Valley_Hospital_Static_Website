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

// ======================= DOCTORS DATA & FILTER ==========================
const doctors = [
  // Obstetric & Gynecology
  {
    name: "Prof. Dr. Saraswati M. Padhye",
    specialty: "Obstetrician & Gynecologist",
    category: "Obstetric & Gynecology",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Dr. Sushila Shrestha",
    specialty: "Obstetrician & Gynecologist",
    category: "Obstetric & Gynecology",
    image: "../home/assets/Dr. Sushila Shrestha.jpeg",
  },
  {
    name: "Dr. Keshari Bajracharya",
    specialty: "Obstetrician & Gynecologist",
    category: "Obstetric & Gynecology",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Prof. Dr. Chanda Karki (Bhandari)",
    specialty: "Obstetrician & Gynecologist",
    category: "Obstetric & Gynecology",
    image: "../home/assets/aboutus2.png",
  },
  {
    name: "Dr. Bimala Malla",
    specialty: "Obstetrician & Gynecologist",
    category: "Obstetric & Gynecology",
    image: "../home/assets/Dr. Bimala Malla.jpeg",
  },
  {
    name: "Dr. Sudha Thapa",
    specialty: "Obstetrician & Gynecologist",
    category: "Obstetric & Gynecology",
    image: "../home/assets/Dr. Sudha Thapa.jpeg",
  },
  {
    name: "Dr. Amila Shrestha",
    specialty: "Obstetrician & Gynecologist",
    category: "Obstetric & Gynecology",
    image: "../home/assets/Dr. Amila Shrestha.jpeg",
  },
  {
    name: "Dr. Dipti Shrestha",
    specialty: "Obstetrician & Gynecologist",
    category: "Obstetric & Gynecology",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Dr. Rumina Malla",
    specialty: "Obstetrician & Gynecologist",
    category: "Obstetric & Gynecology",
    image: "../home/assets/Dr. Rumina Malla.jpeg",
  },
  {
    name: "Dr. Rajlaxmi Sharma",
    specialty: "Obstetrician & Gynecologist",
    category: "Obstetric & Gynecology",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Dr. Noora Pradhan",
    specialty: "Obstetrician & Gynecologist",
    category: "Obstetric & Gynecology",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Dr. Prekshya Khatri",
    specialty: "Obstetrician & Gynecologist",
    category: "Obstetric & Gynecology",
    image: "../home/assets/Dr. Prekshya Khatri.jpeg",
  },
  {
    name: "Dr. Bibhuti Shahi",
    specialty: "Obstetrician & Gynecologist",
    category: "Obstetric & Gynecology",
    image: "../home/assets/Dr. Bibhuti Shahi.jpeg",
  },

  // Paediatric
  {
    name: "Dr. Shailendra B. Karmachary",
    specialty: "Pediatric",
    category: "Paediatric",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Dr. Deepa Khanal",
    specialty: "Pediatric",
    category: "Paediatric",
    image: "../home/assets/Dr. Deepa Khanal.jpeg",
  },

  // Neuro Medicine
  {
    name: "Dr. Dipesh Shakya",
    specialty: "Neurologist",
    category: "Neuro Medicine",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80",
  },
  {
    name: "Dr. Sandeep Kumar Jaisawal",
    specialty: "Neurologist",
    category: "Neuro Medicine",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
  },

  // ENT-HNS
  {
    name: "Prof. Dr. Mukunda Raj Joshi",
    specialty: "General Surgery",
    category: "ENT-HNS",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Dr. Manish Gautam",
    specialty: "General Surgery",
    category: "ENT-HNS",
    image: "../home/assets/Dr. Manish Gautam.jpeg",
  },

  // Cardiology / Dermatology
  {
    name: "Dr. Sabina Bhandari",
    specialty: "Dermatology",
    category: "Cardiology",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
  },

  // Ear / Orthopedics
  {
    name: "Dr. Deep Sijapati",
    specialty: "Orthopedic Surgeon",
    category: "Ear",
    image: "../home/assets/Dr. Deep Sijapati.jpeg",
  },

  // Endocrinology
  {
    name: "Dr. Deepak Poudel",
    specialty: "Endocrinology",
    category: "Endocrinology",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80",
  },

  // Pediatric Surgery
  {
    name: "Dr. Manish Pokhrel",
    specialty: "Pediatric Surgery",
    category: "PediatricSurgery",
    image: "../home/assets/Dr. Manish Pokhrel.jpeg",
  },
];

const categories = [
  "all",
  "Obstetric & Gynecology",
  "Paediatric",
  "Neuro Medicine",
  "ENT-HNS",
  "Cardiology",
  "Ear",
  "Endocrinology",
  "PediatricSurgery",
];
const doctorsGrid = document.getElementById("doctorsGrid");
const categoriesContainer = document.getElementById("categoriesContainer");
const searchInputDynamic = document.getElementById("searchInput");
let selectedCategory = "all";

function renderCategories() {
  categoriesContainer.innerHTML = categories
    .map(
      (cat) =>
        `<button class="category-btn ${
          selectedCategory === cat ? "active" : ""
        }" data-category="${cat}">${
          cat === "all" ? "All Specialties" : cat
        }</button>`
    )
    .join("");

  document
    .querySelectorAll("#categoriesContainer .category-btn")
    .forEach((btn) => {
      btn.addEventListener("click", () => {
        selectedCategory = btn.dataset.category;
        renderCategories();
        renderDoctors();
      });
    });
}

function renderDoctors() {
  const searchTerm = searchInputDynamic.value.toLowerCase();
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesCategory =
      selectedCategory === "all" || doctor.category === selectedCategory;
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm) ||
      doctor.specialty.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  doctorsGrid.innerHTML = filteredDoctors
    .map(
      (doctor) => `
    <div class="doctor-card" data-category="${doctor.category}">
      <img src="${doctor.image}" alt="${doctor.name}" class="doctor-image">
      <div class="doctor-info">
        <h3 class="doctor-name">${doctor.name}</h3>
        <p class="doctor-specialty">${doctor.specialty}</p>
      </div>
    </div>
  `
    )
    .join("");

  if (filteredDoctors.length === 0) {
    doctorsGrid.innerHTML = "<p class='no-results'>No doctors found.</p>";
  }

  // Re-initialize animation for new cards
  animateOnScroll();
}

searchInputDynamic.addEventListener("input", renderDoctors);

// Initialize doctors section
renderCategories();
renderDoctors();

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
