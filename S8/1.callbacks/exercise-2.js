const userAnwsers = [];

function confirmExample(description){
 
    return confirm(description);
}

function promptExample(string){
    
    return prompt(string);
}

function father(description,callback){
    const result= callback(description);
    userAnwsers.push(resultado);

}

father("confirm example", confirmExample);
father("promptExample", promptExample);
console.log(userAnwsers);