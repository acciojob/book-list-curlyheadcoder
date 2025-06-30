//your JS code here. If required.
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const isbnInput = document.getElementById("isbn");
const submitBtn = document.getElementById("submit");
const listBody = document.getElementById("book-list");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const isbn = isbnInput.value.trim();

  if (!title || !author || !isbn) {
    alert("Please fill in all fields.");
    return;
  }

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete">X</button></td>
  `;
  listBody.appendChild(tr);
  titleInput.value = "";
  authorInput.value = "";
  isbnInput.value = "";
});

listBody.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.closest("tr").remove();
  }
});
