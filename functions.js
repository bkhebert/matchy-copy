/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */


//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I: an array and a string
O: an object
C:
E:
*/
function search (animalsArr, animalName) {
    // create a for loop that goes through the animals Array
        for(let i = 0 ; i < animalsArr.length ; i++ ){
            // loop through the animalsArr to see if any names match
            if (animalsArr[i]['name'] == animalName) {
                //if the name matches, return the object at that index
            return animalsArr[i];
            }
        } //return null if nothing matches
            return null                                
    }
    
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I: an array, a string, and an object
O: nothing
C: function will replace the animal named in the string at the index of the array with the new object
E:
*/

function replace(animals, name, replacement) {
    //loop through the animals array
    for( let i = 0; i < animals.length; i++ ) {
        //if the animal at the index's name matches
        if (animals[i]['name'] === name ){
            animals.splice(i, 1, replacement);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I: array of animals, and a string name
O: 
C: removes the animal with the matching name
E:
*/

//function that takes in 2 parameters, animals array and name string
function remove(animals, name) {
//loop through the animals array
    for( let i = 0; i < animals.length; i++){
        //if the object at any index has a keyvalue of name that matches the name parameter, delete it
        if(animals[i]['name'] === name){
           animals.splice(i, 1);
        } 
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function named add that takes in an animals Array and an animal Object
function add(animals, animal){
    //declare 2 variables, defaulted to true
    var uniqueName = true;
    var hasIdentity = true;
    //if the animal Object has a key value of name and species that are both greater than zero, do nothing
    if (animal['name'].length > 0 && animal['species'].length > 0){
        hasIdentity = true
        //if this is not the case, switch a variable to false
    } else {
        hasIdentity = false;
    }
        //loop through the animals array
    for(let i = 0; i < animals.length; i++){
        //if an object at any index has a key value of name that matches the animal param Object's name
        if(animals[i]['name'] === animal['name']){
            //switch the value of a variable to false
            uniqueName = false;
        }
    }
    //if both variables remain true, add the animal Object to the animals Array
    if(uniqueName && hasIdentity){
        animals.push(animal)
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}