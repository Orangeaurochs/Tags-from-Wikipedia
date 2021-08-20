javascript:(function() {
var articleTitleElementList = document.getElementsByTagName("h1");
var articleTitleElement = articleTitleElementList[0];
var articleTitle = articleTitleElement.textContent;
var originalArticleTitle = articleTitle;
articleTitle = articleTitle.replace(/[,.\/<>?\\|;'#:@~\[\]{}!"£$%^&*()\-=_+`¬]/g,"");
while (articleTitle.match(/ ./)) {
  var spaceHit = articleTitle.match(/ ./g)[0];
  spaceHit = spaceHit.toUpperCase();
  spaceHit = spaceHit.replace(" ","");
  articleTitle = articleTitle.replace(/ ./,spaceHit);
}
articleTitle = "#" + articleTitle;
navigator.clipboard.writeText(articleTitle);
alert (articleTitle);
})();