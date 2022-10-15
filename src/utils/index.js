export const findPath = (ob, key: string) => {
  const path = [];
  const keyExists = (obj) => {
    if (!obj || (typeof obj !== "object" && !Array.isArray(obj))) {
      return false;
    } else if (obj.hasOwnProperty(key)) {
      return true;
    } else if (Array.isArray(obj)) {
      let parentKey = path.length ? path.pop() : "";

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

  return path.join(".");
};

export function formatData(obj) {
  console.log("obj==> ", obj);

  obj.data.map((nbrKind, key) => {
    if (Object.keys(obj.kind)[key] == nbrKind.kind) {
      const frenchDatas = translateToFr(obj.kind[key + 1]);
      console.log(frenchDatas);

      nbrKind.kind = frenchDatas;
    }
    console.log(nbrKind);
    return nbrKind;
  });
}

function translateToFr(str) {
  var performances = {
    energy: capitalizesFirstLetter("energie"),
    strength: capitalizesFirstLetter("force"),
    speed: capitalizesFirstLetter("vitesse"),
    intensity: capitalizesFirstLetter("intensity"),
    cardio: capitalizesFirstLetter("cardio"),
    endurance: capitalizesFirstLetter("endurance"),

    default: "unknown",
  };
  return performances[str] || performances["default"];
}

// export function translateToFr(str) {
//   switch (str) {
//     case "energy":
//       return "energie";
//     case "strength":
//       return "force";
//     case "speed":
//       return "vitesse";
//     case "intensity":
//       return "intensité";
//     case "cardio":
//       return "cardio";
//     case "endurance":
//       return "endurance";
//     default:
//       return "unknown";
//   }
// }

export function capitalizesFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}
