var mas = [1, 2, -4, 3, -9, -1, 7];
function isPositive(num) {
    if (typeof num !== 'number') {
        throw new Error('parameter type is not a Number');
    } else {
        if (num > 0) {
            return true;
        } else {
            return false;
        };
    };
}
function PositiveMass(mass) {
    let newMass = [];
    for (element of mass) {
        if (isPositive(element)){
            newMass.push(element);
        };
    };
    return newMass;
}
console.log(isPositive(-2));
console.log(PositiveMass(mas));