/* Created by Tivotal */

let text = document.querySelector(".text2");

let loadText = () => {
  setTimeout(() => {
    text.textContent = "YouTuber";
  }, 0);

  setTimeout(() => {
    text.textContent = "Designer";
  }, 4000);

  setTimeout(() => {
    text.textContent = "Blogger";
  }, 8000);
};

loadText();

setInterval(loadText, 12000);
