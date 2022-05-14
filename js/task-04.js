const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const counterResult = document.querySelector('#value');

let counterValue = 0;

const decrementValue = () => {
  // console.log('-1');
  counterValue -= 1;
  counterResult.innerHTML = counterValue;
}

const incrementValue = () => {
  // console.log('+1');  
  counterValue += 1;
  counterResult.innerHTML = counterValue;
}

btnDecrement.addEventListener("click", decrementValue);
btnIncrement.addEventListener("click", incrementValue);