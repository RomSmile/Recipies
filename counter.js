function setCount(element, number) {
  let count = 0;

  const interval = window.setInterval(() => {
    if (count + 100000 < number) {
      count += 100000;
    } else if(count + 1000 < number) {
      count += 1000;
    } else if (count + 100 < number) {
      count += 100;
    } else if (count + 10 < number)  {
      count += 10;
    } else {
      count++;
    }
    
    element.innerHTML = `${count}`;
    if (count >= number) {
      const resultCount = (count / 1000) + '';
      element.innerHTML = resultCount.replace('.', ',');
      clearInterval(interval);
    }
  }, 20);
}

const recipesAvailable = document.getElementById('recipes-available');
const activeUsers = document.getElementById('active-users');
const positiveReviews = document.getElementById('positive-reviews');
const photosVideos = document.getElementById('photos-and-videos');
const spicesHerbs = document.getElementById('spices-and-herbs');

setCount(recipesAvailable, 23567);
setCount(activeUsers, 431729);
setCount(positiveReviews, 892173);
setCount(photosVideos, 56581);
setCount(spicesHerbs, 3182);