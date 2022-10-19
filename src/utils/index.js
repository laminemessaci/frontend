export const findPath = (ob, key: string) => {
  const path = [];
  const keyExists = (obj) => {
    if (!obj || (typeof obj !== 'object' && !Array.isArray(obj))) {
      return false;
    } else if (obj.hasOwnProperty(key)) {
      return true;
    } else if (Array.isArray(obj)) {
      let parentKey = path.length ? path.pop() : '';

      for (let i = 0; i < obj.length; i++) {
        path.push(`${parentKey}[${i}]`);
        const result = keyExists(obj[i], key);
        if (result) {
          return result;
        }
        path.pop();
      }
    } else {
      for (const k in obj) {
        path.push(k);
        const result = keyExists(obj[k], key);
        if (result) {
          return result;
        }
        path.pop();
      }
    }
    return false;
  };

  keyExists(ob);

  return path.join('.');
};

export function formatData(obj) {
  // console.log("obj==> ", obj);
  const results = [];
  obj.data.map((nbrKind, key) => {
    if (Object.keys(obj.kind)[key] == nbrKind.kind) {
      const frenchDatas = translateToFr(obj.kind[key + 1]);

      nbrKind.kind = frenchDatas;
    }
    console.log('obj', nbrKind);
    results.push({
      activity: nbrKind.kind,
      value: nbrKind.value,
    });
  });
  console.log('Results: ', results);
  return results;
}

function translateToFr(str) {
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

export function capitalizesFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}
