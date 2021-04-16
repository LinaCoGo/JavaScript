var counter = 99;

function beer() {

while (counter >=0) {
     if (counter >1){
     console.log (counter + " bottles of beer on the wall, " + counter + " bottles of beer. Take 1 down, pass it around, " + (counter-1) + " bottles of beer on the wall.");
     }
     else if (counter === 1){
     console.log (counter + " bottle of beer on the wall, " + counter + " bottle of beer. Take 1 down, pass it around, no more bottles of beer on the wall.");
     }
     else {
     console.log ("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
     }
     counter--;
 }
}

beer();
