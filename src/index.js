module.exports = function toReadable (number) {
    let numbers = ['zero','one','two','three','four','five','six','seven','eight','nine'],
        numeral = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'],
        dozen = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'],
        hundred = ['hundred'];
    let first = (number % 10);
    let second = Math.trunc(number / 10) % 10;
    let third = Math.trunc(number/100);
    
    return `${(third !== 0)? numbers[third] +` `+ hundred:''} ${
            (second !== 0 && second !== 1)?
                (first !== 0)?
                    (dozen[second-2] +` `+numbers[first]):
                    dozen[second-2]:
            (second == 1)?
                numeral[first]:
            (second == 0 && first == 0 && third == 0)?
                numbers[first]:(first !== 0)?numbers[first]:''}
    `.trim();
};
