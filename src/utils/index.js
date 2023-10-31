// @ts-nocheck
// export const findPath = (ob, key: string) => {
//   const path = [];
//   const keyExists = (obj) => {
//     if (!obj || (typeof obj !== 'object' && !Array.isArray(obj))) {
//       return false;
//     } else if (obj.hasOwnProperty(key)) {
//       return true;
//     } else if (Array.isArray(obj)) {
//       let parentKey = path.length ? path.pop() : '';

//       for (let i = 0; i < obj.length; i++) {
//         path.push(`${parentKey}[${i}]`);
//         const result = keyExists(obj[i], key);
//         if (result) {
//           return result;
//         }
//         path.pop();
//       }
//     } else {
//       for (const k in obj) {
//         path.push(k);
//         const result = keyExists(obj[k], key);
//         if (result) {
//           return result;
//         }
//         path.pop();
//       }
//     }
//     return false;
//   };

//   keyExists(ob);

//   return path.join('.');
// };


/**
 * Formats the given data object into a new array of objects with translated activity names.
 *
 * @param {Object} obj - The data object to be formatted.
 * @return {Array} An array of objects with translated activity names and their corresponding values.
 */
export function formatData(obj) {
  // console.log("obj==> ", obj);
  const results = [];
  obj.data.map((nbrKind, key) => {
    if (Object.keys(obj.kind)[key] == nbrKind.kind) {
      const frenchDatas = translateToFr(obj.kind[key + 1]);

      nbrKind.kind = frenchDatas;
    }
    results.push({
      activity: nbrKind.kind,
      value: nbrKind.value,
    });
  });
  // console.log('Results: ', results);
  return results;
}




/**
 * Translates a given string to French.
 *
 * @param {string} str - The string to be translated.
 * @return {string} The translated string in French.
 */
export function translateToFr(str) {
  var performances = {
    energy: capitalizesFirstLetter('energie'),
    strength: capitalizesFirstLetter('force'),
    speed: capitalizesFirstLetter('vitesse'),
    intensity: capitalizesFirstLetter('intensité'),
    cardio: capitalizesFirstLetter('cardio'),
    endurance: capitalizesFirstLetter('endurance'),

    default: 'unknown',
  };
  return performances[str] || performances['default'];
}


/**
 * Capitalizes the first letter of a given string and converts the rest to lowercase.
 *
 * @param {string} str - The string to be capitalized.
 * @return {string} The capitalized string.
 */
export function capitalizesFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}

/**
 * Format an integer with the french dot separator grouping digits by 3.
 * @param {number} value
 * @returns {string}
 */
export function toFrenchIntegerFormat(value) {
  value = value.toString();

  if (value.length < 4) {
    return value;
  }

  return `${toFrenchIntegerFormat(value.slice(0, -3))}.${value.slice(-3)}`;
}
