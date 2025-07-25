document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const accountNum = document.getElementById("ac-num").value;
  const pinNum = document.getElementById("pin-num").value;
  const convertedPin = parseInt(pinNum);
  if (accountNum.length === 11) {
    if (convertedPin === 1234) {
      window.location.href = "./main.html";
    } else {
      alert("Incorrect PIN.");
    }
  } else {
    alert("Incorrect A/C number");
  }
});
