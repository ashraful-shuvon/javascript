document.getElementById("addMoney").addEventListener("click", function (event) {
  event.preventDefault();
  const ammount = document.getElementById("ammount").value;
  const convertedAmmount = parseFloat(ammount);

  const pin = document.getElementById("pin-num").value;
  const convertedPin = parseInt(pin);

  const mainBalance = document.getElementById("mainBalance").innerText;
  const convertedMainBalance = parseFloat(mainBalance);

  if (convertedPin === 1234) {
    const totalAmmount = convertedMainBalance + convertedAmmount;
    document.getElementById("mainBalance").innerText = totalAmmount.toFixed(2);
  } else {
    alert("Incorrect PIN.");
  }
});
