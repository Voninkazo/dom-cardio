// Make a div
const createDiv = document.createElement('div');
// add a class of wrapper to it
createDiv.classList.add('wrapper');
// put it into the body
const bodyTag = document.querySelector('body');
bodyTag.appendChild(createDiv);
// make an unordered list
const unorderedList = document.createElement('ul');
// add three list items with the words "one, two three" in them
const firstList = document.createElement('li');
firstList.textContent = 'one';
unorderedList.appendChild(firstList);

const secondList = document.createElement('li');
secondList.textContent = 'two';
unorderedList.appendChild(secondList);

const thirdList = document.createElement('li');
thirdList.textContent = 'three';
unorderedList.appendChild(thirdList);

// put that list into the above wrapper
bodyTag.insertAdjacentElement('afterbegin', unorderedList);

// set the source to an image
const imageSrc = `src = 'https://picsum.photos/250'`;
// set the width to 250
const imageWidth = `width = '250px'`;
// add a class of cute
const imageClass = `class = 'cute'`;
// add an alt of Cute Puppy
const imageAlt = `alt = 'Cute Puppy'`;

// Create an image and append that image to the wrapper
const image = `<img ${imageSrc} ${imageClass} ${imageAlt}>`;
const wrapperDiv = document.querySelector('.wrapper');
wrapperDiv.innerHTML += image;

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
  <div>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum viverra lectus, ac iaculis odio dapibus sed. Donec et nibh vitae lorem semper vehicula eu non ligula.
    </p>
    <p>
    The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.
    </p>
  </div>
  `;
// put this div before the unordered list from above
bodyTag.insertAdjacentHTML('afterbegin', `${myHTML}`);
// add a class to the second paragraph called warning
const secondParagraph = document.getElementsByTagName('p')[1];
secondParagraph.classList.add('warning');
// remove the first paragraph
const firstP = document.querySelector('p');
firstP.parentNode.removeChild(firstP);
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
const generatePlayerCard = (name, age, height) => {
return `
      <div class="playerCard">
        <h2>${name} — ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
      </div>`;
}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
  const newDiv = document.createElement('div');
  newDiv.classList.add('cards');
// Have that function make 4 cards
const firstCard = generatePlayerCard('bolly', 3, '70');
const secondCard = generatePlayerCard('skinny', 2, '50');
const thirdCard = generatePlayerCard('dols', 3, '70cm');
const fourthCard = generatePlayerCard('jeddy', 1, '30cm');
// append those cards to the div
newDiv.insertAdjacentHTML('afterbegin', firstCard + secondCard + thirdCard + fourthCard);
// put the div into the DOM just before the wrapper element
createDiv.insertAdjacentElement('beforebegin', newDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
