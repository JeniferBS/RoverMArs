var planetMars = generator(10,10,0);

function generator(numrows, numcols, initial){
  var planetMars = [];
  for (var i = 0; i < numrows; ++i){
     var columns = [];
     for (var x = 0; x < numcols; ++x){
        columns[x] = [i, x]; 
     }
     planetMars[i] = columns;
   }
   return planetMars;
}

var volcano = planetMars[5] [5];



var roverMars = {
  direction: "S",   
  position: planetMars[0] [0],
  travelLog: [],
  
  turnRight: function(){  
    
    switch(roverMars.direction) {
      case "N":
      roverMars.direction = "E";
    
      break;
      case "E":
      roverMars.direction = "S";

      break;
      case "S":
      roverMars.direction = "W";
    
      break;
      case "W":
      roverMars.direction = "N";
    }
  },

  turnLeft: function(){  
    
    switch(roverMars.direction) {
      case "N":
      roverMars.direction = "W";
    
      break;
      case "W":
      roverMars.direction = "S";

      break;
      case "S":
      roverMars.direction = "E";
    
      break;
      case "E":
      roverMars.direction = "N";
    }
  }, 
  
   moveSouth: function(){  
    
    if(roverMars.direction === "S" && roverMars.position[1] < 9 && ((roverMars.position[1]+1) !== curiosityMars.position[1] || roverMars.position[0] !== curiosityMars.position[0]) && ((roverMars.position[1]+1) !== volcano[1] || roverMars.position[0] !== volcano[0])) {
    
   
      for(var i = 0; i < roverMars.position.length; i++){
        var movementSouth = [0, 1];
        roverMars.position[i] =roverMars.position[i]+movementSouth[i];
      }
    
    
    } else {
      console.log("El Rover no está orientado al sur o, si lo está, no puede avanzar más porque va a salir del radar o colisonar")
    }
  
   }, 
  
   moveNorth: function(){ 
   
    
    if(roverMars.direction === "N" && roverMars.position[1] > 0 && ((roverMars.position[1]-1) !== curiosityMars.position[1] || roverMars.position[0] !== curiosityMars.position[0]) && ((roverMars.position[1]-1) !== volcano[1] || roverMars.position[0] !== volcano[0])) {
      
      for(var i = 0; i < roverMars.position.length; i++){
     
          var movementNorth = [0, -1];
          roverMars.position[i] =roverMars.position[i]+movementNorth[i];
          
      }
     
      } else {
        console.log("El Rover no está orientado al norte o, si lo está, no puede avanzar más porque va a salir del radar o colisonar")
      }
    
     
   }, 
  
   moveEast: function(){
    
    
    if(roverMars.direction === "E" && roverMars.position[0] < 9 && (roverMars.position[1] !== curiosityMars.position[1] || (roverMars.position[0]+1) !== curiosityMars.position[0]) && (roverMars.position[1] !== volcano[1] || (roverMars.position[0]+1) !== volcano[0])) {
   
      for(var i = 0; i < roverMars.position.length; i++){
     
        var movementEast = [1, 0];
        roverMars.position[i] =roverMars.position[i]+movementEast[i];
      }
    
    
   } else {
     console.log("El Rover no está orientado al este o, si lo está, no puede avanzar más porque va a salir del radar o colisonar")
   }
  
   },
   moveWest: function(){
  
    
    if(roverMars.direction === "W" && roverMars.position[0] > 0 && (roverMars.position[1] !== curiosityMars.position[1] || (roverMars.position[0]-1) !== curiosityMars.position[0]) && (roverMars.position[1] !== volcano[1] || (roverMars.position[0]-1) !== volcano[0])) {
      
      for(var i = 0; i < roverMars.position.length; i++){
        
          var movementWest = [-1, 0];
          roverMars.position[i] =roverMars.position[i]+movementWest[i];
        
      }
     
      } else {
        console.log("El Rover no está orientado al oeste o, si lo está, no puede avanzar más porque va a salir del radar o colisonar")
      }
    
   },
   controlRover: function(indication){
    
    for(var i = 0; i < indication.length; i++) {

    roverMars.travelLog = roverMars.travelLog.concat(roverMars.position);
     
    if(indication[i] === "e") {
      roverMars.moveEast();
      
    } else if (indication[i] === "w") {
      roverMars.moveWest();
      
    } else if (indication[i] === "s") {
      roverMars.moveSouth();
      
    } else if (indication[i] === "n") {
      roverMars.moveNorth();
      
    } else if (indication[i] === "r") {
      roverMars.turnRight();
      
    } else if (indication[i] === "l") {
      roverMars.turnLeft();
      
    } else {
      console.log("movimiento no reconocido");
    }
     
    }
  },

   
};




var curiosityMars = {
  direction: "N",   
  position: planetMars[9] [9],
  travelLog: [],
  
  turnRight: function(){  
    
    switch(curiosityMars.direction) {
      case "N":
      curiosityMars.direction = "E";
    
      break;
      case "E":
      curiosityMars.direction = "S";

      break;
      case "S":
      curiosityMars.direction = "W";
    
      break;
      case "W":
      curiosityMars.direction = "N";
    }
  },

  turnLeft: function(){  
    
    switch(curiosityMars.direction) {
      case "N":
      curiosityMars.direction = "W";
    
      break;
      case "W":
      curiosityMars.direction = "S";

      break;
      case "S":
      curiosityMars.direction = "E";
    
      break;
      case "E":
      curiosityMars.direction = "N";
    }
  }, 
  
   moveSouth: function(){  
    
 
    if(curiosityMars.direction === "S" && curiosityMars.position[1] < 9 && (roverMars.position[1] !== (curiosityMars.position[1]+1) || roverMars.position[0] !== curiosityMars.position[0]) && (volcano[1] !== (curiosityMars.position[1]+1) || volcano[0] !== curiosityMars.position[0])) {
    
      for(var i = 0; i < curiosityMars.position.length; i++){
    
        var movementSouth = [0, 1];
        curiosityMars.position[i] =curiosityMars.position[i]+movementSouth[i];
      
      }
    
    } else {
      console.log("El curiosity no está orientado al norte o, si lo está, no puede avanzar más porque va a salir del radar o colisonar")
    }
  
   }, 
  
   moveNorth: function(){ 
   

    if(curiosityMars.direction === "N" && curiosityMars.position[1] > 0 && (roverMars.position[1] !== (curiosityMars.position[1]-1) || roverMars.position[0] !== curiosityMars.position[0]) && (volcano[1] !== (curiosityMars.position[1]-1) || volcano[0] !== curiosityMars.position[0])) {
      
      for(var i = 0; i < curiosityMars.position.length; i++){
      
          var movementNorth = [0, -1];
          curiosityMars.position[i] =curiosityMars.position[i]+movementNorth[i];
        
      }
     
      } else {
        console.log("El curiosity no está orientado al sur o, si lo está, no puede avanzar más porque va a salir del radar o colisonar")
      }
    
     
   }, 
  
   moveEast: function(){
    
    
    if(curiosityMars.direction === "E" && curiosityMars.position[0] < 9 && (roverMars.position[1] !== curiosityMars.position[1] || roverMars.position[0] !== (curiosityMars.position[0]+1)) && (volcano[1] !== curiosityMars.position[1] || volcano[0] !== (curiosityMars.position[0]+1))) {
   
      for(var i = 0; i < curiosityMars.position.length; i++){
      
        var movementEast = [1, 0];
        curiosityMars.position[i] =curiosityMars.position[i]+movementEast[i];
      }
    
    
   } else {
     console.log("El curiosity no está orientado al este o, si lo está, no puede avanzar más porque va a salir del radar o colisonar")
   }
  
   },
   moveWest: function(){
  
     
   
    if(curiosityMars.direction === "W" && curiosityMars.position[0] > 0 && (roverMars.position[1] !== curiosityMars.position[1] || roverMars.position[0] !== (curiosityMars.position[0]-1)) && (volcano[1] !== curiosityMars.position[1] || volcano[0] !== (curiosityMars.position[0]-1))) {
     
      for(var i = 0; i < curiosityMars.position.length; i++){
          var movementWest = [-1, 0];
          curiosityMars.position[i] =curiosityMars.position[i]+movementWest[i];
      }
      
     
      } else {
        console.log("El curiosity no está orientado al oeste o, si lo está, no puede avanzar más porque va a salir del radar o colisonar")
      }
    
   },
   controlcuriosity: function(indication){
    
    for(var i = 0; i < indication.length; i++) {

    curiosityMars.travelLog = curiosityMars.travelLog.concat(curiosityMars.position);
     
    if(indication[i] === "e") {
      curiosityMars.moveEast();
      
    } else if (indication[i] === "w") {
      curiosityMars.moveWest();
      
    } else if (indication[i] === "s") {
      curiosityMars.moveSouth();
      
    } else if (indication[i] === "n") {
      curiosityMars.moveNorth();
      
    } else if (indication[i] === "r") {
      curiosityMars.turnRight();
      
    } else if (indication[i] === "l") {
      curiosityMars.turnLeft();
      
    } else {
      console.log("movimiento no reconocido");
    }
     
    }
  },

   
};









