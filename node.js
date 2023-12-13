const { Readline } = require("readline/promises");

const input = require("readline").createinterface({
    input : process.stdin,
    output : process.stdin,
});

function random(){
    const pilihan = ["gunting", "batu", "kertas"];
    const random_number = Math.floor(Math.random() * pilihan.length)
    return pilihan[random_number];
}

Readline.question("pilihan pemain : ", (result) => {
    const player = "gunting";
const pilihan_bot = random();

console.log("Pilihan Pemain : " + pilihan);
console.log("Pilihan Komputer : " + pilihan_bot);

if(player == "gunting" && pilihan_bot == "kertas"){
    console.log("Pemain Menang");
}else if(player == "batu" && pilihan_bot == "gunting"){
    console.log("Pemain Menang");
}else if(player == "kertas" && pilihan_bot == "batu"){
    console.log("Pemain Menang");
}else if(player == pilihan_bot){
    console.log("Seimbang");
}else {
    console.log("Bot Menang");
}

Readline close
});
