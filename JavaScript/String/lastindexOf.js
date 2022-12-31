/**The lastIndexOf() method returns the index of the last accurance of a
 * specified text in a string.
 */

const str = "Please locate where locate accurs";
console.log(str.lastIndexOf("locate"));

//Both indexOf() and lastIndexOf() return -1 if the text is not found

const str2 = "Please locate where locate accurs";
console.log(str2.lastIndexOf("Jhon"));

//Both method accepts a second parameter as the starting position for the search:

const str3 = "Please locate where locate accurs";
console.log(str3.indexOf("locate",19))