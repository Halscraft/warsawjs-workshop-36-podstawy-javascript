const user = {
    firstName: "John",
    lastName: "Smith",
    dateOfBirth: 1985,
    getName(){
        return `User's name: ${this.firstName} ${this.lastName}`
     }
 };

 console.log(user.getName());

 const table = []; //pusta tablica

const tableWithNumbers = [1, 2, 3]; //tablica z 3 liczbami

const tableWithStrings = ['Luke Skywalker', 'Darth Vader', 'Leia Organa']; //tablica z 3 elementami

console.log(tableWithStrings);

const heros = ['Yoda', 'Obi-Wan Kenobi'];

console.log(heros.length);
// 2


const kontynenty = [ 'Europa', 'Azja', 'Antarktyda', 'Afryka', 'Australia i Oceania', 'Ameryka Północna', 'Ameryka Południowa' ]
var reversed = kontynenty.sort().reverse();
console.log(reversed);

console.log(kontynenty.sort().reverse().push("Nowy nieodkryty kontynent"));

console.log(kontynenty.pop());
console.log(kontynenty);



const style = ["Jazz", "Blues"]
console.log(style);
style.push("Rock-n-Roll");
console.log(style);
style[Math.floor((style.length -1) / 2)] = "Classic";
console.log(style)
console.log(style[0]);
style.shift();
console.log(style);
style.push("Rap");
style.push("Reggae");
console.log(style);
var pos = style.indexOf('Rap');
style[pos]="Metal";
console.log(style);