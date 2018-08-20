---
templateKey: blog-post
title: 'Speed Tip: Use Typefaces.js in Gatsby to Locally Host Fonts'
date: '2018-08-19'
description:
  'Loading open source fonts on your Gatsby website from an outside location? Speed up your load times by self-hosting those fonts via the Typefaces.js package!'
featureimg: './gatsby_typefaces_featured.png'
tags:
  - website optimization
  - tips
  - gatsbyjs
  - useful npm packages
---

Since launching my new [Gatsby](https://github.com/gatsbyjs/gatsby)-powered website, I noticed that the last thing slowing down my initial load time was caused from loading fontfaces via Google Fonts. (In my case, I am using the fonts "Emily's Candy" and "Merriweather.") Even though they are relatively small files, they were still causing an extra trip to fetch the fonts from Google's servers... and as a result, this caused a tiny load-blocking delay. (Especially on mobile tests.)

### Introducing Typefaces.js

Self-hosting fonts has always been a bit of a mess in the past, so most folks (including myself) resorted to just importing straight from Google Fonts. (That's what they suggest, after all!) But thankfully, there's a more elegant JS soution available: the [Typefaces.js](https://github.com/KyleAMathews/typefaces) package from Kyle Mathews! (Yes, one of the creators of Gatsby.) Assuming your site or app's build process uses Webpack with loaders for CSS and fonts, it's ridiculously easy to use. In my case, I wanted to use it in Gatsby...and it was SUPER simple.

#### Using Typefaces.js In Gatsby

This is all you have to do:

1. Locate the Typeface files on NPM for font(s) needed. In my case, it was: [Emily's Candy](https://www.npmjs.com/package/typeface-emilys-candy) and [Merriweather](https://www.npmjs.com/package/typeface-merriweather). _Note: All of Google's fonts are available for this on NPM, as Kyle has programatically added them. (Font Squirrel's fonts are in the works too!)_

2. Install the above files via yarn:

   ```javascript
   yarn add typeface-merriweather typeface-emilys-candy
   ```

3. Remove the previous imports of those fonts. (Mine were previously imported via an @import in my SCSS)

4. Add the following to `gatsby-browser.js`:

   ```javascript
   require('typeface-emilys-candy');
   require('typeface-merriweather');
   ```

Do a fresh rebuild, and you're done! The entire process took me around 2 minutes total time, and I shaved an additional ~500ms off my mobile load times in the process. If you haven't already done this on your Gatsby site, I highly recommend it!
