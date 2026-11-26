// this my comments on my navigation that open navigation and close :

/* here it open  my navigation */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";}
        document.getElementById("main").style.width = "250px";

// here it close side navigation //

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";}
    document.getElementById("main").style.width = "0";


 // my comments sections Goal Planner 
 // Form My Form Control Size for enter
 //  goal and sumbit it or write my goal planer it giev the list of suggestions  // 

 // 1. here is my comments my javascrip find the HTML elements using their IDs //
  const goalInput = document.getElementById("mygoals");
  const createButton = document.getElementById("createplanbutton");
  const outputArea = document.getElementById("createmygoal");

// --- 3. Goal Planner Button Click Event ---
createButton.addEventListener("click", function () {
  const userGoal = goalInput.value.trim().toLowerCase();

  if (userGoal === "") {
    outputArea.innerHTML = "<p class='text-danger text-center'>Please enter a goal first!</p>";
  } else if (userGoal.includes("grade")) {
    outputArea.innerHTML = `
      <h4>Suggested Grade Plan:</h4>
      <ul>
        <li>Review your class notes for 30 minutes every day.</li>
        <li>Break big assignments into smaller daily tasks.</li>
        <li>Ask your teacher or a tutor for help on tough topics.</li>
      </ul>
    `;
  } else if (userGoal.includes("money")) {
    outputArea.innerHTML = `
      <h4>Suggested Money Plan:</h4>
      <ul>
        <li>Track everything you spend for one full week.</li>
        <li>Set aside a small amount of money into savings each week.</li>
        <li>Cut back on one extra expense like eating out.</li>
      </ul>
    `;
    // here is where I can add more suggestions here for example this for health.but"
    // also let me explan what each code does here: else if
    // here This tells JavaScript: "If the previous condition was not true, 
    // check this new condition." for example:
    // If the user enters money, show the Money Plan.
    // If the user enters health, show the Health Plan.
    // so also let undestand this to : userGoal this 
    // is a variable that holds what the visitor typed into your Goal Planner.
    // for example : const userGoal = goalInput.value.trim().toLowerCase();
    // If the visitor types: I want to improve my HEALTH
    // The variable becomes: i want to improve my health 
    //  the .includes("health") this  checks whether the visitor's goal contains the 
    // word "health" so it just check for example here :  the user typed 
    // I want better health this will match yes because of it cheeck it 
    // also outputArea this variable that connects JavaScript to an HTML 
    // element on my webpage so in other words, JavaScript finds the HTML
    //  element with the ID createmygoal. and this is where my
    //  suggestions will appear.  also .innerHTML tells JavaScript to place HTML 
    // content inside an existing HTML element  for example this 
    // <h4>Suggested Health Plan:</h4> Creates a heading that says "Suggested
    //  Health Plan:"and displays it inside my HTML element with the ID "createmygoal //

  } else if (userGoal.includes("health")) {
    outputArea.innerHTML = `
      <h4>Suggested Health Plan:</h4>
      <ul>
        <li>Drink more water every day.</li>
        <li>Eat healthy and balanced meals.</li>
        <li>Get enough sleep every night.</li>
      </ul>
    `;

    // more suggestions I can put them down here this place for me ot add more 
    // suggestions  //
      


    // this will be on botton and this  does 
    // not care what the user writes ,it works for
    //  any text they enter that didn't match my
    // specific keywords down here  //
  } else {
    outputArea.innerHTML = `
      <h4>Suggested Plan for "${goalInput.value}":</h4>
      <ul>
        <li>Write down your exact goal and a target date.</li>
        <li>Spend 20 minutes each day working on it.</li>
        <li>Check your progress at the end of every week.</li>
      </ul>
    `;
  }
});
// my comments sections for vistoer to write and send message //

// first find  the html elements using the Ids that I create that I give or 
// the one  that  name it the id that i give name and each my id in html must
// match the id inside getElementbyId().//

// need find the from first now this is for find my form I also give it a name //

const visitorform = document.getElementById("visitorform");

// now this find the text area where visitors write their comments
// so first I need find  where vistoer write their commnets here and the id 
// comments is on my html  and the second I need find the button //
const visitorComment = document.getElementById("comment");

// also this finds the submit button inside my form //

const submitButton = document.getElementById("submitButton");

// also finds the empty paragraph where my response message will appear.
const submitOutput = document.getElementById("entersubmit");

// submit time now //
visitorform.addEventListener("submit", function (event) {
  event.preventDefault();
  const usercomment = visitorComment.value.trim();
  if (usercomment === "") {
    submitOutput.innerHTML = `
    <p class="text-danger">
     Please enter your comment first!
     </p>`;
    }
    else {
    // Display a thank-you message.
    submitOutput.innerHTML = `
    <p class="text-success">
     Thank you for getting in touch with me!
     Your message has been received.
     </p>
      `;
     // Clear the comment box after submission.
    visitorComment.value = "";
    }
});


// now above here is my code for commnets form and firs 
// start by find the  html elements using their ids that I give in theme such as 
// visitorForm ,comment,submitButton,entersubmit therefore, 
// getElementsByID will go and get each Id  . also  I have 
// addEventListener:
// This tells JavaScript to listen for an action.
// In this case, it listens for the visitor to submit the form.
// also I have preventDefault():
// This prevents the browser from automatically
// reloading or navigating to another page.
//  again I have the .value:
// This gets the text that the visitor typed
// inside my comment box.
// therefore, I have .trim():
// This removes extra spaces at the beginning
// and end of the visitor's comment. I have the 
// .innerHTML:
// This displays a warning message inside
// my HTML paragraph with the ID "entersubmit".
//  also Display a thank-you message. when the if the vistors enter
// the comments  //

// throught this form comments I learned that  what id  
// you give the in html its need also be exatuly the same in
// javacript in onder they can communicate  all togather and work together need 
// //

