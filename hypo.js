var base = document.querySelector("#base");
var height = document.querySelector("#height");
var buttonHypo=document.querySelector("#buttonHypo");
var outputHypo=document.querySelector("#outputHypo");

buttonHypo.addEventListener("click",eventHandler)

function eventHandler(){
    if(validate())
      getHypo();
}

function getHypo(){ 
    console.log("hello")
    var hypo= Math.sqrt(Math.pow(base.value,2)+Math.pow(height.value,2));
   
    outputHypo.innerText="Hypoteneous= " + hypo.toFixed(2);
    
 }

 function validate(){
     if(base.value=="" || height.value==""){
         alert("please fill out all the details")
         return false
     }
     else if(base.value<0 || height.value<0){
         alert("please input number greater than 0");
         return false
     }
     else if(isNaN(base.value) || isNaN(height.value)){
         alert("please input numbers only");
         return false;
     }
     else{
         return true;
     }
 }