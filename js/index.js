var home = document.querySelector("#dash");
var nav = document.querySelector("#nav");
var cancel = document.querySelector("#cancel");
var drops = document.querySelector("#drop-list");
if (window.location.pathname === "/index.html") {
  home.classList.add("active");
}

console.log("hey");
nav.addEventListener("click", () => {
  console.log("hey");
  drops.classList.remove("hidden");
});
cancel.addEventListener("click", () => {
  console.log("hey");
  drops.classList.add("hidden");
});
