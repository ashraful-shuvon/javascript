document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const ammount = getInputValueById("cashout-ammount");

    const pin = getInputValueById("cashout-pin");

    const mainBalance = getInputByInnerText("mainBalance");

    if (pin === 1234) {
      const totalAmmount = mainBalance - ammount;
      setInnerText("mainBalance", totalAmmount);
    } else {
      alert("Incorrect PIN.");
    }
  });
