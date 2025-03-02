---
icon: contribution
title: 贡献指南
---

如果你想参与到本项目中，请阅读以下贡献指南。

## 如果你不懂任何技术

你可以通过以下方式，为本项目排除错误、疏漏，或提供你认为有益的资料或对本站的建议：

- 在本站任意页面底部评论区留言
- 向我发送 E-mail：[carlo0901@163.com](mailto:carlo0901@163.com)

当然，如果你有 Github 账号，建议你通过 [Issues](https://github.com/kaluojushi/sodaguide/issues) 提交建议，我会很快看到。

## 如果你熟悉 Git 和 Markdown

无需了解任何前端技术，也无需安装任何脚手架，你也可以直接参与到页面编辑中。你甚至无需将代码拉到本地，可以直接在 GitHub 上进行在线编辑。

1. Fork 本项目到你的仓库中
2. 进入 `docs` 文件夹

所有操作均在此文件夹进行。

### 文件结构说明

这里的每个目录和 Markdown 文件对应不同的苏打盖页面，例如:

- 路径为 `start/sodagreen/README.md` 对应域名 [`/start/sodagreen/`](/start/sodagreen/)
- 路径为 `start/sodagreen/oaeen.md` 对应域名 [`/start/sodagreen/oaeen.html`](/start/sodagreen/oaeen.html)

每个 Markdown 文件由以下几部分组成：

- 文件名，英文，对应页面域名，对应规则如上
- FrontMatter，即每个文件最开头用两条分割线 `---` 隔开的 YAML 语法部分，表明该页面的基本配置，如：
  ```markdown
  ---
  icon: contribution
  title: 贡献指南
  ---
  ```
  本项目要求每个页面至少有如下属性：
  - `icon`：该页面对应的图标，填写当前页面图标的 FontClass，你可以暂时留空不填
  - `title`：中文，页面标题
- 正文

### 修改某个页面

你可以在 Github 上直接修改相关文件，并 Commit 后提交 [Pull Request](https://github.com/kaluojushi/sodaguide/pulls) 等待我合并。可以参考前人的 [PR](https://github.com/kaluojushi/sodaguide/pulls?q=is%3Apr+is%3Aclosed) 进行你的修改。

### 添加某个页面

1. 在对应目录添加文件，补充 FrontMatter 并 Commit
2. 进入 `docs/.vuepress/sidebar.ts` 文件，参考已有格式，将你的文件补充到侧边栏中
3. 提交 PR

## 如果你熟悉一点前端可深入参与

如果要深入参与，建议你 Fork 本仓库后，将代码拉到本地，以便进行深度修改。

### 参考文档

本项目使用的框架为 Vuepress，主题为 Vuepress Theme Hope。

以下是相关文档，可以参考。由于框架和主题配置项变动频繁，如出现本文与官方最新文档不一致的情况，请以官方文档为准。

- VuePress：<https://v2.vuepress.vuejs.org/zh/>
- Vuepress Theme Hope：<https://theme-hope.vuejs.press/zh/>

### 开发环境搭建

代码拉到本地后，进入项目目录，执行 `npm install` 下载依赖。

::: info 提示

1. 推荐 Node.js 版本不低于 18，请执行 `node -v` 检查
2. 如果 npm 下载速度太慢，可以执行 `npm config set registry https://registry.npmmirror.com/` 命令切换 npm 镜像
3. 由于框架和主题更新后需要最新的依赖包，如果本项目 `package.json` 有修改，请及时拉取最新代码并更新依赖

:::

执行 `npm run docs:dev`，打开 <http://localhost:5300> 即可临时预览。

::: info 提示

1. 如果你需要切换端口，可以在 `docs/.vuepress/config.ts` 文件的 `port` 属性修改，但请不要提交此修改
2. 临时预览为热更新，修改文件后无需重新启动即可生效

:::

在本项目目录下，执行 `git remote add upstream https://github.com/kaluojushi/sodaguide.git`，添加我的仓库作为 upstream，方便后续更新。

### 增删改页面

参考 [上述操作](#如果你熟悉-git-和-markdown)，你可以修改 `docs` 文件夹下的 Markdown 文件。

增删页面时，需要同步修改 `docs/.vuepress/sidebar.ts` 侧边栏文件。

如果你需要修改导航栏，请修改 `docs/.vuepress/navbar.ts` 文件。

若无必要，不建议修改 `docs/.vuepress` 中其他配置文件。

### 使用图片

本项目使用 [腾讯云 COS](https://cloud.tencent.com/product/cos) 进行图片托管。

如果你需要使用图片，可以临时提交图片到 `docs/.vuepress/images` 文件夹中，然后在 Markdown 文件中以 `/.vuepress/images/` 开头的路径引用。

我会在有空时将图片上传到 COS 中，请耐心等待。

### 使用图标

本项目使用 [iconfont](https://www.iconfont.cn/) 管理图标，在 `docs/.vuepress/theme.ts` 文件中的 `plugins.icon.assets` 属性所配置的 URL 中可以找到图标对应的 CSS 文件。

图标使用场景如下：

- 在页面的 FrontMatter 的 `icon` 属性中填写图标的 FontClass，如 `icon: contribution`
- 在 `docs/.vuepress/navbar.ts`、`docs/.vuepress/sidebar.ts` 等文件的 `icon` 属性中填写图标的 FontClass，如 `icon: "contribution"`
- 在 Markdown 正文中以 `<VPIcon icon="icon-name" />` 语法引用图标，如 `<VPIcon icon="contribution" />` <VPIcon icon="contribution" />

如果你需要使用图标，可以以 Emoji 的形式代替。我会在有空时更新 iconfont 图标资源。

### 提交代码

推荐你每次修改项目时，都先拉取我的仓库的最新代码，即 `git pull upstream main`。

修改代码后，依次 `git add .`、`git commit -m "commit message"`、`git push origin main`，提交代码。

::: info 提示

`origin` 是你的远程仓库，`main` 是你的开发分支。如果你使用别的远程仓库别名或分支，对应修改即可。

:::

在 GitHub 上进入你的远程仓库，提交 Pull Request。我看到后会完成合并。

感谢你对苏打盖 Sodaguide 的贡献！