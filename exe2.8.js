function basketStaff (input){

let yearFee = Number (input[0]);

let basketShoes = yearFee * 0.6; // щом трябва да вадим 40% от общата сума, умножаваме по 0.6!
let basketKit = basketShoes * 0.8;
let basketBall = basketKit * 0.25;
let basketAccessories = basketBall * 0.2;

let allCosts = yearFee+basketShoes+basketKit+basketBall+basketAccessories;



console.log(allCosts);

}


basketStaff (["365 "])