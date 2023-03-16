const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]


const pelis = []
for (const mov of movies) {
for(let cate of mov.categories){
    if(!pelis.includes(cate)){
        pelis.push(cate)
    }
  
}

}
console.log(pelis);