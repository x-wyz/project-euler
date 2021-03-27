// https://projecteuler.net/problem=3

// The question asks to find prime factors and what I do know about prime numbers
// are the are numbers that can only be obtained by multiplying itself by one.

// Going by that my first objective is to create a function that says if a number is prime

function isPrime(x){
	// x is an integer

	if (x === 2){
		return true;
	}
	if (x % 2 === 0){
		// all even numbers are not prime except 2
		return false;
	}
	else {
		for (let y = 3; y < x / 2; y += 2){
			// y starts off at 3 because we've concluded numbers divisible by 2 are not prime
			// y is incremented by 2 each time because we start off odd and if a number is divisible by an even number it would've been divisible by 2
			// y needs to be smaller than half of y or else it's impossible to find another integer that evenly divides x
			if (x % y === 0){
				return false;
			}
		}
		// returns true if checks fail
		return true;
	}
}

// O(n) worse case

function primeFactors(x){
	// x is an integer
	let primes = [];

	// The first function ignore 2 so we have to add it here.
	if (x % 2 === 0){
		primes.push(2)
	}

	for (let y = 3; y <= x/2; y += 2){
		// Like the isPrime function we increment by two because an even number would not be a prime factor, checked for 2 in the outside if statement
		if (isPrime(y) && x % y === 0){
			// Checks if x can be evenly divisbile by the prime number y
			primes.push(y)
		} 
	}

	return primes;
}

let largestPrime = primeFactors(13195);
// the return value of primeFactors is an array thus I need to get the last value because it's already sorted had it not been I might have used the Math.max function instead
largestPrime = largestPrime[largestPrime.length - 1];

// This solution should work. It's correct for smaller numbers but it specifically asks for 600851475143. which is quite a large number so changes need to be made to one of the two functions.

// My first intuition would be to find and cut values I know are not prime but I already tried and have done that. the increments by 2 and cutting x by half.
// The first function is O(n) and the second is O(n^2) because it uses the first function in a loop.

// TBD