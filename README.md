# diy-onic-converter
Coding challenge to make your own (DIY) “bionic reading converter.”

# Full function

```
const diyOnicConverter = (textContentContainerSelector = 'body', tagToParse = 'p', amountToBold = 3, className = 'ionic', boldTextElement = 'strong') => {
  const container = document.querySelector(textContentContainerSelector);
  const elements = container.querySelectorAll(tagToParse);
  elements.forEach((p) => {
    const innerContent = p.innerText || ''
    const words = innerContent.split(' ') || [];
    p.innerHTML = '';
    words.forEach((word) => {
      const bold = document.createElement(boldTextElement);
      const normal = document.createTextNode(`${word.substr(amountToBold)} `);
      bold.classList.add(className)
      bold.innerText = word.substring(0, amountToBold);
      p.appendChild(bold);
      p.appendChild(normal);
    })
  });
};
```

Select container provided by function argument

`const container = document.querySelector(textContentContainerSelector);`

Select all `<p>` tags inside target container

`const peas = container.querySelectorAll('p');`

Iterate over returned nodes

`Array.from(peas).forEach((p) => {`

Create an array of words with spaces stripped out.

`const words = p.innerText.split(' ');`

Empty the current element we are operating on in preperation for the replacement text.

`p.innerHTML = '';`

Loop over all the words retreived from the node we are operating on. I've chosen again to use `forEach` since we are operating on the DOM inside the function and have no need for a return value.

`ionicContent = words.forEach((word, j) => {`

Create a DOM node of type `<strong>` to hold up to the first 3 letters of our word. `<b>` tag is not semantic HTML.

`const bold = document.createElement('strong');`

Create a DOM text node of the remainder of the word. Include a space after each word. (back ticks not added to template string for MD formatting)

`const normal = document.createTextNode(${word.substr(3)} );`

Add identifying class to node. This is to simulate the real ionic code output. I specifically skipped wrapping each word in a `<span>` tag because that seems like a waste.

`bold.classList.add('ionic')`

Populate the content of the `<strong>` node with up to the first 3 letters;

`bold.innerText = word.substring(0,3);`

Append the new word to the container node

```
p.appendChild(bold);
p.appendChild(normal);
```

# Bonus

```
const diyOnicConverter = (textContentContainerSelector = 'body', tagToParse = 'p', amountToBold = 3, className = 'ionic', boldTextElement = 'strong') => {
  const container = document.querySelector(textContentContainerSelector);
  const elements = container.querySelectorAll(tagToParse);
  Array.from(elements).forEach((p) => {
    const innerContent = p.innerText || ''
    const words = innerContent.split(' ') || [];
    p.innerHTML = '';
    ionicContent = words.forEach((word) => {
      const bold = document.createElement(boldTextElement);
      const normal = document.createTextNode(`${word.substr(amountToBold)} `);
      bold.classList.add(className)
      bold.innerText = word.substring(0, amountToBold);
      p.appendChild(bold);
      p.appendChild(normal);
    })
  });
};
```

## Summary of Changes

The function has been enhanced to use custom arguments as well as some added edge case checking.

## Real World Testing

The function works when dynamically added to real-world websites

 - [https://en.wikipedia.org/wiki/HTML](https://en.wikipedia.org/wiki/HTML)
 - [https://www.espn.com/](https://www.espn.com/)
 - [https://www.friendbuy.com/blog/high-growth-brands](https://www.friendbuy.com/blog/high-growth-brands)

 ## Configuraion options

 The function accepts parameters to customize use. Including accepting no parameters. For now I'm not checking that the proper type was passed in.

 Arguments (default listed after argument name):

 - __textContentContainerSelector__: 'body'
 - __tagToParse__: 'p'
 - __amountToBold__: 3
 - __className__: 'ionic'
 - __boldTextElement__: 'strong'

## Apply to whole page not just a specific tag

Use the available arguments

`diyOnicConverter('body', '*')`



