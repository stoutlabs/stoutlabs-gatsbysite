---
templateKey: blog-post
title: Using JavaScript's Filter and Map Methods
date: 2019-08-19
description: A short article on using the filter and map methods for JavaScript arrays.
featureimg: js-filter-map-img.jpg
tags:
  - quick lesson
  - javascript
---

Let's go over the two JavaScript array methods I probably use the most: [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) and [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)!

### Example Data

Before we proceed, let's set up some simple data that we'll use in the examples throughout this post. We'll create a small array of sandwich objects:

```js
const sandwiches = [
  {
    name: "BLT",
    bread: "sourdough",
    mayo: true,
    toasted: true
  },
  {
    name: "Ham & Swiss",
    bread: "rye",
    mayo: true,
    toasted: true
  },
  {
    name: "PB & Jelly",
    bread: "white",
    mayo: false,
    toasted: false
  },
  {
    name: "Meatball Sub",
    bread: "baguette",
    mayo: false,
    toasted: false
  }
]
```

## Array.Filter
The `filter` method in JavaScript iterates through an array of elements, and returns an array of any/all of those elements passing a defined test condition. It is similar to the [find](/blog/2019-08-17-javascript-array-find/) method, which I wrote about in my last post.

### Example usage:

To filter out only the `toasted` sandwiches:

```js
const toasted = sandwiches.filter(sandwich => sandwich.toasted);
```
This is the same as:

```js
const toasted = sandwiches.filter(sandwich => {
  if(sandwich.toasted === true) {
    return true;
  }
}); 
```
And the value of the `toasted` variable, after either of the above:

```js
[
  {
    name: "BLT",
    bread: "sourdough",
    mayo: true,
    toasted: true
  },
  {
    name: "Ham & Swiss",
    bread: "rye",
    mayo: true,
    toasted: true
  }
]
```
Easy enough, right? Let's move to the next one!


## Array.map

The  `map` method iterates through an array of elements, and calls a function on each of them. It returns a new array based on the return value of each function call.

### Example usage:

Let's say we wanted to iterate through the `sandwiches` array and output a new array of only the sandwich names:

```js
const namesArray = sandwiches.map(sandwich => sandwich.name);
```

Here's a more verbose version of the exact same thing:

```js
const namesArray = sandwiches.map((sandwich, index) => {
  return sandwich.name;
});
```
In either case, the `namesArray` variable would contain:

```js
["BLT", "Ham & Swiss", "PB & Jelly", "Meatball Sub"]
```

In React, you'll often use this inside JSX to output a list of HTML elements:

```jsx
<ul>
  {sandwiches.map((sandwich, i) => (
    <li key={`sandwich_${i}`}>
      <h4>{sandwich.name}</h4>
      <div>Toasted: {sandwich.toasted ? "Yes" : "No"}</div>
    </li>
  ))}
</ul>
```

Which would result in:

```html
<ul>
  <li>
    <h4>BLT</h4>
    <div>Toasted: Yes</div>
  </li>
  <li>
    <h4>Ham & Swiss</h4>
    <div>Toasted: Yes</div>
  </li>
  <li>
    <h4>PB & Jelly</h4>
    <div>Toasted: No</div>
  </li>
  <li>
    <h4>Meatball Sub</h4>
    <div>Toasted: No</div>
  </li>
</ul>
```
Nice, that was pretty easy too! What about combining the two?

## Combining Filter and Map

If you work with much JavaScript, you'll definitely be combining these two a LOT.

Let's filter out only the sandwiches with mayo, and then convert their names to all capital letters:

```js
const newSandwiches = sandwiches
        .filter(s => s.mayo)
        .map(sandwich => ({
          ...sandwich,
          name: sandwich.name.toUpperCase()
        }));
```
Thanks to the ES6 spread operator, we made quick work of that! 

After executing this, `newSandwiches` would contain this array:

```js
[
  {
    name: "BLT",
    bread: "sourdough",
    mayo: true,
    toasted: true
  },
  {
    name: "HAM & SWISS",
    bread: "rye",
    mayo: true,
    toasted: true
  }
]
```

And that's it! We've just covered `map` and `filter`, two incredibly useful & easy-to-use JavaScript array methods — and even how to combine them. 

I highly recommend getting comfortable with them both, as they will be used **frequently** in your JavaScript projects.



