noseX=0
noseY=0
function preload()
{
   
}
function setup()
{
    canvas = createCanvas(300,300)
    canvas.center()
   video = createCapture(VIDEO);
   video.size(300,300);
   video.hide();
   poseNet= ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}
function gotPoses(results)
{
    if(results.length>0)
    {
        
    console.log(results)
    noseX = results[0].pose.nose.x
    noseY = results[0].pose.nose.y
    console.log("nose x =" + noseX)
    console.log("nose Y =" + noseY)
    
    
}
}
function modelLoaded()
{
    console.log('posenet is intialized');
}
   


function draw()
{
image(video,0,0,300,300)
circle( noseX,noseY,20,20)
fill(255,0,0)
stroke(255,0,0)
}
function take_snapshot()
{
    save('myFilterImage.png');
}