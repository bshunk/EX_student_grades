// Requirements: Loop over an array of student grades (values from 50-100) and output how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript

// Use console.log() to output the following criteria:

// How many of each grade?
// What is the lowest grade?
// What is the highest grade?

// var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 100];
// var a = 0, b = 0, c = 0, d = 0, f = 0;

// for (var i = 0; i < scores.length; i++) {
// 	if (scores[i] >= 90) {
// 		a++;
// 	} else if (scores[i] >= 80 && scores[i] < 90) {
// 		b++
// 	} else if (scores[i] >= 70 && scores[i] < 80) {
// 		c++
// 	} else if (scores[i] >= 60 && scores[i] < 70) {
// 		d++
// 	} else {
// 		(f++)
// 	}
// }

// console.log("number of a's = ", a);

// console.log("number of b's = ", b);

// console.log("number of c's = ", c);

// console.log("number of d's = ", d);

// console.log("number of f's = ", f);

// scores.sort(function(a, b) {
// 	return a - b;
// });

// console.log("sorted", scores.sort(function(a, b){return a - b;}));

// console.log("lowest grade", scores[0]);

// console.log("highest grade", scores[scores.length - 1]);

// Requirements: Loop over an array of student grades (values from 50-100) and output how many of each grades there are.
// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript
// Use console.log() to output the following criteria:
// How many of each grade?
// What is the lowest grade?
// What is the highest grade?

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 100];

var a = 0, b = 0, c = 0, d = 0, f = 0;

for (var i = 0; i < scores.length; i++) {
	if (scores[i] >= 90) {
		a++
	} else if (scores[i] >= 80 && scores[i] < 90) {
		b++
	} else if (scores[i] >= 70 && scores[i] < 80) {
		c++
	} else if (scores[i] >= 60 && scores[i] < 70) {
		d++
	} else {
		(f++)
	}
};

console.log("number of a's = ", a);
console.log("number of b's = ", b);
console.log("number of c's = ", c);
console.log("number of d's = ", d);
console.log("number of f's = ", f);

scores.sort(function(a, b) {
	return a - b;
});

console.log("sorted", scores.sort(function(a, b){return a - b;})); 
console.log("lowest grade =", scores[0]);
console.log("highet grade =", scores[scores.length - 1]);


