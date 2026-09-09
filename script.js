/**
 * Valley Hospital - Modern Modular JavaScript
 * Component-like data mapping, skeleton loading states & reactive interactivity
 */

// ==========================================
// 1. DATASETS (Mappable Data Sources)
// ==========================================

const valleyHospitalData = {
  // Services Data
  services: [
    {
      id: "obgyn",
      title: "Obstetrics & Gynecology",
      description: "Focuses on women’s reproductive health, covering pregnancy, childbirth, and treatment of female reproductive disorders.",
      icon: "fa-solid fa-person-breastfeeding",
      badge: "Specialized"
    },
    {
      id: "pediatrics",
      title: "Pediatric",
      description: "Dedicated to the health, growth, and development of infants, children, and adolescents, including disease prevention.",
      icon: "fa-solid fa-baby",
      badge: "Care"
    },
    {
      id: "general-medicine",
      title: "General Medicine",
      description: "Prevention, diagnosis, and non-surgical treatment of adult diseases and chronic health conditions.",
      icon: "fa-solid fa-stethoscope",
      badge: "24/7"
    },
    {
      id: "general-surgery",
      title: "General Surgery",
      description: "Diagnosis and surgical treatment of conditions involving abdomen, digestive tract, soft tissues, and other organs.",
      icon: "fa-solid fa-user-doctor",
      badge: "Surgical"
    },
    {
      id: "ent",
      title: "Ear, Nose & Throat (ENT)",
      description: "Diagnosis and treatment of disorders related to the ear, nose, throat, and related head & neck structures.",
      icon: "fa-solid fa-head-side-cough",
      badge: "Clinical"
    },
    {
      id: "menopause",
      title: "Menopausal Clinic",
      description: "Specialized healthcare managing symptoms, hormonal changes, and health risks to enhance women's quality of life.",
      icon: "fa-solid fa-spa",
      badge: "Wellness"
    },
    {
      id: "infertility",
      title: "Infertility Clinic",
      description: "Comprehensive fertility diagnosis and assisted reproductive medical treatments for couples and individuals.",
      icon: "fa-solid fa-heart-pulse",
      badge: "Advanced"
    },
    {
      id: "pathology",
      title: "24h Pathology",
      description: "High-precision laboratory diagnostics examining bodily fluids and tissues with round-the-clock emergency support.",
      icon: "fa-solid fa-microscope",
      badge: "24 Hours"
    },
    {
      id: "vaccinations",
      title: "Vaccination Center",
      description: "Complete immunization services offering BCG, HPV, and comprehensive pediatric and adult vaccines.",
      icon: "fa-solid fa-syringe",
      badge: "Immunization"
    },
    {
      id: "neurology",
      title: "Neuro Medicine",
      description: "Advanced diagnosis and management of disorders affecting the brain, spinal cord, and central nervous system.",
      icon: "fa-solid fa-brain",
      badge: "Specialized"
    },
    {
      id: "orthopedics",
      title: "Orthopedics",
      description: "Diagnosis, treatment, and rehabilitation of disorders of bones, joints, ligaments, spine, and muscles.",
      icon: "fa-solid fa-bone",
      badge: "Care"
    },
    {
      id: "dermatology",
      title: "Dermatology",
      description: "Comprehensive medical and aesthetic care for skin, hair, and nail conditions with modern clinical equipment.",
      icon: "fa-solid fa-hand-dots",
      badge: "Clinical"
    },  {
      id: "Internal Medicine",
      title: "Internal Medicine",
      description: "Diagnosis and treatment of a wide range of adult diseases and chronic health conditions, providing primary medical care.",
      icon: "fa-solid fa-hand-dots",
      badge: "Clinical"
    }
  ],

  // Hospital Leadership & Team
  team: {
    leader: {
      name: "Rajan Singh Bhandari",
      role: "Chairman",
      image: "/assets/rajansingBhandari.jpeg",
      highlight: "Hospital Leadership",
      description: "Leading Valley Hospital's vision of compassionate, accessible, and high-quality healthcare for all."
    },
    members: [
      {
        name: "Binod Singh Bhandari",
        role: "Chief Executive, Planning, Institutional Development & Risk Management",
        image: "/assets/binodsing.jpeg",
        tag: "Executive"
      },
      {
        name: "Bandana Pandey",
        role: "Head of Human Resources (HR)",
        image: "/assets/bandana.jpeg",
        tag: "Administration"
      },
      {
        name: "Kumar Raj Pant",
        role: "Chief Administrative Officer (CAO)",
        image: "/assets/kumar.jpeg",
        tag: "General Admin"
      },
      {
        name: "Sharmila Maharjan",
        role: "Nursing Director / Head",
        image: "/assets/sarmila.png",
        tag: "Nursing Care"
      },
      {
        name: "Dr. Prekshya Khatri",
        role: "Medical Officer - Medicine",
        image: "/assets/Dr. Prekshya Khatri.jpeg",
        tag: "Clinical Team"
      }
    ]
  },

  // The Pioneer Team
  pioneerTeam: [
    {
      name: "Prof. Dr. Mukunda Raj Joshi",
      image: "/assets/mukunda.jpeg",
      role: "Director / Senior Consultant",
      category: "Pioneer"
    },
    {
      name: "Dr. Binod Prasad Aryal",
      image: "/assets/binod.jpeg",
      role: "Senior Consultant",
      category: "Pioneer"
    },
    {
      name: "Achyut Nath Adhikari",
      image: "/assets/achyut.jpeg",
      role: "Pioneer Executive",
      category: "Pioneer"
    },
    {
      name: "Dr. Manish Pokhrel",
      image: "/assets/drmanish.jpeg",
      role: "Consultant Surgeon",
      category: "Pioneer"
    },
    {
      name: "Prof. Dr. Chanda Karki Bhandari",
      image: "/assets/Chandakarki.jpeg",
      role: "Director / Senior OB-GYN",
      highlight: true,
      category: "Pioneer Pillar"
    },
    {
      name: "Kumar Raj Pant",
      image: "/assets/kumar.jpeg",
      role: "CAO / Administration",
      category: "Pioneer"
    },
    {
      name: "Dr. Tekendra Karki",
      image: "/assets/teka.jpeg",
      role: "Senior Medical Consultant",
      category: "Pioneer"
    },
    {
      name: "Niroj Chitrakar",
      image: "/assets/niro.jpeg",
      role: "Management Consultant",
      category: "Pioneer"
    },
    {
      name: "Ranjana Chhetri",
      image: "/assets/ranjana.jpeg",
      role: "Administration",
      category: "Pioneer"
    },
    {
      name: "Top Bahadur Basnet",
      image: "/assets/top.jpeg",
      role: "Executive Member",
      category: "Pioneer"
    },
    {
      name: "Dr. Anwesh Bhatta",
      image: "/assets/anwesh.jpeg",
      role: "Medical Consultant",
      category: "Pioneer"
    },
    {
      name: "Bandana Pandey",
      image: "/assets/bandana.jpeg",
      role: "HR Executive",
      category: "Pioneer"
    }
  ],

  // Our Medical Experts (Doctors)
  doctors: [
    {
      id: "doc-1",
      name: "Prof. Dr. Saraswati M. Padhye",
      specialty: "Obstetrician & Gynecologist",
      category: "Obstetric & Gynecology",
      image: "/assets/Prof. Dr. Saraswati M Padhye.jpeg",
      qualification: "Senior Consultant",
      experience: "25+ Years Experience"
    },
    {
      id: "doc-2",
      name: "Dr. Sushila Shrestha",
      specialty: "Obstetrician & Gynecologist",
      category: "Obstetric & Gynecology",
      image: "/assets/Dr. Sushila Shrestha.jpeg",
      qualification: "Senior Consultant",
      experience: "20+ Years Experience"
    },
    {
      id: "doc-3",
      name: "Prof. Dr. Chanda Karki (Bhandari)",
      specialty: "Obstetrician & Gynecologist",
      category: "Obstetric & Gynecology",
      image: "/assets/aboutus2.png",
      qualification: "Director & Senior Consultant",
      experience: "25+ Years Experience"
    },
    {
      id: "doc-4",
      name: "Dr. Bina Basnyat",
      specialty: "Obstetrician & Gynecologist",
      category: "Obstetric & Gynecology",
      image: "/assets/bina-basyanat.png",
      qualification: "Consultant",
      experience: "15+ Years Experience"
    },
    {
      id: "doc-5",
      name: "Dr. Bimala Malla",
      specialty: "Obstetrician & Gynecologist",
      category: "Obstetric & Gynecology",
      image: "/assets/Dr. Bimala Malla.jpeg",
      qualification: "Consultant",
      experience: "12+ Years Experience"
    },
    {
      id: "doc-6",
      name: "Dr. Sudha Thapa",
      specialty: "Obstetrician & Gynecologist",
      category: "Obstetric & Gynecology",
      image: "/assets/Dr. Sudha Thapa.jpeg",
      qualification: "Consultant",
      experience: "14+ Years Experience"
    },
    {
      id: "doc-7",
      name: "Dr. Amila Shrestha",
      specialty: "Obstetrician & Gynecologist",
      category: "Obstetric & Gynecology",
      image: "/assets/Dr. Amila Shrestha.jpeg",
      qualification: "Consultant",
      experience: "10+ Years Experience"
    },
    {
      id: "doc-8",
      name: "Dr. Rumina Malla",
      specialty: "Obstetrician & Gynecologist",
      category: "Obstetric & Gynecology",
      image: "/assets/Dr. Rumina Malla.jpeg",
      qualification: "Consultant",
      experience: "11+ Years Experience"
    },
    {
      id: "doc-9",
      name: "Dr. Rajlaxmi Sharma",
      specialty: "Obstetrician & Gynecologist",
      category: "Obstetric & Gynecology",
      image: "/assets/rajlaxmisharma.png",
      qualification: "Consultant",
      experience: "10+ Years Experience"
    },
    {
      id: "doc-10",
      name: "Dr. Noora Pradhan",
      specialty: "Obstetrician & Gynecologist",
      category: "Obstetric & Gynecology",
      image: "/assets/Noora-Pradhan.jpg",
      qualification: "Consultant",
      experience: "9+ Years Experience"
    },
    {
      id: "doc-11",
      name: "Dr. Prekshya Khatri",
      specialty: "Obstetrician & Gynecologist",
      category: "Obstetric & Gynecology",
      image: "/assets/Dr. Prekshya Khatri.jpeg",
      qualification: "Medical Specialist",
      experience: "8+ Years Experience"
    },
    {
      id: "doc-12",
      name: "Dr. Bibhuti Shahi",
      specialty: "Obstetrician & Gynecologist",
      category: "Obstetric & Gynecology",
      image: "/assets/Dr. Bibhuti Shahi.jpeg",
      qualification: "Consultant",
      experience: "8+ Years Experience"
    },
    {
      id: "doc-13",
      name: "Dr. Shailendra B. Karmacharya",
      specialty: "Senior Pediatrician",
      category: "Paediatric",
      image: "/assets/sailandra.jpg",
      qualification: "Pediatric Specialist",
      experience: "18+ Years Experience"
    },
    {
      id: "doc-14",
      name: "Dr. Deepa Khanal",
      specialty: "Pediatrician & Child Care",
      category: "Paediatric",
      image: "/assets/Dr. Deepa Khanal.jpeg",
      qualification: "Child Health Specialist",
      experience: "12+ Years Experience"
    },
    {
      id: "doc-15",
      name: "Dr. Dipesh Shakya",
      specialty: "Neurologist & Neuro-Physician",
      category: "Neuro Medicine",
      image: "/assets/dipesh.jpg",
      qualification: "DM Neurology",
      experience: "15+ Years Experience"
    },
    {
      id: "doc-16",
      name: "Dr. Sandeep Kumar Jaiswal",
      specialty: "Neurologist",
      category: "Neuro Medicine",
      image: "/assets/Dr Sandeep Jaiswal.jpeg",
      qualification: "Neuro Specialist",
      experience: "10+ Years Experience"
    },
    {
      id: "doc-17",
      name: "Prof. Dr. Mukunda Raj Joshi",
      specialty: "Senior General & Laparoscopic Surgeon",
      category: "ENT-HNS",
      image: "/assets/Prof. Dr. Mukunda Raj Joshi.jpeg",
      qualification: "MS General Surgery",
      experience: "25+ Years Experience"
    },
    {
      id: "doc-18",
      name: "Dr. Manish Gautam",
      specialty: "General & Gastrointestinal Surgeon",
      category: "ENT-HNS",
      image: "/assets/Dr. Manish Gautam.jpeg",
      qualification: "Consultant Surgeon",
      experience: "12+ Years Experience"
    },
    {
      id: "doc-19",
      name: "Dr. Sabina Bhandari",
      specialty: "Dermatologist & Cosmetologist",
      category: "Cardiology",
      image: "/assets/Dr. Sabina Bhandari.jpeg",
      qualification: "MD Dermatology",
      experience: "9+ Years Experience"
    },
    {
      id: "doc-20",
      name: "Dr. Deep Sijapati",
      specialty: "ENT Head & Neck Surgeon",
      category: "Ear",
      image: "/assets/Dr. Deep Sijapati.jpeg",
      qualification: "MS - ENT",
      experience: "14+ Years Experience"
    },
    {
      id: "doc-21",
      name: "Dr. Deepak Poudel",
      specialty: "Endocrinologist & Diabetes Specialist",
      category: "Endocrinology",
      image: "/assets/Dr D.jpeg",
      qualification: "Endocrine Specialist",
      experience: "11+ Years Experience"
    },
    {
      id: "doc-22",
      name: "Dr. Manish Pokhrel",
      specialty: "Pediatric Surgeon",
      category: "PediatricSurgery",
      image: "/assets/manish.jpeg",
      qualification: "MCh Pediatric Surgery",
      experience: "12+ Years Experience"
    },
    {
      id: "doc-23",
      name: "Dr. Dhananjaya Singh",
      specialty: "Pediatric Surgeon",
      category: "PediatricSurgery",
      image: "/assets/dhananjaya.jpg",
      qualification: "MCh Pediatric Surgery",
      experience: "12+ Years Experience"
    },
       {
      id: "doc-24",
      name: "Dr. Anamika Singh",
      specialty: "Internal Medicine",
      category: "Internal Medicine",
      image: "/assets/anamika.jpg",
      qualification: "MCh Pediatric Surgery",
      experience: "12+ Years Experience"
    },
       {
      id: "doc-25",
      name: "Dr. Kushal Shah",
      specialty: "Orthopedic  Surgeon",
      category: "Orthopedic  Surgery",
      image: "/assets/kushal.jpg",
      qualification: "MCh Orthopedic Surgery",
      experience: "12+ Years Experience"
    },
       {
      id: "doc-26",
      name: "Dr. Prabal Pradhan",
      specialty: "Orthopedic  Surgeon",
      category: "Orthopedic and Spine Surgery",
      image: "/assets/prabal.jpg",
      qualification: "MCh Orthopedic Surgery",
      experience: "12+ Years Experience"
    }, {
      id: "doc-26",
      name: "Dr. Suraj Shakhya",
      specialty: "Orthopedic  Surgeon",
      category: "Orthopedic and Spine Surgery",
      image: "/assets/suraj.jpg",
      qualification: "MCh Orthopedic Surgery",
      experience: "12+ Years Experience"
    }
    , {
      id: "doc-27",
      name: "Dr. Chanda Neupane",
      specialty: "Internal Medicine",
      category: "Internal Medicine",
      image: "/assets/chanda.jpg",
      qualification: "MCh Orthopedic Surgery",
      experience: "12+ Years Experience"
    }
  ],

  // Health Packages
  packages: [
    {
      id: "pkg-premium",
      name: "PREMIUM HEALTH PACKAGE",
      badge: "Popular Choice",
      originalPrice: "Rs. 7,660/-",
      discountedPrice: "Rs. 6,500/-",
      savings: "Save 15%",
      testsGroupA: [
        "CBC (HB, TC, DC, Platelets)",
        "Triglycerides",
        "Uric Acid",
        "Cholesterol Total & HDL / LDL",
        "RBS (Random Blood Sugar)",
        "SGPT & SGOT (Liver Profile)",
        "TFT (Thyroid Function Test)",
        "CRP Quantitative",
        "Albumin (Serum)"
      ],
      testsGroupB: [
        "Alkaline Phosphatase",
        "Bilirubin (Total & Direct)",
        "Urea & Creatinine (Kidney Profile)",
        "Sodium & Potassium (Electrolytes)",
        "Stool R/E & Urine R/E",
        "Chest X-Ray",
        "ECG (Heart Checkup)",
        "USG (Abdomen / Pelvis)"
      ]
    },
    {
      id: "pkg-super-premium",
      name: "SUPER PREMIUM HEALTH PACKAGE",
      badge: "Comprehensive",
      featured: true,
      originalPrice: "Rs. 10,610/-",
      discountedPrice: "Rs. 9,200/-",
      savings: "Save 14%",
      testsGroupA: [
        "Complete Blood Count (CBC)",
        "Blood Sugar (Fasting & PP)",
        "Uric Acid & Lipid Profile",
        "Cholesterol Total & HDL",
        "SGPT & SGOT",
        "Urea & Creatinine",
        "Complete Urine Routine"
      ],
      testsGroupB: [
        "Chest X-Ray Digital",
        "ECG Electrocardiogram",
        "Specialist Doctor Consultation",
        "BMI & Vital Calculation",
        "Personalized Diet Counseling",
        "Comprehensive Health Risk Assessment"
      ]
    },
    {
      id: "pkg-womens",
      name: "WOMEN'S HEALTH PACKAGE",
      badge: "Women's Wellness",
      originalPrice: "Rs. 4,625/-",
      discountedPrice: "Rs. 4,185/-",
      savings: "Save 10%",
      testsGroupA: [
        "CBC (HB, TC, DC, Platelets)",
        "RBS (Blood Glucose)",
        "TFT (Thyroid Profile)",
        "Serum Creatinine"
      ],
      testsGroupB: [
        "LBC (Liquid Based Cytology / Pap Smear)",
        "Urine Routine Examination",
        "USG (Abdomen & Pelvic Ultrasound)",
        "Gynecologist Consultation"
      ]
    }
  ],

  // Departments
  departments: [
    {
      name: "OPD (Outpatient Department)",
      description: "Fast-track clinical checkups, specialist consultations, and treatments without overnight hospital admission.",
      icon: "fa-solid fa-notes-medical"
    },
    {
      name: "OBS & Gynecology",
      description: "Dedicated maternity wings, high-risk pregnancy management, fetal monitoring, and female wellness care.",
      icon: "fa-solid fa-person-breastfeeding"
    },
    {
      name: "Ophthalmology (Eye Care)",
      description: "Advanced vision assessment, eye disorder treatments, and preventive ocular healthcare services.",
      icon: "fa-solid fa-eye"
    },
    {
      name: "Dermatology (Skin & Hair)",
      description: "Targeted clinical treatments for skin, hair, and nail conditions alongside cosmetic dermatology.",
      icon: "fa-solid fa-shield-virus"
    },
    {
      name: "Cosmetic Gynecology",
      description: "Pioneering aesthetic, restorative, and functional intimate health procedures for female wellness.",
      icon: "fa-solid fa-wand-magic-sparkles"
    },
    {
      name: "Pediatrics & Neonatology",
      description: "Complete compassionate healthcare, growth tracking, and immunizations for infants, kids, and teens.",
      icon: "fa-solid fa-baby-carriage"
    },
    {
      name: "General Medicine",
      description: "Holistic diagnosis and comprehensive medical management for multi-system adult conditions.",
      icon: "fa-solid fa-stethoscope"
    },
    {
      name: "Cardiology",
      description: "Non-invasive cardiovascular evaluations, digital ECGs, risk monitoring, and heart health counseling.",
      icon: "fa-solid fa-heart-pulse"
    },
    {
      name: "Neurology",
      description: "Expert diagnostic workup and therapeutic management for nervous system, spinal, and brain disorders.",
      icon: "fa-solid fa-brain"
    }
  ]
};

// ==========================================
// 2. MODULAR RENDERING FUNCTIONS (.map())
// ==========================================

// Helper: Resolve image paths reliably
function resolveImgPath(path) {
  if (!path) return '../assets/logo1.png';
  if (path.startsWith('http') || path.startsWith('data:')) return path;
  if (path.startsWith('../')) return path;
  if (path.startsWith('/assets/')) return '..' + path;
  if (path.startsWith('assets/')) return '../' + path;
  return '../' + path;
}

// Helper: Skeleton Card Template Generator
function getSkeletonCardsHTML(count = 8) {
  return Array.from({ length: count })
    .map(
      () => `
      <div class="doctor-card skeleton-card" aria-hidden="true">
        <div class="skeleton-image skeleton-pulse"></div>
        <div class="doctor-info">
          <div class="skeleton-line skeleton-line-title skeleton-pulse" style="margin: 0 auto 6px auto;"></div>
          <div class="skeleton-line skeleton-line-subtitle skeleton-pulse" style="margin: 0 auto;"></div>
        </div>
      </div>
    `
    )
    .join("");
}

// Render Services Grid
function renderServices() {
  const container = document.getElementById("servicesGrid");
  if (!container) return;

  container.innerHTML = valleyHospitalData.services
    .map(
      (item) => `
      <div class="service-card" data-service-id="${item.id}">
        <div class="service-badge-top">${item.badge}</div>
        <div class="service-icon">
          <i class="${item.icon}"></i>
        </div>
        <h3 class="service-name">${item.title}</h3>
        <p class="service-description">${item.description}</p>
        <button class="service-action-btn" onclick="openAppointmentWithContext('Service: ${item.title}')">
          Book Consultation <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    `
    )
    .join("");
}

// Render Valley Hospital Team (Leader + Members)
function renderValleyTeam() {
  const leaderContainer = document.getElementById("teamLeaderContainer");
  const gridContainer = document.getElementById("teamGridContainer");

  if (leaderContainer) {
    const leader = valleyHospitalData.team.leader;
    leaderContainer.innerHTML = `
      <div class="leader-wrapper">
        <div class="leader-image-card">
          <img src="${resolveImgPath(leader.image)}" alt="${leader.name}" loading="lazy" onerror="this.src='../assets/logo1.png'" />
          <div class="leader-badge"><i class="fa-solid fa-award"></i> ${leader.highlight}</div>
        </div>
        <div class="leader-content">
          <span class="leader-tag">${leader.role}</span>
          <h3 class="leader-name">${leader.name}</h3>
          <p class="leader-desc">${leader.description}</p>
          <div class="leader-stats">
            <div><strong>30+</strong> Years Legacy</div>
            <div><strong>Trusted</strong> Kathmandu Hospital</div>
          </div>
        </div>
      </div>
    `;
  }

  if (gridContainer) {
    gridContainer.innerHTML = valleyHospitalData.team.members
      .map(
        (member) => `
        <div class="team-member-card">
          <div class="member-image-box">
            <img src="${resolveImgPath(member.image)}" alt="${member.name}" loading="lazy" onerror="this.src='../assets/logo1.png'" />
            <span class="member-tag">${member.tag}</span>
          </div>
          <div class="member-info">
            <h3 class="member-name">${member.name}</h3>
            <p class="member-role">${member.role}</p>
          </div>
        </div>
      `
      )
      .join("");
  }
}

// Render The Pioneer Team (Mapped Hex/Grid Cards)
function renderPioneerTeam() {
  const container = document.getElementById("pioneerTeamGrid");
  if (!container) return;

  container.innerHTML = valleyHospitalData.pioneerTeam
    .map(
      (pioneer) => `
      <div class="pioneer-card ${pioneer.highlight ? "highlight-pioneer" : ""}">
        <div class="pioneer-avatar-box">
          <img src="${resolveImgPath(pioneer.image)}" alt="${pioneer.name}" loading="lazy" onerror="this.src='../assets/logo1.png'" />
          ${pioneer.highlight ? '<span class="pioneer-pill"><i class="fa-solid fa-star"></i> Pioneer Pillar</span>' : ""}
        </div>
        <div class="pioneer-details">
          <h4 class="pioneer-name">${pioneer.name}</h4>
          <span class="pioneer-role">${pioneer.role}</span>
        </div>
      </div>
    `
    )
    .join("");
}

// Render Doctors with Loading State Support
let doctorFilterTimeout = null;
function renderDoctors(selectedCategory = "all", searchQuery = "", isInitial = false) {
  const container = document.getElementById("doctorsGrid");
  if (!container) return;

  // Render Skeleton Shimmer if requested or switching categories
  container.innerHTML = getSkeletonCardsHTML(6);

  if (doctorFilterTimeout) clearTimeout(doctorFilterTimeout);

  const delay = isInitial ? 0 : 180; // short snappy feel

  doctorFilterTimeout = setTimeout(() => {
    const query = searchQuery.trim().toLowerCase();
    const selCat = selectedCategory.trim().toLowerCase();

    const filtered = valleyHospitalData.doctors.filter((doc) => {
      const docCat = (doc.category || "").toLowerCase().trim();
      const docSpec = (doc.specialty || "").toLowerCase().trim();

      let matchCategory = selCat === "all";
      if (!matchCategory) {
        if (selCat === "internal medicine") {
          matchCategory = docCat.includes("internal medicine") || docSpec.includes("internal medicine");
        } else if (selCat === "orthopedics" || selCat === "orthopedic") {
          matchCategory = docCat.includes("orthopedic") || docSpec.includes("orthopedic");
        } else if (selCat === "pediatricsurgery") {
          matchCategory = docCat.includes("pediatricsurgery") || docSpec.includes("pediatric surg");
        } else if (selCat === "paediatric" || selCat === "pediatric") {
          matchCategory = (docCat.includes("paediatric") || docCat.includes("pediatric")) && !docCat.includes("pediatricsurgery") && !docSpec.includes("pediatric surg");
        } else if (selCat === "cardiology" || selCat === "dermatology") {
          matchCategory = docCat.includes("cardiology") || docCat.includes("dermatology") || docSpec.includes("dermatolog");
        } else if (selCat === "ent-hns" || selCat === "general surgery") {
          matchCategory = docCat.includes("ent-hns") || docCat.includes("general surgery") || docSpec.includes("general surg") || docSpec.includes("laparoscopic");
        } else if (selCat === "ear" || selCat.includes("ear")) {
          matchCategory = docCat === "ear" || docSpec.includes("ent") || docSpec.includes("ear");
        } else {
          matchCategory = docCat === selCat || docSpec.includes(selCat);
        }
      }

      const matchSearch =
        !query ||
        doc.name.toLowerCase().includes(query) ||
        docSpec.includes(query) ||
        docCat.includes(query);

      return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="no-doctors-found">
          <div class="no-results-icon"><i class="fa-solid fa-user-doctor"></i></div>
          <h3>No Medical Specialists Found</h3>
          <p>We couldn't find any specialist matching "<strong>${escapeHTML(searchQuery)}</strong>" in the selected category.</p>
          <button class="btn btn-secondary" onclick="resetDoctorFilters()">Reset All Filters</button>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered
      .map(
        (doc) => `
        <div class="doctor-card" data-category="${doc.category}">
          <div class="doctor-image-wrapper">
            <img src="${resolveImgPath(doc.image)}" alt="${doc.name}" class="doctor-image" loading="lazy" onerror="this.src='../assets/logo1.png'" />
            <span class="doctor-badge">${doc.category}</span>
          </div>
          <div class="doctor-info">
            <h3 class="doctor-name">${doc.name}</h3>
            <p class="doctor-specialty">${doc.specialty}</p>
                      </div>
        </div>
      `
      )
      .join("");
  }, delay);
}

// Render Health Packages
function renderPackages() {
  const container = document.getElementById("packagesContainer");
  if (!container) return;

  container.innerHTML = valleyHospitalData.packages
    .map(
      (pkg) => `
      <div class="package-card ${pkg.featured ? "featured-package" : ""}">
        ${pkg.featured ? '<div class="featured-ribbon"><i class="fa-solid fa-crown"></i> MOST RECOMMENDED</div>' : ""}
        <div class="package-header-box">
          <span class="pkg-category-badge">${pkg.badge}</span>
          <h3 class="package-title">${pkg.name}</h3>
        </div>

        <div class="package-pricing-card">
          <div class="price-row actual">
            <span>Regular Price:</span>
            <span class="original-price">${pkg.originalPrice}</span>
          </div>
          <div class="price-row discounted">
            <span>Special Offer:</span>
            <span class="discounted-price">${pkg.discountedPrice}</span>
          </div>
          <div class="savings-pill">${pkg.savings}</div>
        </div>

        <h4 class="package-includes-title"><i class="fa-solid fa-clipboard-check"></i> Package Inclusions</h4>
        
        <div class="package-details-grid">
          <ul class="package-test-list">
            ${pkg.testsGroupA.map((t) => `<li><i class="fa-solid fa-check"></i> ${t}</li>`).join("")}
          </ul>
          <ul class="package-test-list">
            ${pkg.testsGroupB.map((t) => `<li><i class="fa-solid fa-check"></i> ${t}</li>`).join("")}
          </ul>
        </div>

        <div class="package-footer-cta">
          <button class="btn btn-package-book" onclick="openAppointmentWithContext('Package: ${pkg.name}')">
            Book This Package <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `
    )
    .join("");
}

// Render Departments
function renderDepartments() {
  const container = document.getElementById("departmentsGrid");
  if (!container) return;

  container.innerHTML = valleyHospitalData.departments
    .map(
      (dept) => `
      <div class="department-card">
        <div class="department-icon-wrap">
          <i class="${dept.icon}"></i>
        </div>
        <h3 class="department-name">${dept.name}</h3>
        <p class="department-description">${dept.description}</p>
        <div class="department-indicator"></div>
      </div>
    `
    )
    .join("");
}

// Helper: Escape user strings in HTML
function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, (tag) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  }[tag] || tag));
}

// ==========================================
// 3. DOCTOR FILTER & SEARCH CONTROLS
// ==========================================

function initDoctorFilters() {
  const categoryBtns = document.querySelectorAll(".category-btn");
  const searchInput = document.getElementById("searchInput");

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      categoryBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.dataset.category || "all";
      const searchQuery = searchInput ? searchInput.value : "";
      renderDoctors(category, searchQuery);
    });
  });

  if (searchInput) {
    let searchDebounce = null;
    searchInput.addEventListener("input", (e) => {
      clearTimeout(searchDebounce);
      searchDebounce = setTimeout(() => {
        const activeBtn = document.querySelector(".category-btn.active");
        const category = activeBtn ? activeBtn.dataset.category : "all";
        renderDoctors(category, e.target.value);
      }, 150);
    });
  }
}

function resetDoctorFilters() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";

  const categoryBtns = document.querySelectorAll(".category-btn");
  categoryBtns.forEach((b) => b.classList.remove("active"));
  const allBtn = document.querySelector('.category-btn[data-category="all"]');
  if (allBtn) allBtn.classList.add("active");

  renderDoctors("all", "");
}

// ==========================================
// 4. MODAL & APPOINTMENT FLOW
// ==========================================

const modalState = {
  overlay: null,
  form: null,
  contextInput: null,
  submitBtn: null
};

function initAppointmentModal() {
  modalState.overlay = document.getElementById("dialogOverlay");
  modalState.form = document.getElementById("appointmentForm");
  modalState.submitBtn = document.getElementById("appointmentSubmitBtn");

  const openBtns = document.querySelectorAll(".appointment-btn, #openDialogBtn");
  const closeBtn = document.getElementById("closeDialogBtn");

  openBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  if (modalState.overlay) {
    modalState.overlay.addEventListener("click", (e) => {
      if (e.target === modalState.overlay) closeModal();
    });
  }

  // Keyboard escape key to close
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalState.overlay && modalState.overlay.classList.contains("active")) {
      closeModal();
    }
  });

  // Handle Form Submission
  if (modalState.form) {
    modalState.form.addEventListener("submit", handleAppointmentSubmit);
  }
}

function openModal(prefillReason = "") {
  if (!modalState.overlay) return;
  modalState.overlay.classList.add("active");
  document.body.style.overflow = "hidden"; // prevent background scroll

  const reasonField = document.getElementById("appointmentReason");
  if (reasonField && prefillReason) {
    reasonField.value = prefillReason;
  }
}

function closeModal() {
  if (!modalState.overlay) return;
  modalState.overlay.classList.remove("active");
  document.body.style.overflow = "";
}

function openAppointmentWithDoctor(docName, specialty) {
  openModal(`Appointment with ${docName} (${specialty})`);
}

function openAppointmentWithContext(context) {
  openModal(context);
}

// Handle Form Submission with Loading and Success Feedback
function handleAppointmentSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("name")?.value.trim();
  const email = document.getElementById("email")?.value.trim();
  const phone = document.getElementById("phone")?.value.trim();
  const reason = document.getElementById("appointmentReason")?.value.trim() || "General Consultation";
  const date = document.getElementById("appointmentDate")?.value || "Earliest Available";

  const submitBtn = document.getElementById("appointmentSubmitBtn");
  const originalBtnHTML = submitBtn ? submitBtn.innerHTML : "Book Appointment";

  // Loading state
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Booking Appointment...';
  }

  // Check if emailjs is available
  if (window.emailjs && typeof emailjs.send === "function") {
    const PUBLIC_KEY = "p9XUkJJF3-8x3P5Yw";
    const SERVICE_ID = "service_d5lwgmc";
    const TEMPLATE_ID = "template_kuxcqkp";

    emailjs.init(PUBLIC_KEY);

    const templateParams = {
      user_name: name,
      user_email: email,
      user_phone: phone,
      message: `Requested: ${reason} | Date: ${date}`
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then(() => {
        showToast("Success! Your appointment request has been submitted. Our team will contact you shortly.", "success");
        modalState.form.reset();
        closeModal();
      })
      .catch((err) => {
        console.warn("EmailJS warning:", err);
        // Fallback smooth confirmation for user
        showToast("Appointment request received! We will call you back to confirm.", "info");
        modalState.form.reset();
        closeModal();
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHTML;
        }
      });
  } else {
    // Simulated smooth network request
    setTimeout(() => {
      showToast(`Thank you, ${name}! Your appointment request has been scheduled.`, "success");
      modalState.form.reset();
      closeModal();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;
      }
    }, 800);
  }
}

// Toast notification helper
function showToast(message, type = "success") {
  let toast = document.getElementById("globalToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "globalToast";
    toast.className = "global-toast";
    document.body.appendChild(toast);
  }

  const icon = type === "success" ? "fa-circle-check" : "fa-circle-info";
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
  toast.className = `global-toast show toast-${type}`;

  setTimeout(() => {
    toast.className = "global-toast";
  }, 4000);
}

// ==========================================
// 5. NAVBAR, SLIDER & SCROLL INTERACTIONS
// ==========================================

function initNavigation() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");
  const header = document.querySelector(".header");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("active");
      hamburger.setAttribute("aria-expanded", isOpen);
      hamburger.innerHTML = isOpen
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });
  }

  // Active section spy on scroll
  window.addEventListener("scroll", () => {
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    }

    // Highlight active link
    const sections = document.querySelectorAll("section[id], footer[id]");
    const scrollY = window.pageYOffset + 140;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });

  // Smooth scroll and auto-close mobile nav
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerHeight = header ? header.offsetHeight : 70;
          const targetPos = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight + 5;
          window.scrollTo({ top: targetPos, behavior: "smooth" });
        }
      }
      if (navMenu && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        if (hamburger) hamburger.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  });
}

// Hero Carousel
function initHeroSlider() {
  const slides = document.querySelectorAll(".slides img, .hero-slide");
  if (!slides.length) return;

  let currentSlide = 0;
  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle("active", i === currentSlide));
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  setInterval(nextSlide, 4000);
}

// ==========================================
// 6. INITIALIZATION ENTRY POINT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // Render all component data mappings
  renderServices();
  renderValleyTeam();
  renderPioneerTeam();
  renderDoctors("all", "", true);
  renderPackages();
  renderDepartments();

  // Initialize interactive features
  initDoctorFilters();
  initAppointmentModal();
  initNavigation();
  initHeroSlider();
});
