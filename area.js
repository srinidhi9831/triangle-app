
var base = document.querySelector("#base");
var height = document.querySelector("#height");
var buttonArea=document.querySelector("#buttonArea");
var outputArea=document.querySelector("#outputArea");

buttonArea.addEventListener("click",eventHandler);


function eventHandler(){
    if(validate())
      getArea();
}

function getArea(){
    var area = 0.5*base.value*height.value;
    outputArea.innerText="Area= " + area.toFixed(2);   
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
