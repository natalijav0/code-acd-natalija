alert ("CREATING ARRAYS");
//push will add an element as the last one to an array
let favoriteFruits=["grapes","orange","lemon"];
favoriteFruits.push("tangerine");
let lenghtOfFavoriteFruits=favoriteFruits.push("lime");
 //splice will change elements with a specified location
let arrShapes=["circle","triangle","rectangle","pentagon"];
arrShapes.splice(2, 0, "square", "trapezoid");
//concat alows you to add another array to an already existing one
let anArr=[1,2,3];
let anotherArr=[4,5,6];
anArr.concat(anotherArr);
//concat can also be used to directly add new elements
//pop method delets an element
anArr.pop(0);
//shift deletes an element from the start of an array
anArr.shift();
//indexof is a tool to find on what position an element is
favoriteFruits.indexOf("grapes");
//sort is used for sorting logically
//numbers go from smallest 2 largest words go from a to z letters go from uppercase to lowercase 
//vezba// */
//1//
let shoppingList=[];
//2//
shoppingList.push("Milk","Bread","Apples");
//3//
shoppingList.splice(1, "Bannanas","Eggs");
//4//
shoppingList.pop(3);
//5//
shoppingList.sort( );
//6//
shoppingList.indexOf("Milk");
//7//
shoppingList.splice(2, "Carrots","Letuce");
//8//
let listSok=("Juice", "Pop");
//9//
let celosenArr=shoppingList.concat(listSok)+listSok;
//10//
listSok.lastIndexOf("Pop");
//od prof
let list=[];
list.push("milk","bread","apple");
let indexOfBread=list,indexOf("bread");
list.splice(indexOfBread, 1, "bannanas","eggs");
list.pop();
list.sort;
list.indexOf("milk");
let indexofBanana=list.indexOf("bannanas")
list.splice(indexofBanana + 1, 0, "carrots", "lettuce");
let newShoppingList



