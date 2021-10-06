const cuisines = [
  {name: 'Italian', recipes: 327, image: './images/cuisines/Italian.png'},
  {name: 'Indian', recipes: 856, image: './images/cuisines/Indian.png'},
  {name: 'French', recipes: 27, image: './images/cuisines/French.png'},
  {name: 'Steakhouse', recipes: 174, image: './images/cuisines/SteakHouse.png'},
  {name: 'Seafood', recipes: 731, image: './images/cuisines/SeaFood.png'},
  {name: 'Sushi', recipes: 327, image: './images/cuisines/Sushi.png'},
  {name: 'Mexican', recipes: 529, image: './images/cuisines/Mexican.png'},
  {name: 'Chinese', recipes: 145, image: './images/cuisines/Chinese.png'},
  {name: 'Pizza', recipes: 327, image: './images/cuisines/Pizza.png'},
  {name: 'American', recipes: 327, image: './images/cuisines/America.png'},
];

const secondCuisines = [...cuisines];

const cuisinesBlock = document.querySelector('.cuisines__container');
let sorted = false;
const SortButton = document.getElementById('sort');

cuisines.map(cuisine => {
  cuisinesBlock.innerHTML += `
    <div class="cuisines__cuisine" style="
      background: url('${cuisine.image}');
      background-size: cover;
      background-repeat: no-repeat;
    ">
      <span class="cuisines__amount-of-recipes">${cuisine.recipes} Recipes</span>
      <span class="cuisines__name-of-cuisine">${cuisine.name}</span>
    </div>
  `
})

SortButton.addEventListener('click', () => {
  sorted = !sorted;
  cuisinesBlock.innerHTML = '';
  console.log(123)

  if (sorted) {
    cuisines.sort((a, b) => a.recipes - b.recipes).map(cuisine => {
      cuisinesBlock.innerHTML += `
        <div class="cuisines__cuisine" style="
          background: url('${cuisine.image}');
          background-size: cover;
          background-repeat: no-repeat;
        ">
          <span class="cuisines__amount-of-recipes">${cuisine.recipes} Recipes</span>
          <span class="cuisines__name-of-cuisine">${cuisine.name}</span>
        </div>
      `
    })
  } else {
    secondCuisines.map(cuisine => {
      cuisinesBlock.innerHTML += `
        <div class="cuisines__cuisine" style="
          background: url('${cuisine.image}');
          background-size: cover;
          background-repeat: no-repeat;
        ">
          <span class="cuisines__amount-of-recipes">${cuisine.recipes} Recipes</span>
          <span class="cuisines__name-of-cuisine">${cuisine.name}</span>
        </div>
      `
    })
  }
})