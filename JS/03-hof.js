// HOF = High Order Function

const calculate = function (fn, a = 0, b = 0) {
    if (typeof fn !== 'function') {
        throw new Error('fn is not a function');
    }
    const r = fn(a, b);
    console.log(r);
};

const add = (x, y) => x + y; // lambda

const prod = (x, y) => {
    return x * y;
};

calculate(prod, 6, 7);
calculate((x, y) => x + y, 3, 10);
