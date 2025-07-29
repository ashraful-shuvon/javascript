document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const ammount = getInputValueById("cashout-ammount");

    const pin = getInputValueById("cashout-pin");

    const mainBalance = getInputByInnerText("mainBalance");

    const account = document.getElementById("ac-num").value;
    const selectedBank = document.getElementById("banks").value;

    if (pin === 1234) {
      const totalAmmount = mainBalance - ammount;
      setInnerText("mainBalance", totalAmmount);

      const container = document.getElementById("transaction-container");
      const p = document.createElement("p");
      const currentDateTime = new Date();
      p.innerText = `
    Sucessfully cashout ${ammount} from ${selectedBank} with this ${account} account. ${currentDateTime.toLocaleString()}`;
      container.appendChild(p);
    } else {
      alert("Incorrect PIN.");
    }
  });
