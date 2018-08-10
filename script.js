(function (){
userPosition = 0;
function moveForward(distance){
     userPosition += distance;
 }
 function moveBackward(distance){
     userPosition -= distance;
 }
 function printLocation(){
     console.log(userPosition);
 }
   moveForward(5);
   moveBackward(3);
   printLocation();
   let turnAround = true; 
if(turnAround === true){
  userPosition = 2;
    function moveForward(distance){
     userPosition -= distance;
 }
 function moveBackward(distance){
     userPosition += distance;
 }
 function printLocation(){
     console.log(userPosition);
 }
   moveForward(10);
   moveBackward(5);
   printLocation();
}
})();