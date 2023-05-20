'use strict';

// b-crA5JSwx4vt7vCL6Nq7Qq2Ml00XkYHHM9Cva-lC1E
const APIurl = `https://api.unsplash.com/photos/random/?client_id=b-crA5JSwx4vt7vCL6Nq7Qq2Ml00XkYHHM9Cva-lC1E`;

async function getRandomWallpaper(APIurl, ...topic) {
  const resp = await fetch(`${APIurl}&query=${topic}`);
  const data = await resp.json();

  document.body.style.backgroundImage = `url(${data.urls.full})`;
}

window.addEventListener('load', getRandomWallpaper(APIurl, 'nature'));
