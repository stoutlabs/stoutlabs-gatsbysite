---
templateKey: blog-post
title: The JavaScript Find Method
date: 2019-08-17
description: A short article on the find method for JavaScript arrays.
featureimg: js-find-img.jpg
tags:
  - quick lesson
  - javascript
---

The [find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) method in JavaScript can be useful when you need to search an array and return a **single** found element.

### Example Data

Here's some simple data that we'll use in the examples below. It's just a small array of objects:

```js
const employees = [
  {
    name: "Jacob",
    department: "sales"
  },
  {
    name: "Erica",
    department: "HR"
  },
  {
    name: "Erica",
    department: "sales"
  },
  {
    name: "Mia",
    department: "catering"
  }
]
```

## How to Use

The `find` method will iterate through each element in an array, using each element in a "search" function that we define. It returns only the **first** element it finds, and returns `undefined` if nothing is found. 

Let's say we need to search this data for an element having the name `Erica` and works in `sales`:

```js
const found = employees.find((el => el.name === `Erica` && el.department === "sales");
```
or, the same thing in a more verbose form:

```js
const found = employees.find(el => {
  return el.name === `Erica` && el.department === "sales";
});
```
You can also use a separate search function, like this:

```js
const isErica = (name) => {
  return name === `Erica`;
}

const found = employees.find(isErica);
```

### Result:

After executing either of the above, our `found` variable would contain:

```js
{
  name: "Erica",
  department: "HR"
}
```

That's it! Hope that helps someone! 😎



