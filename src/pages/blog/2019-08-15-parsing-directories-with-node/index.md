---
templateKey: blog-post
title: How to Parse File Directories With Node.js
date: 2019-08-15
description: This short how-to post demonstrates a method to parse a directory of files with Node.js
featureimg: feat_parsingNode.jpg
tags:
  - how-to
  - nodejs
  - javascript
  - file system
---

Welcome to the first of *MANY* short and sweet posts on how I code things for client work. These first several posts will cover many of the techniques I use on a daily basis.

Let's just jump right into things!

## The Setup

We have a directory containing several folders, and inside each of those folders is a `data.json` file. I deal with hundreds/thousands of files at a time for work (some with hundreds of key/value pairs), but a simplified example might look like this:

```bash
\---datafiles
    +---pancakes
    |       data.json
    |
    +---chicken_sandwich
    |       data.json
    |
    \---garden_salad
            data.json
```
The structure of one of the `data.json` files might look like this:

```json
{
  "name": "pancakes",
  "price": 8.99,
  "calories": 900,
  "allday": false
}
```

## The Task

Let's say we've been given a task to aggregate the `name` and `price` key/value pairs from all of those `data.json` files, and output that data to a new JSON file. No problem! 😎

We will use the amazing [fs-extra](https://github.com/jprichardson/node-fs-extra) tool to make quick work of this, because I prefer it over Node's built-in `fs` package. (It's just better in every way and we all know it, don't @ me.)

Go ahead and add `fs-extra` to the project:

```sh
$ yarn add fs-extra
```

## The Solution

We can do this both synchronously or asynchronously. Have no fear, I'll show you both ways below!

### Synchronous Method:
I usually go this route, since it is less complicated and I'm (almost) always doing this stuff with local files.

<p class="filelabel"><span>./index.js</span></p>

```js
const fs = require("fs-extra");
const path = require("path");

const outputFile = "output.json";

const buildFile = () => {
  const contentFolder = path.resolve("datafiles");
  const dataFolders = fs.readdirSync(contentFolder);

  // begin parsing each folder
  const newData = dataFolders.map((folder, i) => {
    const dataFile = path.resolve(contentFolder, folder, "data.json");

    // be sure the file exists!
    if (fs.pathExistsSync(dataFile)) {
      const jsondata = fs.readJSONSync(dataFile);
      return {
        name: jsondata.name,
        price: jsondata.price
      };
    }
  });

  //filter out null values (from possible missing/empty data files)
  const finalData = newData.filter(item => item);

  fs.writeJSONSync(outputFile, finalData);
  console.log("Success!");
};

buildFile();
```

### Asynchronous Method:
We can also do this totally **asynchronously**, thanks to fs-extra! It's just a tiny bit more complex:

<p class="filelabel"><span>./index.js</span></p>

```js
const buildFileAsync = async () => {
  try {
    const contentFolder = path.resolve("datafiles");
    const dataFolders = await fs.readdir(contentFolder);

    const asyncData = dataFolders.map(async (folder, i) => {
      const dataFile = path.resolve(contentFolder, folder, "data.json");
      const fileExists = await fs.pathExists(dataFile);

      if (fileExists) {
        const jsondata = await fs.readJSON(dataFile);
        return {
          name: jsondata.name,
          price: jsondata.price
        };
      }
    });

    let finalData = await Promise.all(asyncData);
    finalData = newData.filter(item => item); //remove any nulls

    fs.writeJSON(outputFile, finalData).then(() => {
      console.log("Success!");
    });
  } catch (e) {
    throw new Error(e);
  }
};

buildFileAsync();
```

And that's it! These were really basic examples, but they should be enough to help tackle similar tasks you might encounter.

I hope you have enjoyed my first quick "how-to" post! I actually plan to write TONS of these, so check back often. I'll be re-designing this blog very soon too, to make things easier to read & find! 🎨

*p.s. I'll also get an RSS feed going soon, for those that prefer keeping up that way.*