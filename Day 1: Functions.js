function factorial(n) {
    var rk = 1;
    for (var i = 1; i <= n; i++) rk = i * rk;
    return rk;
}

console.log(factorial(4))
