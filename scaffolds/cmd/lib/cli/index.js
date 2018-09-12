
// 命令管理
const program = require('commander');
const packageInfo = require('../../package.json');


program
      .version(packageInfo.version);


// 通过 commander 来设置不同的命令。 command 方法是设置命令的名字。 description 方法是设置描述。 alias 方法是设置简写。 action 方法是设置回调。
program
      .command('init') // fe init
      .description('生成一个项目')
      .alias('i') // 简写
      .action(() => {
        require('../cmd/init')();
      });

      program
      .command('add') // fe add
      .description('添加新模板')
      .alias('a') // 简写
      .action(() => {
        require('../cmd/add')();
      });
  
  program
      .command('list') // fe list
      .description('查看模板列表')
      .alias('l') // 简写
      .action(() => {
        require('../cmd/list')();
      });
  
  program
      .command('del') // fe delete
      .description('查看模板列表')
      .alias('d') // 简写
      .action(() => {
        require('../cmd/delete')();
      });


// 如果没有参数，运行帮助方法。接下来是解析 program.args 中的参数：
program.parse(process.argv);
if(!program.args.length){
      program.help()
}