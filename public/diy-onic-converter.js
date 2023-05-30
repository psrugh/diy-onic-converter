/**
 * Implement your converter function here.
 */
// const diyOnicConverterSimple = (textContentContainerSelector = 'body', tagToParse = 'p', amountToBold = 3, className = 'ionic', boldTextElement = 'strong') => {
//   const container = document.querySelector(textContentContainerSelector);
//   const elements = container.querySelectorAll(tagToParse);
//   elements.forEach((p) => {
//     const innerContent = p.innerText || ''
//     const words = innerContent.split(' ') || [];
//     p.innerHTML = '';
//     words.forEach((word) => {
//       const bold = document.createElement(boldTextElement);
//       const normal = document.createTextNode(`${word.substr(amountToBold)} `);
//       bold.classList.add(className)
//       bold.innerText = word.substring(0, amountToBold);
//       p.appendChild(bold);
//       p.appendChild(normal);
//     })
//   });
// };

const diyOnicConverter = (textContentContainerSelector = 'body', tagToParse = 'p', amountToBold = 3, className = 'ionic', boldTextElement = 'strong') => {
  const container = document.querySelector(textContentContainerSelector);
  const elements = container.querySelectorAll(tagToParse);
  elements.forEach((el) => {
    const innerContent = el.childNodes || null;
    console.log(innerContent)
    // el.innerHTML = '';
    innerContent.forEach((child) => {
      console.dir(child)
      const childText = child.innerText || '';
      console.log(childText);
      const words = childText.split(' ') || [];
      words.forEach((word) => {
        console.log(word)
        const bold = document.createElement(boldTextElement);
        const normal = document.createTextNode(`${word.substr(amountToBold)} `);
        bold.classList.add(className)
        child.innerHTML = ` <strong>${word.substring(0, amountToBold)}</strong>${`${word.substr(amountToBold)} `}`;
      });
    });
  });
}


// Allow global access so that this can be executed from the console.
window.diyOnicConverter = diyOnicConverter;
