function f(num) {
    let result;
    if (typeof num === 'number') {
        return num ** 3;
    } else {
        throw new Error('all parameters type should be a number');
    }
    return result;
}
console.log(f(2));