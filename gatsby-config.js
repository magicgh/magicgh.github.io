const config = require('./config');

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
        icon_options: {
          purpose: `maskable`,
        }
      },
    },
    {
      resolve: "gatsby-theme-minimalist",
      options: {
        // SEO
        title: config.siteTitle,
        description: "Your site description",
        siteUrl: "https://magicgh.com",
        appName: config.manifestName,

        // Content
        headline: "Your headline",
        subHeadline: "Your <strong>meaningful</strong> message.<br/>",
        socialList: [{
          icon: 'FaGithub', // a detailed explanation can be found in the options section
          url: 'https://github.com/magicgh',
          ariaLabel: 'Link to my GitHub profile',
        },
          {
            icon: 'FaLinkedin',
            url: 'https://linkedin.com/in/xuan-z',
            ariaLabel: 'Link to my Linkedin'
          }
        ]
      }
    },
    'gatsby-plugin-offline',
  ],
};
