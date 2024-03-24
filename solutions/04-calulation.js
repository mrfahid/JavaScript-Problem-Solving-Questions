// Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to help Harry calculate how much money the shopkeeper will return. Input: The first line of the input is the taka Harry’s mom gave him. The second line is the cost of 1 kg of oranges and 1 kg of apples. Output: Print the result.
// The represents the amount of money Harry's mom gave him.
let momGave = 900
// The represents the cost of 1 kg of apples.
let apples1Kg = 500;
// The represents the cost of 1 kg of oranges.
let oranges1Kg = 300;

// calculates the total cost of buying 1 kg of apples and 1 kg of oranges by adding the values of apples1Kg and oranges1Kg.
let totalCost = apples1Kg + oranges1Kg;

// prints the result of subtracting totalCost from momGave, which represents the amount of money that will be returned to Harry.
console.log(momGave - totalCost) // 100

// In this case, the output of the program will be 100, which means that Harry will get 100 taka back from the shopkeeper after buying 1 kg of apples and 1 kg of oranges.