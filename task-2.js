function f() {
    let result = 0;
    for (item of arguments) {
        if (typeof item !== 'number'){
            throw new Error('all parameters type should be a number');
        } else {
            result += item;
        }
    };
    return result;
};
