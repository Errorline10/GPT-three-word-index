const generatePrimes = (limit) => {
  const primes = new Array(limit + 1).fill(true);
  primes[0] = primes[1] = false;
  console.log("primes: " + primes);

  for (let i = 2; i <= Math.sqrt(limit); i++) {
    if (primes[i]) {
      for (let j = i * i; j <= limit; j += i) {
        primes[j] = false;
      }
    }
  }

  const result = [];
  for (let i = 2; i <= limit; i++) {
    if (primes[i]) {
      result.push(i);
    }
  }
  return result;
}


export default generatePrimes