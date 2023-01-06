mustacheX = 0
mustacheY = 0

function setup() {
    canvas = createCanvas(400,300);
    canvas.center()
    video = createCapture(VIDEO);
video.size(400,300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses );
}

function draw() {
image(video , 0 , 0 , 400 , 300);
image(mustache , mustacheX -40 , mustacheY - 5, 70,70)
}

function preload() {
mustache = loadImage('https://i.postimg.cc/mkzRXYxf/mustchio.png')
}

function modelLoaded() {
    console.log("PoseNet is intialised")
}

function gotPoses(results) {
    if (results.length > 0 ) {
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y)
    
    mustacheX = results[0].pose.nose.x;
    mustacheY = results[0].pose.nose.y;
}
    }
    
    function filterclick() {
        save('mustache.png')
        }