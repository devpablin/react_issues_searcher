/**
 * Method that ellipse (add '...' at the end) a string if it exceed the length param.
 * @param {string} str The current text to truncate.
 * @param {number=} length Maximum length allowed
 * @param {string=} ending String to put at the end of the truncate.
 */
 export const textTruncate = (str = '', length = 100, ending = '...') => {
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};
