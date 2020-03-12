'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const fs = require("fs-extra");

module.exports = class extends Generator {
  initializing() {

    this.log(
      yosay(
        `欢迎您使用：` +
        `\n` +
        `客厅应用前端团队 Hippy 项目脚手架 ${chalk.red("generator-kt-hippy")}`
      )
    );

    return this.prompt([{
      type: "input",
      name: "projDir",
      message: "请输入项目名称",
      validate: function (value) {
        const RegExp = /^[A-Z]/g;

        if (value && !RegExp.test(value)) {
          return "首字母必须为大写";
        } else if (value) {
          return true;
        }
        return "项目名称不能为空";
      }
    },]).then(async (props) => {
      const ifDirExist = await fs.ensureDir(`./${props.projDir}`);

      if (!ifDirExist) {
        console.log(chalk.red("工程化项目名称已经存在"));
        const askIfCoverDir = [{
          type: "confirm",
          name: "isCover",
          message: "当前目录已经存在，是否覆盖当前目录",
          default: true
        }]
        const answer = await this.prompt(askIfCoverDir)
        if (answer.isCover) {
          const removeResult = await fs.remove(`./${props.projDir}`)
          if (removeResult) {
            console.log(chalk.red(`同名文件夹删除失败，请手动删除当前目录下${props.projDir}然后重试`));
            process.exit(1)
          }
        } else {
          console.log(chalk.red("工程化项目无法创建，请更换项目名称"));
          process.exit(1)
        }
      }
      this.options.projDir = props.projDir
      this.destinationRoot(props.projDir);
      console.log(chalk.blue(`当前创建的项目名称是${props.projDir}`));
    });
  }

  prompting() {
    return this.prompt([{
      type: 'input',
      name: 'user',
      message: 'Your name',
      default: 'yourname'
    }, {
      type: 'input',
      name: 'description',
      message: "请输入项目描述信息 decription（例：项目基本描述）",
      validate: (value) => {
        if (value) {
          return true;
        }

        return "项目描述信息不能为空";
      }
    }, {
      type: 'input',
      name: 'url',
      message: "Input your project's Git url",
      default: ''
    }, {
      type: 'confirm',
      name: 'autoInstallNpm',
      message: chalk.green('配置完成, 项目创建成功!') + '\n  是否自动执行 ' + chalk.yellow('`tnpm install`') + ' ?'
    }]).then(answers => {
      this.user = answers.user;
      this.gitUrl = answers.url;
      this.description = answers.description;
      this.autoTnpmInstall = answers.autoInstallNpm;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('./'),
      this.destinationPath('./'),
      {
        packageName: this.options.projDir,
        version: '1.0.0',
        author: this.user,
        description: this.description,
        gitUrl: this.gitUrl,
        email: this.email,
        packageNameLowerCase: this.options.projDir.toLocaleLowerCase(),
      }
    );

    this.fs.copyTpl(
      this.templatePath('./src/lvlpage.js'),
      this.destinationPath(`./src/${this.options.projDir.toLocaleLowerCase()}.js`)
    );

    // .开头文件需要单独复制
    this.fs.copyTpl(
      this.templatePath('./.eslintrc'),
      this.destinationPath('./.eslintrc')
    );

    this.fs.copyTpl(
      this.templatePath('./.gitignore'),
      this.destinationPath('./.gitignore')
    );

    this.fs.copyTpl(
      this.templatePath('./.prettierrc.js'),
      this.destinationPath('./.prettierrc.js')
    );

    setTimeout(() => {
      let desPath = this.destinationPath('') + '/src/lvlpage.js';
      fs.removeSync(desPath);
    }, 1000);

  }


  install() {
    if (this.autoTnpmInstall) {

      this.log.info("依赖正在安装，可能会占用您两分钟，请稍等...");

      this.npmInstall("", {
        registry: "http://r.tnpm.oa.com",
        proxy: "http://r.tnpm.oa.com:80"
      });
    }
  }

  end() {
    const { projDir } = this.options;
    this.log("本次初始化过程结束, 请通过以下命令运行项目: ");
    this.log(chalk.cyan("cd"), projDir);
    this.log(`${chalk.cyan("tnpm run start")}`);
    this.log("开启编码之旅!");
  }
};
