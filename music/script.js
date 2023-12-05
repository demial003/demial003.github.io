const select = document.querySelector(".logo");
const dialog = document.querySelector("dialog");
const close = document.querySelector(".close");
const submit = document.querySelector(".submit");
const selection = document.querySelector("select");
const icon = document.querySelector(".icon");
const audio = document.querySelector("audio");
const source = document.querySelector("source");
const playing = document.querySelector(".playing");
let song = 1;

select.addEventListener("click", () => {
  dialog.showModal();
});

close.addEventListener("click", () => {
  dialog.close();
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
  song = e.target.form[0].value;
  console.log(song);
  if (!audio.paused) {
    audio.pause();
    icon.src = "./375.png";
  }
  changeSong(song);
});

icon.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    icon.src = "./video-pause-button.png";
  } else {
    audio.pause();
    icon.src = "./375.png";
  }
});

function changeSong(song) {
  source.src = `./songs/${song}.mp3`;
  playing.textContent = `Now Playing: ${song}`;
  audio.load();
}
