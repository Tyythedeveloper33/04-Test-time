
// assiging a variable to specifically  target our genate button have to add btn because generate button has a class off btn
var startQuizBtn = document.querySelector("#startQuiz")

var timerElement = document.querySelector("#time");
var answer = document.querySelector("#fieldset");
var answer1 = document.querySelector("#answer-1");
var answer2 = document.querySelector("#answer-2");
var answer3 = document.querySelector("#answer-3");
var answer4 =document.querySelector("#answer-4");
var submitBtn =document.querySelector("#submit");
// declare and initialize the global variable
var correctAnswerCount = 0;




// define the event listener function
function handleAnswerSelection(event){
    //check if the selected answer is correct
    if(event.target.value === 'correct'){
        //increment the global variable
        correctAnswerCount++;
        // update ui elements if needed 
        console.log('correct answers: ' + correctAnswerCount);
    }
}
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
        questionContainer.appendChild(newfieldset);
        newfieldset.appendChild(newLegend);
        newLegend.textContent = "Question 1: What does it generally mean when a web developer refers to frontend projects?";
        // answer 1
        newfieldset.appendChild(newAnswer1);
        newAnswer1.innerHTML = "<input type='radio' name='frontend' value='Developer&#39;s side' id='dev-side'><label for='dev-side'>Developer&#39;s side</label>";
        // answer 2
        newfieldset.appendChild(newAnswer2);
        newAnswer2.innerHTML = "<input type='radio' name='frontend' value='Database' id='database'><label for='database'>Database</label>";
        // answer 3
        newfieldset.appendChild(newAnswer3);
        newAnswer3.innerHTML = "<input type='radio' id='client' name='frontend' value='correct'><label for='client'>Client's side</label>";
        // answer 4
        newfieldset.appendChild(newAnswer4);
        newAnswer4.innerHTML = "<input type='radio' id='serv' name='frontend' value='Servers'><label for='serv'>Servers</label>";
        // nextBtn
        newfieldset.appendChild(nextBtn1);
        nextBtn1.innerHTML = "<button id='next1' class='btn'>Next</button>";

    //attach event listeners to radio buttons

      
        
         //add event listener onto next button for q1
         nextBtn1.addEventListener('click', alertndClear);
  }

 function alertndClear(){ 

    //if null is checked get alert & restart function for q1
  
  
    
  
    //if user checks client side button pops alert saying true otherwise wrong
    if (client.checked === true) {
    alert("correct!")
     //increment the global variable
     correctAnswerCount++;
     // update ui elements if needed 
     console.log('correct answers: ' + correctAnswerCount);
    //clears container after answering first question
   if(client.checked === true){
    var questionContainer = document.querySelector("#question-box");
    questionContainer.innerHTML ="";
    nextq2()
   }
   } else if (client.checked !== true) {
   alert('Wrong')
   var questionContainer = document.querySelector("#question-box");
    questionContainer.innerHTML ="";
     nextq2()
}
}   

//brings question 2 defines variables again for q2
function nextq2(){
    var newfieldset = document.createElement('fieldset');
    var newLegend = document.createElement("legend");
    var newAnswer1 = document.createElement("div")
    var newAnswer2 = document.createElement("div")
    var newAnswer3 = document.createElement("div")
    var newAnswer4 = document.createElement("div")
    var nextBtn1 = document.createElement("div")
    var questionContainer = document.querySelector("#question-box")
    //This is assigning values to each
    questionContainer.appendChild(newfieldset);
    newfieldset.appendChild(newLegend);
    newLegend.textContent = "Question 2: What does HTML stand for?";
    // answer 1
    newfieldset.appendChild(newAnswer1);
    newAnswer1.innerHTML = "<input type='radio' name='HTML' value='Hyper-tag' id='Hyper-tag'><label for='Hyper-tag'>Hyper Tag Markup Language</label>";
    // answer 2
    newfieldset.appendChild(newAnswer2);
    newAnswer2.innerHTML = "<input type='radio' name='HTML' value='Hyperlinks' id='Hyperlinks'><label for='Hyperlinks'>Hyperlinks Text Markup Language</label>";
    // answer 3
    newfieldset.appendChild(newAnswer3);
    newAnswer3.innerHTML = "<input type='radio' id='linking' name='HTML' value='Hyperlinking'><label for='linking'>Hyperlinking Text Markup Language</label>";
    // answer 4
    newfieldset.appendChild(newAnswer4);
    newAnswer4.innerHTML = "<input type='radio' id='Hyp-Text' name='HTML' value='correct'><label for='Hyp-Text'>Hyper Text Markup Language</label>";
    // nextBtn
    newfieldset.appendChild(nextBtn1);
    nextBtn1.innerHTML = "<button id='next1' class='btn'>Next</button>";

    //attach event listeners to radio buttons

    
//add event listener onto next button for q2
     nextBtn1.addEventListener('click', alertndClear2);
}
function alertndClear2(){
    var HTML = document.getElementById("Hyp-Text");


//if user checks client side button pops alert saying true otherwise wrong
if (HTML.checked === true) {
    alert("correct!")
     //increment the global variable
     correctAnswerCount++;
     // update ui elements if needed 
     console.log('correct answers: ' + correctAnswerCount);
    //clears container after answering first question
    var questionContainer = document.querySelector("#question-box");
    questionContainer.innerHTML ="";
    nextq3()


   } else if (HTML.checked !== true) {
   alert('Wrong')
   var questionContainer = document.querySelector("#question-box");
    questionContainer.innerHTML ="";
     nextq3()
}



    }
     //brings question 3 defines variables again for q3
     function nextq3(){
        var newfieldset = document.createElement('fieldset');
        var newLegend = document.createElement("legend");
        var newAnswer1 = document.createElement("div")
        var newAnswer2 = document.createElement("div")
        var newAnswer3 = document.createElement("div")
        var newAnswer4 = document.createElement("div")
        var nextBtn1 = document.createElement("div")
        var questionContainer = document.querySelector("#question-box")
        //This is assigning values to each
        questionContainer.appendChild(newfieldset);
        newfieldset.appendChild(newLegend);
        newLegend.textContent = "Question 3: Element used as a container for some text is defined as?";
        // answer 1
        newfieldset.appendChild(newAnswer1);
        newAnswer1.innerHTML = "<input type='radio' id='span' name='container' value='correct' checked><label for='span'>span</label>";
        // answer 2
        newfieldset.appendChild(newAnswer2);
        newAnswer2.innerHTML = "<input type='radio' name='container' value='div' id='div'><label for='div'>div</label>";
        // answer 3
        newfieldset.appendChild(newAnswer3);
        newAnswer3.innerHTML = "<input type='radio' id='style' name='container' value='Style'><label for='style'>Style</label>";
        // answer 4
        newfieldset.appendChild(newAnswer4);
        newAnswer4.innerHTML = "<input type='radio' id='container' name='container' value='container'><label for='container'>Container</label>";
        // nextBtn
        newfieldset.appendChild(nextBtn1);
        nextBtn1.innerHTML = "<button id='next1' class='btn'>Next</button>";

        //attach event listeners to radio buttons

        //add event listener onto next button for q3
         nextBtn1.addEventListener('click', alertndClear3);
    }
    function alertndClear3(){
        var container = document.getElementById("span");
    
    
    //if user checks client side button pops alert saying true otherwise wrong
    if (container.checked === true) {
        alert("correct!")
         //increment the global variable
         correctAnswerCount++;
         // update ui elements if needed 
         console.log('correct answers: ' + correctAnswerCount);
        //clears container after answering first question
        var questionContainer = document.querySelector("#question-box");
        questionContainer.innerHTML ="";
        nextq4()
    
    
       } else if (container.checked !== true) {
       alert('Wrong')
       var questionContainer = document.querySelector("#question-box");
        questionContainer.innerHTML ="";
         nextq4()
    }
    
    
    
        }
//question 4
        function nextq4(){
            var newfieldset = document.createElement('fieldset');
            var newLegend = document.createElement("legend");
            var newAnswer1 = document.createElement("div")
            var newAnswer2 = document.createElement("div")
            var newAnswer3 = document.createElement("div")
            var newAnswer4 = document.createElement("div")
            var nextBtn1 = document.createElement("div")
            var questionContainer = document.querySelector("#question-box")
           // This is assigning values to each
questionContainer.appendChild(newfieldset);
newfieldset.appendChild(newLegend);
newLegend.textContent = "Question 4: <div> element used along together with CSS can generate?";
// answer 1
newfieldset.appendChild(newAnswer1);
newAnswer1.innerHTML = "<input type='radio' id='style' name='div' value='correct' checked><label for='style'>Style Blocks</label>";
// answer 2
newfieldset.appendChild(newAnswer2);
newAnswer2.innerHTML = "<input type='radio' name='div' value='Div-blocks' id='div-block'><label for='div-block'>Div Blocks</label>";
// answer 3
newfieldset.appendChild(newAnswer3);
newAnswer3.innerHTML = "<input type='radio' name='div' value='TB' id='TB'><label for='TB'>Table Blocks</label>";
// answer 4
newfieldset.appendChild(newAnswer4);
newAnswer4.innerHTML = "<input type='radio' name='div' value='cb' id='content-block'><label for='content-block'>Content Blocks</label>";
// nextBtn
newfieldset.appendChild(nextBtn1);
nextBtn1.innerHTML = "<button id='next1' class='btn'>Next</button>";

//attach event listeners to radio buttons


            //add event listener onto next button for q4
             nextBtn1.addEventListener('click', alertndClear4);
        }
        function alertndClear4(){
            var div = document.getElementById("style");
        
        
        //if user checks client side button pops alert saying true otherwise wrong
        if (div.checked === true) {
            alert("correct!")
             //increment the global variable
        correctAnswerCount++;
        // update ui elements if needed 
        console.log('correct answers: ' + correctAnswerCount);
            //clears container after answering first question
            var questionContainer = document.querySelector("#question-box");
            questionContainer.innerHTML ="";
            nextq5()
        
        
           } else if (div.checked !== true) {
           alert('Wrong')
           var questionContainer = document.querySelector("#question-box");
            questionContainer.innerHTML ="";
             nextq5()
        }
        
            }
            //question 5

    function nextq5(){
        var newfieldset = document.createElement('fieldset');
        var newLegend = document.createElement("legend");
        var newAnswer1 = document.createElement("div")
        var newAnswer2 = document.createElement("div")
        var newAnswer3 = document.createElement("div")
        var newAnswer4 = document.createElement("div")
        var nextBtn1 = document.createElement("div")
        var questionContainer = document.querySelector("#question-box")
        //This is assigning values to each
        questionContainer.appendChild(newfieldset);
        newfieldset.appendChild(newLegend);
        newLegend.textContent = "Question 5: Data type of null is a/an?";
        // answer 1
        newfieldset.appendChild(newAnswer1);
        newAnswer1.innerHTML = "<input type='radio' name='nully' value='function' id='function'><label for='function'>Function</label>";
        // answer 2
        newfieldset.appendChild(newAnswer2);
        newAnswer2.innerHTML = "<input type='radio' id='Null' name='nully' value='correct'><label for='Null'>Object</label>";
        // answer 3
        newfieldset.appendChild(newAnswer3);
        newAnswer3.innerHTML = "<input type='radio' name='nully' value='Number' id='Number'><label for='Number'>Number</label>";
        // answer 4
        newfieldset.appendChild(newAnswer4);
        newAnswer4.innerHTML = "<input type='radio' name='nully' value='undefined' id='undefined'><label for='undefined'>Undefined</label>";
        // nextBtn
        newfieldset.appendChild(nextBtn1);
        nextBtn1.innerHTML = "<button id='next1' class='btn'>Next</button>";


        //attach event listeners to radio buttons

      
         //add event listener onto next button for q5
         nextBtn1.addEventListener('click', alertndClear5);
    }
    function alertndClear5(){
        var nully = document.getElementById("Null");
    
    
    //if user checks client side button pops alert saying true otherwise wrong
    if (nully.checked === true) {
        alert("correct!")
         //increment the global variable
         correctAnswerCount++;
         // update ui elements if needed 
         console.log('correct answers: ' + correctAnswerCount);
        //clears container after answering first question
        var questionContainer = document.querySelector("#question-box");
        questionContainer.innerHTML ="";
      getPercent();
    
    
       } else if (nully.checked !== true) {
       alert('Wrong')
       var questionContainer = document.querySelector("#question-box");
        questionContainer.innerHTML ="";
        getPercent()
    }
    
        }
       function getPercent() {
        var score ;
if(correctAnswerCount=== null) {
    score = 0;
}else{
    score = correctAnswerCount * 20;
}
       console.log('score: ' + score + ' % ');
       prompt('What is your nickname??')
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