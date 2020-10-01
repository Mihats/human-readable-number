module.exports = function toReadable(number) {

    let numbers = [, "one", "two", "three", "four", "five",
        "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen",
        "sixteen", "seventeen", "eighteen", "nineteen"
    ];

    let dozens = [, , "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    let result = "";
    if (number == 0) return "zero";

    if (number < 20) return numbers[number];

    if (number < 100) {

        if (number % 10 === 0) {
            return dozens[number / 10];
        }
        return dozens[parseInt(number / 10)] + " " + numbers[number % 10];
    }

    if (number < 1000) {


        return number % 100 === 0 ? numbers[parseInt(number / 100)] + " " + "hundred" :
            number % 100 < 20 ? numbers[parseInt(number / 100)] + " " + "hundred" + " " + numbers[number % 100] :
            number % 10 === 0 ? numbers[parseInt(number / 100)] + " " + "hundred" + " " + dozens[parseInt((number / 10) % 10)] :
            numbers[parseInt(number / 100)] + " " + "hundred" + " " + dozens[parseInt((number / 10) % 10)] + " " + numbers[number % 10];
    }
}