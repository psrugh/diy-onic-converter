/**
 * Implement your converter function here.
 */
const diyOnicConverter = (textContentContainerSelector) => {
  const container = document.querySelector(textContentContainerSelector);
  const peas = container.querySelectorAll('p');
  Array.from(peas).forEach((p) => {
    const words = p.innerText.split(' ');
    p.innerHTML = '';
    ionicContent = words.forEach((word) => {
      const bold = document.createElement('strong');
      const normal = document.createTextNode(`${word.substr(3)} `);
      bold.classList.add('ionic')
      bold.innerText = word.substring(0,3);
      p.appendChild(bold);
      p.appendChild(normal);
    })
  });
};

// Allow global access so that this can be executed from the console.
window.diyOnicConverter = diyOnicConverter;
