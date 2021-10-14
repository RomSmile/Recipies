const recipesAvailable = document.getElementById('recipes-available');
const activeUsers = document.getElementById('active-users');
const positiveReviews = document.getElementById('positive-reviews');
const photosVideos = document.getElementById('photos-and-videos');
const spicesHerbs = document.getElementById('spices-and-herbs');

const minTime = 3182;

function setCount(element, number) {
  let count = 0;

  const interval = window.setInterval(() => {
    if (number < 10000) {
      if (count + 100 <= number) {
        count += 100;
      } else if (count + 10 <= number)  {
        count += 10;
      } else {
        count++;
      }
    } else {
      if (count + 100000 <= number) {
        count += 100000;
      } else if(count + 1000 <= number) {
        count += 1000;
      } else if (count + 100 <= number) {
        count += 100;
      } else if (count + 10 <= number)  {
        count += 10;
      } else {
        count++;
      }
    }
    
    if (spicesHerbs.innerHTML === '3,182' && number !== minTime) {
      element.innerHTML = `${number}`;
      const resultCount = (number / 1000) + '';
      element.innerHTML = resultCount.replace('.', ',');
      clearInterval(interval);
    } else {
      element.innerHTML = `${count}`;
    }

    if (count >= number) {
      const resultCount = (count / 1000) + '';
      element.innerHTML = resultCount.replace('.', ',');
      clearInterval(interval);
    }
  }, 30);
}

setCount(recipesAvailable, 23567);
setCount(activeUsers, 431729);
setCount(positiveReviews, 892173);
setCount(photosVideos, 56581);
setCount(spicesHerbs, minTime);