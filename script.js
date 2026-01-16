// ==================== INITIALIZE LUCIDE ICONS ====================
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
});

// ==================== NAVBAR SCROLL EFFECT ====================
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-dark/80", "backdrop-blur-xl", "py-4");
    navbar.classList.remove("py-6");
  } else {
    navbar.classList.remove("bg-dark/80", "backdrop-blur-xl", "py-4");
    navbar.classList.add("py-6");
  }
});

// ==================== MOBILE MENU TOGGLE ====================
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

// Close mobile menu when clicking on a link
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});

// ==================== SCROLL INDICATOR ====================
const scroller = document.getElementById("scroller");

if (scroller) {
  scroller.addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({
      behavior: "smooth",
    });
  });
}

// ==================== SMOOTH SCROLL FOR ANCHOR LINKS ====================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    if (href === "#" || href === "") {
      e.preventDefault();
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offsetTop = target.offsetTop - 80;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// ==================== PROJECT FILTERING ====================
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const filterValue = this.getAttribute("data-filter");

    // Update active button
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");

    // Filter projects with fade animation
    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");

      if (filterValue === "all" || category === filterValue) {
        card.style.display = "block";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
        }, 10);
      } else {
        card.style.opacity = "0";
        card.style.transform = "scale(0.9)";
        setTimeout(() => {
          card.style.display = "none";
        }, 300);
      }
    });
  });
});

// Set initial state for project cards
projectCards.forEach((card) => {
  card.style.transition = "opacity 0.3s ease, transform 0.3s ease";
});

// ==================== ACTIVE NAVIGATION LINK ====================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function setActiveLink() {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;

    if (
      window.pageYOffset >= sectionTop &&
      window.pageYOffset < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-primary");
    const href = link.getAttribute("href");

    if (href && href.substring(1) === currentSection) {
      link.classList.add("text-primary");
    }
  });
}

window.addEventListener("scroll", setActiveLink);

// ==================== FORM SUBMISSION ====================
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector(".form-submit");
    const originalText = submitBtn.innerHTML;

    // Change button text
    submitBtn.innerHTML = `
      <i data-lucide="check-circle"></i>
      <span>Message Sent!</span>
    `;
    submitBtn.style.background = "linear-gradient(to right, #10b981, #059669)";
    submitBtn.disabled = true;

    // Reinitialize lucide icons
    lucide.createIcons();

    // Reset form
    setTimeout(() => {
      contactForm.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.style.background =
        "linear-gradient(to right, #7c3aed, #38bdf8)";
      submitBtn.disabled = false;
      lucide.createIcons();
    }, 3000);
  });
}

// ==================== CONSOLE MESSAGE ====================
console.log(
  "%c🚀 AW Studio",
  "font-size: 20px; font-weight: bold; color: #38BDF8;"
);
console.log(
  "%cLooking for a developer? Let's connect!",
  "font-size: 14px; color: #7C3AED;"
);
