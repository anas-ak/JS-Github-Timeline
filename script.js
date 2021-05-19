let grid = document.querySelector(".grid");
let select = document.querySelector("select");

for(let i = 0; i < 360; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    grid.appendChild(box);
}

const animation = (anim, direction, removeClass, removeClass2) => {
    let box = document.querySelectorAll(".box");
    
    for(let i = 0; i < box.length; i++) {
        box[i].style.animationDelay = `${i * 0.02}s`;
        box[i].classList.add(anim);
        box[i].classList.remove(removeClass);
        grid.style.flexDirection = direction;
    }
};

select.addEventListener("change", (e) => {
    if(select.value === 'ltr') {    // Left To Right
        animation("anim-1", "column", "anim-2", "anim-3");
    } else if (select.value === "ttb") {    // Top To Bottom
        animation("anim-1", "row", "anim-2", "anim-3");
    } else if (select.value === 'gs') {     // Grayscale
        animation("anim-2", "column", "anim-1", "anim-3");
    } else {
        animation("anim-3", "column", "anim-2", "anim-1");
    }
});

// Trigger Default Animtion
animation("anim-1", "column", "anim-2", "anim-3");