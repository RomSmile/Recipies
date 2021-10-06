function setCount(element, number) {
  let count = 0;

  const interval = window.setInterval(() => {
    count++;
    element.innerHTML = `${count}`;
    if (count >= number) {
      clearInterval(interval);
    }
  }, 10);
}

const recipesAvailable = document.getElementById('recipes-available');
const activeUsers = document.getElementById('active-users');
const positiveReviews = document.getElementById('positive-reviews');
const photosVideos = document.getElementById('photos-and-videos');
const spicesHerbs = document.getElementById('spices-and-herbs');

setCount(recipesAvailable, 500);
setCount(activeUsers, 500);
setCount(positiveReviews, 500);
setCount(photosVideos, 500);
setCount(spicesHerbs, 500);