/* Custom JS goes here */
// This is a closure; IIFE = Immediately Invoked Function Expression
//Anonymous self executing function
(function(){
    
    function Start(){
        //local variable
        var title = document.title;

        console.log("App Started!");
        console.log("--------------------------------");
        console.log("Title: "+ title);
    }
    Start();

})();