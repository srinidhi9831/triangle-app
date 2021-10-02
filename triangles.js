const answers=['90°','right angled'];
output=document.querySelector("#quizOutput")
quizButton = document.querySelector("#quizScore");

quizButton.addEventListener("click",getScore);


function getScore() {
 
    const Results =  new FormData(formvalue);

    let score = 0,
      index = 0;
    for (let value of Results.values()) {
      if (value === answers[index]) {
        score = score + 1;
      }
      index++;
    }
    output.innerText ="The score is " + score;
  }
