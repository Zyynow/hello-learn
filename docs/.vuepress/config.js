import { defineUserConfig } from "vuepress";

export default defineUserConfig({
    base: "/hello-learn/", // github仓库名
    title: 'Hello Learning',
    description: 'Just a lifelong learning',
    theme: defaultTheme({
        navbar: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
            {
              text: 'Languages',
              ariaLabel: 'Language Menu',
              items: [
                { text: 'English', link: '/' },
                { text: 'Chinese', link: '/' },
                { text: 'Japanese', link: '/' }
              ]
            }
          ],
      }),
});
