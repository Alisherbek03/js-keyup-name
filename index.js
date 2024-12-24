import names from "./array.js";

const input = document.getElementById("search");
const list = document.getElementById("list");

function displayNames(filteredNames) {
  list.innerHTML = filteredNames.map((name) => `<li>${name}</li>`).join("");
}

function search() {
  const targetName = input.value.trim().toLowerCase();

  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(targetName)
  );

  displayNames(filteredNames);
}

input.addEventListener("input", search);

displayNames(names);
