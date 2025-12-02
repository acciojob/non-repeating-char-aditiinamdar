function firstNonRepeatedChar(str) {
 // Write your code herefor (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
	
  }
return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
