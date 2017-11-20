# study-a-little-every-day

 ![image](https://github.com/luoshilu/study-a-little-every-day/blob/master/css/%E5%85%B3%E4%BA%8E%E6%B5%8F%E8%A7%88%E5%99%A8%E6%BB%9A%E5%8A%A8%E6%9D%A1/img/cm8.png)

```
        .ul::-webkit-scrollbar-thumb {
            background:#FFA711;
            height: 10%;
            /* width: 1px; 设置了没啥效果啊 */
            border-radius:4px;
        }
```
这是设置高度为10%(当然也可以用px等单位)的情况，但是，它的width不能设置。
但是当我把height设置为height: 61%;后，这个能拖动的滚动条消失了...

 ![image](https://github.com/luoshilu/study-a-little-every-day/blob/master/css/%E5%85%B3%E4%BA%8E%E6%B5%8F%E8%A7%88%E5%99%A8%E6%BB%9A%E5%8A%A8%E6%9D%A1/img/cm9.png)

 但是，用鼠标滑动时，还是能滚动的，它只是脱轨了而已...
 所以，如果你设置了::-webkit-scrollbar有高度时，最好别使用::-webkit-scrollbar-thumb：100%，不然就像上面一样，看不见了。

 


 