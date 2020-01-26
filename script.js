langChange = () => {
  const btnPL = document.querySelector(".lang-pl");
  const btnEN = document.querySelector(".lang-en");

  let lang = {
    skills: document.querySelector(".skills-h2"),
    infoH2: document.querySelector(".info-h2"),
    infoP: document.querySelector(".info-p"),
    infoResume: document.querySelector(".info-resume"),
    infoContact: document.querySelector(".info-contact"),
    projectsH2: document.querySelector(".projects-h2"),
    projectH3: document.querySelectorAll(".projects-h3"),
    projectDesc: document.querySelector(".proj-desc")
  };

  btnPL.addEventListener("click", function() {
    btnPL.classList.add("lang-clicked");
    btnEN.classList.remove("lang-clicked");

    lang.skills.innerHTML = "Umiejętności";
    lang.infoH2.innerHTML = "Programista Font End";
    lang.infoP.innerHTML =
      "Nazywam się Piotr Szulc, jestem programistą Front End który uwielbia programować, uczyć się i tworzyć strony internetowe.";
    lang.infoResume.innerHTML = "CV";
    lang.infoContact.innerHTML = "Kontakt";
    lang.projectsH2.innerHTML = "Projekty";
  });

  btnEN.addEventListener("click", function() {
    btnPL.classList.remove("lang-clicked");
    btnEN.classList.add("lang-clicked");

    lang.skills.innerHTML = "Skills";
    lang.infoH2.innerHTML = "Front End Developer";
    lang.infoP.innerHTML =
      "My name is Piotr Szulc Im creative Front End Developer who loves code, learn and create new things especially websites.";
    lang.infoResume.innerHTML = "Resume";
    lang.infoContact.innerHTML = "Contact";
    lang.projectsH2.innerHTML = "Projects";
  });

  for (var key of Object.keys(lang)) {
    console.log(document.querySelector("." + key));
  }
};
langChange();

logoZoom = () => {
  const logoLower = document.querySelector(".logo");
  //const logoUpper = document.querySelector(".logo-upper");
  const logoUpper = document.querySelector(".logo-upper");

  document.addEventListener("scroll", function() {
    let scrollDistance = window.pageYOffset;
    let zoom = scrollDistance / 1500;

    if (zoom > 0) {
    }
  });
};

logoZoom();
