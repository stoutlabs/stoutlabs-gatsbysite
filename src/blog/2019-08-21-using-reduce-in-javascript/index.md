---
templateKey: blog-post
title: Using the Reduce Method in JavaScript
date: 2019-08-21
description: An entry-level guide to using the reduce method for JavaScript arrays.
featureimg: js-reduce-img.jpg
tags:
  - quick lesson
  - javascript
---

The [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) method in JavaScript is an incredibly versatile and powerful array iterator. I had some initial trouble wrapping my brain around it, but now I use it frequently! Hopefully this guide will help others who might be having trouble.

### Example Data

Before we get started, let's create some simple data that we will use in the code examples below. Here are two simple arrays of food items, one for lunch and one for dinner. (I like using food for examples, in case you hadn't noticed yet. 🍕🌮🍰)

Here is the `lunch` array:

```js
const lunch = [
  {
    name: "Egg Salad Sandwich",
    quantity: 1,
    caloriesPer: 450,
    price: 4.99
  },
  {
    name: "Chips",
    quantity: 1,
    caloriesPer: 190,
    price: 1.79
  },
  {
    name: "Bottled Water",
    quantity: 1,
    caloriesPer: 0,
    price: 1.49
  }
]
```
And for the `dinner` array:

```js
const dinner = [
  {
    name: "Tacos",
    quantity: 2,
    caloriesPer: 340,
    price: 6.00
  },
  {
    name: "Refried Beans",
    quantity: 1,
    caloriesPer: 210,
    price: 2.69
  },
  {
    name: "Soda",
    quantity: 1,
    caloriesPer: 190,
    price: 1.99
  }
]
```



## What is the Reduce Method?

The `Array.reduce` method iterates through each element in an array. Upon each element, it performs a `reducer` function that returns some output to an `accumulator` variable. 

This `accumulator` variable is used as a running total after each iteration of the `reducer` function. Once all elements in the array have been processed, the accumulator's final contents are returned!

Here's the documented format:

```js
arr.reduce(
  callback(accumulator, currentValue[, index[, array]])
  [, initialValue]
)
```

I know that sounds and looks intimidating, but I promise it's not! We'll go over some examples below that should clear that up.

## How to Use Reduce 

### 1. Basic usage scenario

Let's say we need to figure out the total calories of our lunch. We could use `forEach`, or `map` here... but this is a perfect job for reduce:

```js
const totCalories = 
        lunch.reduce((total, el) => total + el.caloriesPer * el.quantity, 0);
```
Or, you could do the same thing in a more verbose form:

```js
const totCalories = lunch.reduce((total, el) =>  {
  return total + el.caloriesPer * el.quantity;
}, 0);
```
You can also use a separate reducer function, like this:

```js
const caloriesReducer = (acc, el) => {
  return acc + el.caloriesPer * el.quantity;
}

const totCalories = lunch.reduce(caloriesReducer, 0);
```

After executing any of the above, our `totCalories` variable should contain the numeric value `640`.

---

### 2. A bit more complex usage

Many of the examples I've seen online stop at what we've done above. You are NOT limited to just calculating a single value and returning it!

Let's demo that by totaling both calories and price, and returning an **object** with both items:

```js
const totals = lunch.reduce((total, el) => {
  const calsTemp = total.calories + el.caloriesPer * el.quantity;
  const costTemp = total.cost + el.price;

  return { calories: calsTemp, cost: costTemp }
}, { caloriesTotal: 0, costTotal: 0 });
```
Note how we are setting initial values for both the `calories` and `cost` key/value pairs. We'll discuss that more later.

After executing that, the `totals` variable would contain this object:

```sh
{
  "caloriesTotal": 640,
  "costTotal": 8.27
}
```

---

### 3. Reduce can do a LOT More

The `reduce` method, despite its name, can do much more than just reducing data down to singular values. You can actually use reduce to perform many of the other common array methods like `concat`, [map, filter](/blog/2019-08-19-using-map-and-filter-in-javascript/), and more. 

I don't recommend doing this normally, but I think it's a great learning tool to demonstrate how `reduce` works!


#### Using reduce to concatenate arrays

What if we just wanted to combine our lunch and dinner arrays? Obviously, the `concat` method is definitely the easiest way:

```js
const allItems = dinner.concat(lunch);
```

But just to demonstrate *one* way we could do the same with `reduce`:

```js
const allItems = lunch.reduce((total, el) => {
  total.push(el);
  return total;
}, dinner);
```
The "trick" here is that we set our initial accumulator value to be the `dinner` array. Then we just `push` each element onto it... a.k.a. accumulating items! You can do this with anything: strings, objects, even promises!

Is this making more sense yet? I bet few of you just had a lightbulb moment! 😮💡

#### Using reduce to mimic filter and map

As a final example to drive it all home, let's use `reduce` to mimic the combination use of the `filter` and `map` methods. 

Let's filter out the items in our `lunch` array that are below 300 calories, and then convert the `name` values to all lowercase characters.

Using `filter` and `map`, it would look like this:

```js
const lunchEdited = lunch
  .filter(item => item.caloriesPer < 300)
  .map(el => ({...el, name: el.name.toLowerCase()}));
```

And using `reduce`, we could do it like this:

```js
const lunchEdited = lunch.reduce((total, el) => {
  if (el.caloriesPer >= 300) return total; // skip it!
  return total.concat({ ...el, name: el.name.toLowerCase() });
}, []);
```
After executing either of the above, the `lunchEdited` variable would contain:

```js
{
  "name": "chips",
  "quantity": 1,
  "caloriesPer": 190,
  "price": 1.79
},
{
  "name": "bottled water",
  "quantity": 1,
  "caloriesPer": 0,
  "price": 1.49
}
```
Notice how similar they are? I could be totally mistaken, but I almost feel like the `map` and `filter` methods are just a shorthand form of `reduce`.

## Another JavaScript "Gotcha!"

Even though the official docs say it's not required, you should **always** set an initial value for the reducer! (You'll notice I've done that with all of the examples on this page.)

There are two reasons for this:

1. If an initial value isn't set, the iterator function will start with element index `1`, skipping the first one. Strange output values and/or TypeErrors are likely... and you'll spend hours figuring out why.

1. If you're using `reduce` with an array of objects (like we are), an initial value is simply **required**.

**TLDR: Just do yourself a favor by setting an intial value every time you use reduce.**

## When Should You Use Reduce?

That's a good question... but the answer is entirely up to you! 

I will typically use map/filter when I am working with an array and want to return an array. But if I want something else returned, like calculated totals/averages or an object of many aggregated values... reduce is without question my best friend!

You'll figure out what works best for you. It's an easier decision to make once you're familiar with the available tools. (And that's the entire reason I'm writing these posts!)

## Final Thought

That's all for this post! I really hope it helps a few people have that "ah haaa! 💡" moment I first had with `reduce`.

**Happy coding!** 😎