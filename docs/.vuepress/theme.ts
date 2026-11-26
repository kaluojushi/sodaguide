import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  logo: "/images/favicon.ico",
  navbar,
  repo: "kaluojushi/sodaguide",
  repoLabel: "GitHub",
  repoDisplay: true,
  docsDir: "docs",
  sidebar,
  footer: `Together With <a href="https://sodagreen.com" target="_blank">Sodagreen</a> 💚💚💚💚💚💚`,
  copyright: "Copyright © Carlo 2023-now",
  displayFooter: true,
  fullscreen: true,
  markdown: {
    figure: true,
    imgLazyload: true,
    imgSize: true,
    footnote: true,
  },
  plugins: {
    // 临时停用：滚轮停止后页面会在相邻两个标题之间反复跳动，URL 的 hash 也随之来回切换。
    //
    // 成因：该插件在滚动时用 router.replace() 改写 URL 的 hash（用于 TOC 高亮与地址同步），
    // 而 VuePress rc.32 通过 vue-router v5 的实验性 ScrollRestoration 接管滚动，
    // 并在 app 里 watch(() => route.fullPath) 后手动调用 scroll()——fullPath 含 hash，
    // 于是「改 hash → 滚动恢复到该锚点 → 落到另一个标题区间 → 再改 hash」形成无限来回。
    // 插件自身那句 router.options.scrollBehavior = void 0 对这个机制无效（它不是 router 选项），
    // 所以关掉平滑滚动也挡不住，只停用插件才行。
    //
    // 何时可以恢复：升级 vuepress-theme-hope 后，同时满足以下两点即可删除本行，
    //   1) 其依赖的 vuepress >= 2.0.0-rc.33（新增 vuepress/client 的 withoutScrollRestoration）
    //   2) 其依赖的 @vuepress/plugin-active-header-links >= 2.0.0-rc.142
    //      （PR #1150 改用 withoutScrollRestoration，导航时不再触发滚动恢复）
    // 上游记录：https://github.com/vuepress/ecosystem/issues/1146
    //           https://github.com/vuepress/ecosystem/pull/1150
    activeHeaderLinks: false,
    icon: {
      assets: "//at.alicdn.com/t/c/font_4078802_3xhrlhuvebh.css",
    },
    comment: {
      provider: "Waline",
      serverURL: "https://comments.sodaguide.cn/",
    },
    media: {
      embeds: ["bilibili"],
      pdf: true,
      videojs: true,
      videojsAudio: true,
    },
    docsearch: {
      appId: "1A59SMGF0G",
      apiKey: "83c67aa7820b9e4b02e624f561f329e0",
      indices: ["sodaguide"],
    },
  }
});
