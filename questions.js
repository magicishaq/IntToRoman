/**
 * RomanNumeralGenerator
 * Changes a number to a roman numeral
 * @param {number} number
 * @returns {string}
 */
function RomanNumeralGenerator (number) {
    //array, of hashMaps with the Roman numeral and the number
    const numAndNumerals = [
        {number: 1000, roman: 'M'}, 
        {number: 900, roman: 'CM'},
        {number: 500, roman: 'D' },
        {number: 400, roman: 'CD'},
        {number: 100, roman: 'C' },
        {number: 90, roman: 'XC'},
        {number: 50, roman: 'L'},
        {number: 40, roman: 'XL'},
        {number: 10, roman: 'X'},
        {number: 9, roman: 'IX'},
        {number: 5, roman: 'V'},
        {number: 4, roman: 'IV'},
        {number: 1, roman: 'I'}
    ]  

    let result = '';
    let int = number;  
    //check if whole number
    if(!Number.isInteger(int)){
        console.log('Please use a Number')
        return 0;
    }
    //check if negative or 0 number is not above 3999
    if(int <= 0 || int > 3999 ){
        console.log('Please Pick a number between 1 and 3999')
        return 0;
    }

   //loops through the array
    for(var i = 0 ; i < numAndNumerals.length ; i++){
        //if the number in the hashMap is less than or equal to input
        if(numAndNumerals[i].number <= int){
            //take away the number from the input
            int -= numAndNumerals[i].number;
            //add the corresponding result to the result
            result += numAndNumerals[i].roman;
            i--; //if there is more to be taken away, stay in the loop
        }

    }
    return result;
}

console.log(RomanNumeralGenerator(25))

Test('should equal XXV', 'XXV', RomanNumeralGenerator(25))
Test('should return 0', 0 , RomanNumeralGenerator(0) )
Test('should return 0', 0 , RomanNumeralGenerator(-1) )
Test('should return 0', 0 , RomanNumeralGenerator(4000) )
Test('should return X', 'X', RomanNumeralGenerator(10))
Test('should return MCCLIV', 'MCCLIV', RomanNumeralGenerator(1254) )

/**
 * Test
 * add a description of the test, what the answer should be, and the test is the function being tested
 * @param {string} description
 * @param {any} answer
 * @param {function} test
 * @returns {void} 
 */
function Test (description = 'should be true', answer, test){
    const result = answer === test; 
    console.log(`${description} is  -- ${result ? 'true': 'false'}` )
    return result
}