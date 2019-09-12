/* Custom JS goes here */
// This is a closure; IIFE = Immediately Invoked Function Expression
//Anonymous self executing function
(function () {
    "use strict"
    //function scope
    let AboutButton;
    //Two ways to do functions (Named way + )
    // function HomeContent(){ } // HomeContent function. HomeContent -> Identifier
    // let HomeContent = function(){ }  // Anonymas function refer to name HomeContent

    //About Button Click event handler
    function AboutButtonClick() {
        console.log("About Button clicked");
    }
    function AboutButtonOver(event) {
        //  event.currentTarget.style.opacity = 0.3;
        AboutButton.style.opacity = 0.3 // If we declare AboutButton top.
    }

    function AbooutButtonOut(event) {
        event.currentTarget.style.opacity = 1.0;
    }
    function HomeContent() {
        AboutButton = document.getElementById("AboutButton");

        AboutButton.innerText = "About";


        //About Button event listener (Call back function)
        AboutButton.addEventListener("click", AboutButtonClick);
        AboutButton.addEventListener("mouseover", AboutButtonOver);
        AboutButton.addEventListener("mouseout", AbooutButtonOut);

    }


    function Start() {
        //local variable
        // var title = document.title;
        let title = document.title; // we need to use "use strict" above
        console.log("App Started!");
        console.log("--------------------------------");
        console.log("Title: " + title);



        switch (title) {
            case "COMP125 - Home":
                HomeContent();
                break;
           
            case "COMP125 - About":
                break;

            default:
                break;

        }


    }
    /* Learning different way of calling functions
    function outer(){
        let myOuterVariable = 30;
        function inner(){
            function deepInner(){
                let deepInnerVariable = true;
                function reallyDeepInside(){
                    function OKThisIsReallyDeep(){
                       // let myInnerVariable = 10;
                        let myOuterVariable = "Hello"; // save variable but different value
                    }
                }
            }
        }
    }
    */
    //Start(); // or below
    // window.onload = Start;
    window.addEventListener("load", Start);

})();