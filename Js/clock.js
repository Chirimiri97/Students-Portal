// Select things where we want to display Date and Time.
const timeplace = document.querySelector("#time");
const dateplace = document.querySelector("#date");
const quoteplace = document.querySelector("#quote");
const refresh = document.querySelector("#refresh");
// Declare days and months in an array.
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Make an array for quotes and authors.
const quotes = [
  "I do not fear computers. I fear lack of them.",
  "A computer once beat me at chess, but it was no match for me at kick boxing.",
  "Computer Science is no more about computers than astronomy is about telescopes",
  "The computer was born to solve problems that did not exist before",
  "Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the Second Law of Thermodynamics; i.e., it always increases.",
  "Imagination is more important than knowledge.  For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.",
  "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.",
  "The more you know, the more you realize you know nothing.",
  "Tell me and I forget.  Teach me and I remember.  Involve me and I learn.",
  "Real knowledge is to know the extent of one’s ignorance",
  "If you think your users are idiots, only idiots will use it.",
  "From a programmer’s point of view, the user is a peripheral that types when you issue a read request.",
  "Computers are good at following instructions, but not at reading your mind.",
  "There is only one problem with common sense; it’s not very common.",
  "The Internet?  We are not interested in it.",
  "The best way to get accurate information on Usenet is to post something wrong and wait for corrections.",
];
const authors = [
  "Isaac Asimov",
  "Emo Philips",
  "Edsger W. Dijkstra",
  "Bill Gates",
  "Norman Augustine",
  "Albert Einstein",
  "Stephen Hawking",
  "Socrates",
  "Benjamin Franklin",
  "Confucius",
  "Linus Torvalds",
  "P. Williams",
  "Donald Knuth",
  "Milt Bryce",
  "Bill Gates, 1993",
  "Matthew Austern",
];


// Add Event Listener To Refresh Button.
refresh.addEventListener('click', displayQuote);

// Set a random quote for first time.
let rand = Math.floor(Math.random() * quotes.length);
quoteplace.innerText = `"${quotes[rand]}" - ${authors[rand]}.`;
// Run Functions.
// Time and Date.
setInterval(displayTime, 1000);

// Quotes.
setInterval(displayQuote, 10000);

// Function to display date and time.
function displayTime() {
  let time = new Date();
  let hrs = time.getHours();
  let mins = time.getMinutes();
  let seconds = time.getSeconds();
  let year = time.getUTCFullYear();
  let month = months[time.getMonth()];
  let date = time.getDate();
  let dayName = days[time.getDay()];
  let en= "AM";

  // Some conditions to make time format of 12 hours and set AM / PM.
  if (hrs > 12) en = "PM";
  if (hrs > 12) hrs = hrs - 12;
  if (hrs < 10) hrs = "0" + hrs;
  if (mins < 10) mins = "0" + mins;
  if (seconds < 10) seconds = "0" + seconds;
  if (hrs == 0) hrs = 12;

  // Placing the time and date in the card.
  timeplace.innerText = `${hrs}:${mins}:${seconds} ${en}`;
  dateplace.innerText = `${dayName}, ${date} ${month} ${year} (IST)`;
}

// Function To Display Quote After Some Time.
function displayQuote() {
    let rand = Math.floor(Math.random() * quotes.length);

    // Change the quotes paragraph.
    quoteplace.innerText = `"${quotes[rand]}" - ${authors[rand]}.`;
}
