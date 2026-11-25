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
