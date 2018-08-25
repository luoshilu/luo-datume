# margin 和 padding 对行内元素的影响

---

margin 和 padding 对行内元素是有作用的，而不同类型的元素的表现也不同，可分为替换元素和非替换元素来进行讨论。

**什么是替换元素和非替换元素?**
替换元素：input,img,textarea 等标签内的内容会根据标签属性值而改变的元素,例如 input 默认有宽度，placeholder，img 可通过 width。height 设置宽高。
非替换元素：p,div,i 等内容不受属性影响的元素
margin 和 padding 对行内元素的影响：

1. margin - 行内替换元素

- 设置 margin-top 和 margin-bottom 会**使元素行高增加或减少**，这取决于 margin 的值。
- 设置 margin-left 和 margin-right **对自身元素有影响**。

---

1. margin - 行内非替换元素

- 设置 margin-top 和 margin-bottom 对自身元素没有影响，对行高也**没有影响**。其原因就在于行内非替换元素的外边距不会改变一个元素的行高。
- 设置 margin-left 和 margin-right，对自身元素有影响。

---

1. padding - 行内替换元素

- padding-top 和 padding-bottom，对自身元素有影响，**会影响其行高，会撑开父元素**。
- padding-left 和 padding-right，对自身元素有影响，设置左右内边距，左右内边距将是可见的。

---

1. padding - 行内非替换元素

- padding-top 和 padding-bottom，对自身元素有影响，但**不会影响其行高，不会撑开父元素**。
- padding-left 和 padding-right，对自身元素有影响。
