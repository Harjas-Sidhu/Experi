let grid = document.getElementsByClassName("grid")[0];

for(let i  = 0; i < 37; i++){
    let line = document.createElement("div");
    line.classList.add("line");
    line.style.transform = `rotate(${i * 5}deg)`;
    grid.appendChild(line);
}

for(let i = 0; i < 25; i++){
    let base_line = document.createElement("div");
    base_line.classList.add("base_line");
    base_line.style.transform = `translateY(${i * 2}vh)`;
    grid.appendChild(base_line);
}