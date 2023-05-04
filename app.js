// Get DOM elements
const generateMemeBtn = document.querySelector('.generate-button');
const memeImage = document.querySelector('.meme-generator img');
const memeTitle = document.querySelector('.meme-title');
const memeAuthor = document.querySelector('.meme-author');

// Update meme details with data from API
const updateDetails = (url, title, author) => {
  memeImage.src = url;
  memeTitle.textContent = title;
  memeAuthor.textContent = author;
};

// Fetch meme data from API and update details
const generateMeme = async () => {
  try {
    const response = await fetch('https://meme-api.com/gimme/wholesomememes');
    const data = await response.json();
    updateDetails(data.url, data.title, data.author);
  } catch (error) {
    console.error(error);
  }
};

// Add event listener to generate meme button
generateMemeBtn.addEventListener('click', generateMeme);
