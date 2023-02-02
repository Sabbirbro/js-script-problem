const lyrics = 'tumi bondhu kala pakhi ami jeno ki.kala kala kala kala rong jomeche sada kala'
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const partial = lyrics.slice(5, 8);

console.log(sentences);
console.log(parts);
console.log(partial);


const lines =['tumi bondhu kala pakhi', 'ami jeno ki','kala kala kala kala rong jomeche sada kala'] ;
const newSong = lines.join(':');
console.log(newSong);

