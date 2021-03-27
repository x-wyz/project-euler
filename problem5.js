// https://projecteuler.net/problem=5

// My first thoughts on this question is that I should remove all numbers that
// are multiples of another number within the first 20 digits. But I'll hold off on 
// that because I think I'm suposed to complete the problem using functions and algorithms
// and not shave off parts of the question just because. Although I'll probably write something that will do something like that
// anyways.

function lcm(x, y){
	// finds the lcm of x and y
	let placeholder = y;
	if (x > y){
		// to ensure x is the smaller value
		y = x;
		x = placeholder;
	}

	if (y % x === 0){
		// If x is a multiple of y return x.
		return y;
	}
	else {
		for (let i = y; true ;i += y){
			// Increment i by y because y is the larger of the two values and 
			// the number needs to be divisible by both.

			// true - any valid statement to form a loop would work. A while loop could be more clear in this case. I prefer the increment and variable initiation of the for loop more.
			if (i % x === 0){
				return i;
			}
		}
	}
}

function lcmNumUpto(x){
	let currentLCM = 1;

	for (let i = 2; i <= x; i++){
		// goes over each value upto x and find the lcm of the two numbers.
		currentLCM = lcm(i, currentLCM);
	}

	return currentLCM;
}

let smallestMultipleUpto20 = lcmNumUpto(20)

// Another solution

// Grouping numbers like I said in my small rant above could be faster but only marginally it would still be O(n^2) speed unless there is a way to find lcm without a loop.
// ie. there is no point in finding the lcm for 1,2,4,5,10 because 20 is also part of the list.
// like wise for 3,6,9 because of 18 etc...
// There probably is a way to find lcm without a loop I'm just not scouring the internet for a solution until they give me a problem that's too slow for this solution. Or atleast a better loop.
