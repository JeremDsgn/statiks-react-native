/*
* A little function to check if the data contained in a declared variable exists
*/
export function dataIsEmpty(data) {
  let arrayIntoArray = (data instanceof Array) ? data.filter(array => !dataIsEmpty(array)).length === 0 : false;
  return (data === undefined || data === null || data.length === 0 || arrayIntoArray);
}

/*
* Some API return html tag in their response (e.g. dribbble about key return <a href="#"></a> for link add)
*/
export function removeTag(s) {
  return s.replace(/(<(?:.|\n)*?>)/g, '');
}

/*
* Put the first letter of network name in uppercase
*/
export function capitalize(string) {
  return string && string[0].toUpperCase() + string.slice(1);
}

// export function decode_utf8(string) {
//   return decodeURIComponent(escape(string));
// }

// export function Utf8Decode(input) {
//   let string = input.replace(
//     /[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,

//     function(c) {
//       let cc = ((c.charCodeAt(0) & 0x0f) << 12) | ((c.charCodeAt(1) & 0x3f) << 6) | ( c.charCodeAt(2) & 0x3f);
//       return String.fromCharCode(cc);
//     }
//   );

//   string = string.replace(
//     /[\u00c0-\u00df][\u0080-\u00bf]/g,

//     function(c) {
//       let cc = (c.charCodeAt(0) & 0x1f) << 6 | c.charCodeAt(1) & 0x3f;
//       return String.fromCharCode(cc);
//     }
//   );

//   return string;
// }
