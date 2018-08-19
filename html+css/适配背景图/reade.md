# 背景图自适应

通过参考各个游戏官网活动页，发现在做背景图时使用了 background 的各个属性来进行适配。

[background 各属性特征](https://developer.mozilla.org/en-US/docs/Web/CSS/background)

适配背景时，需要解决的问题：

1. 如何使用一张图，使其在各种屏幕大小下显示都不会变形
2. body 内容高度很小或者为０时，如何设置背景铺满整个屏幕，不留空白
3. 当用户缩小窗口时，如何显示

一、背景图需要铺满整个屏幕

1. 创建新标签用户背景图显示

```
    <div class="bg1"></div>
```

2. 定位

```
    position: fixed;
    top: 0;
    left: 0;
    width: 100%; // 使元素占满屏幕
    height: 100%;
```

3. 设置最小宽度

```
    min-width: 800px;
```

4. 设置背景图

```
    background-image: url(./imgs/bg2.jpg);
```

5. 设置背景属性

```
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 0;
```

**划重点：**

－ background-size: over;

图片将以等比放大的方式，使图片刚好铺满标签为止，即图片一定会将标签的高度/宽度(两者长度最小的那个)铺满。over 和 contain 刚好相反，contain 表示：图片将等比缩小的方式，使得标签刚好可以完全显示它。

- background-position: center 0;

代表水平居中，即当图片在水平方向铺满标签后，图片的水平中点一定是对准标签的中点的。那么反过来 background-position:0 center，当图片的垂直方向铺满了标签，那么图片的垂直中点，和标签垂直中点是对准的。
packground-position:top == packground-position: center 0
packground-position:left == packground-position: 0 center
