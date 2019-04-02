function f(a,b,c) {
    if ((typeof a !== 'number') || (typeof b !== 'number') || (typeof c !== 'number')){
        throw new Error('all parameters type should be a Number');
    } else {
        return (a - b)/c;
    }
}
console.log(f(9,3,2));
