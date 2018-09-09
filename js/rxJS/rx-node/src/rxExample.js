// function getN (n, start, end) {
//   if (!n || !start || !end) {return;}

//   if (start < end) {return;}
//   // 获取n 个
//   let fn = Math.floor(n)
//   let sz = []
//   if (end - start < fn) {
//     fn = end - start
//   }
//   while(sz.length !== fn) {
//     let res = Math.round(start + Math.random() * (end - start))
//     let nsz = sz.join('')
//     let rg = new RegExp(res)
//     !rg.test(nsz) ? sz.push(res) : false
//   }
//   return sz
// }

// function getValue (res) {
//   // console.log(typeof res === "object")
//   if (typeof res === 'object') {
//     return getN(parseInt(res[0]), parseInt(res[1]), parseInt(res[2]))
//   }
// }

// export default getValue
