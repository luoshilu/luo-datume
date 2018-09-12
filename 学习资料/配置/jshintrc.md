// bitwise 禁用位运算符
// camelcase 使用驼峰命名(camelCase)或全大写下划线命名(UPPER_CASE)
// curly 在条件或循环语句中使用{}来明确代码块
// eqeqeq 使用===和!==替代==和!=
// es3 强制使用 ECMAScript 3 规范
// es5 强制使用 ECMAScript 5 规范
// forin 在 for in 循环中使用 Object.prototype.hasOwnProperty()来过滤原型链中的属性
// freeze 禁止复写原生对象(如 Array, Date)的原型
// immed 匿名函数调用必须(function() {}());而不是(function() {})();
// indent 代码缩进宽度
// latedef 变量定义前禁止使用
// newcap 构造函数名首字母必须大写
// noarg 禁止使用 arguments.caller 和 arguments.callee
// noempty 禁止出现空的代码块
// nonew 禁止使用构造器
// plusplus 禁止使用++和–-
// quotemark 统一使用单引号或双引号
// undef 禁止使用不在全局变量列表中的未定义的变量
// unused 禁止定义变量却不使用
// strict 强制使用 ES5 的严格模式
// trailing 禁止行尾空格
// maxparams 函数可以接受的最大参数数量
// maxdepth 代码块中可以嵌入{}的最大深度
// maxstatement 函数中最大语句数
// maxcomplexity 函数的最大圈复杂度
// maxlen 一行中最大字符数

// asi 　　　　　允许省略分号
// boss 　　　　　 允许在 if，for，while 语句中使用赋值
// debug 　　　　　允许 debugger 语句
// eqnull 　　　　　允许==null
// esnext 　　　　 允许使用 ECMAScript 6
// evil 　　　 允许使用 eval
// expr 允许应该出现赋值或函数调用的地方使用表达式
// funcscope 允许在控制体内定义变量而在外部使用
// globalstrict 允许全局严格模式
// iterator 　 允许**iterator**
// lastsemic 允许单行控制块省略分号
// laxbreak 允许不安全的行中断
// laxcomma 　　　 允许逗号开头的编码样式
// loopfunc 允许循环中定义函数
// maxerr 　　　　 JSHint 中断扫描前允许的最大错误数
// multistr 　　 允许多行字符串
// notypeof 　　　 允许非法的 typeof 操作
// proto 允许 proto
// smarttabs 　　 允许混合 tab 和 space 排版
// shadow 　　 允许变量 shadow
// sub 　　　　 允许使用 person[‘name’]
// supernew 　　　 允许使用 new function() {…}和 new Object
// validthis 　　 允许严格模式下在非构造函数中使用 this
// noyield 　　　 允许发生器中没有 yield 语句

// browser Web Browser (window, document, etc)
// browserify Browserify (node.js code in the browser)
// jquery jQuery
// node Node.js
// qunit QUnit
// typed Globals for typed array constructions
// worker Web Workers
// wsh Windows Scripting Host

// globals: {
// jQuery: true,
// console: true,
// module: true
// }
{
// JSHint Default Configuration File (as on JSHint website)
// See http://jshint.com/docs/ for more details

"maxerr": 50, // {int} Maximum error before stopping

// Enforcing
"bitwise": false, //Prohibit bitwise operators (&, |, ^, etc.)
"camelcase": false, //Identifiers must be in camelCase
"curly": false, //Require {} for every new block or scope
"eqeqeq": false, //Require triple equals (===) for comparison
"forin": false, //Require filtering for in loops with obj.hasOwnProperty()
"freeze": false, //prohibits overwriting prototypes of native objects
"immed": false, //Require immediate invocations to be wrapped in parens
"latedef": false, //Require variables/functions to be defined before being used
"newcap": true, //Require capitalization of all constructor functions
"noarg": false, //Prohibit use of `arguments.caller` and `arguments.callee`
"noempty": false, //Prohibit use of empty blocks
"nonbsp": false, //Prohibit "non-breaking whitespace" characters.
"nonew": false, //Prohibit use of constructors for side-effects
"plusplus": false, //Prohibit use of `++` and `--`
"quotmark": false,
"undef": true, //Require all non-global variables to be declared
"unused": true,
"strict": false, //Requires all functions run in ES5 Strict Mode
"maxparams": false, // {int} Max number of formal params allowed per function
"maxdepth": false, // {int} Max depth of nested blocks (within functions)
"maxstatements": false, // {int} Max number statements per function
"maxcomplexity": false, // {int} Max cyclomatic complexity per function
"maxlen": false, // {int} Max number of characters per line
"varstmt": false,

// Relaxing
"asi": false, //Tolerate Automatic Semicolon Insertion (no semicolons)
"boss": false, //Tolerate assignments where comparisons would be expected
"debug": false, //Allow debugger statements e.g. browser breakpoints.
"eqnull": false, //Tolerate use of `== null`
// "esversion": 6,
// "esnext": true,
"moz": false, //Allow Mozilla specific syntax
"evil": false, //Tolerate use of `eval` and `new Function()`
"expr": false, //Tolerate `ExpressionStatement` as Programs
"funcscope": false, //Tolerate defining variables inside control statements
"globalstrict": false, //Allow global "use strict" (also enables 'strict')
"iterator": false, //Tolerate using the `__iterator__` property
"lastsemic": false,
"laxbreak": false, //Tolerate possibly unsafe line breakings
"laxcomma": false, //Tolerate comma-first style coding
"loopfunc": false, //Tolerate functions being defined in loops
"multistr": true, //Tolerate multi-line strings
"noyield": false, //Tolerate generator functions with no yield statement
"notypeof": true, //Tolerate invalid typeof operator values
"proto": true, //Tolerate using the `__proto__` property
"scripturl": false, //Tolerate script-targeted URLs
"shadow": false, //Allows re-define variables later in code
"sub": true,
"supernew": false, //Tolerate `new function () { ... };` and `new Object;`
"validthis": false, //Tolerate using this in a non-constructor function

// Environments
"browser": true, // Web Browser (window, document, etc)
"browserify": false, // Browserify (node.js code in the browser)
"couch": false, // CouchDB
"devel": true, // Development/debugging (alert, confirm, etc)
"dojo": false, // Dojo Toolkit
"jasmine": false, // Jasmine
"jquery": false, // jQuery
"mocha": false, // Mocha
"mootools": false, // MooTools
"node": true, // Node.js
"nonstandard": false, // Widely adopted globals (escape, unescape, etc)
"phantom": false, // PhantomJS
"prototypejs": false, // Prototype and Scriptaculous
"qunit": false, // QUnit
"rhino": false, // Rhino
"shelljs": false, // ShellJS
"typed": false, // Globals for typed array constructions
"worker": false, // Web Workers
"wsh": false, // Windows Scripting Host
"yui": false, // Yahoo User Interface
"globals": {
"console": true
}
}
