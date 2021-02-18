function factorize(n) {
    var factors = [];

    for (var i = 1; i <= Math.floor(Math.sqrt(n)); i += 1) {
        if (n % i === 0) {
            factors.push(i);
            if (n / i !== i)
                factors.push(n / i);
        }
    }
    factors.sort(function (x, y) { return x - y; });
    return factors;
}

function findUnique(str) {
    var uniqueStr = "";
    for (var i = 0; i < str.length; i += 1) {
        if (uniqueStr.indexOf(str.charAt(i)) == -1) {
            uniqueStr += str[i];
        }
    }
    return uniqueStr;
}

function doOperation(x, y, operator) {
    return operator(x, y);
}

function multiply(x, y) {
    return x * y;
}

function power(x, y) {
    return Math.pow(x, y);
}