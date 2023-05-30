# diy-onic-converter
Coding challenge to make your own (DIY) “bionic reading converter.”

# Full function

```
const diyOnicConverter = (textContentContainerSelector) => {
  const container = document.querySelector(textContentContainerSelector);
  const peas = container.querySelectorAll('p');
  Array.from(peas).forEach((p) => {
    const words = p.innerText.split(' ');
    p.innerHTML = '';
    ionicContent = words.forEach((word, j) => {
      const bold = document.createElement('strong');
      const normal = document.createTextNode(`${word.substr(3)} `);
      bold.addClass('ionic')
      bold.innerText = word.substring(0,3);
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

Convert a DOM node list to an Array for easy manipulation and Iterate over `<p>` tags. `forEach` used since there is no return value.

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

