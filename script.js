
// assiging a variable to specifically  target our genate button have to add btn because generate button has a class off btn
var startQuizBtn = document.querySelector("#startQuiz")
console.log("button ", startQuizBtn);
var timerElement = document.querySelector("#time");
//when you click the start button it will call for the startTest function
startQuizBtn.addEventListener("click", startTest);
//this function is what is triggered by hitting the generate button but it triggers another function with if statements
function startTest(){
    // timer to start
    timer();
    // clear our question box container
        // - target our container
        var questionContainer = document.querySelector("#question-box");
        // - remove or clear all contents
        questionContainer.innerHTML = "";

        // OPTION # 1 - We Dynamically create all our new elements and append them to the screen
        // --> first we have to create the element
        var newTitle = document.createElement('h1');
        // --> then we add ATTRIBUTES, CLASSES and DATA VALUES to the element
        newTitle.textContent = "What does it generally mean when a web developer refers to frontend projects?";

        var choice1 = document.createElement("button");
        choice1.textContent = "Servers";
        var choice2 = document.createElement("button");
        choice2.textContent = "Client Side";
        var choice3 = document.createElement("button");
        choice3.textContent = "Database";
        var choice4 = document.createElement("button");
        choice4.textContent = "Developers Side";

        // How do we CAPTURE the USERS selection(?)
             // --> shoud we add eventlisteners to each button(?)
             // --> should we add (event bubbling) a listener to the container(?)

        // APPEND the new elements to the PAGE(dom)
        questionContainer.append(newTitle);
        questionContainer.append(choice4);
        questionContainer.append(choice3);
        questionContainer.append(choice2);
        questionContainer.append(choice1);
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