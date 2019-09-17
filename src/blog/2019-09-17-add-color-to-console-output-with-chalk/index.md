---
templateKey: blog-post
title: "How To Style Your Console Output in Node.js With Chalk"
date: 2019-09-17
description: Here's a quick lesson on using the Chalk npm package to add some color to your console log (and warn, error, etc) statements.
featureimg: using-chalk.png
tags:
  - node.js
  - javascript
  - useful npm packages
  - cli tools
---

Ever written some Node scripts and wanted to painlessly change the colors/styles of some of the `console.log` (error, warn, log, etc) statements? I recently wrote a fairly large in-house CLI app for someone, and I needed to do exactly that. And if you're still reading this, you probably do too!

To handle this issue, I turned to the fantastic [Chalk](https://www.npmjs.com/package/chalk) package on npm! It's SUPER easy to use, so continue reading to learn how.

## Installation:

Just add it to your existing project, like anything other npm package:

```sh
$ yarn add chalk
```

And then in your project files, you just need to include it with your other imports:

```js
const chalk = require("chalk");
```

From that point, you can do a number of things! Let's go over them below.

## Usage:

Using Chalk is incredibly easy! In its most basic form:

### Basic Usage:

```js
console.log(chalk.green("Greetings, Professor Falken."));
```

That's all! Simple, right? 🍰

### Safe Text and Background Colors:

There are a few default "safe" colors available to you in Chalk. These safe colors are:

- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`
- `gray`
- `black`

⚠ Note: Keep in mind that things in Chalk might not appear as expected, depending on your terminal application's settings/color themes!

### Variants

There are also "bright" variants of most of these, such as `redBright`, `greenBright`, `cyanBright`, etc. These are exactly what they sound like: slightly brighter variants!

You can also add a background color using these same colors, prefixed with a `bg`. For example: `bgRed`, `bgGreen`, and `bgYellow`.

Here's a quick example setting both a blue background with a cyan text color:

```js
console.log(chalk.bgBlue.cyanBright("This will look pretty ugly!"));
```

### Other Colors:

If your terminal supports it, you can use much more than the "safe" colors listed above! See the [Chalk documentation](https://www.npmjs.com/package/chalk#256-and-truecolor-color-support) for more information on that.

## Creating Reusable Styles:

You can also create reusable styles:

```js
const errorStyle = chalk.bold.red;
const successStyle = chalk.bold.green;
const vaporStyle = chalk.bgMagenta.bold.cyan;

// easy styled error/success messages!
console.error(errorStyle("Hey! This is an error message!"));
console.log(errorStyle("Hey! This is an error message!"));

// or, something... different
console.log(vaporStyle("****************"));
console.log(vaporStyle("=  80s Party!  ="));
console.log(vaporStyle("****************"));
```

You sharper ones might have figured that out already, since these are just normal JavaScript assignments. 😎

## Using Tagged Template Literals

Sometimes, you might need to **nest some styles** inside an already styled line, or just style parts of some output. You can use tagged template literals to easily accomplish this!

Here's a couple examples to make this concept more clear:

```js
console.warn(
  chalk.yellow(
    `Here's a yellow line, ${chalk.bold.blue.underline(
      "with a segment with underlined blue text"
    )} and then back to yellow.`
  )
);
```

or like this:

```js
console.log(`
  Folders: ${chalk.green("✔ done!")}
  Analytics: ${chalk.green("✔ processed!")}
  MergedOutput: ${chalk.green("✔ created!")}
`);
```

## Other Modifiers:

There are also a few other modifiers you can use, such as the `underline` modifier we used in the example above. There are more available, but here's a list of the most used ones:

- `reset`
- `bold`
- `dim`
- `underline`
- `inverse`

Try them out to see what effects they have! Here's one last example, using bold and underline:

```js
const boldUnderline = chalk.bold.underline.green;

console.log(boldUnderline("This is bold and underlined green text!"));
```

## Conclusion

And there you have it, easy styled output right in the console. 🎨💻

I hope this article helped, as it should be more than enough to get you going. But as always, I definitely recommend looking at their official docs for the most up-to-date info.

- Visit the [Chalk](https://www.npmjs.com/package/chalk) on npm
- Drop by and give their [Github repo](https://github.com/chalk/chalk) a well-earned star! 🌟
