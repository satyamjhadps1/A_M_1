function setup(){
    canvas = createCanvas(450, 400);
    canvas.position(410, 130);
    video = createCapture(VIDEO);
    video.size(450,400);
    video.hide();
}

function draw(){
    image(video, 0, 0, 450, 400);
}