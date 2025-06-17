const getFactBtn = document.querySelector('.get-fact');
const factCard = document.querySelector('.fact-card');
const factText = document.querySelector('.fact-text');
const tagLabel = document.querySelector('.tag');
const timestamp = document.querySelector('.timestamp');

function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString(); // 2:30:05 PM
}

async function fetchFact() {
  factText.innerText = 'Fetching a cool fact...';
  tagLabel.innerText = '✨ Random Fact';
  factCard.classList.remove('hidden');

  try {
    const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');
    const data = await response.json();

    factText.innerText = data.text;
    timestamp.innerText = 'Discovered ' + getCurrentTime();
  } catch (error) {
    factText.innerText = 'Oops! Could not fetch a fact.';
    console.error(error);
  }
}

// Button click
getFactBtn.addEventListener('click', fetchFact);
