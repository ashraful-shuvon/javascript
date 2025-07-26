document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const ammount = document.getElementById("cashout-ammount").value;
    const convertedAmmount = parseFloat(ammount);

    const pin = document.getElementById("cashout-pin").value;
    const convertedPin = parseInt(pin);

    const mainBalance = document.getElementById("mainBalance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (convertedPin === 1234) {
      const totalAmmount = convertedMainBalance - convertedAmmount;
      document.getElementById("mainBalance").innerText =
        totalAmmount.toFixed(2);
    } else {
      alert("Incorrect PIN.");
    }
  });
