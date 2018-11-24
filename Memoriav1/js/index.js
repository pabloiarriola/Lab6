//here we can found the cards
var cards = []
//the random array
var move = []
//counter to know the number of steps
var counter = 0;
//counter to know is you win
var winscounter=0;
//An counter to know that the number was not repeated more than 2 times
var numbercounter = 0;
//first we fill the array with random number
for(var u = 0; u < 16; u++){
  var number = Math.floor((Math.random() * 8) + 1);
  while(numbers(number,cards)==false){
    //numbers is a function that know if the number is repeated more than 2 times
    number = Math.floor((Math.random() * 8) + 1);
  }
  //if the number is not repeated more than 2 times we add the number to the cards
  cards[u]=number
}
console.log(cards) //this shows the pairs opf numbers if you want to cheat
//we add a function for the click
document.addEventListener("click", function(e) {
  //this is the element that was clicked
  var element = e.target
  console.log(element)
  //here we get all the elements that has the class block
  var elements = document.getElementsByClassName('block')
  //we resort the array of elements to know the number of class
  for (var i = 0; i < elements.length; i++) {
    //if the element is the same as the array we captured the index
    if (element === elements[i]) {
      //assing is a function that assing a class to the block that was clicked
      assing(element,cards[i]);
      //here we save the 
      //var choosenblock = elements[i]
    }
  }
  //here we save the element that was clicked
  move.push(element);
  //we check if 2 clics were maked
  setTimeout(function(){
  if(move.length == 2){
    //if the 2 element has the same class
    if(move[0].className === move[1].className){
      //we add 1 more move
      counter = counter +1
      //we sent to HTML
      document.getElementById("clicks").innerHTML = counter;
      //the winscounter save only 8 moves cause 8 is the number of pairs
      winscounter = winscounter +1
      //if we have 8 wins moves we WIN
      if(winscounter==8){
        //sending to HTML
        document.getElementById("win").innerHTML = "YOU WIN";
        //reseting the game
        reset(elements)
      }
      
    }
    else{
      //here the cards are not the same
      //we add a new move
      counter = counter +1
      //sending to HTML
      document.getElementById("clicks").innerHTML = counter;
      //we add the class block to the clicked elements
      move[0].className="block"
      move[1].className="block"
    }
    //we reset the move array
    move.length=0
  }}
    ,500)
  
})
//the function assing receives 2 elements, the first one is the element that was clicked
//and the second one is the index of the element
//in the css you can see every one of the classes so I assing a class for every number
function assing(element,i){
  if(i==1){
    element.classList.add('alpha');
  }
  else if(i==2){
    element.classList.add('regi');
  }
  else if(i==3){
    element.classList.add('x');
  }
  else if(i==4){
    element.classList.add('square');
  }
  else if(i==5){
    element.classList.add('horn');
  }
  else if(i==6){
    element.classList.add('bilabial');
  }
  else if(i==7){
    element.classList.add('omega');
  }
  else if(i==8){
    element.classList.add('diamond');
  }
}
//number is a function that receive 2 parameters, number that is the number that 
//has to be analyzed and the second parameter is the array that has the previous numbers
//the function counts how many of the numbers already exist in the array, if the numbers is more 
//than 2, the function returns false and the number has to be calculated again
function numbers(number,array){
 for(var t=0;t<array.length;t++){
   if(number==array[t]){
     numbercounter = numbercounter +1
     if(numbercounter==2){
       numbercounter = 0;
       return false;
     }
   }
 }
}
function reset(elementsclass){
  for(var n=0;n<elementsclass.lenght;n++){
    elementsclass[n].classList='block';
  }
}