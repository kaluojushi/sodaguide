export default [
  {
    text: '首页',
    link: '/',
    icon: 'home',
  },
  {
    text: '开始',
    link: '/start/',
    icon: 'start',
  },
  {
    text: '成员',
    link: '/members/',
    icon: 'group',
  },
  {
    text: '作品',
    link: '/works/',
    icon: 'album',
  },
  {
    text: '演唱会',
    link: '/concerts/',
    icon: 'concert',
  },
  {
    text: '百科',
    link: '/wiki/',
    icon: 'wiki',
  },
  {
    text: '资源',
    prefix: '/resources/',
    icon: 'resource',
    children: [
      {
        text: '苏打资源库',
        icon: 'resource',
        link: '',
      },
      {
        text: '音乐资源',
        icon: 'music',
        link: 'music',
      },
      {
        text: '苏打志 Sodazine',
        icon: 'magazine',
        link: 'sodazine/',
      },
      {
        text: '故事与文字',
        icon: 'story',
        link: 'story-and-text/',
      },
    ],
  },
  {
    text: '资讯',
    icon: 'news',
    children: [
      {
        text: '演出',
        icon: 'perform',
        link: '/news/perform',
      },
      {
        text: '二十年一刻',
        icon: 'concert',
        link: '/news/20yike',
      },
    ]
  },
  {
    text: '关于',
    icon: 'about',
    children: [
      {
        text: '关于本站',
        icon: 'about',
        link: '/about/',
      },
      {
        text: '更新历史',
        icon: 'history',
        link: '/about/history',
      },
      {
        text: '贡献指南',
        icon: 'contribution',
        link: '/about/contribution',
      },
      {
        text: '推荐链接',
        icon: 'link',
        link: '/about/links',
      },
    ]
  },
  {
    text: '社交网站',
    icon: 'social',
    children: [
      {
        text: '苏打绿 aka 鱼丁糸',
        children: [
          {
            text: '苏打绿 aka 鱼丁糸官网',
            icon: 'website',
            link: 'https://sodagreen.com',
          },
          {
            text: '微博',
            icon: 'weibo',
            link: 'https://weibo.com/sodagreen2010',
          },
          {
            text: 'Facebook',
            icon: 'facebook',
            link: 'https://www.facebook.com/oaeen.fb',
          },
          {
            text: 'Instagram',
            icon: 'instagram',
            link: 'https://www.instagram.com/sodagreen_aka_oaeen/',
          },
          {
            text: 'YouTube',
            icon: 'youtube',
            link: 'https://www.youtube.com/@sodagreenofficial',
          },
        ],
      },
      {
        text: '吴青峰',
        children: [
          {
            text: '微博',
            icon: 'weibo',
            link: 'https://www.weibo.com/u/1822796164',
          },
          {
            text: 'Facebook',
            icon: 'facebook',
            link: 'https://www.facebook.com/WuQingFeng',
          },
          {
            text: 'Instagram',
            icon: 'instagram',
            link: 'https://www.instagram.com/imqingfeng/',
          },
          {
            text: 'YouTube',
            icon: 'youtube',
            link: 'https://www.youtube.com/@WuQingFeng',
          },
        ],
      },
      {
        text: '苏打绿二十年一刻巡回演唱会',
        children: [
          {
            text: '微博',
            icon: 'weibo',
            link: 'https://weibo.com/u/7889590866',
          },
          {
            text: 'Facebook',
            icon: 'facebook',
            link: 'https://www.facebook.com/20thSG.Tour',
          },
          {
            text: 'Instagram',
            icon: 'instagram',
            link: 'https://www.instagram.com/sodagreen.20th/',
          },
          {
            text: '小红书',
            icon: 'xiaohongshu',
            link: 'https://www.xiaohongshu.com/user/profile/5ff1b5b1000000000100511c',
          },
        ],
      },
    ],
  },
];
