/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// var groupAnagrams = function(strs) {
//   var ary = [];
//   function checkSame(a1, a2) {
//     if (a1.length !== a2.length) {
//       return false;
//     }
//     for (var i = 0; i < a1.length; i++) {
//       var nows = a1[i];
//       var ar = new RegExp(nows, "g");
//       var a1_l = a1.match(ar);
//       var a2_l = a2.match(ar);
//       if (a1_l != null && a2_l != null) {
//         if (a1_l.length !== a2_l.length) {
//           return false;
//         }
//       } else {
//         return false;
//       }
//     }
//     return true;
//   }
//   for (var i = 0; i < strs.length; i++) {
//     var ary_c = [];
//     if (strs[i] === undefined) {
//       continue;
//     }
//     ary_c.push(strs[i]);
//     for (var j = i + 1; j < strs.length; j++) {
//       if (strs[j] === undefined) {
//         continue;
//       }
//       if (checkSame(strs[i], strs[j])) {
//         ary_c.push(strs[j]);
//         strs[j] = undefined;
//       }
//     }

//     ary.push(ary_c);
//   }
//   return ary;
// };

// var res = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
// res.forEach(r => {
//   console.log(r);
// });

// var re = "12345666".match(/6/g);
// console.log(re);

// var groupAnagrams = function(strs) {
//   var ary = [];
//   var hash = {};
//   var now_index = 0;
//   strs.forEach(function(v) {
//     var res = v
//       .split("")
//       .sort()
//       .join("");
//     if (hash[res] === undefined) {
//       hash[res] = now_index;
//       ary[now_index] = [v];
//       now_index++;
//     } else {
//       ary[hash[res]].push(v);
//     }
//   });
//   return ary;
// };

var groupAnagrams = function(strs) {
  const a = "a".charCodeAt();
  let map = new Map();
  for (let i = 0; i < strs.length; i++) {
    let charArr = createArr();
    for (let j = 0; j < strs[i].length; j++)
      charArr[strs[i].charCodeAt(j) - a]++;
    let key = charArr.join("");
    if (map.has(key)) {
      map.get(key).push(strs[i]);
    } else {
      map.set(key, [strs[i]]);
    }
  }
  const ans = [];
  for (let value of map.values()) {
    ans.push(value);
  }
  return ans;
};

function createArr() {
  let i = 0;
  let arr = [];
  while (i < 26) {
    arr.push(0);
    i++;
  }
  return arr;
}

var res = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
res.forEach(r => {
  console.log(r);
});
