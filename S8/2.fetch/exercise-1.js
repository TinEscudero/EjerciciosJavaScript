fetch('https://api.agify.io?name=michael=${page}')        
.then((response) => {console.log(response); return response.json() })         
.then((responseJson) => console.log(responseJson))                             
.catch((err) => console.log(err));

// const get = async()=>{
    //try{
// const respuesta = await fetch ('https://api.agify.io?name=michael=${page}')
// const res= await respuesta.json()
// console.log(res)
//} carch(error){
    //console.log(error)
//}
//};
//get();