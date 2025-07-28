document.getElementById("addMoney").addEventListener("click", function (event) {
  event.preventDefault();

  const ammount = getInputValueById("ammount");

  const pin = getInputValueById("pin-num");

  const mainBalance = getInputByInnerText("mainBalance");

  if (pin === 1234) {
    const totalAmmount = mainBalance + ammount;
    setInnerText("mainBalance", totalAmmount);
  } else {
    alert("Incorrect PIN.");
  }
});
