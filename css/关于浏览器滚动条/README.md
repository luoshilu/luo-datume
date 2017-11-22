
# webkit内核浏览器滚动条分析。

 ![image](https://github.com/luoshilu/study-a-little-every-day/blob/master/css/%E5%85%B3%E4%BA%8E%E6%B5%8F%E8%A7%88%E5%99%A8%E6%BB%9A%E5%8A%A8%E6%9D%A1/img/cm11.png)

 上图是根据我在谷歌浏览器测试的结果
 

1. ::-webkit-scrollbar               滚动条整体部分，其中的属性有width,height,background,border（就和一个块级元素一样）等。
2. ::-webkit-scrollbar-button        滚动条两端的按钮。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果。
3. ::-webkit-scrollbar-track         外层轨道。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果。
4. ::-webkit-scrollbar-track-piece   内层轨道，滚动条中间部分（除去）。
5. ::-webkit-scrollbar-thumb         滚动条里面可以拖动的那部分
6. ::-webkit-scrollbar-corner        边角
7. ::-webkit-resizer                 定义右下角拖动块的样式

### 几个特征补充
1. 其中1并不包括 6,7部分(即边角部分)。
1. 设置::-webkit-scrollbar 的 width时，其实是对右边的滚动条起作用。设置height时其实是对下面的滚动条起作用。
1. 可以设置border-radius的有 2,5,6.
1. 按层级: 元素内容 < 1 < 3 < 4 < 5 = 2 = 6
 
### 以下是我的几个疑问：

1. 7 的 ::-webkit-resizer 的属性我并没有看到实际效果。
1. 为什么可拖动的滚动条高度过高就不见了 

### 一些伪类

```
:horizontal
//horizontal伪类适用于任何水平方向上的滚动条
 
:vertical
//vertical伪类适用于任何垂直方向的滚动条
 
:decrement
//decrement伪类适用于按钮和轨道碎片。表示递减的按钮或轨道碎片，例如可以使区域向上或者向右移动的区域和按钮
 
:increment
//increment伪类适用于按钮和轨道碎片。表示递增的按钮或轨道碎片，例如可以使区域向下或者向左移动的区域和按钮
 
:start
//start伪类适用于按钮和轨道碎片。表示对象（按钮 轨道碎片）是否放在滑块的前面
 
:end
//end伪类适用于按钮和轨道碎片。表示对象（按钮 轨道碎片）是否放在滑块的后面
 
:double-button
//double-button伪类适用于按钮和轨道碎片。判断轨道结束的位置是否是一对按钮。也就是轨道碎片紧挨着一对在一起的按钮。
 
:single-button
//single-button伪类适用于按钮和轨道碎片。判断轨道结束的位置是否是一个按钮。也就是轨道碎片紧挨着一个单独的按钮。
 
:no-button
no-button伪类表示轨道结束的位置没有按钮。
 
:corner-present
//corner-present伪类表示滚动条的角落是否存在。
 
:window-inactive
//适用于所有滚动条，表示包含滚动条的区域，焦点不在该窗口的时候。
 
::-webkit-scrollbar-track-piece:start {
/*滚动条上半边或左半边*/
}
 
::-webkit-scrollbar-thumb:window-inactive {
/*当焦点不在当前区域滑块的状态*/
}
 
::-webkit-scrollbar-button:horizontal:decrement:hover {
/*当鼠标在水平滚动条下面的按钮上的状态*/
}
```



 