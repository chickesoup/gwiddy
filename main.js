/*https://teachablemachine.withgoogle.com/models/HhanRNBcw/*/

function startclassification(){
navigator.mediaDevices.getUserMedia({
    audio:true
});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/NVtUGoUJ_/model.json",modelloaded)


}function modelloaded(){
    console.log("model has been loaded");
    classifier.classify(gotresults); }
function gotresults(error,results){
if (error) {
    console.log(error);

}
console.log(results);
randomnumber_r=Math.floor((Math.random()*255))+1;

randomnumber_g=Math.floor((Math.random()*255))+1;
randomnumber_b=Math.floor((Math.random()*255))+1;
document.getElementById("result_label").innerHTML="I can hear "+results[0].label;

document.getElementById("result_confidence").innerHTML="accuracy- "+(results[0].confidence*100).toFixed(2)+"%";
document.getElementById("result_label").style.color="rgb("+randomnumber_r+","+randomnumber_g+","+randomnumber_b+")";
document.getElementById("result_confidence").style.color="rgb("+randomnumber_r+","+randomnumber_g+","+randomnumber_b+")";
img1=document.getElementById("alien1");

if (results[0].label=="meow"){
    img1.src="tyrion.png";
   

}
else if (results[0].label=="woof"){
    img1.src="gwiddyforukraine.jpg";
    
}
else if (results[0].label=="moo"){
    img1.src="griddy.jpg";
 
}
else{
    img1.src="gwiddy.png";
 

}
}