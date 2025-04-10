export const config = {
  site: {
    title: "YuenDesign",
    name: "YuenDesign",
    description: "Product Designer of SaaS and AI",
    keywords: ["Nextjs Blog Template", "AI", "Full Stack Developer"],
    url: "https://nextjs-blog-template-zeta.vercel.app/",
    baseUrl: "https://nextjs-blog-template-zeta.vercel.app/",
    image: "https://cloud.dify.ai/logo/logo.png",
    favicon: {
      ico: "/favicon.ico",
      png: "/favicon.png",
      svg: "/favicon.svg",
      appleTouchIcon: "/favicon.png",
    },
    manifest: "/site.webmanifest",
    rss: {
      title: "YuenDesign",
      description: "Thoughts on Full-stack development, AI",
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
    bio: "持续输入，持续创造",
  },
  social: {
    github: "https://github.com/xxx",
    x: "https://x.com/xxx",
    xiaohongshu: "https://www.xiaohongshu.com/user/profile/5ee82bdc0000000001001b75",
    wechat: "https://storage.xxx.com/images/wechat-official-account.png",
    buyMeACoffee: "https://www.buymeacoffee.com/xxx",
  },
  giscus: {
    repo: "guangzhengli/hugo-ladder-exampleSite",
    repoId: "R_kgDOHyVOjg",
    categoryId: "DIC_kwDOHyVOjs4CQsH7",
  },
  navigation: {
    main: [
      { 
        title: "作品", 
        href: "/blog",
      },
    ],
    main: [
      { 
        title: "文章", 
        href: "/blog",
      },
    ],
    main: [
      { 
        title: "创造", 
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
      creator: "@xxx",
    },
  },
};
