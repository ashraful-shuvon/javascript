document.getElementById("cashout-card").style.display = "none";

document.getElementById("addMoney-box").addEventListener("click", function () {
  handleToggle("addMoney-card", "block");
  handleToggle("cashout-card", "none");
});

document.getElementById("cashout-box").addEventListener("click", function () {
  handleToggle("cashout-card", "block");
  handleToggle("addMoney-card", "none");
});

document
  .getElementById("transaction-box")
  .addEventListener("click", function () {
    handleToggle("transaction-card", "block");
    handleToggle("cashout-card", "none");
    handleToggle("addMoney-card", "none");
  });

function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}
