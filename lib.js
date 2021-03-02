export function createCanvas(width, height, parent = document.body) {
    let canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    parent.appendChild(canvas);

    return canvas;
}

export function createCanvas2D(width, height, parent) {
    let canvas = createCanvas(width, height, parent);
    let ctx = canvas.getContext("2d");

    return { canvas, ctx };
}