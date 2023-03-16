const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];


const cities$$ = cities.map((city)=>{
    if(city.isVisited == true){
        city.name +=  "(visitado)";
        return city;
    }
    else{
        return city.name
    }
});
console.log(cities$$);
