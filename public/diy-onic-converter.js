/**
 * Implement your converter function here.
 */
const diyOnicConverter = (textContentContainerSelector) => {
  const container = document.querySelector(textContentContainerSelector);
  const ps = container.querySelectorAll('p');
  Array.from(ps).forEach((p, i) => {
    const words = p.innerText.split(' ');
    p.innerHTML = '';
    ionicContent = words.map((word) => {
      const bold = document.createElement('strong');
      const normal = document.createTextNode(`${word.substr(3)} `);
      bold.innerText = word.substring(0,3);
      p.appendChild(bold)
      p.appendChild(normal)
    })
  });
};

// Allow global access so that this can be executed from the console.
window.diyOnicConverter = diyOnicConverter;
