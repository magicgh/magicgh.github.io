/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Magicgh - Homepage`,
                short_name: `Magicgh`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `standalone`,
                icon: `static/favicon.png`,
                icon_options: {
                    purpose: `maskable`,
                },
            },
        },
    ],
};
