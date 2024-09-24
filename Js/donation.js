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

//   donation amounts ---
let totalTargetAmount = document.getElementById("total-target").innerText;
totalTargetAmount = parseInt(totalTargetAmount); 

// Card 1: Noakhali Fund
const card1DonateButton = document.getElementById("card1-donate-btn");
const card1Amount = document.getElementById("card1-amount"); 
const card1Input = document.getElementById("card1-input"); 

// Card 2: Feni Fund
const card2DonateButton = document.getElementById("card2-donate-btn");
const card2Amount = document.getElementById("card2-amount");
const card2Input = document.getElementById("card2-input");

// Card 3: Quota Fund
const card3DonateButton = document.getElementById("card3-donate-btn");
const card3Amount = document.getElementById("card3-amount");
const card3Input = document.getElementById("card3-input");

//  donation process 
function handleDonation(cardInput, cardAmount) {
  const donationValue = parseInt(cardInput.value); 

  if (!isNaN(donationValue) && donationValue > 0) {
    const currentCardAmount = parseInt(cardAmount.innerText);
    cardAmount.innerText = currentCardAmount + donationValue;

    totalTargetAmount -= donationValue;
    document.getElementById("total-target").innerText = totalTargetAmount;

    cardInput.value = "";
  } else {
    alert("Please enter a valid donation amount.");
  }
}

// Add Event Handeler 
card1DonateButton.addEventListener("click", function () {
  handleDonation(card1Input, card1Amount);
});

card2DonateButton.addEventListener("click", function () {
  handleDonation(card2Input, card2Amount);
});

card3DonateButton.addEventListener("click", function () {
  handleDonation(card3Input, card3Amount);
});


function handleDonation(cardInput, cardAmount, cardTitle) {
  const donationValue = parseInt(cardInput.value); 
  // Condition 

  if (!isNaN(donationValue) && donationValue > 0) {
    
    const currentCardAmount = parseInt(cardAmount.innerText);
    cardAmount.innerText = currentCardAmount + donationValue;

    // Subtract 
    totalTargetAmount -= donationValue;
    document.getElementById("total-target").innerText = totalTargetAmount;

    addToHistory(cardTitle, donationValue);

    cardInput.value = "";
  } else {
    alert("Please enter a valid donation amount.");
  }
}

    // Function 
function addToHistory(cardTitle, donationAmount) {
  const historySection = document.getElementById("history-section");

  //  (div)
  const historyCard = document.createElement("div");
  historyCard.className = "card shadow-xl mb-4";

  //  card content 
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  const historyTitle = document.createElement("h2");
  historyTitle.className = "card-title text-black font-bold";
  historyTitle.innerText = `${donationAmount} BDT Donated for ${cardTitle}`;

  const donationTime = document.createElement("p");
  donationTime.className = "text-[#111111B3]";
  const currentTime = new Date().toLocaleString(); 
  donationTime.innerText = `Date: ${currentTime}`;

  
  cardBody.appendChild(historyTitle);
  cardBody.appendChild(donationTime);

  
  historyCard.appendChild(cardBody);


  historySection.appendChild(historyCard);
}
card1DonateButton.addEventListener("click", function () {
  handleDonation(card1Input, card1Amount, "Education Fund");
});

card2DonateButton.addEventListener("click", function () {
  handleDonation(card2Input, card2Amount, "Healthcare Fund");
});

card3DonateButton.addEventListener("click", function () {
  handleDonation(card3Input, card3Amount, "Environmental Fund");
});