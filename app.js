const container = document.querySelector(".container");
const output = document.querySelector(".output");
const range = document.querySelector(".size");
let n = parseInt(range.value);

function addGrids(n, container) {
  const sizeContainer = getComputedStyle(container);
  const width = parseInt(sizeContainer.width);
  const height = parseInt(sizeContainer.height);

  for (i = 0; i < n * n; i++) {
    let square = document.createElement("div");
    square.style.width = `${width / n}px`;
    square.style.height = `${height / n}px`;
    square.classList.add("square");
    container.appendChild(square);
  }
  const squares = container.querySelectorAll(".square");
  squares.forEach((squares) => squares.addEventListener("mouseover", getColor));
}

function getColor(e) {
  let square = e.target;
  let blue = Math.floor(Math.random() * 256 + 1);
  let green = Math.floor(Math.random() * 256 + 1);
  let red = Math.floor(Math.random() * 256 + 1);
  return (square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`);
}

//default size
addGrids(n, container);

//Event listeners
range.addEventListener("input", () => (output.value = range.value));
range.addEventListener("mouseup", () => (n = parseInt(range.value)));
range.addEventListener("click", () => {
  const squares = container.querySelectorAll(".square");
  squares.forEach((squares) => squares.remove());
  addGrids(n, container);
});
document.querySelector(".reset").addEventListener("click", () => {
  location.reload();
});
