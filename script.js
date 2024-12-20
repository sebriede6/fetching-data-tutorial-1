console.log("Script loaded");
console.log("Das ist der zweite Aufruf");

const userList = document.getElementById('user-list');
const imageList = document.getElementById('image-list');
const albumContainer = document.getElementById('album-container');

// Define arrays for users
let users = [];
let images = [];
let albums = [];

// Define async function to fetch users data
async function fetchUserData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    usersData = await response.json();
    users = usersData;
    renderUsers();
  } catch (error) {
    console.error("Wir bekommen beim Aufruf der Users-APi den folgenden Fehler", error);
  }
}

// Define async function to fetch image data
async function fetchImageData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    imageData = await response.json();
    images = imageData.slice(0, 10);
    renderImages();
  } catch (error) {
    console.error("Wir bekommen beim Fetching der Image API folgenden Fehler: ", error);
  }
}

fetchUserData();
fetchImageData();

function renderUsers() {
  users.forEach((user) => {
    const userItem = document.createElement('li');
    userItem.innerHTML = user.email;
    userList.appendChild(userItem);
  });
}

function renderImages() {
  images.forEach((image) => {
    const imageItem = document.createElement('img');
    imageItem.src = image.url;
    imageList.appendChild(imageItem);
  });
}

async function fetchAlbumData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    albumData = await response.json();
    firstTenAlbums = albumData.slice(0, 10);

    firstTenAlbums.forEach((album) => {
      const albumItem = document.createElement('li');
      albumItem.innerHTML = album.title ; // hier kann man die Information die man haben möchte ändern, z.B. in album.id wie bei der User Funktion
      // wenn man sich alle Informationen anzeigen lassen möchte, kann man es so schreiben:
      // albumItem.textContent = `
      //ID: ${album.id}
      //UserID: ${album.userId}
      //Titel: ${album.title}
      // `; Die Backtips ermöglichen eine Schreibweise ähnlich wie bei Python
      albumContainer.appendChild(albumItem);
    });
  } catch (error) {
    console.error("Fehler beim Abruf von Albumdaten:", error);
  }
}

fetchAlbumData();