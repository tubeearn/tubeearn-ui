const gifts = [
  { name: "Sticker", id: "STK", amount: 5 },
  { name: "Star", id: "STR", amount: 10 },
  { name: "Silver", id: "SLV", amount: 20 },
  { name: "Gold", id: "GLD", amount: 50 },
  { name: "Diamond", id: "DMD", amount: 100 },
  { name: "Platinum", id: "PLT", amount: 500 }
];

let selectedGiftId = null;

function renderGifts() {
  const container = document.getElementById("gift-options");
  gifts.forEach(gift => {
    const div = document.createElement("div");
    div.className = "gift";
    div.innerText = `${gift.name} - ₹${gift.amount}`;
    div.onclick = () => {
      selectedGiftId = gift.id;
      document.querySelectorAll(".gift").forEach(el => el.classList.remove("active"));
      div.classList.add("active");
    };
    container.appendChild(div);
  });
}

function sendGift() {
  if (!selectedGiftId) {
    alert("Please select a gift");
    return;
  }
  alert(`Gift ${selectedGiftId} sent!`); // Replace with backend call
}

renderGifts();
