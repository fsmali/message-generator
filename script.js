const firstPhrases = [
  'Believe in yourself,',
  'Every day is a new opportunity,',
  'You are capable of amazing things,',
  'Dream big and dare to fail,',
  'Stay positive and happy,',
];

const secondQuotes = [
  'you have the power to create change.',
  'your hard work will pay off.',
  'your potential is limitless.',
  'challenges are what make life interesting.',
  'pursue your dreams with passion.',
];

const thirdStatements = [
  'Keep pushing forward!',
  'You can do it!',
  'Never give up!',
  'Stay focused and never settle.',
  'Your journey is just beginning.',
];
const btn = document.querySelector('.btn');
const showNumber = document.querySelector('.showNumber');


const random = (array) => array[Math.floor(Math.random() * array.length)];

const generateMessage=()=>{
    const first = random(firstPhrases)
    const second = random(secondQuotes)
    const third = random(thirdStatements)
    return`${first} ${second} ${third}`
}

btn.addEventListener('click', () => {
  const randomPhrase = generateMessage();
  console.log(randomPhrase);
  showNumber.innerHTML = randomPhrase;
});
