// https://projecteuler.net/problem=2

// the question asks to find the sum of a list of values
function sum(arr){
	// arr is an array of numbers
	let sum = 0;
	arr.forEach(x => {
		sum += x
	})
	return sum;
}

// the question asks x to be 4 million
function sumfib(x){
	// x is a number to not be exceeded
	// usually fib starts at 0,1 but the question says to start from 1,2
	// also because it only asks to cosider the even valued** terms starting from
	// 1,2 doesn't change anything
	let y = 1;
	let z = 2;

	let fib = [2];
	// if y and z are larger than x i have moved outside the bounds of the question and is pointless to continue
	while (z + y < x){
		let nextValue = z + y;
		y = z
		z = nextValue

		// If a number is even it will be divisible by 2. I could've also used z here because we assigned z the next value but this is clearer in my opinion.
		if (nextValue % 2 === 0){
			fib.push(nextValue)
		}
	}

	// It asks to return the sum of all even fib value'd numbers and the fib arr has only even valued numbers so we pass it into the sum function.
	return sum(fib);
}

// Cannot think of another solution that would simplify this question furthur as I dont see any parts that could potentially have a pattern.
// Recursive should work but that would make the solution more complicated and a lot slower.

// The solution could be split once more by calculating the fib arr in another function and just have sumfib combine the two functions but that only helps
// readibility not that this function is complex to begin with.

// O(n)
