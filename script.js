// Refined slogans for Sassy the Chinchilla
const sassyWeek = {
  Sunday: {
    theme: "Reset & Recharge",
    caption: "Strategic rest fuels sharper execution. Reset today to lead stronger tomorrow.",
    gif: "" // optional image URL
  },
  Monday: {
    theme: "Monday Motivation",
    caption: "Confidence compiles faster than code. Begin bold, and the week will follow.",
    gif: ""
  },
  Tuesday: {
    theme: "Debug Day",
    caption: "Every bug is a lesson in logic. Evict errors, elevate clarity.",
    gif: ""
  },
  Wednesday: {
    theme: "Wisdom Wednesday",
    caption: "Indentation reflects discipline; precision reflects mindset. Structure matters in code and in thought.",
    gif: ""
  },
  Thursday: {
    theme: "Throwback Thursday",
    caption: "Refactoring the past sharpens the future. Yesterday’s wins are today’s foundation.",
    gif: ""
  },
  Friday: {
    theme: "Feature Friday",
    caption: "Innovation isn’t shipped—it’s launched. Deliver brilliance, not just commits.",
    gif: ""
  },
  Saturday: {
    theme: "Play & Polish",
    caption: "Experimentation breeds mastery. Play with ideas, polish with intent.",
    gif: ""
  }
};


const titleEl = document.getElementById("dayTitle");
const themeEl = document.getElementById("dayTheme");
const captionEl = document.getElementById("caption");
const gifEl = document.getElementById("mascotGif");
const selector = document.getElementById("daySelector");

// Initialize to today if possible
const todayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date());
if (sassyWeek[todayName]) {
  selector.value = todayName;
} else {
  selector.value = "Sunday";
}

updateDay(selector.value);

selector.addEventListener("change", (e) => {
  updateDay(e.target.value);
});

function updateDay(day) {
  const data = sassyWeek[day];
  titleEl.textContent = `${day} ${data.theme.includes(day) ? "" : ""}`.trim() || day;
  themeEl.textContent = data.theme;
  captionEl.textContent = data.caption;

  // Handle optional image
  if (data.gif && data.gif.length > 0) {
    gifEl.src = data.gif;
    gifEl.alt = `Sassy the Chinchilla — ${day}`;
    gifEl.style.display = "inline-block";
  } else {
    gifEl.src = "";
    gifEl.alt = "Sassy the Chinchilla";
    gifEl.style.display = "none";
  }

  // Set ARIA for clarity
  selector.setAttribute("aria-activedescendant", day);
}

