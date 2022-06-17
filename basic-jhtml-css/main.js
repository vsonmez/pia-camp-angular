var myButton = document.createElement("button");
console.log(myButton)
document.body.appendChild(myButton);

myButton.innerHTML = "My Button",
myButton.addEventListener("click", function(){
    console.log("my button clicked");
})