function getDivisors(num) {
    let answer = [];
    if (typeof num !== 'number') {
        throw new Error('parameter type is not a Number');
    } else if (num <= 0) {
        throw new Error(`parameter can't be a 0`);
    } else {
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                answer.push(i);
            };
        };
        return answer;
    };
}
console.log(getDivisors(12));