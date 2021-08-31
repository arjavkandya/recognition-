function setup(){
    canvas=createCanvas(400,250);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,350,250);
}