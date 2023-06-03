bed="";
Status="";
objects=[];
 function preload(){
    bed=loadImage("Bedroom.png");
}

function setup(){
    canvas=createCanvas(450,300);
    canvas.center();
    objectDetector=ml5.objectDetector('cocussd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function draw(){
    image(bed,0,0,450,300);
    
    if(Status!=""){
        for(i=0; i<objects.length; i++){
           document.getElementById("status").innerHTML="Status:Object Detected";
document.getElementById("no.of_objects").innerHTML="There are 4 objects from which cocussd model has detected  2 objects";
           fill("#FF0000");
           percent=floor(objects[i].confidence*100);
           text(objects[i].label+" "+percent+"%", objects[i].x-50,objects[i].y-73);
           noFill();
           stroke("#FF0000");
           rect(objects[i].x-99, objects[i].y -70, objects[i].width, objects[i].height);
        }
    }
}

function modelLoaded(){
console.log("Cocussd is intialized");
Status=true;
objectDetector.detect(bed,gotResult);
}

function gotResult(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    objects=results;
}
}