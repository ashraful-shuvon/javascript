// const items = document.getElementsByClassName("item");
// for (const item of items) {
//   item.addEventListener("click", function (e) {
//     e.target.parentNode.removeChild(e.target);
//   });
// }
document
  .getElementById("item-container")
  .addEventListener("click", function (e) {
    e.target.parentNode.removeChild(e.target);
  });

document.getElementById("btn-add-item").addEventListener("click", function (e) {
  const ol = document.getElementById("item-container");
  const li = document.createElement("li");
  li.innerText = "new item";
  li.classList.add("item");
  ol.appendChild(li);
});
