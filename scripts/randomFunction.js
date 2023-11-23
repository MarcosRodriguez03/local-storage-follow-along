export{RandomName}

function RandomName(array){
    let numberName =Math.floor(Math.random()* array.length);
    return array[numberName];
   };