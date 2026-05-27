const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("[data-nav-links]");
const header = document.querySelector("[data-elevate]");
const sectionLinks = document.querySelectorAll(".nav-links a[href^='#']");
const sections = Array.from(sectionLinks)
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

sectionLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    document.body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const setHeaderShadow = () => {
  header?.classList.toggle("scrolled", window.scrollY > 10);
};

const setActiveLink = () => {
  let current = null;

  for (const section of sections) {
    if (section.getBoundingClientRect().top < 180) {
      current = section;
    }
  }

  sectionLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current?.id}`);
  });
};

window.addEventListener("scroll", () => {
  setHeaderShadow();
  setActiveLink();
});

setHeaderShadow();
setActiveLink();

const filterButtons = document.querySelectorAll("[data-filter]");
const publicationItems = document.querySelectorAll(".publication-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    publicationItems.forEach((item) => {
      const shouldShow = filter === "all" || item.dataset.type === filter;
      item.classList.toggle("hidden", !shouldShow);
    });
  });
});

const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get("name") || "";
  const email = formData.get("email") || "";
  const status = formData.get("status") || "Not specified";
  const comments = formData.get("comments") || "";

  const subject = encodeURIComponent(`FAER inquiry from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nStatus: ${status}\n\nComments:\n${comments}`
  );

  window.location.href = `mailto:jhpak1519@kaist.ac.kr?subject=${subject}&body=${body}`;
  formStatus.textContent = "Your email app should open with the inquiry prepared.";
});

const galleryTriggers = document.querySelectorAll("[data-full]");
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCloseButtons = document.querySelectorAll("[data-lightbox-close]");

const closeLightbox = () => {
  if (!lightbox || !lightboxImage) return;

  lightbox.hidden = true;
  document.body.classList.remove("lightbox-open");
};

galleryTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    if (!lightbox || !lightboxImage) return;

    lightboxImage.src = trigger.dataset.full;
    lightboxImage.alt = trigger.dataset.alt || "";
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
  });
});

lightboxCloseButtons.forEach((button) => {
  button.addEventListener("click", closeLightbox);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox && !lightbox.hidden) {
    closeLightbox();
  }
});
