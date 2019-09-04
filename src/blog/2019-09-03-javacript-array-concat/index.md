---
templateKey: blog-post
title: "JavaScript Array Method: Concat"
date: 2019-09-03
description: This short post explains the 'concat' method for JavaScript arrays.
featureimg: js-concat.jpg
tags:
  - quick lesson
  - javascript
---

In this mini-post, we will go over the [Array.concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) method. Like the name implies, this method concatenates (combines) two or more arrays.


It's important to note that `Array.concat` is a non-mutating method - which means it does not change the original array(s) involved, and instead returns a new array of (shallow) copies.

### Some Quick Examples: 

Let's take two arrays, and a 🍍:

```js
const pizzaMeats = ["pepperoni", "sausage"];
const pizzaVeggies = ["onions", "mushrooms"];
const weird = "pineapple";
```

And combine them all into a new array with `Array.concat`:

```js
const pizzaToppings = pizzaMeats.concat(pizzaVeggies, weird);
console.log(pizzaToppings);

// returns: ["pepperoni", "sausage", "onions", "mushrooms", "pineapple"]
```

We can combine arrays of nested arrays:

```js
const basicPizzas = [
  ["pepperoni", "mushroom"], 
  ["sausage", "green pepper"]
];

const specialtyPizzas = [
  ["onions", "peppers", "steak"], 
  "supreme"
];

const allPizzas = basicPizzas.concat(specialtyPizzas);
console.log(allPizzas);

/* returns:
[
  ["pepperoni", "mushroom"], 
  ["sausage", "green pepper"], 
  ["onions", "peppers", "steak"], 
  "supreme"
]
*/
```
*Note: There's a small "gotcha" to the above code. I'll discuss that in a moment!*

We can also add a single item to an array, somewhat like [Array.push](/blog/2019-08-29-javascript-array-pop-array-push/):

```js
const pizzaSizes = ["small", "medium"];
const newPizzaSizes = pizzaSlices.concat("large");

console.log(newPizzaSlices);

// returns: [ "small", "medium", "large" ]
```
But remember: `Array.concat` returns a new array, but `Array.push` mutates an existing array and returns the *length* of it.

## Another JavaScript Gotcha

Since this method makes `shallow` copies of elements when concatenating them, you can encounter some unexpected results when working with arrays of objects and/or nested arrays. 

These items are copied as references to the original elements — so if you change or update an original element's contents, it will also update the copied reference!

I can demo this easier than I can explain it! We'll use the same example from above:

```js
const basicPizzas = [
  ["pepperoni", "mushroom"], 
  ["sausage", "green pepper"]
];

const specialtyPizzas = [
  ["onions", "peppers", "steak"], 
  "supreme"
];

const allPizzas = basicPizzas.concat(specialtyPizzas);
console.log(allPizzas);

/* returns:
[
  ["pepperoni", "mushroom"], 
  ["sausage", "green pepper"], 
  ["onions", "peppers", "steak"], 
  "supreme"
]
*/

// now let's change an inner array of basicPizzas
basicPizzas[0][1] = "onion";
console.log(allPizzas);

/* returns:
[
  ["pepperoni", "onion"], 
  ["sausage", "green pepper"], 
  ["onions", "peppers", "steak"], 
  "supreme"
]
*/
```
Do you see that? 👀 ⚠ 

The `allPizzas` array was changed, but we didn't directly update it ourselves! 

**Remember this quirky behavior**, because it can _really_ bite you in the ass! (And you'll end up like I once did: spending several hours wondering why an array has changed.) 😜

## Conclusion

That's all for this one! You've now got another useful JavaScript array method for your toolbelt — just be mindful of the quirk!

Catch you on my next post... 👋




