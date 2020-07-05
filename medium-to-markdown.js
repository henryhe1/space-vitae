const mediumToMarkdown = require('medium-to-markdown');
 
// Enter url here
mediumToMarkdown.convertFromUrl('https://medium.com/@henryhe_/we-can-hack-pain-but-should-we-b37e7d8b88e6')
.then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});