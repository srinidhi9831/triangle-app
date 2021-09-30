function getScore(){
    var score=0;
    var qOne=document.getElementById("qOne").value;
    var qTwo=document.getElementById("qTwo").value;
    var qThree=document.getElementById("qThree").value;
    //if(qone=='1'){
        //document.getElementById("output-div").innerText=
    //}
    if(qOne=='1')
        score++;
    if(qTwo=='2')
       score++;
    if(qThree=='1')
        score++;

  document.getElementById("score").innerText="your score: "+ score;  
}

function getHypo(){ 
    var base=parseInt(document.getElementById("base").value);
    var height=parseInt(document.getElementById("height").value);
    var hypo= Math.sqrt(Math.pow(base,2)+Math.pow(height,2));
    var area = 0.5*base*height;
    document.getElementById("area").innerText="hypoteneous:"+hypo+"\narea:"+area;
    
}

function isTriangle(){
    var angleOne=parseInt(document.getElementById("angleOne").value);
    var angleTwo=parseInt(document.getElementById("angleTwo").value);
    var angleThree=parseInt(document.getElementById("angleThree").value);
    console.log((angleOne+angleTwo+angleThree))
    if((angleOne+angleTwo+angleThree)===180){
        document.getElementById("isTriangle").innerText="Angle forms a triangle";
   }
   else{
    document.getElementById("isTriangle").innerText="oops angle does not forms a triangle!!";
   }
}