import {defineUserConfig} from 'vuepress';
import theme from "./theme";
import { searchPlugin } from "@vuepress/plugin-search";
import {viteBundler} from '@vuepress/bundler-vite';

export default defineUserConfig({
  port: 5300,
  title: '苏打盖 Sodaguide',
  description: 'Sodagreen Tourist Guide Map',
  lang: 'zh-CN',
  head: [
    ['link', {rel: 'icon', href: '/images/favicon.ico'}],
    ['link', {rel: 'apple-touch-icon', href: '/images/apple-touch-icon.png'}],
    ['meta', {name: 'author', content: 'Carlo'}],
    ['meta', {name: 'keywords', content: '苏打绿, 鱼丁糸, 吴青峰, Sodagreen, Oaeen, Wu Qingfeng'}],
    ['meta', {name: 'referrer', content: 'no-referrer'}],
  ],
  theme,
  plugins: [
    searchPlugin({
    }),
  ],
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
});
