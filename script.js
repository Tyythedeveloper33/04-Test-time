
// assiging a variable to specifically  target our genate button have to add btn because generate button has a class off btn
var startQuizBtn = document.querySelector("#startQuiz")
console.log("button ", startQuizBtn);
var timerElement = document.querySelector("#time");
var answer = document.querySelector("#fieldset");
var answer1 = document.querySelector("#answer-1");
var answer2 = document.querySelector("#answer-2");
var answer3 = document.querySelector("#answer-3");
var answer4 =document.querySelector("#answer-4");
var submitBtn =document.querySelector("#submit");
//when you click the start button it will call for the startTest function
startQuizBtn.addEventListener("click", startTest);
//this function is what is triggered by hitting the generate button but it triggers another function with if statements
function startTest(){
    var newfieldset = document.createElement('fieldset');
    var newLegend = document.createElement("legend");
    var newAnswer1 = document.createElement("div")
    var newAnswer2 = document.createElement("div")
    var newAnswer3 = document.createElement("div")
    var newAnswer4 = document.createElement("div")
    var nextBtn1 = document.createElement("div")
    
    // timer to start
    timer();
    // clear our question box container
        // - target our container
        var questionContainer = document.querySelector("#question-box");
        // - remove or clear all contents
        questionContainer.innerHTML ="";
        //add text content for q1
        questionContainer.appendChild(newfieldset)
        newfieldset.appendChild(newLegend);
        newLegend.textContent ="What does it generally mean when a web developer refers to frontend projects?";
       //answer 1
        newfieldset.appendChild(newAnswer1);
        newAnswer1.innerHTML = "<input type='radio' name='frontend' value='Developer's side' checked><label for='dev-side'>Developer's side </label>"
//answer 2
        newfieldset.appendChild(newAnswer2);
        newAnswer2.innerHTML = "<input type='radio' name='frontend' value='Database' checked><label for='dev-side'>Database</label>"
        //answer 3
        newfieldset.appendChild(newAnswer3);
        newAnswer3.innerHTML =  "<input type='radio' id='q1' name='frontend' value='client's-side' checked><label for='dev-side'>Client's side</label>"
//answer4
         newfieldset.appendChild(newAnswer4);
         newAnswer4.innerHTML = "<input type='radio' id='q1' name='frontend' value='Servers' checked><label for='dev-side'>Servers</label>"
         // nextbtn
         newfieldset.appendChild(nextBtn1);
         nextBtn1.innerHTML = "<button id='q1' class='btn'>Next</button>"
        // OPTION # 1 - We Dynamically create all our new elements and append them to the screen
        // --> first we have to create the element
       
        // --> then we add ATTRIBUTES, CLASSES and DATA VALUES to the element
        //newTitle.textContent = (q1);

       //var choice1 = document.createElement("button");
      //  choice1.textContent = "Servers";
       // var choice2 = document.createElement("button");
       // choice2.textContent = "Client Side";
       // var choice3 = document.createElement("button");
       // choice3.textContent = "Database";
       // var choice4 = document.createElement("button");
        //choice4.textContent = "Developers Side";

        // How do we CAPTURE the USERS selection(?)
             // --> shoud we add eventlisteners to each button(?)
             // --> should we add (event bubbling) a listener to the container(?)

        // APPEND the new elements to the PAGE(dom)
       // questionContainer.appendChild(newTitle);
       // questionContainer.append(choice4);
       // questionContainer.append(choice3);
       // questionContainer.append(choice2);
       // questionContainer.append(choice1);
    // display first question set

    // -- OPTION # 2 -- //
        // --> we grab refernece to each item on the DOM we want to update

        // --> Update the elements CONTENT based on the question data set


   // var test = generateTest();
   // var TestText =document.querySelector("#question-box");
   // TestText.value = test;
  
  }

// Time Placeholder (global)
var countdown = 150;


function timer() {
   var interval = setInterval(function() {
       // console.log("Count: ", countdown);
        // Update our countdown variable value
        countdown = countdown - 1;
        // countdown--
        // Let's update the value on the DOM (Browser)
        timerElement.textContent = countdown;
        // Condition to TEST if we ran out of time 
        if(countdown === 0) {
            console.log("Timer Expired...");
            clearInterval(interval);
        }

    }, 1000)

}