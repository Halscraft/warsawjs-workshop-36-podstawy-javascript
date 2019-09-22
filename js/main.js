// let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

// if (year == 2015) {
//   alert( 'You guessed it right!' );
// } else {
//   alert( 'How can you be so wrong?' ); // any value except 2015
// }

// let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

// if (year < 2015) {
//   alert( 'Too early...' );
// } else if (year > 2015) {
//   alert( 'Too late' );
// } else {
//   alert( 'Exactly!' );
// }


//Ćwiczenie 1
// let value = prompt('Podaj wartość', '');

// if (value < 0) {
//     alert("-1")
// } else  if (value == 0) {
//     alert("0")
// } else {
//     alert("1")
// }

//Ćwiczenie 2
// let a = 1;
// let b = 2;
// let result;


// if (a + b < 4) {
//   result = 'Za mało';
// } else {
//   result = 'Za dużo';
// }
// console.log(result)

// result = ((a+b)<4 ) ? "Za mało" : "Za duzo";
// console.log(result);

//Ćwiczenie 3
// a = 4
// b = 5
// let c = 6

// if (a>b) {
//     console.log("A jest największe.")
// } else if (b>c) {
//     console.log("B jest największe.")
// } else {
//     console.log("C jest największe.");
    
// }


//Ćwiczenie 4
// let a = +prompt('a?', '');

// // if (a == 0) {
// //   alert( 0 );
// // }
// // if (a == 1) {
// //   alert( 1 );
// // }

// // if (a == 2 || a == 3) {
// //   alert( '2,3' );
// // }

// switch (a) {
//     case 0:
//         alert(0);
//         break;

//     case 1:
//         alert(1);
//         break;
    
//     case 2: 
//     case 3:
//         alert("2,3");
//         break;

//     default:
//         break;
// }


// for (var i=0; i<100; i++) {
//     console.log('Warsztaty WarsawJS są świetne!');
// }
// for (var i=0; i<100; i++) {
//     console.log('Warsztaty WarsawJS są świetne!2');
// }




// const obj = {name: "Tom", surName: "Doe", age: 23};

// for (const prop in obj) {
//   console.log(`obj.${prop} = ${obj[prop]}`);
// }

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"


//Ćwiczenie 5
var string = "";
for (let index = 0; index < 5; index++) {
      
    string = string + "*";
}

console.log(string);
//Ćwiczenie 6
string = "";
for (let index = 1; index < 11; index++) {
    string = string + index
}
console.log(string)

//Ćwiczenie 7
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

// let w = 0;
// while (w < 3) {
    
//     alert( `number ${w}!` );
//     w++;
// }

//Ćwiczenie 8
let animals = ['🐔', '🐷', '🐑', '🐇'];
let names = ['Gertrude', 'Henry', 'Melvin', 'Billy Bob'];

for (const value of animals) {
    let i = animals.indexOf(value);
    console.log(value+" Nazwa tego zwierzęcia to "+names[i])
}


// Ćwiczenie 9
country = {
    "name": "Poland",
    "alpha2Code": "PL",
    "capital": "Warsaw",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "population": 38437239,
}

for (let key in country) {
    console.log(`${key} --> ${country[key]}`)    
    }