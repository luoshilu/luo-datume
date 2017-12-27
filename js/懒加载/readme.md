## 懒加载

懒加载的概念，先将img标签中的src链接设为同一张图片（空白图片），将其真正的图片地址存储再img标签的自定义属性中（比如data-src）。当js监听到该图片元素进入可视窗口时，即将自定义属性中的地址存储到src属性中，达到懒加载的效果。

### simple 

最简单的懒加载功能
原生 js 实现

### lazyload

使用lazyload.js实现

### super

simple升级版本

* 提高用户体验和性能
* 使用observable
* 预处理