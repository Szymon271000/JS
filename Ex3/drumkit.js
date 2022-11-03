let numberOfButtons = document.querySelectorAll(".button").length;
for (var j = 0; j < numberOfButtons; j++) {
  
    document.querySelectorAll(".button")[j]
      .addEventListener("click", function() {
        let buttonStyle = this.innerHTML;
        sound(buttonStyle);
    });
  }

  document.addEventListener("keypress", function(event) {
    sound(event.key);
  });

  function sound(key) {
    switch (key) {
      case "w":
        var sound1 = new Audio("sounds/boom.wav");
        sound1.play();
        break;
    
      case "a":
        var sound2 = new Audio("sounds/clap.wav");
        sound2.play();
        break;
    
      case "s":
        var sound3 = new Audio("sounds/tom.wav");
        sound3.play();
        break;
    
      case "d":
        var sound4 = new Audio("sounds/tink.wav");
        sound4.play();
        break;
    }
}

