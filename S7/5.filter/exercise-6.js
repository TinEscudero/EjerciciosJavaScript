const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];




const legends =streamers.filter(streamer => streamer.gameMorePlayed.includes("Legends") &&
streamer.age > 35 ? streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase())
: streamer.gameMorePlayed.includes("Legedns")
console.log(legedns);