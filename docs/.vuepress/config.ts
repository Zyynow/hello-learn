import { defaultTheme, defineUserConfig } from "vuepress";
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

export default defineUserConfig({
  base: "/hello-learn/", // github仓库名
  title: 'Hello Learning',
  description: 'Just a lifelong learning',

  plugins: [
    backToTopPlugin(),
  ],


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
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        children: [
          { text: 'English', link: '/' },
          { text: 'Chinese', link: '/' },
          { text: 'Japanese', link: '/' },
        ],
      },
      // 字符串 - 页面文件路径
      {
        text: 'github',
        link: 'https://github.com/Zyynow/hello-learn',
      },
      
    ],
    sidebar: [
      // SidebarItem
      {
        text: 'Foo',
        link: '/',
        children: [
          // SidebarItem
          {
            text: 'github',
            link: 'https://github.com',
          },
        ],
      },
      {
        text: 'Voo',
        link: '/Voo/',
        children: [
          // SidebarItem
          {
            text: 'git',
            link: 'https://github.com',
          },
        ],
      },
      {
        text: 'Array',
        link: '/ds/array.md',
      },
      {
        text: 'Linked List',
        link: '/ds/linked.md',
      },
      {
        text: 'Queue',
        link: '/ds/queue.md',
      },
      {
        text: 'Stack',
        link: '/ds/stack.md',
      },
    ],
  }),
});
