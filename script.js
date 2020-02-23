const jsContainer = document.querySelector("#jsContainer");

const data = [
    {
      name: "LiveChat",
      shortDesc: "App",
      liveDemo: "http://jsmessenger.surge.sh/",
      githubLink: "https://github.com/MateuszRostkowski/RockPaperScissors",
      moreInfo:
        "Live chat made in vanilla javascript.",
      moreInfoPhoto: "/assets/Messenger.png"
    },
    {
      name: "RockPaperScissors",
      shortDesc: "Game in JS",
      liveDemo: "",
      githubLink: "https://github.com/MateuszRostkowski/RockPaperScissors",
      moreInfo:
        "This is a simple RockPaperScissors game made in vanilla Javascript",
      moreInfoPhoto: "/assets/RockPaper.png"
    },
    {
      name: "Police and Thives",
      shortDesc: "Game in JS",
      liveDemo: "https://police-and-thives.netlify.com/",
      githubLink: "https://github.com/MateuszRostkowski/PoliceAndThives",
      moreInfo: "Simple Game made in vanilla javascript.",
      moreInfoPhoto: "/assets/PoliceAndThives.png"
    },
    {
      name: "Concerte",
      shortDesc: "Team Project",
      liveDemo: "http://www.frontczewscy.jfdd13.is-academy.pl/",
      githubLink: "https://github.com/infoshareacademy/jfdd13-frontczewscy",
      moreInfo:
        "Team Project that was made on a bootcamp. Made with HTML, CSS and Javascript.",
      moreInfoPhoto: "/assets/Concerte.png"
    },
    {
      name: "Concerte App",
      shortDesc: "Team Project",
      liveDemo: "http://app.frontczewscy.jfdd13.is-academy.pl/",
      githubLink: "https://github.com/infoshareacademy/jfdd13-frontczewscy-app",
      moreInfo:
        "Team Project that was made on a bootcamp. Made with ReactJS, firebase and more.",
      moreInfoPhoto: "/assets/ConcerteApp.png"
    },
    {
      name: "TicTacToe",
      shortDesc: "Simple Game in React",
      liveDemo: "https://mateuszrostkowski.github.io/TicTacToe/",
      githubLink: "https://github.com/MateuszRostkowski/TicTacToe",
      moreInfo: "Simple TicTacToe game made in React",
      moreInfoPhoto: "/assets/TicTacToe.png"
    },
    {
      name: "JavascriptMasters",
      shortDesc: "Gatsby blog about Javascript",
      liveDemo: "http://javascriptmasters.netlify.com/",
      githubLink: "https://github.com/MateuszRostkowski/Gatsby_blog",
      moreInfo: "This blog was made using Gatsby",
      moreInfoPhoto: "/assets/JavascriptMaster.png"
    },
    {
      name: "Weather app",
      shortDesc: "simple javascript app",
      liveDemo: "https://weather-location.netlify.com/",
      githubLink: "",
      moreInfo:
        "Weather app made with vanilla javascript. You need to allow use your location to fully use this site.",
      moreInfoPhoto: "/assets/WeatherApp.png"
    },
    {
      name: "RockPaperScissors",
      shortDesc: "Game in JS",
      liveDemo: "http://rock-paper-sizor.surge.sh/",
      githubLink: "https://github.com/MateuszRostkowski/RockPaperScissors",
      moreInfo:
        "This is a simple RockPaperScissors game made in vanilla Javascript",
      moreInfoPhoto: "/assets/RockPaper.png"
    },
    // {
    //   name: "WheaterApp",
    //   shortDesc: "Mobile app in react native",
    //   liveDemo: "https://github.com/MateuszRostkowski/WeatherNativeApp",
    //   githubLink: "https://github.com/MateuszRostkowski/WeatherNativeApp",
    //   moreInfo:
    //     "Simple wheater app made in react native and expo",
    //   moreInfoPhoto: ""
    // }
  ];
  
  data.forEach(element => {
    const { name, shortDesc, liveDemo, githubLink, moreInfo, moreInfoPhoto } = element;
    jsContainer.innerHTML += `
      <div class="container__item">
        <img class="more-info-photo more-info-trigger" src=${moreInfoPhoto} />
        <div class="more-info more-info--hidden">
          <div class="more-info__close">X</div>
          <a href="${liveDemo}"><span class="app__name">${name}</span> - ${shortDesc}</a>
          <p>${moreInfo}</p>
          <a class="more-info-github" href="${githubLink}">
            <i class="fa fa-github"></i>
          </a>
          <img class="more-info-photo-desc" src=${moreInfoPhoto} />
        </div>
      </div> 
    `;
  });

const moreInfoTrigger = document.querySelectorAll(".more-info-trigger");
const moreInfoElements = document.querySelectorAll(".more-info");
const closeButtons = document.querySelectorAll(".more-info__close");
const menuBtn = document.querySelector("#menuBtn");
const siteMenu = document.querySelector("#siteMenu");

function toggleMenu() {
  menuBtn.classList.toggle("change");
  siteMenu.classList.toggle("shown");
}

menuBtn.addEventListener("click", toggleMenu);

function closeInfo() {
  moreInfoElements.forEach(element => {
    element.classList.add("more-info--hidden");
  });
}

closeButtons.forEach(button => {
  button.addEventListener("click", closeInfo);
});

moreInfoTrigger.forEach(icon => {
  icon.addEventListener("click", () => {
    const moreInfo = icon.parentElement.querySelector(".more-info");
    closeInfo();
    moreInfo.classList.remove("more-info--hidden");
  });
});

function setHeightVariable() {
  let vh = window.innerHeight * 0.01 - 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
setHeightVariable();

window.addEventListener("resize", setHeightVariable);
