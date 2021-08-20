# Tags-from-Wikipedia
A bookmarklet to create tags by reformatting Wikipedia article titles to a generic tagging format: removing punctuation and spacing, capitalising intitial letters. Also offers copying to the clipboard. Designed as a possible solution to a specific case but could be applicable elsewhere.

**To install the bookmarklet, add the following code into the URL or Location section of a new bookmark:**

`javascript:(function() {
var articleTitleElementList = document.getElementsByTagName("h1");
var articleTitleElement = articleTitleElementList[0];
var articleTitle = articleTitleElement.textContent;
var originalArticleTitle = articleTitle;
articleTitle = articleTitle.replace(/[,.\/<>?\\|;'#:@~\[\]{}!"£$%^&*()\-=_+¬]/g,"");
while (articleTitle.match(/ ./)) {
  var spaceHit = articleTitle.match(/ ./g)[0];
  spaceHit = spaceHit.toUpperCase();
  spaceHit = spaceHit.replace(" ","");
  articleTitle = articleTitle.replace(/ ./,spaceHit);
}
articleTitle = "#" + articleTitle;
if (window.confirm(articleTitle + "\n\n(Click OK to copy to the clipboard)")) {
  navigator.clipboard.writeText(articleTitle);
}
else {
} 
})();`

To use the bookmarklet:

* Naviagate to a Wikipedia page.
* Click on the bookmarklet on the your bookmarks toolbar. The tag will be displayed in a pop-up with a # sign.
* If you want to copy the tag to the clipboard, click on OK.
