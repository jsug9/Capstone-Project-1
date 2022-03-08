// Navbar
function setNav(header) {
  header.innerHTML = `
  <div class="topbar">
    <ul class="topbar-ul">
      <li class="topbar-li"><a href="#"><span class="iconify" data-icon="brandico:facebook"></span></a></li>
      <li class="topbar-li"><a href="#"><span class="iconify" data-icon="akar-icons:twitter-fill"></span></a></li>
      <li class="topbar-li"><a href="#">English</a></li>
      <li class="topbar-li"><a href="#">My page</a></li>
      <li class="topbar-li"><a href="#">Logout</a></li>
    </ul>
  </div>

  <div class="navbar-div">
    <div class="left-navbar">
      <a href="index.html" id="logo"><img src="Resources/logo.png" alt="Logo" class="navbar-logo"></a>
      <span class="toggle-nav" id="openbtn">&#9776;</span>
    </div>

    <div class="right-navbar">
      <nav class="menu" id="menu">
        <a class="closebtn" id="closebtn">&times;</a>
        <ul class="menu-ul" id="menu-ul">
          <li class="menu-li" id="home-li"><a href="index.html">Home</a></li>
          <li class="menu-li"><a href="about.html">About</a></li>
          <li class="menu-li"><a href="#">Program</a></li>
          <li class="menu-li"><a href="#">Join</a></li>
          <li class="menu-li"><a href="#">Sponsor</a></li>
          <li class="menu-li"><a href="#">News</a></li>
        </ul>
      </nav>

      <div class="right-logo-div">
        <a href="#" class="right-logo">CC Concert</a>
      </div>
    </div>
  </div>
  `;
}

document.querySelectorAll('.header').forEach(setNav);

// Mobile Menu
function openNav() {
  document.getElementById('menu').style.width = '100%';
}

function closeNav() {
  document.getElementById('menu').style.width = '0%';
}

document.getElementById('openbtn').addEventListener('click', () => {
  openNav();
});

document.getElementById('closebtn').addEventListener('click', () => {
  closeNav();
});

document.querySelectorAll('.menu-li').forEach((n) => n.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    document.getElementById('menu').style.width = '0%';
  }
}));

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    document.getElementById('menu').style.width = 'fit-content';
  }

  if (window.innerWidth <= 768) {
    document.getElementById('menu').style.width = '0%';
  }
});

// Program Array
const programs = [
  {
    iconData: 'bx:time',
    name: 'Opening',
    description: 'Attendants will have time to accommodate and buy some food while the band does a last rehearse.',
  },
  {
    iconData: 'fluent:chart-person-28-regular',
    name: 'Talking',
    description: 'The band will talk about the rebranding as well as their inspiration behind their new album.',
  },
  {
    iconData: 'emojione-monotone:guitar',
    name: 'Live Concert',
    description: 'The so awaited new album will be performed live for the first time.',
  },
  {
    iconData: 'bx:pen',
    name: 'Album Signing',
    description: 'The band will make personalized signs on the albums of the attendants.',
  },
  {
    iconData: 'ic:outline-forum',
    name: 'Forum',
    description: 'Attendants will have the chance to ask their questions to the band members.',
  },
];

// Program Division
const programsDiv = document.getElementById('programs-div');

programs.forEach((program) => {
  const programDiv = document.createElement('div');
  programDiv.setAttribute('class', 'program-div');

  programDiv.innerHTML = `
    <span class="iconify program-icon" data-icon="${program.iconData}"></span>
    <div class="program-title-div">
      <h3 class="program-div-title">${program.name}</h3>
    </div>
    <p class="program-div-description">
    ${program.description}
    </p>
  `;

  programsDiv.appendChild(programDiv);
});

// Band Members

const bandMembers = [
  {
    name: 'Alejandro Chavez',
    position: 'Lead Singer',
    description: 'Alejo used to be a solo artist who composed covers for his Instagram account, the band inmediately noticed his talent and potential, and that\'s how he joined the band.',
  },
  {
    name: 'Eduardo Palacios',
    position: 'Drummer',
    description: 'Eduardo\'s favorite instrument has always been the drums, he learned it from a young age and now he is one of the founders of the band.',
  },
  {
    name: 'Sebastian Valencia',
    position: 'Lead Guitarrist',
    description: 'Sebas is not only the lead guitarrist but also the founder of the band, he is in constantly working on new songs that represent what he feels and think.',
  },
  {
    name: 'Jose Gamero',
    position: 'Rhythm Guitarrist',
    description: 'Together with Sebastian, Jose plays the guitar, he is also the one in charge of cheering up the gag when they feel overwhelmed.',
  },
  {
    name: 'Franz Conzeta',
    position: 'Bassist',
    description: 'Nobody recognizes better than Franz the importance of a good bass on a song, he knows how to give an special vibe to a song.',
  },
  {
    name: 'Paola Moscoso',
    position: 'Music Producer',
    description: 'She may doesn\'t play any particular instrument but still has an important role on the band mixing the instruments and making sure everything is in perfect harmony.',
  },
];

// Band Members Section
const membersSection = document.getElementById('members');

bandMembers.forEach((member, index) => {
  const bandMember = document.createElement('div');
  bandMember.setAttribute('class', 'band-member');

  bandMember.innerHTML = `
  <div class="img-div">
    <img src="Resources/band/member${index}.png" alt="Band Member Picture" class="band-member-image">
  </div>
  <div class="member-details">
    <h3 class="member-name">${member.name}</h3>
    <p class="member-position">${member.position}</p>
    <p class="dots-separation">.........</p>
    <p class="member-description">${member.description}</p>
  </div>
  `;

  membersSection.appendChild(bandMember);
});