let base_num = 0.1;
let theta_num = 1;

let grid = document.getElementsByClassName("grid")[0];

for(let i  = 0; i < 37; i++){
    let line = document.createElement("div");
    line.classList.add("line");
    line.style.transform = `rotate(${i * theta_num}deg)`;
    grid.appendChild(line);
    theta_num += 0.04;
}

theta_num = 1;

for(let i  = 0; i < 37; i++){
    let line = document.createElement("div");
    line.classList.add("line");
    line.style.transform = `rotate(calc(180deg - ${i * theta_num}deg))`;
    grid.appendChild(line);
    theta_num += 0.04;
}

for(let i = 1; i < 50; i++){
    let base_line = document.createElement("div");
    base_line.classList.add("base_line");
    base_line.style.transform = `translateY(${i * base_num}vh)`;
    grid.appendChild(base_line);
    base_num += 0.08;
}