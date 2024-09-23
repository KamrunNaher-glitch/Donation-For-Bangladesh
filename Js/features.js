const donationButton = document.getElementById("donation-btn");
const historyButton = document.getElementById("history-btn");
const cardsSection = document.getElementById("cards-section");
const historySection = document.getElementById("history-section");

donationButton.addEventListener("click", function () {
  cardsSection.style.display = "block";
  historySection.style.display = "none";
});
historyButton.addEventListener("click", function () {
  cardsSection.style.display = "none";
  historySection.style.display = "block";
});
