'use strict'

function loadName() {
  const name = new URLSearchParams(window.location.search).get('name') || '[Su Empresa]';
  const elements = document.getElementsByClassName('name-tag');

  try {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];

      if ('textContent' in element) {
        const newText = element?.textContent?.replace('{NAME}', name);
        element.textContent = newText;
      } else {
        const newText = element?.innerText?.replace('{NAME}', name);
        element.innerText = newText;
      }
    }
  } catch (error) {
    console.error(error);
  }
}

loadName();
