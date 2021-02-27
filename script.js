// Natural Numbers
function natNum1F() {
    var natNum1 = document.getElementById("natNum1").value;
    var combine = "";
    if (natNum1 >= 1) {
        for (let index = 1; index <= natNum1; index++) {
            console.log(index);
            combine += " " + index;
            document.getElementById("natNum1R").innerHTML = `Natural Numbers are ${combine}`;
        }
    }
    else if (natNum1 < 1) {
        alert("Value should be equal to or greater than 1")
    }
    else {
        alert("Invalid Input")
    }
}
// Natural Numbers Reverse
function natNum1RF() {
    var natNumR1 = document.getElementById("natNumR1").value;
    var combineR = "";
    if (natNumR1 >= 1) {
        for (let indexR = natNumR1; indexR >= 1; indexR--) {
            console.log(indexR);
            combineR += " " + indexR;
            document.getElementById("natNum1RR").innerHTML = `Natural Numbers are ${combineR}`;
        }
    }
    else if (natNumR1 < 1) {
        alert("Value should be equal to or greater than 1")
    }
    else {
        alert("Invalid Input")
    }
}
// Alphabets
function alphabetL() {
    var alphabet = 97
    var combineA = ""
    for (let index = alphabet; index < 123; index++) {
        var charCode = String.fromCharCode(index);
        combineA += " " + charCode;
        console.log(charCode);
        document.getElementById("alphaL").innerHTML = `${combineA}`;

    }

}
function alphabetU() {
    var alphabet = 65
    var combineA = ""
    for (let index = alphabet; index < 91; index++) {
        var charCode = String.fromCharCode(index);
        combineA += " " + charCode;
        console.log(charCode);
        document.getElementById("alphaU").innerHTML = `${combineA}`;

    }
}
// Even and Odd Numbers upto 100
function even() {
    var combineEven = ""
    for (let indexE = 0; indexE <= 100; indexE++) {
        if (indexE % 2 === 0) {
            console.log(indexE);
            combineEven += " " + indexE
            document.getElementById("evenR").innerHTML = combineEven
        }
    }
}
function odd() {
    var combineOdd = ""
    for (let indexO = 0; indexO <= 100; indexO++) {
        if (indexO % 2 !== 0) {
            console.log(indexO);
            combineOdd += " " + indexO
            document.getElementById("oddR").innerHTML = combineOdd
        }
    }
}
// Loops End 

// Conditions Start 
// Maximum Number(2)
function maxNum2() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    if (num1 > num2) {
        document.getElementById("maxNum2R").innerHTML = `${num1} is greater than ${num2}`
    }
    else if (num2 > num1) {
        document.getElementById("maxNum2R").innerHTML = `${num2} is greater than ${num1}`
    }
    else {
        document.getElementById("maxNum2R").innerHTML = `${num1} is equal to ${num2}`
    }
}
// Maximum Number(3)
function maxNum3() {
    var num1M = document.getElementById("num1M").value;
    var num2M = document.getElementById("num2M").value;
    var num3M = document.getElementById("num3M").value;
    if (num1M === "" || num2M === "" || num3M === "") {
        alert("Enter Values")
    }
    else if (num1M > num2M && num1M > num3M) {
        document.getElementById("maxNum3R").innerHTML = `Value one (${num1M}) is greater than Value two (${num2M}) and Value three (${num3M})`
    }
    else if (num2M > num1M && num2M > num3M) {
        document.getElementById("maxNum3R").innerHTML = `Value two (${num2M}) is greater than Value one (${num1M}) and Value three (${num3M})`
    }
    else if (num3M > num1M && num3M > num2M) {
        document.getElementById("maxNum3R").innerHTML = `Value three (${num3M}) is greater than Value one (${num1M}) and Value two (${num2M})`
    }
    else if (num1M === num2M && num2M === num3M && num1M === num3M) {
        document.getElementById("maxNum3R").innerHTML = `Values are equal`
    }
}
// Divisible by 5 or 11?
function divisibleNum() {
    var numD = document.getElementById("numD").value;
    if (numD === "") {
        alert("Enter Numeric Value")
    }
    else if (numD % 5 === 0 && numD % 11 === 0) {
        document.getElementById("numDR").innerHTML = `${numD} is divisible by both 5 and 11`
    }
    else {
        if (numD % 5 === 0) {
            document.getElementById("numDR").innerHTML = `${numD} is divisible by 5 only`
        }
        else if (numD % 11 === 0) {
            document.getElementById("numDR").innerHTML = `${numD} is divisible by 11 only`
        }
        else {
            document.getElementById("numDR").innerHTML = `${numD} is neither divisible by 5 nor 11`
        }
    }
}
// Vowel Or Consonant?
function vowelConsonant() {
    var vowelC = document.getElementById("vowelC").value;
    var vowelCA = "aeiouAEIOU"
    var find = (vowelCA.match(new RegExp(`${vowelC}`, "g")));
    if (vowelC === "") {
        alert("Enter a single Alphabet")
    } else if (find) {
        console.log("Vowel", vowelC);
        document.getElementById("vowelCR").innerHTML = `${vowelC} is a Vowel`
    }
    else {
        console.log("Consonant", vowelC);
        document.getElementById("vowelCR").innerHTML = `${vowelC} is a Consonant`
    }
}
// Leap Year Or Not
function leapYear() {
    var yearInput = document.getElementById("leapYear").value;
    if (yearInput === "") {
        alert("Enter Valid Year")
    }
    else if ((yearInput % 4 == 0) && (yearInput % 100 != 0) || (yearInput % 400 == 0)) {
        document.getElementById("leap").innerHTML = `${yearInput} is a Leap Year`;

    } else {
        document.getElementById("leap").innerHTML = `${yearInput} is not a Leap Year`;

    }
}
// Number is negative, positive or zero?
function numSign() {
    var numSignVal = document.getElementById("numSign").value;
    if (numSignVal === "") {
        alert("Enter a value")
    }
    else if (numSignVal == 0) {
        document.getElementById("numSignR").innerHTML = `Number is ${numSignVal}`;
    }
    else if (numSignVal > 0) {
        document.getElementById("numSignR").innerHTML = `${numSignVal} is positive`;
    }
    else if (numSignVal < 0) {
        document.getElementById("numSignR").innerHTML = `${numSignVal} is negative`;
    }
    console.log(numSignVal);
}
// Character is alphabet or not?
function characterAlpha() {
    var alphaC = document.getElementById("alphaC").value;
    var findCA = (alphaC.match(new RegExp(/^[A-Za-z]+$/)))
    if (alphaC === "") {
        alert("Enter a Character")
    }
    else if (findCA) {
        document.getElementById("alphaCR").innerHTML = `${alphaC} is a character`;
        console.log("Character", alphaC);
    }
    else {
        document.getElementById("alphaCR").innerHTML = `${alphaC} is not a character`;
        console.log("Not a character", alphaC);
    }
}
// Number is even or odd
function evenOrOdd() {
    var userOENum = document.getElementById("userOENum").value;
    if (userOENum % 2 === 0) {
        document.getElementById("userOENumR").innerHTML = `${userOENum} is an even number`;
        console.log(`${userOENum} is an even number`);
    }
    else if (userOENum % 2 !== 0) {
        document.getElementById("userOENumR").innerHTML = `${userOENum} is a odd number`;
        console.log(`${userOENum} is an even number`);
    }
    else {
        alert("Enter a number")
    }
}
// Alphabet, digit or special character
function aDSChar() {
    var aDS = document.getElementById("aDS").value;
    var char = aDS.match(new RegExp((/^[A-Za-z]+$/)));
    var digit = aDS.match(new RegExp((/^[0-9]+$/)));
    if (aDS == "") {
        alert("Enter a character")
    }
    else if (char) {
        document.getElementById("aDSR").innerHTML = `${aDS} is a alphabet`;
        console.log(`${aDS} is an alphabet`);
    }
    else if (digit) {
        document.getElementById("aDSR").innerHTML = `${aDS} is a digit`;
        console.log(`${aDS} is a digit`);
    }
    else {
        document.getElementById("aDSR").innerHTML = `${aDS} is a special character`;
        console.log(`${aDS} is a special character`);
    }
}
// Conditions End

// Strings Start 
function stringLength() {
    var strLen = document.getElementById("strLen").value;
    if (strLen == "") {
        alert("Enter a string value")
    } else {
        console.log(`The length of given string is ${strLen.length}`);
        document.getElementById("strLenR").innerHTML = `The length of given string is ${strLen.length}`;
    }
}
// Copy one string to another string
function stringCopy() {
    var strCopy1 = document.getElementById("strCopy1").value;
    var strCopy2 = document.getElementById("strCopy2").value;
    if (strCopy1 == "" || strCopy2 == "") {
        alert("Enter String Values")
    }
    else {
        console.log(`The Second String before copying is ${strCopy2}.<br> The Second String after copying is ${strCopy1}${strCopy2}`);
        document.getElementById("strCopyR").innerHTML = `The Second String before copying is ${strCopy2}.<br> The Second String after copying is ${strCopy1}${strCopy2}`
    }
}
// Concatenate two strings
function stringConcatenate() {
    var strConc1 = document.getElementById("strConc1").value;
    var strConc2 = document.getElementById("strConc2").value;
    if (strConc1 == "" || strConc2 == "") {
        alert("Enter String Values")
    }
    else {
        console.log(`The required String is ${strConc1}${strConc2}`);
        document.getElementById("strConcR").innerHTML = `The required String is ${strConc1}${strConc2}`
    }
}
// Compare two strings
function stringCompare() {
    var strComp1 = document.getElementById("strComp1").value;
    var strComp2 = document.getElementById("strComp2").value;
    if (strComp1 == "" || strComp2 == "") {
        alert("Enter String Values")
    }
    else if (strComp1 == strComp2) {
        console.log(`Both the strings are equal i.e ${strComp1} = ${strComp2}`);
        document.getElementById("strCompR").innerHTML = `Both the strings are equal i.e ${strComp1} = ${strComp2}`
    }
    else {
        console.log(`Both the strings are not equal i.e ${strComp1} = ${strComp2}`);
        document.getElementById("strCompR").innerHTML = `Both the strings are not equal i.e ${strComp1} ≠ ${strComp2}`
    }
}
// Lowercase string to uppercase
function stringLCase() {
    var strLCase = document.getElementById("strLCase").value;
    if (strLCase === "" || strLCase == (strLCase.match(new RegExp(/^[0-9]+$/)))) {
        alert("Enter alphabets")
    }
    else {
        strLCase = strLCase.toLowerCase()
        console.log(`The required String is ${strLCase}`);
        document.getElementById("strLCaseR").innerHTML = `The required String is ${strLCase}`;
    }
}
//  Uppercase string to lowercase
function stringUCase() {
    var strUCase = document.getElementById("strUCase").value;
    if (strUCase === "" || strUCase == (strUCase.match(new RegExp(/^[0-9]+$/)))) {
        alert("Enter alphabets")
    }
    else {
        strUCase = strUCase.toToggleCase()
        console.log(`The required String is ${strUCase}`);
        document.getElementById("strUCaseR").innerHTML = `The required String is ${strUCase}`;
    }
}
// Total number of alphabets, digits or special character in a string
function stringADS() {
    var strADS = document.getElementById("strADS").value;
    alphabets = 0;
    digits = 0;
    special = 0;
    if (strADS == "") {
        alert("Enter String Value");
    }
    else {
        for (let index = 0; index < strADS.length; index++) {
            if (strADS[index].match(/[A-Za-z]/)) {
                alphabets++;
            }
            else if (strADS[index].match(/[0-9]/)) {
                digits++;
            }
            else {
                special++;
            }
        }
        console.log(`No. of alphabets in ${strADS} = ${alphabets} <br> No. of digits in ${strADS} = ${digits} <br> No. of special characters  in ${strADS} = ${special}`);
        document.getElementById("strADSR").innerHTML = (`No. of alphabets in ${strADS} = ${alphabets} <br> No. of digits in ${strADS} = ${digits} <br> No. of special characters  in ${strADS} = ${special}`);
    }
}
// Last occurrence of a character
function stringLastOcc() {
    var locS = document.getElementById("locS").value;
    var locC = document.getElementById("locC").value;
    if (locS == "" || locC == "") {
        alert("Enter String Values")
    }
    else {
        let occurrenceL = locS.lastIndexOf(locC);
        if (occurrenceL == -1) {
            console.log(`${locC} does not occurs in ${locS}`);
            document.getElementById("locR").innerHTML = `${locC} does not occurs in ${locS}`;
        }
        else {
            console.log(`${locC} occurs at ${occurrenceL} index in ${locS}`);
            document.getElementById("locR").innerHTML = `${locC} occurs at ${occurrenceL} index in ${locS}`;
        }
    }
}
// First occurrence of a character 
function stringFirstOcc() {
    var focS = document.getElementById("focS").value;
    var focC = document.getElementById("focC").value;
    if (focS == "" || focC == "") {
        alert("Enter String Values")
    }
    else {
        let occurrenceF = focS.indexOf(focC);
        if (occurrenceF == -1) {
            console.log(`${focC} does not occur in ${focS}`);
            document.getElementById("focR").innerHTML = `${focC} does not occur in ${focS}`;
        }
        else {
            console.log(`${focC} occurs at ${occurrenceF} index in ${focS}`);
            document.getElementById("focR").innerHTML = `${focC} occurs at ${occurrenceF} index in ${focS}`;
        }
    }
}