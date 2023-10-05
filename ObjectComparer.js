const objectCompare = (obj1, obj2) => {
    const keyList1 = Object.keys(obj1);
    const keyList2 = Object.keys(obj2);
    let result = true;

    if (keyList1.length !== keyList2.length) {
        return false;
    }
    keyList1.forEach((e, i) => {
        if (e !== keyList2[i]) {
            result = false;
        }
    })
    keyList1.forEach((key) => {
        if (typeof (obj1[key]) === 'object' &&
            typeof (obj2[key]) === 'object' &&
            !Array.isArray(obj1[key]) &&
            !Array.isArray(obj1[key])) {
            if(!objectCompare(obj1[key], obj2[key])) {
              result = false;
            };
        } else if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
            obj1[key].forEach((e, i) => {
                if (e !== obj2[key][i]) {
                    result = false;
                }
            })
        } else {
            if (obj1[key] !== obj2[key]) {
                result = false;
            }
        }
    })
    return result;
}

console.log(objectCompare(
  {
    name1: 'abc',
    age: 12,
    address: {
        city1: 'ABC1',
        state: 'YT'
    }
},
{
    name1: 'abc',
    age: 12,
    address: {
        city1: 'ABC1',
        state: 'YT'
    }
},
))