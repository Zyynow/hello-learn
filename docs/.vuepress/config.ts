import { defaultTheme, defineUserConfig } from "vuepress";

export default defineUserConfig({
    base: "/hello-learn/", // github仓库名
    title: 'Hello Learning',
    description: 'Just a lifelong learning',
    theme: defaultTheme({
        // Navigation bar
        navbar: [
          // NavbarItem
          {
            text: 'Foo',
            link: '/foo/',
          },
          // NavbarGroup
          {
            text: 'Group',
            children: ['/group/foo.md', '/group/bar.md'],
          },
          // 字符串 - 页面文件路径
          '/bar/README.md',
        ],
      }),
});
