module.exports ={
    base: "/hello-learn/", // github仓库名
    title: 'Hello Learning',
    description: 'Just a lifelong learning',
    themeConfig:{
        // Navigation bar
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
      },
};
