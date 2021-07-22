/**
 * 1
 */
console.log(+"2" + 3); // vypíše 5 pretože + pred dvojkou ju mení na číslo
console.log("2" + 3); // vypíše 23
console.log(!![]); // vypíše true - prvý výkričník vráti obrátenú hodnotu pola prevedeného do boolean hodnoty, druhý výkrčik to opäť obráti naspäť => teda v zkratke (prazde pole je truthy, prvy vykricnik ju zmeni na falsy, dalsi opat na truhty) => cize vpodstate !!(var) je to iste ako Boolean(var)
console.log(!!0); //vypíše false - 0 je jednou z falsy hodnot
console.log(null == undefined); // true - dvojity == operator nekontroluje typy, len hodnoty .. aj ked neviem preco teito hodnoty povazuje za rovnake
console.log(1 || 2); // 1 - vrati prvu pravidvu hodnotu
console.log(3 && 5); // vrati 5 ak je vsetko pravidve, tak to vrati posledny vyraz
console.log(false && 5); // vrati false
console.log(null === undefined); // false - nie su rovnake typy
console.log(NaN === NaN); // false - NaN je vzdy false

/**
 * 2
 */
// odpoved vramci prvej otazky

/**
 * 3
 */
const nums = [1, 2, 4];

const checkSum = (nums) => {
  if (!Array.isArray(nums)) {
    throw "argument must be an array";
  }

  return nums.reduce((acc, num) => acc + num * num);
};

console.log(checkSum(nums));

/**
 * 4
 */
const waitMinutes = (minutesCount) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved");
    }, minutesCount * 60000);
  });
};

(async () => {
  console.log("prvni vypis");
  await waitMinutes(3);
  console.log("tento vypis ze zobrazi za 3 minuty");
})();

/**
 * 5
 *  const o1 = { x: 1, y: 2, z: 3 };
 *  const o2 = { x: 11, ...o1, z: 33 };
 */

// takže o2 vyzera tato = { x:1, y:2, z:33 } - ... spread operator zkopiruje hodnoty z objektu o1 do o2, pricom v objekte u vzdy vsetky key unikatne. Vzdy plati poslena zadefinovana hodnota pre dany key..
const o1 = { x: 1, y: 2, z: 3 };
const o2 = { x: 11, ...o1, z: 33 };
console.log("x=", o2.x); // x=1
console.log("y=", o2.y); // y=2
console.log("z=", o2.z); // z=33

/**
 * 6
 */
const array = [[12, 5, -3], [44, 55], [-1]];

const output = array
  .reduce((acc, arr) => {
    return [
      ...acc,
      ...arr.map((num) => {
        return { age: num };
      }),
    ];
  }, [])
  .filter((item) => item.age > 0);

console.log(output);

/**
 * 7
 */
// [1, -2, -0, 2, 0, -1].sort() ===>  [-2, -1, -0, 0, 1, 2]

/**
 * 8
 */

/*import React from "react";

const BulletList = ({ list = ["prvni", "druhy", "treti"] }) => {
  return (
    <ul>
      {list && list.length > 0 && list.map(item => <li>{item}</li>)}
    </ul>
  )
}

export default BulletList;*/

/**
 * 9
 */

/*import React from "react";

const CyclicClick = ({ list = ["prvni", "druhy", "treti"] }) => {
  const [position, setPosition] = React.useState(0)

  const handleItemChange = () => {
    if(list.length <= 1){
      return;
    }

    if(position + 1 === list.length){
      setPosition(0)
    } else {
      setPosition(position+1)
    }
  }

  return (
    <div onClick={handleItemChange}>
      {list && list.length > 0 ? list[position] : "default value"}
    </div>
  )
}

export default CyclicClick;*/

/**
 * 9
 */
// Context služi na zdieľanie dat naprieč komponetami, bez toho, aby som tie data musel predavať cez props každého kompentu
// teda ak mam komponenty <Context><Child1> <Child2> .... <Child10></Context> .. tak vśetky komponenty obalene v Contexte majú prístup k týmto "globálnym" datam a z komponetu "Child10" sa k nim viem dostať priamo bez toho, aby som si ich posúval cez všetkých 9 nad nimi..
// ja som to využíval zatiaľ na uloženie témy
