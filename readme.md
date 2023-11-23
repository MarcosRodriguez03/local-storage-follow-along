Random name Generator
1. add names to a name pool 
2. generate a random name 
3. remove a name from the name pool

1. Add name: input, button 
    take in name input and save it to a name array

2. generate a random name : button  text tag
    call random name function 
        use Math.random to get random number between 0 and nameArray.length
        use random number as an index for our name array
        return our name 
    set text tags text to our random name 
3. Remove a name : button
    take in name input and get its index within out name array
    use .splice() to remove that element
