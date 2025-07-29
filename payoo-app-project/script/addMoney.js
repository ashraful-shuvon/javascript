document.getElementById("addMoney").addEventListener("click", function (event) {
  event.preventDefault();

  const ammount = getInputValueById("ammount");

  const pin = getInputValueById("pin-num");

  const mainBalance = getInputByInnerText("mainBalance");

  const account = document.getElementById("ac-num").value;
  const selectedBank = document.getElementById("banks").value;

  if (pin === 1234) {
    const totalAmmount = mainBalance + ammount;
    setInnerText("mainBalance", totalAmmount);

    // transaction

    const container = document.getElementById("transaction-container");
    const p = document.createElement("p");
    const currentDateTime = new Date();
    p.innerText = `
    Sucessfully added ${ammount} from ${selectedBank} to ${account} account. ${currentDateTime.toLocaleString()}`;
    container.appendChild(p);
  } else {
    alert("Incorrect PIN.");
  }
});
