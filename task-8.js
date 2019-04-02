var mas = [1, 2, 3];
var test = [];
function f(mass) {
    if (typeof mass !== 'object') {
        throw new Error('parameter type should be an array');
    } else if (mass.length === 0) {
        throw new Error(`parameter can't be an empty`);
    } else {
        console.log(mass[0]);
        if (mass.length > 1) {
            mass.splice(0, 1);
            f(mass);
        };
    };
}
f(mas);