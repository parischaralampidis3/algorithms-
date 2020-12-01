
//first method using for loop
/*
function titleCase(str){
    //declare a variable
    //convert string to array and apply lowercase method for the  words of the string
    //loop through the array for each first character of the word convert i 
    /*convert string to array in order
    to manipulate words */
    //join the string 
/*

    const sentence = str.toLowerCase().split(" ");

    for(let i=0; i< sentence.lenght; i++){
        sentence[i] = sentence[i].toUpperCase().characterAt(0) + sentence[i] + slice(1);
    }

    document.write(sentence.join(" "))
    return sentence
}
titleCase("I'm a little tea pot")
*/


//second method using map 

function titleCase(str){

    const sentence = str.toLowerCase()
    .split(" ")
    .map( function(word){
        return (word.charAt(0).toUppercase + word.slice(1));
    }).join('')

}
titleCase("I'm a little pot")