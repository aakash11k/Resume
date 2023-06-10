const contactSection = document.querySelector("#contact");

const footer = document.querySelector("footer");
const currentYear = new Date().getFullYear();
footer.innerHTML = `<hr /><center><p>&copy; ${currentYear} Aakash Karthikeyan</p></center><hr />`;

const animateSections = () => {
  const aboutMeSection = document.querySelector("#about-me");
  const personalProjectsSection = document.querySelector("#personal-projects");
  const softSkillsSection = document.querySelector("#soft-skills");
  const hobbiesSection = document.querySelector("#hobbies");
  aboutMeSection.classList.add("float-animation");
  personalProjectsSection.classList.add("float-animation");
  softSkillsSection.classList.add("float-animation");
  hobbiesSection.classList.add("slide-in");
};

animateSections();
