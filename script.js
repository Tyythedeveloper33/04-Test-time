
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
        newLegend.textContent =" Question 1: What does it generally mean when a web developer refers to frontend projects?";
       //answer 1
        newfieldset.appendChild(newAnswer1);
        newAnswer1.innerHTML = "<input type='radio' name='frontend' value='Developer's side' checked><label for='dev-side'>Developer's side </label>"
//answer 2
        newfieldset.appendChild(newAnswer2);
        newAnswer2.innerHTML = "<input type='radio' name='frontend' value='Database' checked><label for='dev-side'>Database</label>"
        //answer 3
        newfieldset.appendChild(newAnswer3);
        newAnswer3.innerHTML =  "<input type='radio' id='client' name='frontend' value='clients-side' checked><label for='dev-side'>Client's side</label>"
        var client = document.getElementById("client")
//answer4
         newfieldset.appendChild(newAnswer4);
         newAnswer4.innerHTML = "<input type='radio' id='serv' name='frontend' value='Servers' checked><label for='dev-side'>Servers</label>"
         // nextbtn
         newfieldset.appendChild(nextBtn1);
         nextBtn1.innerHTML = "<button id='next1' class='btn'>Next</button>"
         //add event listener onto next button for q1
         nextBtn1.addEventListener('click', alertndClear);
         //calls function if next button is hit for next question
          
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

 function alertndClear(){ 
    //if user checks client side button pops alert saying true otherwise wrong
    if (client.checked === true) {
    alert("correct!")
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
 //this is assigniing values to each 
    questionContainer.appendChild(newfieldset)
    newfieldset.appendChild(newLegend);
    newLegend.textContent ="Question 2: What does HTML stand for?";
   //answer 1 
    newfieldset.appendChild(newAnswer1);
    newAnswer1.innerHTML = "<input type='radio' name='HTML' value='Hyper-tag' checked><label for='Hyper-tag'>Hyper Tag Markup Language </label>"
//answer 2
    newfieldset.appendChild(newAnswer2);
    newAnswer2.innerHTML = "<input type='radio' name='HTML' value='Hyperlinks' checked><label for='Hyperlinks'>Hyperlinks Text Markup Language</label>"
    //answer 3
    newfieldset.appendChild(newAnswer3);
    newAnswer3.innerHTML =  "<input type='radio' id='linking' name='HTML' value='Hyperlinking' checked><label for='Hyperlinking'>Hyperlinking Text Markup Language</label>"
    
//answer4
     newfieldset.appendChild(newAnswer4);
     newAnswer4.innerHTML = "<input type='radio' id='Hyp-Text' name='HTML' value='Hyper-text' checked><label for='hypertext'>Hyper Text Markup Language</label>"
     // nextbtn
     newfieldset.appendChild(nextBtn1);
     nextBtn1.innerHTML = "<button id='next1' class='btn'>Next</button>"
     nextBtn1.addEventListener('click', alertndClear2);
}
function alertndClear2(){
    var HTML = document.getElementById("Hyp-Text");


//if user checks client side button pops alert saying true otherwise wrong
if (HTML.checked === true) {
    alert("correct!")
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
     //this is assigniing values to each 
        questionContainer.appendChild(newfieldset)
        newfieldset.appendChild(newLegend);
        newLegend.textContent ="Question 3:Element used as a container for some text is defined as?";
       //answer 1 
        newfieldset.appendChild(newAnswer1);
        newAnswer1.innerHTML = "<input type='radio' id='span' name='container' value='span' checked><label for='span'>span</label>"
    //answer 2
        newfieldset.appendChild(newAnswer2);
        newAnswer2.innerHTML = "<input type='radio' name='container' value='div' checked><label for='div'>div</label>"
        //answer 3
        newfieldset.appendChild(newAnswer3);
        newAnswer3.innerHTML =  "<input type='radio' id='linking' name='container' value='Style' checked><label for='style'>Style</label>"
        
    //answer4
         newfieldset.appendChild(newAnswer4);
         newAnswer4.innerHTML = "<input type='radio' id='Hyp-Text' name='container' value='container' checked><label for='container'>Container</label>"
         // nextbtn
         newfieldset.appendChild(nextBtn1);
         nextBtn1.innerHTML = "<button id='next1' class='btn'>Next</button>"
         nextBtn1.addEventListener('click', alertndClear3);
    }
    function alertndClear3(){
        var container = document.getElementById("span");
    
    
    //if user checks client side button pops alert saying true otherwise wrong
    if (container.checked === true) {
        alert("correct!")
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
         //this is assigniing values to each 
            questionContainer.appendChild(newfieldset)
            newfieldset.appendChild(newLegend);
            newLegend.textContent ="Question 4: <div> element used along together with css, can generate?";
           //answer 1 
            newfieldset.appendChild(newAnswer1);
            newAnswer1.innerHTML = "<input type='radio' id='style' name='<div>' value='style-block' checked><label for='SB'>Style Blocks</label>"
        //answer 2
            newfieldset.appendChild(newAnswer2);
            newAnswer2.innerHTML = "<input type='radio' name='<div>' value='Div-blocks' checked><label for='div-block'>Div Blocks</label>"
            //answer 3
            newfieldset.appendChild(newAnswer3);
            newAnswer3.innerHTML =  "<input type='radio'  name='<div>' value='TB' checked><label for='TB'>Table Blocks</label>"
            
        //answer4
             newfieldset.appendChild(newAnswer4);
             newAnswer4.innerHTML = "<input type='radio'  name='<div>' value='cb' checked><label for='content-block'>Content Blocks</label>"
             // nextbtn
             newfieldset.appendChild(nextBtn1);
             nextBtn1.innerHTML = "<button id='next1' class='btn'>Next</button>"
             nextBtn1.addEventListener('click', alertndClear4);
        }
        function alertndClear4(){
            var div = document.getElementById("style");
        
        
        //if user checks client side button pops alert saying true otherwise wrong
        if (div.checked === true) {
            alert("correct!")
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
     //this is assigniing values to each 
        questionContainer.appendChild(newfieldset)
        newfieldset.appendChild(newLegend);
        newLegend.textContent ="Question 5: Data type of null is a/an?";
       //answer 1 
        newfieldset.appendChild(newAnswer1);
        newAnswer1.innerHTML = "<input type='radio'  name='nully' value='function' checked><label for='function'>Function</label>"
    //answer 2
        newfieldset.appendChild(newAnswer2);
        newAnswer2.innerHTML = "<input type='radio'id='Null' name='nully' value='Object' checked><label for='object'>Object</label>"
        //answer 3
        newfieldset.appendChild(newAnswer3);
        newAnswer3.innerHTML =  "<input type='radio'  name='nully' value='Number' checked><label for='Number'>Number</label>"
        
    //answer4
         newfieldset.appendChild(newAnswer4);
         newAnswer4.innerHTML = "<input type='radio'  name='nully' value='undefined' checked><label for='undefined'>Undefined</label>"
         // nextbtn
         newfieldset.appendChild(nextBtn1);
         nextBtn1.innerHTML = "<button id='next1' class='btn'>Next</button>"
         nextBtn1.addEventListener('click', alertndClear5);
    }
    function alertndClear5(){
        var nully = document.getElementById("Null");
    
    
    //if user checks client side button pops alert saying true otherwise wrong
    if (nully.checked === true) {
        alert("correct!")
        //clears container after answering first question
        var questionContainer = document.querySelector("#question-box");
        questionContainer.innerHTML ="";
        highscore()
    
    
       } else if (nully.checked !== true) {
       alert('Wrong')
       var questionContainer = document.querySelector("#question-box");
        questionContainer.innerHTML ="";
         highscore()
    }
    
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