/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var list = [];
  var nums = nums.sort((a, b) => a - b);

  var lt = nums.length;

  function moveone(f, min, max, g) {
    console.log(min + ":" + max);
    if (min > max) {
      return false;
    }
    var mid = parseInt((min + max) / 2);
    console.log(f + "-----" + min + "------" + g);
    console.log(nums[f] + nums[mid] + nums[g]);

    if (nums[f] + nums[mid] + nums[g] == 0) {
      console.log(f + "///" + mid + "/////" + g);
      if (max <= g) {
        list.push([nums[f], nums[mid], nums[g]]);
      } else {
        list.push([nums[f], nums[g], nums[mid]]);
      }
      reset = 0
      return true;
    } else if (nums[f] + nums[mid] + nums[g] < 0) {
      console.log("29<<<<<<<");
      console.log(mid);

      if (mid == max) {
        return mid;
      } else {
        var new_mid = Math.ceil((mid + max) / 2);
        console.log(new_mid);

        if (new_mid > max) {
          return max;
        } else {
          // 若新值和旧值相等，那么重计算mid
          while (nums[new_mid] == nums[mid] && new_mid < max) {
            new_mid = Math.ceil((new_mid + max) / 2);
          }
        }
        return moveone(f, new_mid, max, g);
      }
    } else if (nums[f] + nums[mid] + nums[g] > 0) {
      if (mid < min) {
        return mid;
      }
      var new_mid = Math.floor((mid + min) / 2);
      console.log("new_mid:" + new_mid + "min:" + min);
      if (new_mid == min) {
        return min;
      } else {
        // 若新值和旧值相等，那么重计算mid
        while (nums[new_mid] == nums[mid] && new_mid > min) {
          new_mid = Math.floor((new_mid + min) / 2);
        }
      }
      return moveone(f, min, new_mid, g);
    }
  }

  var reset = 0; // 重构次数　不能大于２
  function find(f, s, t, first) {
    console.log(f + "+" + s + "+" + t);
    if (f == s || s == t) {
      return;
    }
    var first = nums[f];
    var second = nums[s];
    var three = nums[t];

    var sum = first + second + three;
    console.log("sum============" + sum);

    if (sum === 0) {
      console.log(f + "/////" + s + "///////" + t);

      list.push([first, second, three]);
      reset = 0;
      if(first){
        // 继续遍历查看是否有其它值符合
        var olds = s;
        var oldt = t;
        s = s - 1;
        t = t + 1;
        while (nums[s] == nums[olds] && nums[t] == nums[oldt]&&s > f+1&&t<lt-1) {
          if (s - 1 > f) {
            s = s - 1;
          }
          if (t + 1 < lt) {
            t = t + 1;
          }
        }
        console.log("MMMMMMMMMMMMMM" + s + "m" + t);

        if (!(nums[olds] == nums[s] && nums[oldt] == nums[t])) {
          return find(f, s, t);
        } else {
          return false;
        }
      }
    } else if (sum > 0) {
      var nx_s_index = parseInt((s - f) / 2) + i;
      if (nx_s_index <= f) {
        // 已经没有可以匹配的值了
        return;
      } else {
        var res = moveone(f, f + 1, s, t);
        if (res === true) {
          // 找到了,t+1
          // 非重构的
          if(reset == 0){
            t = t + 1;
            while (nums[t] == nums[t - 1] && t < lt) {
              t++;
            }
            console.log("105ooooooooooooooooooo");
            return find(f, s - 1, t);
          }

        } else {
          // 检查是否s最小时，sum还是大于0，若是，则将t往下移
          if (res !== false && res == f + 1) {
            if(s+1 == t){
              var s = f + Math.floor((s - f) / 2);
              var t = s + 1;
            }else{
              t = s;
              s = t-1;
            }
            if (s > f && reset < 2) {
              console.log("sum还是大于０，重构后的fst:" + f + "-" + s + "-" + t);
              reset++;
              return find(f, s, t);
            } else {
              reset = 0;
              return false;
            }
          } else {
            // s-1
            while (nums[s - 1] == nums[s] && s > f + 2) {
              s--;
            }
            return find(f, s - 1, t);
          }
          return false;
        }
      }
    } else if (sum < 0) {
      var nx_t_index = parseInt((lt - t) / 2 + t);
      console.log("nx_t_index:" + nx_t_index);

      if (nx_t_index == t) {
        // 已经是最后一个了
        return false;
      } else {
        var res = moveone(f, nx_t_index, lt - 1, s);
        if (res === true) {
          // 找到了,s-1
          if(reset ==0){
            s = s - 1;
            while (nums[s] == nums[s + 1] && s > f) {
              s--;
            }
            return find(f, s, t + 1);
          }
        } else {
          console.log("line162--" + res);

          // 检查是否t最大时，sum还是小于0，若是，则将s往上移，重构 s,t
          if (res !== false && res == lt - 1) {
            if(s + 1 == t){
              var s = t + Math.floor((lt - 1 - t) / 2);
              var t = s + 1;
            }else{
              s = t;
              t = s+1;
            }
            if (t < lt && reset < 2) {
              reset++;
              console.log("sum还是小于０，重构后的fst:" + f + "-" + s + "-" + t);
              return find(f, s, t);
            } else {
              reset = 0;
              return false;
            }
          } else {
            // t　＋１
            while (nums[t + 1] == nums[t] && t < lt - 2) {
              t++;
            }
            return find(f, s, t + 1);
          }
          return false;
        }
      }
    }
  }

  var list = [];
  for (var i = 0; i < lt - 2; i++) {
    if (i !== 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    // 取数组后的中间两个作为second和three;
    var sd_index = parseInt((lt - 1 - i) / 2) + i;

    var tr_index = parseInt((lt - i - 1) / 2) + i + 1;
    console.log(sd_index + "__" + tr_index);

    // 若总值小于0，three往后二分查找，否则second往前二分查找
    find(i, sd_index, tr_index, true);
  }
  return list;
};

// var p = threeSum([6, -1, -1, 1, 0, 8, -8, -6]);
// var p = threeSum([[3,0,-2,-1,1,2]]);

var p = threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]);
console.log(p);

// var p = threeSum([-4, -1, -1, 0, 1, 2]);

p.forEach(s => {
  console.log("////////////");

  console.log(s);
});
console.log([-2,0,3,-1,4,0,3,4,1,1,1,-3,-5,4,0].sort((a,b)=>a-b))