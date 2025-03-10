// question2.js

/**
 * Function to reverse a given string
 * @param {string} str - The string to be reversed.
 * @returns {string} - The reversed string.
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage
console.log(reverseString("hello"));  // Output: "olleh"
