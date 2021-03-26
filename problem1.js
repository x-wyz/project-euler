// https://projecteuler.net/problem=1

// The first thing that pops up in my mind is that I need to find a way to 
// know if a number is a multiple of 3 or 5

function multiple3or5(x){
	// This function accepts a number x and returns a boolean to indicate if a number is 
	// a multiple of 3 or 5
	return (x % 3 === 0) || (x % 5 === 0);
}

// We're finding the sum of all those numbers between 0 and 1000
// So the most obvious answer would be to loop through 1000 times and and check then add to a sum

let sum = 0;

for (let x = 1; x < 1000; x++){
	sum += multiple3or5(x) ? x : 0;
}

// Another solution

// 5 10 15 20 25 30 <- multiples of 5 upto 25
// 1 2  3  4  5  6  <- placement
// 1 3  6  10 15 21 <- when the first row is added they number 5 is multipled by to obtain sum

// from here we can see there is a pattern with the increments which is x + 1 where x is the gap of the previous number

// 3 6 9 12 15 18 21
// 1 2 3 4  5  6  7
// 1 3 6 10 15 21 28 <- this number is the sum of the numbers on the second row

// the same logic can be applied to the 3s

// the sum of all multiples of a number less than x(3 or 5) is x * (sum of the placements)
// sum of placements - https://betterexplained.com/articles/techniques-for-adding-the-numbers-1-to-100/

var fives = 5 * Math.floor(999/5)*(Math.floor(999/5) + 1) / 2
var threes = 3 * Math.floor(999/3)*(Math.floor(999/3) + 1) / 2
var fifteens = 15 * Math.floor(999/15)*(Math.floor(999/15) + 1) / 2

let sumTwo = fives + threes - fifteens

// the reason to subtract fifteens is because 15 the the lcm of 3 and 5 thus multiples of 15 would be included by both fives and threes so we subtract fifteens once 
// to remove the value from one of the sums (twice if we want to remove from both but we would also need to add it back so only once)

// this solution is better because if we were to make both solutions into functions the first solution has a big O notation of O(n) while the second is O(1)
