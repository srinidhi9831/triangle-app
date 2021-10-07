var buttonIsTriangle=document.querySelector("#isTriangleButton");
  var outputIsTriangle=document.querySelector("#outputIsTriangle");
  var angleOne=document.querySelector("#angleOne");
  var angleTwo=document.querySelector("#angleTwo");
  var angleThree=document.querySelector("#angleThree");

  buttonIsTriangle.addEventListener("click",eventHandler);

  function eventHandler(){
      if(validate())
         isTriangle();
  }

  function isTriangle(){
    if((Number(angleOne.value)+Number(angleTwo.value)+Number(angleThree.value))===180){
        outputIsTriangle.innerText="angles forms a triangle"
   }
   else{
    outputIsTriangle.innerText="oops!! angles does not form a triangle";
   }
}


function validate(){
    if(angleOne.value=="" || angleTwo.value=="" || angleThree.value==""){
        alert("please fill out all the angles");
          return false;
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