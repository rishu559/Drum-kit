// alert("Hello Rishu");

var obj = document.querySelectorAll(".drum");
var numberOfDrums = obj.length;
// for(var i=0;i<numberOfDrums;i++){
//     obj[i].addEventListener("click",handle=>{
//         alert("I got clicked");
//     });
// }



// document.querySelectorAll("button").forEach(item=>{
//     item.addEventListener("click",handle=>{
//         alert("I got clicked");
//     });
// })


// // Detecting the mouse click
// document.querySelectorAll("button").forEach(item=>{
//         item.addEventListener("click",function(){
//             var buttonInnerHtml = this.innerHTML;
//             makeSound(buttonInnerHtml);    
//             animate(buttonInnerHtml);    
//         });
//     });

// // Detecting the keyboard click
// document.addEventListener("keydown",function(event){
//     var code = event.key;
//     makeSound(code);
//     animate(code);
// })

                                        $("button").click(function() {
                                            var buttonInnerHtml = $(this).html();
                                            makeSound(buttonInnerHtml);
                                            animate(buttonInnerHtml);
                                            // $(this).animate({zoom:"105%"}).animate({zoom:"100%"});
                                        });
                                        
                                        $(document).keypress(function(event){
                                            var key = event.key;
                                            makeSound(key);
                                            animate(key);
                                            // $("."+key).animate({zoom:"105%"}).animate({zoom:"100%"});
                                        })

// Sound maker function
function makeSound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            break;
        default:
            break;
    }
    audio.play();
}

function animate(key){
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },200);
}

