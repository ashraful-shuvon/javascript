document
  .getElementById("change-title-btn")
  .addEventListener("click", function () {
    const pageTitleElement = document.getElementById("page-title");

    pageTitleElement.innerHTML = "Jibonta bedona";
  });

//   handling input fields

document.getElementById("update-btn").addEventListener("click", function () {
  const nameInput = document.getElementById("input-text");
  const name = nameInput.value;

  const chnageNameEl = document.getElementById("name-text");
  chnageNameEl.innerHTML = name;
});
