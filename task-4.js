function f(num) {
    let answer;
    if (typeof num !== 'number') {
        throw new Error('parameter type is not a Number');
    } else if (num <= 0 || num > 7) {
        throw new Error('parameter should be in the range of 1 to 7');
    } else {
        switch(num){
            case 1:
                answer = 'Воскресенье';
                break;
            case 2:
                nswer = 'Понедельник';
                break;
            case 3:
                answer = 'Вторник';
                break;
            case 4:
                answer = 'Среда';
                break;
            case 5:
                answer = 'Четверг';
                break;
            case 6:
                answer = 'Пятница';
                break;
            case 7:
                answer = 'Суббота';
                break;
        };
        return answer;
    };
}
console.log(f(1));

