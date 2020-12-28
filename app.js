main();

document.querySelector(".reset").addEventListener("click", () => {
  location.reload();
});

function main() {
  let n = parseInt(prompt("Choose a number", 16)); // prompt for the first time or every time the number is between 0 and 100

  while (n <= 0 || n > 100) {
    alert("Please choose a number between 1 and 100");
    n = parseInt(prompt("Choose a number", 16)); // prompt when number is not between 0 and 100
  }

  const container = document.querySelector(".container");
  addGrids(n, container);
  container.addEventListener("mouseover", getColor);
}

function addGrids(n, container) {
  for (i = 0; i < n * n; i++) {
    let square = document.createElement("div");
    square.style.width = `${960 / n}px`;
    square.style.height = `${500 / n}px`;
    square.classList.add("square");
    container.appendChild(square);
  }
}

function getColor(e) {
  let square = e.target;
  let blue = Math.floor(Math.random() * 256 + 1);
  let green = Math.floor(Math.random() * 256 + 1);
  let red = Math.floor(Math.random() * 256 + 1);
  return (square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`);
}
