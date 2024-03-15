let facebookButton = document.getElementsByClassName(
  "facebook-button-in-fellowship"
)[0];
let twitterButton = document.getElementsByClassName(
  "twitter-button-in-fellowship"
)[0];
let youtubeButton = document.getElementsByClassName(
  "youtube-button-in-fellowship"
)[0];
let pinterestButton = document.getElementsByClassName(
  "pinterest-button-in-fellowship"
)[0];
facebookButton.addEventListener("click", () => {
  window.open("https://facebook.com", "_blank");
});
twitterButton.addEventListener("click", () => {
  console.log("twitter");
  window.open("https://twitter.com", "_blank");
});
youtubeButton.addEventListener("click", () => {
  window.open("https://youtube.com", "_blank");
});
pinterestButton.addEventListener("click", () => {
  window.open("https://pinterest.com", "_blank");
});
