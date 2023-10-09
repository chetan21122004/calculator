// var dis = "";
var input = document.querySelector("input");
dis = input.value;




// here  i learned about slice , thats very helpful 
function clval() {
    if (dis.length > 0) {
        dis = dis.slice(0, -1);
        input.value = dis;
    }
}
function clall() {
  dis = "";
    input.value = dis;
}

  function equal() {
    if (dis!='') {
        dis = eval(dis);
        input.value = dis;
      }
  }




function handleKeyDown(event) {
    // Check if the pressed key is a number key (0-9)
    let keys = event.key;
    if (keys >= '0' && keys <= '9') {
        dis = dis+ `${keys}`;
        input.value = dis;        
        // You can add your c1ustom code here
    }
    if (keys == '+' || event.key === '-' || event.key === '*' || event.key === '/'|| keys=='.') {
        dis = dis+ `${keys}`;
        input.value = dis; 
                // You can add your custom code here
    }
    if (keys =='^') {
        // Run your custom function here
        dis = dis +'**';
            input.value = dis;
        // Replace the console.log statement with your custom function.
    }

    if (keys=='='|| keys=='Enter') {
        equal();
    }
    if (keys=='Backspace') {
        clval();
        
    }
    if (keys=='Delete') {
        clall();

    }
    

}

// Add an event listener to the document to listen for keydown events
document.addEventListener("keydown", handleKeyDown);