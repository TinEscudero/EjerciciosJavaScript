const numbersList = [];

function sum(a, b){
    return a + b;

}

const substract = (a,b) => {
    return a - b;
}

function father(a,b,callback){
    const result = callback(a,b);
    numbersList.push(result)


}

father(5,4,sum);
father(14,7,substract);

console.log(numbersList)
