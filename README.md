# gatsby-plugin-mparticle

A [Gatsby](http://www.gatsbyjs.org) plugin for [mParticle](https://www.mparticle.com)

## Usage

In your `gatsby-js.config` add: 

```
module.exports = {
  plugins: [
    // Other plugins here...
    {
      resolve: '@mparticle/gatsby-plugin-mparticle',
      options: {
        apiKey: 'YOUR APP KEY',
        logPageViews: true or false,
        config: {
          'Your mParticle config object here, if needed e.g. isDevelopmentMode',
        },
      }
    }
  ]
}
```
