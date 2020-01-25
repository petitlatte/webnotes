(function() {

var message = document.getElementById("test");
var message2 = document.getElementById("test2");
document.getElementById("donatebutton").addEventListener("click", function() {
    alert( "Thank you " + message.value + " ! " + " You have donated $" + message2.value + " to Kakapo Recovery! ");
});

})();