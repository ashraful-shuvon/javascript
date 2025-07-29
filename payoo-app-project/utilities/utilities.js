function getInputValueById(id) {
  const value = document.getElementById(id).value;
  const convertedValue = parseFloat(value);
  return convertedValue;
}

function getInputByInnerText(id) {
  const value = document.getElementById(id).innerText;
  const convertedValue = parseFloat(value);
  return convertedValue;
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value.toFixed(2);
}

function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}
