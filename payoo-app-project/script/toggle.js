document.getElementById("cashout-card").style.display = "none";

document.getElementById("addMoney-box").addEventListener("click", function () {
  document.getElementById("addMoney-card").style.display = "block";
  document.getElementById("cashout-card").style.display = "none";
});

document.getElementById("cashout-box").addEventListener("click", function () {
  document.getElementById("addMoney-card").style.display = "none";
  document.getElementById("cashout-card").style.display = "block";
});
