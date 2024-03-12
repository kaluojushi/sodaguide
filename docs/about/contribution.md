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

无需了解任何前端技术，也无需安装任何脚手架，你也可以直接参与到页面编辑中。

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
  - `icon`：该页面对应的图标，填写当前页面图标的 FontClass，本项目使用 [iconfont](https://www.iconfont.cn/) 管理图标，如果你需要使用图标，请联系我
  - `title`：中文，页面标题
- 正文

### 修改某个页面

你可以在 Github 上直接修改相关文件，并 Commit 后提交 [Pull Request](https://github.com/kaluojushi/sodaguide/pulls) 等待我合并。可以参考前人的 [PR](https://github.com/kaluojushi/sodaguide/pulls?q=is%3Apr+is%3Aclosed) 进行你的修改。

### 添加某个页面

1. 在对应目录添加文件，补充 FrontMatter 并 Commit
2. 进入 `.vuepress/sidebar.ts` 文件，参考已有格式，将你的文件补充到侧边栏中
3. 提交 PR

## 如果你熟悉一点前端可深入参与

::: note 施工中……

:::
