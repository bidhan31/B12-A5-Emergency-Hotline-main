

let heartCount = 0;

document.querySelectorAll('.heart-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    heartCount++;
    document.getElementById('heart-count').textContent = heartCount;
  });
});

let coinCount = 100;
document.querySelectorAll('.call-btn').forEach(button => {
  button.addEventListener('click', () => {
    if (coinCount < 20) {
      alert("Not enough coins to make a call.");
      return;
    }

    coinCount -= 20;
    document.getElementById('coin-count').textContent = coinCount;

    const serviceName = button.closest('.card').querySelector('.title-bn').textContent;
    const serviceNumber = button.closest('.card').querySelector('.hotline').textContent;
    const time = new Date().toLocaleTimeString();

    alert(`Calling ${serviceName} at ${serviceNumber}`);

    const li = document.createElement('li');
    li.innerHTML =
      `<div style= "display: flex; justify-content: space-between;">
    <div>
       <strong>${serviceName}</strong> <br> <span style="color:gray;">${serviceNumber}</span>
     </div>
     <div>${time}</div>
    </div>`;
    document.getElementById('call-history').appendChild(li);
  });
});


let copyCount = 0;
document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', () => {
    const number = button.closest('.card').querySelector('.hotline').textContent;

    navigator.clipboard.writeText(number).then(() => {
      copyCount++;
      document.getElementById('copy-count').textContent = copyCount;

    });
  });
});

const cardSection = document.getElementById("card-section");
const callHistory = document.getElementById("call-history");
const time = document.getElementById("time")

services.forEach(service => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>${service.name}</h3>
    <p>${service.number}</p>
    <span class="badge">${service.category}</span>
    <div class="actions">
      <button class="heart"><i class='bx bxs-heart'></i></button>
      <button class="copy"><i class='bx bxs-copy'></i>Copy</button>
      <button class="call"><i class='bx bxs-phone'></i>Call</button>
    </div>
  `;
  cardSection.appendChild(card);

  card.querySelector(".heart").addEventListener("click", () => {
    heartCount++;
    document.getElementById("heart-count").textContent = heartCount;
  });

  card.querySelector(".copy").addEventListener("click", () => {
    navigator.clipboard.writeText(service.number).then(() => {
      copyCount++;
      document.getElementById("copy-count").textContent = copyCount;

    });
  });

  card.querySelector(".call").addEventListener("click", () => {
    if (coinCount < 20) {
      alert("Not enough coins to make a call.");
      return;
    }

  });



  clearBtn.addEventListener('click', () => {
    callHistoryList.innerHTML = '';
  });

});





