const w = document.querySelectorAll("button");


for( var i=0;i<w.length;i++){
    var x = w[i];
    x.addEventListener("click",function(){
        var but = this.innerHTML;
        keyPressed(but);
    });
}

document.addEventListener("keydown",function(event){
    keyPressed(event.key);
    // console.log(event);
})

function keyPressed(but){
    switch(but) {
        case 'a':
          var au = new Audio("./sounds/kick-bass.mp3");
          au.play();
          break;
        case 'w':
            var au = new Audio("./sounds/crash.mp3");
            au.play();
          break;
        case 's':
            var au = new Audio("./sounds/snare.mp3");
            au.play();
            break;

        case 'd':
            var au = new Audio("./sounds/tom-1.mp3");
            au.play();
            break;
        case 'j':
            var au = new Audio("./sounds/tom-2.mp3");
            au.play();
            break;

        case 'k':
            var au = new Audio("./sounds/tom-3.mp3");
            au.play();
            break;

        case 'l':
            var au = new Audio("./sounds/tom-4.mp3");
            au.play();
            break;
        default:
            console.log("error in this shit");
      }
}

// if(i=0){
    
// }
// else if(i=1){
//     var au = new Audio("./sounds/kick-bass.mp3");
//     au.play();
// }




