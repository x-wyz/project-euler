// https://projecteuler.net/problem=6

// The question asks to find the difference between the sum of squares and 
// square of sum of the first 100 natural numbers

// The first 100 natural numbers are the integers from 1-100.

// Splitting the question into 2 parts we should find the sum of squares
// and the square sum separately. 

// A common link between the 2 are that they both require the square in some capacity

function square(x){
	// This returns the square x**2 in the other functions would work just as well
	return x * x
}

function sumSquares(x){
	// x is an integer - question asks for it to be 100
	let sum = 0;
	for (let i = 1; i <= x; i++){
		// increments from 1 -> x and stores the sum into the sum variable
		sum += square(i) 
	}

	return sum;
}

function squareSum(x){
	// x is an integer - question asks for it to be 100
	let sum = (x * (x+1)) / 2
	// this equation was taken from a part of the second solution from problem 1
	return square(sum);
}

// We're looking for the difference between therefore subtraction
let difference = sumSquares(100) - squareSum(100);
// We're also looking for the total number of numbers between the two values so it has to be positive i guess
let difference2 = squareSum(100) - sumSquares(100);

// I would've prefered they worded it in reverse but it's just my poor english skills that failed to fully comprehend what they were asking.
// Difference does seem like they want the number of places between the two values. But in my defence I was always taught to read from left to right therefore
// my initial calculation was to take the second value and subtract it from the first. Now that I think about it more theres probably no good reason to 
// have the difference be a negative number unless it's a pure mathematical equation. 

// I'm done with my rant.
