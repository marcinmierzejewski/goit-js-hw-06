const findById = document.querySelector('#categories');

const findLiItem = findById.querySelectorAll('.item');
// console.log(`Number of categories: ${findLiItem.length}`);

const findH2 = findById.querySelectorAll('h2');

// console.log(`Category: ${findH2[0].textContent}`);
const firstList = findById.firstElementChild
const firstListLi = firstList.querySelectorAll('li').length
// console.log(`Elements: ${firstListLi}`)

// console.log(`Category: ${findH2[1].textContent}`);
const secondList = firstList.nextElementSibling
const secondListLi = secondList.querySelectorAll('li').length
// console.log(`Elements: ${secondListLi}`)

// console.log(`Category: ${findH2[2].textContent}`);
const thirdList = secondList.nextElementSibling;
const thirdListLi = thirdList.querySelectorAll('li').length
// console.log(`Elements: ${thirdListLi}`)

console.log(
  `Number of categories: ${findLiItem.length}

  Category: ${findH2[0].textContent}
  Elements: ${firstListLi}
  
  Category: ${findH2[1].textContent}
  Elements: ${secondListLi}
  
  Category: ${findH2[2].textContent}
  Elements: ${thirdListLi}`
)
