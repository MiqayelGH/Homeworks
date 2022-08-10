function fact(n) {
  if (n <= 1) return 1;
  fact.cache = fact.cache ?? [];

  if (!fact.cache[n]) {
    fact.cache[n] = n * fact(n - 1);
  };

  return fact.cache[n];
}

function fcFib(n) {
  if (n <= 1) return 1;
  fcFib.cache = fcFib.cache ?? [];

  if (!fcFib.cache[n]) {
    fcFib.cache[n] = fcFib(n - 1)  + fcFib(n - 2);
  };

  return fcFib.cache[n];
}
