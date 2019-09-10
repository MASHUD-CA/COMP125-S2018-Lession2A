/* Custom JS goes here */
// This is a closure; IIFE = Immediately Invoked Function Expression
//Anonymous self executing function
(function(){
    "use strict"
    function Start(){
        //local variable

       // var title = document.title;
       let title = document.title; // we need to use "use strict" above

       switch(title){
           case "COMP125 - Home":
                let AboutButton = document.getElementById("AboutButton");

                AboutButton.addEventListener("click", function(){
                     console.log("About Button was clicked!");
         
                })
               break;
            case "COMP125 - About":
                break;
       }
       

        console.log("App Started!");
        console.log("--------------------------------");
        console.log("Title: "+ title);
    }
    //Start(); // or below
    window.onload = Start;

})();