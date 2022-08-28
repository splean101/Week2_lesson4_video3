let buttonsArray = [...document.getElementsByTagName('button')];

function showText(elem) {
  if (elem.previousElementSibling.clientHeight === 80) {
    elem.previousElementSibling.style.height = '100%';
    elem.innerText = 'Show Less...';
  } else {
    elem.previousElementSibling.style.height = '80px';
    elem.innerText = 'Read More...';
  }
}

for (let i = 0; i < buttonsArray.length; i++) {
  buttonsArray[i].addEventListener('click', () => showText(buttonsArray[i]));
}
