var age = 10; // int
var salary = 15.00 // double

const displayGreetings = function(name, year){
    console.log(`Happy New Year ${year} ${name}`);
}

const displayGreetingsWithEmoji = function(name, year){
    console.log(`EMOJI EMOJI  Happy New Year ${year} ${name} EMOJI EMOJI`);
}

const greet = function(name, year, func){
    func(name, year);
}

greet('Sam', 2022, displayGreetingsWithEmoji);
greet('Jane', 2022, displayGreetings);