### 2018年javascript趋势

#### React.js vs Vue.js

* React
1. 全球最富有公司之一的财政支持
2. 强大的社区

* Vue
1. 轻量，容易学习，有非常优秀的工具
2. 强大的用户群体，社区在逐渐扩大
3. 创新性强
4. 一些angular开发者向vue进行靠拢，因为angular和vue部分语法很相似

#### Next.js

Next.js是个基于React、Webpack与Babel构建的，支持服务端渲染的小框架，其来源于ZEIT团队
能够在服务器上进行初始渲染，如果需要的话，还可以在客户端继续进行渲染。

1、webpack的各项配置，Next集成了webpack的很多配置，热更新是必备品，还支持提供next.config.js的方式导入自己定义的配置。
2、你可以使用less、scss、style-in-Component、css等各种样式写法。
3、支持redux、redux-saga、或者不用。
4、各种图片的支持都包含在webpack中了。
5、支持自定义的babelrc配置。
6、对于react的版本的支持也在维护者的维护中不断更新。
7、支持preact。

#### Angular

尽管Angular越来越难以取悦开发者，它仍将是2018年广受采用的框架之一。

许多公司采用了Angular 1.0，随着2018-19年间他们寻求移植到更好的框架，这些会关注React或者Vue会不会是Angular 2更好的替代。

#### Reason

OCaml + Reason

#### GraphQL
用户信息对应的数据模型是固定的，每次请求其实是对这些数据做了过滤和筛选。对应到数据库操作，就是数据的查询操作。如果客户端也能够像“查询”一样发送请求，那不就可以从后端接口这个大的“大数据库”去过滤筛选业务需要的数据了吗。

#### Redux、Relay Modern 以及 Apollo

Redux是React状态管理和数据抓取的首选解决方案
GraphQL改变了现状，主要是在数据抓取方面.
我们现在有了 Relay Modern  （Facebook开发）和Apollo，让你可以比Redux更高效地抓取并传递GraphQL数据到React应用的GraphQL客户端框架

#### Storybook
Storybook是一个定义、开发和测试UI组件的环境。

你可以单独地开放和测试UI。它就像一本实时的UI设计指南，能够为开发者提供真正的价值。
react-bluekit ，这是Storybook的替代，Netflix的工程团队用来设计他们的组件库。

#### Prettier

Prettier是一个代码格式化程序，可以让你的代码可读性更强，并且很好看。

#### Jest和Enzyme

说到JavaScript测试， Jest 无疑是领先的那个，而 Enzyme 则是很好的补充，尤其是在开发React应用的时候。

就像你 在这里看到一样 ，在下载方面Jest现在统治着Jasmine。
Jest和Snapshots + Enzyme超级简单的React组件测试API形成了一个很强的测试组合，会在2018年不断流行起来。

#### Webpack

#### Parcel
Parcel，一个有竞争力的打包工具，也相当迅速地获得了发展势头，目前它已经在GitHub上面攒到了12000颗星，开始直接威胁到Webpack的江湖地位。
别的打包工具都变得太庞大了，而Parcel的打包速度是Webpack的2倍（使用缓存的时候快10倍）。
它还针对Webpack多少有点令人困惑的配置设置，而Parcel却不需要配置。

只用把你应用的入口点指给它，它就会把事情做对了。

#### Gatsby
Gatsby 是Kyle Mathews开发的用于React的静态网站生成器。

CMSs + Markdown + Data  == GraphQL ==> html + css + React

React网站本身就是用Gatsby开发的，再也有没有比这更有力的证明了。

#### Babel

Babel目前唯一的担心是Reason日益成为主流。

但目前为止，Babel还会在2018年延续强劲走势。

#### Flow & Typescript

Typescript  和  Flow  都是JavaScript开发者很好的静态类型选项，可以用来改进其代码质量。

#### Immutable.JS

Immutable.js，Facebook的另一个项目，确保了状态不会因为使用不可变对象而发生突变。

封装在Immutable.JS对象里面的数据是永远也不会变的。它总会返回一份新的拷贝。这跟JavaScript形成了羡慕对比，后者的一些操作不会改变你的数据（比方说一些数据方法，包括map、filter、concat、forEach等），但有的就会（Array的pop、push、splice等）

#### Popmotion

Popmotion 是一个在GitHub上迅速赢得星星的JavaScript动画库。
Flash预见了jQuery。
而Popmotion真的体验要好很多，在web动画方面有了很多的创新。这无疑是2018年值得关注的趋势之一。

#### React Native & Electron
这两个框架在2017年均站稳了脚跟，也都是从JavaScript到原生应用很好的解决方案。
React Native 让你可以针对移动设备开发React应用，而Electronlets则可以让你针对桌面开发JavaScript应用。
一些用Electron开发的知名app包括：Slack、Atom、Github Desktop以及Discord。
用React Native开发的流行应用包括：Facebook、Instagram、Airbnb以及UberEATS。

#### Web Assembly


#### 学习清单

* 勇敢去学 Vue.js 吧
https://vuejs.org/v2/guide/

* 每一位React开发者都应该 学习Next.js
https://learnnextjs.com/

* 开始学习 Reason （以及 Reason React ）然后做个业余项目试试吧
https://protoship.io/blog/2017/05/10/an-invitation-to-reasonml.html

* GraphQL 必须列入你的2018待办事宜清单。
http://graphql.org/learn/

* 跟着 Relay Modern 学，这是React+GraphQL应用的数据抓取选项之一。
https://hackernoon.com/getting-started-with-relay-modern-for-building-isomorphic-web-apps-ae049e4e23c1

* Storybook！Storybook！ Storybook！
https://storybook.js.org/

* 在一个项目上安装 Prettier ，让你的代码可读性更强。
https://github.com/prettier/prettier

* 在一个React项目上学习使用 Jest 截屏及 Enzyme 。
https://facebook.github.io/jest/
https://hackernoon.com/testing-react-components-with-jest-and-enzyme-41d592c174f

* 学习Flow （React开发者）或者 TypeScript （其他人）。
https://flow.org/en/docs/getting-started/
https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

* 考虑用 Gatsby 把Markdown文本转换成静态页面。
https://github.com/gatsbyjs/gatsby

* 用 React Native 开发一个移动app。
https://egghead.io/courses/react-native-fundamentals

* 用 Electron 开发一个桌面app。
https://medium.freecodecamp.org/how-to-build-your-first-app-with-electron-41ebdb796930

* 玩一下 Popmotion 创作一个流畅的动画。
https://popmotion.io/learn/get-started/

* 把这个资源清单导入为 Todoist项目 。
https://todoist.com/importFromTemplate?t_url=https%3A%2F%2Fd1aspxi4rjqbaz.cloudfront.net%2F22bde66c67091e080cfc3bb98a547058_2018%2520Study%2520Guide.csv 


