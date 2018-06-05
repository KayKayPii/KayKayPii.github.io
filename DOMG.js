

let body = document.querySelector("body");

let div = document.createElement("div");
div.classList.add("container");
body.appendChild(div);
let diva = document.querySelector("div");
let container = document.querySelector(".container");
container.style.display="grid";
container.style.textAlign="center";

let n = 16;
let w = Math.floor(100/16);
let string = "";
let z = 1;

for (z; z<=n; z++){
    string = string + w + "%";
}

container.style.gridTemplateColumns=string;

let x = 1;
let y = 1;

for (x; x<=16; x++){
    for (y; y<=16; y++){
        const abc = document.createElement("abc");
        let number = ((x-1)*16+y);
        abc.style.border = "0px solid black";
        abc.style.paddingTop = "100%";
        abc.style.backgroundColor = "lightpink";
        abc.id = `box${number}`;
        diva.appendChild(abc);
    }
    y = 1;
}



let abcs = document.querySelectorAll("abc");



abcs.forEach(function(abc){
    abc.addEventListener('mouseover',function(e){
        const boxy = document.querySelector(`#${this.id}`);
        boxy.style.backgroundColor = "lightgreen";
    });
});

function createBoard(size){
    body = document.querySelector("body");

    div = document.createElement("div");
    div.classList.add("container");
    body.appendChild(div);
    const diva = document.querySelector("div");
    const container = document.querySelector(".container");
    container.style.display="grid";
    container.style.textAlign="center";

    let n = size;
    let w = Math.floor(100/size);
    let string = "";
    let z = 1;

    for (z; z<=n; z++){
        string = string + w + "%";
    }

    container.style.gridTemplateColumns=string;

    let x = 1;
    let y = 1;

    for (x; x<=size; x++){
        for (y; y<=size; y++){
            const abc = document.createElement("abc");
            let number = ((x-1)*size+y);
            abc.style.border = "0.5px dotted black";
            abc.style.paddingTop = "100%";
            abc.style.backgroundColor = "white";
            abc.style.opacity = 0;
            abc.id = `box${number}`;
            diva.appendChild(abc);
        }
        y = 1;
    }

    let abcs = document.querySelectorAll("abc");



    abcs.forEach(function(abc){
        abc.addEventListener('mouseover',function(e){
            const boxy = document.querySelector(`#${this.id}`);
            let r = Math.floor(Math.random()*255);
            let g = Math.floor(Math.random()*255);
            let b = Math.floor(Math.random()*255);
            boxy.style.backgroundColor = `rgb(${r},${g},${b})`;
            //boxy.style.backgroundColor = "black";
            let opa = parseFloat(boxy.style.opacity);
            opa = opa+0.1;
            boxy.style.opacity = `${opa}`;
    });
    });
    
}


function resetBoard(){
    let body = document.querySelector("body");
    let diva = document.querySelector("div");
    body.removeChild(diva);
    let size = prompt("Enter the Canvas Size. Numbers only please!");
    createBoard(size);
}

const button = document.querySelector("button");

button.onclick = resetBoard;