const prueba = (parametro1)=>{
    try{

   

fetch ('https://api.nationalize.io?name=')        
.then((response) => {console.log(response); return response.json() })         
.then((responseJson) => {console.log(responseJson)})                             
.catch((err) => console.log(err));
}catch (error){
    console.log(error)
}



}
 const button$$ = document.querySelector("button");
const imput$$ = document.querySelector("imput")
prueba();

const getDate = button$$.addEventListener("click", () => console.log(prueba(e.value)));
