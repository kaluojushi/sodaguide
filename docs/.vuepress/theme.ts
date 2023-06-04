import {hopeTheme} from "vuepress-theme-hope";
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
  iconAssets: "//at.alicdn.com/t/c/font_4078802_zeb8kfrl5yr.css",
  fullscreen: true,
  plugins: {
    mdEnhance: {
      figure: true,
      imgLazyload: true,
      imgSize: true,
      footnote: true,
    },
    comment: {
      provider: "Waline",
      serverURL: "https://comments.sodaguide.cn/",
    },
    components: {
      components: [
        "BiliBili",
        "PDF",
        "VideoPlayer",
      ],
    },
  }
});
