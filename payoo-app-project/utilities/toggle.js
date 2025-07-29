handleToggle("cashout-card", "none");
handleToggle("transaction-card", "none");

document.getElementById("addMoney-box").addEventListener("click", function () {
  handleToggle("transaction-card", "none");
  handleToggle("cashout-card", "none");
  handleToggle("addMoney-card", "block");
});

document.getElementById("cashout-box").addEventListener("click", function () {
  handleToggle("transaction-card", "none");
  handleToggle("addMoney-card", "none");
  handleToggle("cashout-card", "block");
});

document
  .getElementById("transaction-box")
  .addEventListener("click", function () {
    handleToggle("cashout-card", "none");
    handleToggle("addMoney-card", "none");
    handleToggle("transaction-card", "block");
  });
