statuss = ""; 
function preload(){
    img= loadImage("dogcat.png");
}
function setup(){
    canvas = createCanvas(640,320);
    canvas.position(350,200);
    objectdetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status = Detecting objects..."
}
function draw(){
    image(img,0,0,640,320);
}
function modelLoaded(){
    console.log("Model Loaded!")
    statuss="true";
    objectdetector.detect(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    } else{
        console.log(results);
    }
}