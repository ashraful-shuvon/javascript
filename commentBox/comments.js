document.getElementById("btn-comment").addEventListener("click", function () {
  const commentElement = document.getElementById("comment-box");
  const newComment = commentElement.value;

  const commentContainer = document.getElementById("comment-container");

  const newPara = document.createElement("p");
  newPara.classList.add("comment");
  newPara.innerText = newComment;
  commentContainer.appendChild(newPara);

  commentElement.value = "";
});
