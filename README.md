# Billy Zhang's Homepage

This is my personal homepage, using `Gatsby` to pre render, based on [gatsby-starter-identity](https://github.com/anubhavsrivastava/gatsby-starter-identity).

## Usage

### Personalization
Edit `config.js` to put up your details.

### Deploying using Github page


`package.json` has a default script that uses `gh-pages` module to publish on Github pages. Simply running `npm run deploy` would publish the site on github pages.

Additionally, it also has [path-prefix](https://www.gatsbyjs.org/docs/path-prefix/) value set for gatsby config in `config.js`. Change `pathPrefix` to relevant path if your gatsby site is hosted on subpath of a domain, `https://yourdomain.com/somePath/`. If you are hosting it as root site, i.e, `https://yourdomain.com/` , remove the pathPrefix configuration.

### Test and Build
```sh
npm install           

npm run develop     

npm run build   
```

## License
[MIT License](https://mit-license.org/)  
refer LICENSE file in this repository.
