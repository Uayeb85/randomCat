const twitterBtn = document.getElementById('twitter')
const newCatBtn = document.getElementById('new-cat')

// Imagen gatos
window.onload = shufflePics;
const images = document.querySelectorAll("img");
const url = "https://source.unsplash.com/collection/139386/200x200/?sig=";

// Random number generator

const randomNum = () => {
    return Math.floor(Math.random() * 100000);
  };
  
  function shufflePics() {
    for (let att of images) {
      att.src = `${url}${randomNum()}`;
      {
        console.log(att.src);
      }
    }
  }
  


// Tweet Quote
function tweetCat(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${url}`
    window.open(twitterUrl, '_blank')
}

// Event Listeners
newCatBtn.addEventListener('click', shufflePics)
twitterBtn.addEventListener('click', tweetCat)
