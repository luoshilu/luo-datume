/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var obj = {};
  var pre = 0;
  var maxnum = 0;
  var lt = s.length;
  for (var i = 0; i < lt; i++) {
    var last_index = obj[s[i]];
    if (last_index !== undefined) {
      if (last_index >= pre) {
        maxnum = i - pre > maxnum ? i - pre : maxnum;
        pre = last_index + 1;
      }
    }
    obj[s[i]] = i;
  }
  maxnum = lt - pre > maxnum ? lt - pre : maxnum;
  return maxnum;
};
console.log(lengthOfLongestSubstring("abcabcbb"));
