import './styles/styles.css';
// import Facebook from './images/facebook_icon.png';
// import Twiter from './images/twitter_icon.png';
// import Logo from './images/logo-small.png';

const appContainer = document.getElementById('app');
let mainContainer;

// const myIcon = new Image();
// myIcon.src = Logo;

//   element.appendChild(myIcon);

function createSearchBar(options) {
  const searchBar = document.createElement('form');
  searchBar.classList.add('search');
  searchBar.innerHTML = "<input type='search' placeholder='search' class='searchi' name='searchTerm'>";
  searchBar.addEventListener('submit', (e) => {
    e.preventDefault();
    options.onSearch(e.target.searchTerm.value);
  });

  return searchBar;
}

function createHeader({ onSearch }) {
  const header = document.createElement('header');
  header.classList.add('hero');
  // const myIcon = new Image();
  // myIcon.src = Logo;
  // element.appendChild(myIcon);
  header.innerHTML = '<img myIcon.src = Logo;><h1 class="title">TheMealDB</h1><div class="nav-links"><a><span>Home</span></a><a class="norm">API</a><a class="norm">Forum</a></div>';
  header.appendChild(createSearchBar({ onSearch }));
  return header;
}

function createInfo() {
  const infoElement = document.createElement('div');
  infoElement.classList.add('info');
  infoElement.innerHTML = `<h2>Welcome to TheMealDM</h2><p>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.</p><p>We also offer a free JSON API for anyone wanting to use it, with additional features for subscribers.</p>
  <button><span class='sp1'>Pay</span><span class='sp2'>Pal</span> <span class='sp3'>Subscribe</span></button><p>Click to Support $2 per month (cancel anytime)</p><p>Currently 50 supporters</p><hr>`;
  return infoElement;
}

function createMovie(movie) {
  const movieElement = document.createElement('div');
  movieElement.classList.add('movie');
  movieElement.innerHTML = `<h2>${movie.strMeal}</h2><p>${movie.strInstructions}</p>`;
  const img = `${movie.strMealThumb}`;
  movieElement.style.backgroundImage = `url(${img})`;
  return movieElement;
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('body');
  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  footer.innerHTML = '<div class="foot1"><p class="copy">&copy TheMealDB</p><p>Proudly Built in The UK</p></div> <div class="footlinks"><a>About</a><a>Faq</a><a>Contact</a></div>';
  return footer;
}

function renderPage({ onSearch }) {
  appContainer.innerHTML = '';
  appContainer.appendChild(createHeader({ onSearch }));
  mainContainer = createMain();
  appContainer.appendChild(createInfo());
  appContainer.appendChild(mainContainer);
  appContainer.appendChild(createFooter());
}

function renderMovies(movies) {
  mainContainer.innerHTML = '';
  movies.forEach((movie) => {
    mainContainer.appendChild(createMovie(movie));
  });
}

export default {
  renderPage,
  renderMovies,
};
