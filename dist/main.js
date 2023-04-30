// Handle modal window appear and close

const row = document.querySelector(".js-row");
const body = document.querySelector("body");

row.addEventListener("click", (e) => {
  if (e.target.src) {
    const img = e.target.src;
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
        <span class="close">&times;</span>
        <div class="modal-container">
            <img
            src="${img}"
            alt="popup images"
            />
        </div>
    
      `;

    body.appendChild(modal);

    modal.addEventListener("click", (e) => {
      const className = e.target.className;

      if (
        className === "modal" ||
        className === "close" ||
        className === "container"
      ) {
        body.removeChild(modal);
      }
    });
  }
});

// TODO: create pagination
window.addEventListener("resize", () => {
  console.log("RESIZE");
});

// Handle navigation and hamburger menu

const hamburger = document.querySelector(".js-hamburger");
const nav = document.querySelector(".js-nav");

const handleClick = (e) => {
  const tagName = e.target.tagName;
  if (tagName === "A") {
    hamburger.classList.remove("hamburger-close");
    nav.classList.remove("nav-open");
  }
};

hamburger.addEventListener("click", (e) => {
  hamburger.classList.toggle("hamburger-close");
  nav.classList.toggle("nav-open");

  nav.addEventListener("click", handleClick);
});

window.addEventListener("resize", () => {
  const width = window.innerWidth;
  if (width > 767) {
    hamburger.classList.remove("hamburger-close");
    nav.classList.remove("nav-open");

    nav.removeEventListener("click", handleClick);
  }
});

// Handle animation

const startAnimation = (element, animationClass) => {
  const handleAnimation = () => {
    const windowTop = window.innerHeight;
    const elementTop = element.offsetTop;
    const scrollTop = window.scrollY;

    if (windowTop - elementTop + scrollTop > 200) {
      element.classList.add(animationClass);
      console.log("Fire animation");
      window.removeEventListener("scroll", handleAnimation);
    }
  };
  window.addEventListener("scroll", handleAnimation);
};

const aboutImage = document.querySelector(".js-about-image");
const aboutDescription = document.querySelector(".js-description");
const contact = document.querySelector(".js-contact");

startAnimation(contact, "contact-animation");
startAnimation(aboutImage, "image-animation");
startAnimation(aboutDescription, "description-animation");
