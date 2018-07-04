function threeSum(nums){

    var ary = nums.sort(function(a,b){return a-b});
    var lt = ary.length;
    var res = [];
    var now = 0;
    var left = 1;
    var right = lt-1;

    var status = false; // 二分查找

    function mid (min,max,now,g){
        var mid  = Math.floor((min + max)/2);
        if(mid)
    }
    if(lt == 3){
     if(ary[now] + ary[left] + ary[right] == 0){
        res.push([ary[now],ary[left],ary[right]]);
        return res;
     }   
    }

    for(var i = 0;i<lt-3;i++){
        if(i !==0&&ary[i]==ary[now]){
            continue;
        }
        now = i;
        left = now + 1;
        right = lt-1;

        
        for(;left < right;){
            
            var sum = ary[now] + ary[left] + ary[right];
            if(sum == 0){
                res.push([ary[now],ary[left],ary[right]]);
                var nr = right-1;
                var nl = left +1;
                while(ary[right] == ary[nr]&&ary[left] == ary[nl]){
                    if(nr>left){
                        nr--;
                    }else{
                        break;
                    }
                    if(nl<right){
                        nl++;
                    }else{
                        break
                    }
                }
                right = nr;
                left = nl;
            }
            if(sum > 0){
                var nr = right-1;
                while(ary[right] == ary[nr]){
                    if(nr>left){
                        nr--;
                    }else{
                        break;
                    }
                }
                right = nr;
                
            }
            if(sum < 0){
                var nl = left+1;
                while(ary[left] == ary[nl]){
                    if(nl<right){
                        nl++;
                    }else{
                        break;
                    }
                }
                left = nl;
            }
        }

    }
    return res;
}

var res = threeSum([-5, -3, -2, -1, 0, 0, 0, 1, 1, 1, 3, 3, 4, 4, 4])
console.log(res);
res.forEach(function(e){
    console.log(e);
})