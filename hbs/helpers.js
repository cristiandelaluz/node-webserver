const hbs = require('hbs');

// HBS Helpers
hbs.registerHelper('getYear', () => {
  return new Date().getFullYear();
})

hbs.registerHelper('capitalize', text => {
  let words = text.split(' ');
  let nText = [];
  words.forEach((word, index) => {
    word[index] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    nText.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  });

  return nText.join(' ');
});