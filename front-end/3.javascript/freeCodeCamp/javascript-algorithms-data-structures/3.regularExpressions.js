/* 

regexp are used to match parts of strings
create patterns to help you match

.test() when called from regex, passes the string
returns true if the regex(pattern) is found in the string
*/

let testSTR = 'freeCodeCamp';
let testRegex = /Code/;
console.log(`is Code in testSTR: ${testRegex.test(testSTR)}`);


let myString = 'hello world', myRegex = /hello/;
let result = myRegex.test(myString);
console.log(`is hello in myString: ${result}`);
console.log(`is HELLO in myString: ${myRegex.test(/HELLO/)}`);

let waldoIsHiding = 'somewhere waldo is hiding in the text',
    waldoRegex = /waldo/,
    foundWaldo = waldoRegex.test(waldoIsHiding);

console.log(`found waldo?: ${foundWaldo}`);

// regexp patterns with multiple matches
/* 
/ / single match pattern
/ | / or operator 
matches patterns any of the patterns separated by it
any patterns before or after
*/

let petString = 'james has a pet cat';
let petRegex = /dog|cat|bird|fish/;
let hasPet = petRegex.test(petString);
console.log(`hasPet: ${hasPet}`);

/* 
ignore case while matching

case is the difference between upper and lowercase letters

a flag can be used to match both cases, the i flag
append it to regex
/ignorecase/i

*/

let caseIgnoreRegex = /freecodecamp/i;
console.log(`can regex match lower and uppercase? : ${caseIgnoreRegex.test(testSTR)}`);

/*
extract a match

applies .match() on a string and pass in the regex
returns an array with the match(es)

opposite of test syntax
'string'.match(/regex/)
/regex/.test('string')

*/

let extractStr = 'extract the word "coding" from this string, another Coding here, and here too: coding.';
let regex = /coding/;
let globalRegex = /coding/gi;
let extracted = extractStr.match(regex);
console.log(`extracted match: ${extracted}`)

// extract matches with g global flag
let multipleExtractedMatches = extractStr.match(globalRegex);
console.log(`multiple extracted matches: ${multipleExtractedMatches}`);

// match anything with wildcard period

let humStr = 'ill hum a song';
let hugStr = 'bear hug';
let huRegex = /hu./;
console.log(`does humStr have hu: ${huRegex.test(humStr)}`);
console.log(`does hugStr have hu: ${huRegex.test(hugStr)}`);

let exampleStr = 'lets have fun with regular expressions!';
let unRegex = /un./;
console.log(` is un found in exampleStr: ${unRegex.test(exampleStr)}`);

/* 
match single character with multiple possibilities
character classes allow to define a group of characters [] you wish to match

*/

let string = 'big, bag, bug, bog';
console.log(`extract values with a [aiu] character class: ${string.match(/b[aiu]g/g)}`);
console.log(`does 'big' contain /b[aiu]g/ regexp?: ${/b[aiu]g/.test('big')}`);

let quoteSample = 'beware of bugs in the above code; i have only proved it correct, not tried it.';
let vowelRegex = /[aeiou]/gi;
console.log(`words that contain /[aeiou]/: ${quoteSample.match(vowelRegex)}`);

// match letters of the alphabet
/* 
hypen - is used to define a range of characters
[a-e] matches all lowercase characters from a to e

*/

let catStr = "cat",
    batStr = "bat",
    matStr = "mat";

let bgRegex = /[a-e]at/;
console.log(catStr.match(bgRegex));
console.log(batStr.match(bgRegex));
console.log(matStr.match(bgRegex));

let anotherQuote = 'the quick brown fox jumps over the lazy dog';

let globalAlphabetRegex = /[a-z]/gi;
let alphabetRegex = /[a-z]/i;
let resultArray = anotherQuote.match(globalAlphabetRegex);
console.log(resultArray);
console.log(anotherQuote.match(alphabetRegex));

// match numbers and letters

let jennyStr = 'jenny8675309';
let lettersNumbers = /[a-z0-9]/ig;
console.log(`letters and numbers matching regex: ${jennyStr.match(lettersNumbers)}`);

// matching single characters not present in the regex (pattern)
/* 
negated character sets
^ creates a cnegated character set
/[^aeiou]/gi
*/
let negatedVocals = /[^aeiou]/gi;

let sampleQuote = '3 blind mice';
let negatedVocalsNumbers = /[^aeiou0-9]/gi;
console.log(`negate vocals and numbers in a regex: ${sampleQuote.match(negatedVocalsNumbers)}`);

// match characters that occur multiple times

let singleCharMultiOcurrences = /a+/gi;

let difficultSpelling = 'mississippi';
let regexPattern = /s+/gi;
console.log(`character that occur multiple times: ${difficultSpelling.match(regexPattern)}`);

// match characters that occur 0 or more times
let occur0OrMore = /go*/;

let chewieQuote = "Aaaaaaaaaaaarrrghh!";
let chewieRegex = /Aa*/;

// lazy matching
/* 
greedy match
finds the longest possible part of a string that fits the regex
regexps are greedy by default

lazy match
finds the smallest possible part of the string that fits the pattern

/t[a-z]*i/
pattern that starts with t and ends with i with any character a-z in between
if the string is titanic, greedy match would be titani

? is the character used for lazy matching

/t[a-z]*?i/
returns ti instead of titani

*/

let text = "<h1>winter is coming</h1>";
let regExp = /<.*?>/;
console.log(`
pattern starts with < and ends with >
. wild card is used to match anything after <
* is used to match anything between < and >
? is used to make it a lazy match:
${text.match(regExp)}`);

// match beginning string patterns
/*
outside of a character set, the caret is used to search for patterns at the beginning of strings

*/

let firstString = "Ricky is first and can be found";
let firstRegex = /^Ricky/;
console.log(`does firstString start with Ricky? :${firstRegex.test(firstString)}`);

let notFirst = "you can't find Ricky now";
console.log(`is ricky found in notFirst? : ${firstRegex.test(notFirst)}`);

// match ending string patterns

let theEnding = "this is a never ending story";
let storyRegex = /story$/;
let notEnding = "sometimes a story is in the middle";

console.log(`does theEnding end with story?: ${storyRegex.test(theEnding)}`);
console.log(`does notEnding end with story?: ${storyRegex.test(notEnding)}`);

// match all letters and numbers
/* 
shorthand character classes
\w is shortcut to [A-Za-z0-9_]
matches upper and lowercase, numbers and includes the underscore character in the pattern

*/

let longHand = /[A-Za-z0-9_]/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";

console.log(`is numbers in the character class longHand?: ${longHand.test(numbers)}`);
console.log(`is the string varNames in the character class longHand?: ${longHand.test(varNames)}`);
console.log(`is numbers in shortHand?: ${shortHand.test(numbers)}`);
console.log(`is varNames in shortHand?: ${shortHand.test(varNames)}`);

let someQuote = "The five boxing wizards jump quickly";
let alphabetRegexV2 = /\w/g;
console.log(`how many matches of alphabetRegexV2 are there in someQuote?: ${someQuote.match(alphabetRegexV2).length}`);

// match everything but letters and numbers

/* 
\w shorthand for [A-Za-z0-9_]
\W shorthand for [^A-Za-z0-9_] the opposite of \w

*/

let inverseAlphabetRegex = /\W/;
let includesNonNumeric = "42%";
let sentence = "coding!";

console.log(`matches for /\W/ in "42%": ${includesNonNumeric.match(inverseAlphabetRegex)}`);
console.log(`matches for /\W/ in "coding!": ${sentence.match(inverseAlphabetRegex)}`); 

/* 

match all numbers
  \d shortcut for character class [0-9]

match all non-numeric characters
  \D shorcut to search all non-numeric values present in a string

*/

/* 
restrict possible usernames

regexp are useful to check all usernames in a database

rules for usernames
can only use alpha-numeric characteres
numbers can only be at the end
letters can be lower or uppercase
at least two characters long

*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let altUserCheck = /^[a-z]([0-9]{2, }|[a-z]+\d*)$/i;

console.log(`does the string includes the pattern: ${userCheck.test(username)}`);

/*
userCheck
^ start of input
[a-z] first character is a letter
[a-z]+ following characters are letters
\d*$ input ends with 0 or more digits
| or
^[a-z] first character is a letter
\d\d+ following characters are 2 or more digits
$ end of input
i case insensitive flag

altUserCheck
^ start of input
[a-z] first character is a letter
[0-9] {2, } ends with two or more numbers
| or 
[a-z]+ has one or more following letters
\d* ends with zero or more numbers
$ end of input
i case insensitive flag
*/

/* 
match whitespace
\s can search for whitespace 
matches
  whitespace
  carriage return
  tab
  form feed
  new line characteres
shorthand for character class [\r\t\f\n\v]
*/

let whiteSpace = "whitespace. whitespace everyewhere!";
let sampleText = "whitespace is important in separating words!";
let spaceRegex = /\s/g;
console.log(`how many whitespace matches are in whiteSpace?: ${whiteSpace.match(spaceRegex)}`);


/* 
match non-whitespace characters
\S shorthand for searching everything except whitespace
similar to [^\r\t\f\n\v]

*/

let nonSpaceRegex = /\S/g;
console.log(`how many characters in whiteSpace are not whitespace?: ${whiteSpace.match(nonSpaceRegex).length}`);
console.log(`how many non-whitespace characters are in sampleText?: ${sampleText.match(nonSpaceRegex).length}`);

/* 
specify upper and lower number of matches

+ can be used to look for one or more characters
* to look for zero or more characters

quantity specifiers allow to describe a range {n, n}
you out two numbers between curly braces

*/

let A4 = "aaaah";
let A2 = "aah";
let A3 = "aaah";
let multipleAs = /a{3,5}h/;
console.log(`are there between 3 or 5 a characters in the string sample?: ${multipleAs.test(A4)}`);
console.log(`are there between 3 or 5 a characters in the string sample?: ${multipleAs.test(A2)}`);

let ohStr = "Ohhh no";
// in order to match the pattern, the string should have between 3 to 6 consecutive h's
let ohRegex = /Oh{3,6} no/i;

// specify only the lower range

let A100 = "h" + "a".repeat(100) + "h";
let multipleAsNoUpperRange = /a{3,}h/;
console.log(`does A100 contain at least 3 consecutive a's?: ${multipleAsNoUpperRange.test(A100)}`);

// exact number of matches
let specificNumOfMatches = /a{3}h/;

console.log(`does the pattern has exactly 3 consecutive a's?: ${specificNumOfMatches.test(A3)}`);

// check for all or none
/* 
? denotes the possible existence of an element
the character before ? is optional (may or may not be in the string)

usecase
slight differences in word spelling
*/

let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
console.log(`does the string contain the word color or colour?: ${rainbowRegex.test(american)}`);
console.log(`does the string contain the word color or colour?: ${rainbowRegex.test(british)}`);

/* 
positive and negative lookahead

lookaheads are patterns to look ahead in a string to check for patterns further along
useful when searching multiple patterns over the same string

two kinds: positive and negative

positive lookahead checks if the element is there, but won't match it
(?=...), the rest of the pattern returns if the pattern is present

negative lookahead checks if the element is not there
(?!...), the rest of the pattern returns if the pattern is not present

*/

let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/;
let qRegex = /q(?!u)/;

console.log(`is a u character after q?: ${quit.match(quRegex)}`);
console.log(`is a u character after q?: ${noquit.match(qRegex)}`);

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;

console.log(`password contains between 3-6 characters and at least one number${checkPass.test(password)}`);

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;

console.log(`is sampleWord greater than 5 characters and have two consecutive digits?: ${pwRegex.test(sampleWord)}`);

/* 
check for mixed grouping of characters
() group characters 

*/

// finds either penguin or pumpkin

let pumpkin = "pumpkin";
let pengAndPump = /p(engu|umpk)in/;

console.log(`does the string pumpkin match the pattern pengAndPump: ${pengAndPump.test(pumpkin)}`);

let aName = "eleanor roosevelt";
let aNameRegex = /(franklin|eleanor).*roosevelt/;

/* 
reuse patterns using capture groups
capture group enlose the regex pattern in parentheses
(\w+)

the substring matched by a capture group is temporary saved in a variable
can be accessed with the same regex and the number of the capture group
*/

let repeatSTR = "row row row your boat.";
let repeatRegex = /(\w+) \1 \1/;

console.log(`is the pattern in repeatSTR: ${repeatRegex.test(repeatSTR)}`);
console.log(`array with matched substring and capture group: ${repeatSTR.match(repeatRegex)}`);

let repeatNUM = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;

console.log(`is the reRegex pattern in repeatNUM?: ${reRegex.test(repeatNUM)}`);
console.log(`array with matched substring and capture group: ${repeatNUM.match(reRegex)}`);

// capture groups to search and replace
/* 
.replace() replaces text in a string

*/

let wrongText = "the sky is silver";
let silverRegex = /silver/;
console.log(wrongText.replace(silverRegex, "blue"));
console.log(wrongText);

let originalOrder = "code camp";
let reverseOrderRegex = /(\w+)\s(\w+)/;
console.log(`reversing code camp: ${originalOrder.replace(reverseOrderRegex, '$2 $1')}`);

let strExample = "one two three";
let fixRegex = /(one)\s(two)\s(three)/;
let fixStr = strExample.replace(fixRegex, '$3 $1 $2');
console.log(fixStr);

/* 
remove whitespace from start and end

typical routine to trim strings from whitespace at the start and end

String.prototype.trim()works and regular expressions are an alternative to that
*/

let hello = "\thello, world!     ";
console.log(`hello with whitespace: ${hello}`);
let wsRegex = /^\s+|\s+$/g;
console.log(`remove whitespace from hello: ${hello.replace(wsRegex, "")}`);

