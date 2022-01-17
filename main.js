leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function setup()
{
    canvas=createCanvas(550,500);
    canvas.position(550,300);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log("Model Loaded");
}

function info()
{
    document.getElementById("inf").innerHTML="<div class= " + "'" +  "alert alert-info alert-dismissible fade show" + "'" + ">" + "<button type=" + "'" + "button" + "'" + "class=" + "'" + "btn-close" + "data-bs-dismiss=" + "'" + "alert" + "'" + ">" + "Bring Left hand wrist to play Peter pan and  Right hand wrist to play Harry potter theme" + "</button>"  + "</div>" ;
                                                                  
                                                        
}
function ok()
{
    document.getElementById("inf").innerHTML="";                                                               
                                                        
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("Left wrist's X position =" + leftWristX + " and Y  is " + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right wrist x is " + rightWristX + " and right wrist y is " + rightWristY);
    }
}