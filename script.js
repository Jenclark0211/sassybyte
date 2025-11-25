const calendar = {
  Sunday: {
    theme: "Sunday Chill & Build",
    caption: "Relax, recharge, and maybe refactor. Byte by byte, we build.",
    gif: "sassy_sunday.gif"
  },
  Monday: {
    theme: "Monday Motivation",
    caption: "Mondays are for compiling confidence. Let’s code hard, sass harder.",
    gif: "https://live.staticflickr.com/65535/54840194089_1d53b2fe56.jpg"
  },
  Tuesday: {
    theme: "Tuesday Debug Sass",
    caption: "Dear bugs: consider yourselves evicted. 🐹💻 #DebuggingWithAttitude",
    gif: "https://live.staticflickr.com/65535/54930267025_fed2e3560f_w.jpg"
  },
  Wednesday: {
    theme: "Wednesday Wisdom",
    caption: "Indentation matters. So does attitude. #SassyTips",
    gif: "https://live.staticflickr.com/65535/54929180687_4684c76c93_w.jpg5"
  },
  Thursday: {
    theme: "Thursday Throwback",
    caption: "Back in my byte-sized day, code was chunky and sass was eternal. #TBT",
    gif: "sassy_thursday.gif"
  },
  Friday: {
    theme: "Friday Wins",
    caption: "Code compiled, bugs squashed, sass delivered. Cheers to the weekend!",
    gif: "sassy_friday.gif"
  },
  Saturday: {
    theme: "Saturday Style",
    caption: "Weekend mode: activated. Syntax optional, sass mandatory.",
    gif: "sassy_saturday.gif"
  }
};

function updateCalendar(day) {
  const post = calendar[day];
  document.getElementById("theme").textContent = post.theme;
  document.getElementById("caption").textContent = post.caption;
  document.getElementById("mascotGif").src = post.gif;
}

document.getElementById("daySelector").addEventListener("change", (e) => {
  updateCalendar(e.target.value);
});

// Load today's post on page load
const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
document.getElementById("daySelector").value = today;
updateCalendar(today);
