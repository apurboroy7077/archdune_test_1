const dateElement = document.getElementsByClassName(
  "book-landing-page-2-date-1"
)[0];
const today = new Date();

const options = {
  day: "numeric",
  month: "long",
  year: "numeric",
};

const formattedDate = today.toLocaleDateString("en-GB", options);
const arrayOfDate = formattedDate.split(" ");
const processedDate = `${arrayOfDate[0]} ${arrayOfDate[1]}, ${arrayOfDate[2]}`;

dateElement.innerHTML = processedDate;
