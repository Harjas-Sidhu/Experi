let base_num = 0.1;
let theta_num = 1;
let scale_num = 1;

let point = document.getElementsByClassName("point")[0];

const grid = document.getElementsByClassName("grid")[0];

for (let i = 0; i < 37; i++) {
    let line = document.createElement("div");
    line.classList.add("line");
    line.style.transform = `rotate(${i * theta_num}deg)`;
    grid.appendChild(line);
    theta_num += 0.04;
}

theta_num = 1;

for (let i = 0; i < 37; i++) {
    let line = document.createElement("div");
    line.classList.add("line");
    line.style.transform = `rotate(calc(180deg - ${i * theta_num}deg))`;
    grid.appendChild(line);
    theta_num += 0.04;
}


for (let i = 1; i < 100; i++) {
    let base_line = document.createElement("div");
    base_line.classList.add("base_line");
    base_line.style.transform = `translateY(${i * base_num}vh)`;
    grid.appendChild(base_line);
    base_num += 0.01;
}


base_num = 0.1;

let animate = () => {
    let base_lines = document.getElementsByClassName("base_line");

    for (let i = 0; i < base_lines.length; i++) {
        if ((i + 1) * base_num * 2 < 100 && scale_num < 229) {
            base_lines[i].style.transform = `translateY(calc(${i + 1} * ${base_num}vh))`;
            point.style.transform = `scale(${scale_num})`;
        }
        else {
            base_lines[i].remove();
            let base_line = document.createElement("div");
            base_line.classList.add("base_line");
            grid.appendChild(base_line);
        }
    }

    base_num += 0.005;
    scale_num += 0.1;
    requestAnimationFrame(animate);
}

animate();
