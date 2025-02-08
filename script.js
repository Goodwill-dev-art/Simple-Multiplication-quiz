// console.log(inputNumber)
const inputNumber = document.querySelector(".input-number");
console.log(inputNumber.value)
const restartBtn = document.querySelector(".restart-btn")

const score = document.querySelector(".score");
console.log(score);
const submitBtn = document.querySelector(".button");
const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");

function generateRandomNumber() {
	randomNum1 = Math.floor(Math.random() * 10) + 1;
	randomNum2 = Math.floor(Math.random() * 10) + 1;
	console.log((number1.textContent = randomNum1));

	console.log((number2.textContent = randomNum2));
         inputNumber.value = "";
         inputNumber.focus()
	
      
}
generateRandomNumber();
let scoreNum = 0;
console.log(inputNumber.value)
function random(e) {
	e.preventDefault();

	const multiply = randomNum1 * randomNum2;
	console.log(multiply);
	e.stopPropagation();

	if (Number(inputNumber.value) === multiply) {
		scoreNum++;
		score.textContent = scoreNum;
		console.log("this is right");
		generateRandomNumber();
		console.log(inputNumber)
	}
	 else {
		if (scoreNum > 0) {
			console.log("not right");
			generateRandomNumber();
			scoreNum--;
			score.textContent = scoreNum;
		} else if (scoreNum === 0|| !Number(inputNumber.value) === multiply) {
			score.textContent = 0;
			number1.textContent = 0;
			number2.textContent = 0;
                           inputNumber.value=""



		}
	}
}

function restart(){
         score.textContent=0
         generateRandomNumber()
}

submitBtn.addEventListener("click", random);
restartBtn.addEventListener("click", restart)
