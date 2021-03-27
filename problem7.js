// https://projecteuler.net/problem=7

// 10001st Prime
// the below is the prime function for problem 3(which is in incomplete as of now because my solution is too slow)
// I have a suspicion that it will be too slow for this problem as well.

function isPrime(x){
	// copied from problem 3
	if (x === 2){
		return true;
	}
	if (x % 2 === 0){
		return false;
	}
	else {
		for (let y = 3; y < x / 2; y += 2){
			if (x % y === 0){
				return false;
			}
		}
		return true;
	}
}

function nthPrime(n){
	// n is a positive integer greater than 1
	let count = 1;
	let prime = 2;

	for (let i = 3; count < n; i += 2){
		// starting with 3 because we know the first prime is 2
		// Incrementing by 2 because no evens are prime except 2
		if (isPrime(i)){
			count++;
			prime = i;
		}
	}

	return prime;
}

// Ok that's all. The first function is too slow for problem 3 but is find for problem 7.