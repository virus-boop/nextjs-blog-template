export const config = {
  site: {
    title: "YuenDesign",
    name: "YuenDesign",
    description: "Product Designer of SaaS and AI",
    keywords: ["SaaS", "AI", "Design", "Portfolio","ToB"],
    url: "https://nextjs-blog-template-zeta.vercel.app/",
    baseUrl: "https://nextjs-blog-template-zeta.vercel.app/",
    image: "https://nextjs-blog-template-zeta.vercel.app/og-image.png",
    favicon: {
      ico: "/favicon.ico",
      png: "/favicon.png",
      svg: "/favicon.svg",
      appleTouchIcon: "/favicon.png",
    },
    manifest: "/site.webmanifest",
    rss: {
      title: "YuenDesign",
      description: "Product Designer of SaaS and AI",
      feedLinks: {
        rss2: "/rss.xml",
        json: "/feed.json",
        atom: "/atom.xml",
      },
    },
  },
  author: {
    name: "Yuen",
    email: "yicha0818@gmail.com",
    bio: "Keep Learning, Keep Creating",
  },
  social: {
    linktree: "https://linktr.ee/yichadesign",
    github: "https://github.com/virus-boop",
    x: "https://x.com/yichadesign",
    xiaohongshu: "https://www.xiaohongshu.com/user/profile/xxx",
    wechat: "https://storage.xxx.com/images/wechat-official-account.png",
    Newsletter: "https://yicha.zhubai.love",
    AIToolbox: "https://yicha.notion.site/yicha/YICHA-AI-c99d3324f868459a8eaa65dc13ba5ec6",
    Figma: "https://tr.ee/NjRafFv0wT",
    Jike: "https://okjk.co/Fg3Yxo",
    RED: "https://www.xiaohongshu.com/user/profile/5ee82bdc0000000001001b75?xhsshare=CopyLink&appuid=5ee82bdc0000000001001b75&apptime=1665153210",
    Instagram: "https://tr.ee/PKUij8K4w3",  
    buyMeACoffee: "https://www.buymeacoffee.com/xxx",
  },
  giscus: {
    repo: "yuen-personalsite",
    repoId: "R_kgDOHyVOjg",
    categoryId: "DIC_kwDOHyVOjs4CQsH7",
  },
  navigation: {
    main: [
      { 
        title: "作品", 
        href: "/blog",
      },
      { 
        title: "文章", 
        href: "/blog",
      },
      { 
        title: "工具", 
        href: "/blog",
      },
    ],
  },
  seo: {
    metadataBase: new URL("https://nextjs-blog-template-zeta.vercel.app/"),
    alternates: {
      canonical: './',
    },
    openGraph: {
      type: "website" as const,
      locale: "zh_CN",
    },
    twitter: {
      card: "summary_large_image" as const,
      creator: "@yichadesign",
    },
  },
};
