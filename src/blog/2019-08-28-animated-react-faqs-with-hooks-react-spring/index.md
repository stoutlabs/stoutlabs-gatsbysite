---
templateKey: blog-post
title: Create an Animated FAQs Component with react-spring, styled-components, and React Hooks
date: 2019-08-28
description: Learn how to combine react spring, styled-components, and React Hooks to make an animated FAQ component.
featureimg: react-faqs-img.jpg
tags:
  - react
  - javascript
  - animation
  - react hooks
  - react-spring
  - styled-components
---

In this post, we are going to build something I created for a client site last week: an animated FAQs (Frequently Asked Questions) component. It's going to be a long post, so let's get right to it!

Note: To follow along with this tutorial, you need a React-based site set up and ready to edit. Based on the topic of this post, I will assume that you don't need help getting to that point. 😂

## Install Libraries

To create this FAQs component, we are going to make use of two outstanding React libraries, `react-spring` and `styled-components`:

* [react-spring](https://www.react-spring.io/) is a powerful and easy to implement animation library built for use within React. We're just barely making use of it in this post, but it's capable of extremely advanced animation sequences. Be sure to [check out their docs](https://www.react-spring.io/docs/) and [examples](https://www.react-spring.io/docs/hooks/examples).

* [styled-components](https://www.styled-components.com/) is an amazing CSS-in-JS library that I use with nearly every React project I work on. There are other similar solutions out there, and I have tried most of them more than once... but `styled-components` continues to be my favorite. (And I will definitely be writing more about it soon!)

Let's install both of those now:

```sh
$ yarn add react-spring styled-components
```

Afterwards, you will likely need to configure `styled-components` to work with your React site. For example, in a Gatsby site we would need to install an additional Gatsby plugin, and modify the `gatsby-config.js` file. I wrote a full post on [using styled-components with Gatsby](https://alligator.io/gatsbyjs/using-styled-components-in-gatsbyjs/) at Alligator.io, if you're interested.

We are also going to make use of React's new `hooks` feature, so be sure that you are using React version `16.8.0` or higher. (At the time of writing this post, React is at version 16.9.0.)

## Create the Basic Component(s)

Let's first set up a new directory inside our project at `/src/components/Faqs/`. Inside this directory, let's create two new files:

### Faq.js

This file is a React component that functions as an individual FAQ question/answer pair. 

<p class="filelabel"><span>/src/components/Faqs/Faq.js</span></p>

```js
import React, { useState } from "react";

const Faq = props => {
  const { question, answer } = props;
  const [isOpen, toggleOpen] = useState(false);

  return (
    <div onClick={() => toggleOpen(!isOpen)}>
      <div className="faq-question">
        <span>
          Q: {question}
        </span>
      </div>

      <div 
        className="faq-answer" 
        style={isOpen ? { display: "block"} : { display: "none" }}
      >
        <span>
          A: {answer}
        </span>
      </div>
    </div>
  );
};

export default Faq;
```
As you can see, we are making use of the `useState` hook in React to track an open/closed state for this component. It doesn't really do much yet, but soon we'll animate the showing & hiding of the answer using `react-spring`!

### FaqsList.js 

This file is just a simple React component that will function as a container to hold our list of FAQs:

  <p class="filelabel"><span>/src/components/Faqs/FaqsList.js</span></p>

```js
import React from "react";

import Faq from "./Faq";

// this data could come from anywhere
const faqsData = [
  { 
    question: "What does FAQ stand for?",
    answer: "Frequently Asked Question"
  },
  {
    question: "What is the best ice cream flavor?",
    answer: "Coffee with fudge ripple, or homemade strawberry."
  }
];

const FaqsList = () => {
  return (
    <div>
      {faqsData.map((faq, i) => (
        <Faq key={"faq_" + i} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FaqsList;
```
Now that we have our basic components set up, let's add the fun stuff: styles and animation!

## Styling With styled-components

Let's create some basic styles for our `FaqsList` and `Faq` components. Create a new `faq-styles.js` file in the same directory as our components, and insert this code: 

<p class="filelabel"><span>/src/components/Faqs/faq-styles.js</span></p>

```js
import styled from "styled-components";

export const StyledFaq = styled.div`
  cursor: pointer;
  margin: 0 0 10px;

  div.faq-question {
    font-size: 125%;
    font-weight: 800;
    margin: 0 0 5px;
  }

  div.faq-answer {
    background: #fff;
    overflow: hidden;

    span {
      display: block; 
      padding: 20px 10px;
    }
  }
`;

export const StyledFaqsList = styled.div`
  background: #efefef;
  margin: 20px 0;
  padding: 1rem;
`;
```

Notice how we're exporting each of these? This will allow us to import them from our component files above, and it also keeps our FAQs styles all in one location. 

Note: This is my typical pattern when making components I that plan to re-use in other locations. *A lot of folks seem to think that styles must be within the component file when using `CSS-in-JS` solutions... but that is incorrect!*

### Adjust the Components

Let's adjust our `Faq.js` and `FaqsList.js` components to make use of these new styles. I've highlighted the affected rows below:

<p class="filelabel"><span>/src/components/Faqs/Faq.js</span></p>

```js
import React, { useState } from "react";

import { StyledFaq } from "./faqStyles"; // highlight-line

const Faq = props => {
  const { question, answer } = props;
  const [isOpen, toggleOpen] = useState(false);

  return (
    { /* highlight-range{1,12} */ }
    <StyledFaq onClick={() => toggleOpen(!isOpen)}>
      <div className="faq-question">
        <span>Q: {question}</span>
      </div>

      <div
        className="faq-answer"
        style={isOpen ? { display: "block" } : { display: "none" }}
      >
        <span>A: {answer}</span>
      </div>
    </StyledFaq>
  );
};

export default Faq;
```
All we did above was add an import statement for `StyledFaq`, and then swap out the outer `div` element with our imported styled component. Make sense? 

Next, we'll do the same thing with the `FaqsList` component:

<p class="filelabel"><span>/src/components/Faqs/FaqsList.js</span></p>

```js
import React from "react";

import Faq from "./Faq";
import { StyledFaqsList } from "./faqStyles"; // highlight-line

const faqsData = [
  {
    question: "What does FAQ stand for?",
    answer: "Frequently Asked Question!",
  },
  {
    question: "What's the best ice cream flavor?",
    answer: "Coffee with fudge ripple, or homemade strawberry.",
  },
];

const FaqsList = () => {
  return (
    <StyledFaqsList> // highlight-line
      {faqsData.map((faq, i) => (
        <Faq key={"faq_" + i} question={faq.question} answer={faq.answer} />
      ))}
    </StyledFaqsList> // highlight-line
  );
};

export default FaqsList;
```

You should now have a basic styled FAQs list displaying, with each FAQ item showing/hiding the answer when clicked. *If yours isn't doing that, I'll post a link to the full source at the end⁠ — so don't panic!* 🤠

## Adding Animation With react-spring

Let's add some animation to this with `react-spring`! To keep it really simple for this post, we will just animate the showing/hiding of the answer portion of each FAQ when clicked. 

*(And yes, my CSS warrior friends... we could do something like this with pure CSS ⁠— but I want to show usage of react-spring in this post!)*

But first, we need to add in a tiny npm package to help us measure the height of our answers. We need that info to tell `react-spring` what the height is when an answer is in the 'open' state. There's a few available options for this, but I'm going to use [react-resize-aware](https://www.npmjs.com/package/react-resize-aware) - since it has an easy-to-use hooks-based solution.

Add it to your project, like usual:

```sh
$ yarn add react-resize-aware
```

Now we just need to edit the `Faq.js` component to add the animations. Below is the updated code, with highlights on the updated lines:

<p class="filelabel"><span>/src/components/Faqs/Faq.js</span></p>

```js
{ /* highlight-range{2-3,10-15,23-25,28} */ }
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import useResizeAware from "react-resize-aware";

import { StyledFaq } from "./faqStyles";

const Faq = props => {
  const { question, answer } = props;
  const [isOpen, toggleOpen] = useState(false);
  const [resizeListener, { height }] = useResizeAware();
  
  const animProps = useSpring({
    height: isOpen ? height : 0,
    opacity: isOpen ? 1 : 0,
  });
  
  return (
    <StyledFaq onClick={() => toggleOpen(!isOpen)}>
      <div className="faq-question">
        <span>Q: {question}</span>
      </div>

      <animated.div className="faq-answer" style={{ ...animProps }}>
        <span style={{ position: "relative" }}>
          {resizeListener}
          A: {answer}
        </span>
      </animated.div>
    </StyledFaq>
  );
};

export default Faq;
```

To explain a little more, we did the following things above:

* Imported the two packages we already installed, `react-spring` and `react-resize-aware`. We destructured `useSpring` and `animated` from `react-spring` so they're easier to use.
* Created a new variable for our animation configuration settings, using the `useSpring` Hook from `react-spring`. Notice that we set initial values of `0` for the opacity and height, and then our measured `height` value is used to set the height when the answer is shown. (And of course, opacity is set to 1.)
* Converted the `faq-answer` div into a react-spring `animated.div` element, and spread the values of `animProps` out into the `styles` prop.
* Added a `position: relative` style to the answer's inner `span` tag. This is required for measuring the element on load. (See next item.)
* Added a `resizeListener` into our answer's inner span. This is part of `react-resize-aware`, and it measures the answer's height when loaded. (It's essentially an invisible div that returns its width and height via a custom React Hook... so it works perfectly in our stateless component!)

Go ahead and give it a try, if you haven't already. Each FAQ item should now animate open when clicked, and should animate back to closed if clicked again. Pretty cool, huh? You can now re-use this component in any of your sites, and you only need to edit the styles/animations to fit your needs.

## Final Thoughts

We are finished! I hope that helps a few of you out there, and maybe even gives you some ideas to try on your own.

### Preview/Download Source:
You can preview a demo here: https://stoutlabs-faqs-demo.netlify.com/

I also made a repo for this post, so please feel free to view/clone it: https://github.com/stoutlabs/demo-spring-hooks.

Catch you on the next post... I'm off to make coffee! ☕ 





