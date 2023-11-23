import { RandomName } from "./randomFunction.js";
let addBtn = document.getElementById("addBtn");
let removeBtn = document.getElementById("removeBtn");
let randomBtn = document.getElementById("randomBtn");
let nameInput = document.getElementById("nameInput");
let injectName = document.getElementById("injectName");


// this assignment is basiclly useing set and get on local storage
// we set our values into the storage and it is now saved on local
//when we refresh it wipes what is saved, however we can get the values that were saved in local storage. 
//we get out items from local storage and set its value back into the array


let nameArray=[];
if(localStorage.getItem("names")){
    nameArray = JSON.parse(localStorage.getItem("names"));
    //2. we want to retrieve from local storage
    //      our array already exist but is empty. so we equal the value to the string in local storage. but it is a string not a array. so we parse it
    // JSON.Parse turns it back into its values
    //localStorage.getItem("names") gets the key of names which has the values in it
    
};


addBtn.addEventListener('click', function(){
    nameArray.push(nameInput.value);
    nameInput.value = "";
    console.log(nameArray);

    localStorage.setItem("names", JSON.stringify(nameArray));
    //1. we create a local storage 
    //      we put items in it with setItem
    //      set item needs a key and value
    //      the key is "names" the value is the array were using
    //      we must convert out array to jason with JSON stringify
    //      so localStorage.setItem("names", JSON.stringify(nameArray));
    //      stringify turns the array into a string
});

randomBtn.addEventListener('click', function(){
  injectName.innerText = RandomName(nameArray);
});

removeBtn.addEventListener('click', function(){
    RemoveWord();
});

function RemoveWord(){
    let index = nameArray.indexOf(nameInput.value);
    nameArray.splice(index, 1)

    localStorage.setItem("names", JSON.stringify(nameArray));
};


// localStorage.setItem("names", JSON.stringify(nameArray));

// JSON.parse(localStorage.getItem("names"));


// localStorage.setItem("names", JSON.stringify(nameArray));

// JSON.parse(localStorage.getItem("names"))

// if(localStorage.getItem("names"))

// localStorage.setItem("names", JSON.stringify(nameArray));

// nameArray = JSON.parse(localStorage.getItem("names"))

// localStorage.setItem("var", JSON.stringify(thing))

// JSON.parse(localStorage.getItem("names"))



// localStorage.setItem("names", JSON.stringify(myArray))

// JSON.parse(localStorage.getItem("names"))