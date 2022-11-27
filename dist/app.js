'use strict';

const btn = document.querySelector('.btn');
const color = document.querySelectorAll('.color');

const random = function () {
  const arr = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ];
  const ran = function (min, max) {
    return Math.trunc(Math.random() * (max - min + 1) + min);
  };
  const hex = [];
  for (let i = 1; i <= 6; i++) {
    const no = arr[ran(0, arr.length - 1)];
    hex.push(no);
  }

  const str = `#${hex.join('')}`;
  return str;
};
btn.addEventListener('click', function () {
  color.forEach((colors) => {
    const str = random();
    // color.innerHtml = '';
    colors.innerHTML = '';
    colors.insertAdjacentHTML(
      'afterbegin',
      `<p class="color--value">${str}</p>`
    );
    // colors.children.de;
    colors.style.background = `${str}`;
//     console.log(`${str}`);
//     console.log(colors);
  });
  //   console.log(str);
});
