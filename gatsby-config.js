module.exports = {
  siteMetadata: {
    title: 'Zomato',
    description: 'Frontend Web Zomato',
    author: '@ainulya16',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'images',
    //     path: `${__dirname}/src/assets/images`,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'zomato',
        short_name: 'zomato',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/zomato.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    // 'gatsby-plugin-offline',
  ],
};
