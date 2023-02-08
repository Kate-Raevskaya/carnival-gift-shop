const input = require('sync-input');


console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
console.log("Hello friend! Thank you for visiting the carnival!");


class Gift {
    constructor(name, price, order) {
        this.name = name;
        this.price = price;
        this.order = order;
    }
}

let teddyBear = new Gift("Teddy Bear", 10, 1);
let bigRedBall = new Gift("Big Red Ball", 5, 2);
let hugeBear = new Gift("Huge Bear", 50, 3);
let candy = new Gift("Candy", 8, 4);
let stuffedTiger = new Gift("Stuffed Tiger", 15, 5);
let stuffedDragon = new Gift("Stuffed Dragon", 30, 6);
let skateboard = new Gift("Skateboard", 100, 7);
let toyCar = new Gift("Toy Car", 25, 8);
let basketball = new Gift("Basketball", 20, 9);
let scaryMask = new Gift("Scary Mask", 75, 10);

let gifts = [teddyBear, bigRedBall, hugeBear, candy, stuffedTiger, stuffedDragon,
    skateboard, toyCar, basketball, scaryMask];

let tickets = 0;

function addGiftToTheList() {
    console.log("Here's the list of gifts:");
    console.log("");
    if (gifts.length === 0) {
        console.log("Wow! There are no gifts to buy.");
    }
    for (const gift of gifts) {
        console.log(`${gift.order}- ${gift.name}, Cost: ${gift.price} tickets`);
    }
}

function buyGift() {
    if (gifts.length === 0) {
        console.log("Wow! There are no gifts to buy.");
        return false;
    }
    let numberGift = Number(input("Enter the number of the gift you want to get: "));
    if (Number.isNaN(numberGift)) {
        console.log("Please enter a valid number!");
        return false;
    }
    let chosenGift = gifts.find(gift => gift.order === numberGift);
    if (!chosenGift) {
        console.log("There is no gift with that number!");
        return false;
    }
    if (tickets < chosenGift.price) {
        console.log("You don't have enough tickets to buy this gift.");
        return false;
    }
    let indexChosenGift = gifts.indexOf(chosenGift);
    tickets = tickets - chosenGift.price;
    console.log(`Here you go, one ${chosenGift.name}!`);
    gifts.splice(indexChosenGift, 1);
    return true;
}

function menu() {
    let optionNumber;
    do {
        console.log("");
        console.log(`What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop`);
        optionNumber = Number(input());
        if (Number.isNaN(optionNumber) || (optionNumber < 0) || (optionNumber > 5)) {
            console.log("Please enter a valid number!");
            continue;
        }
        if (optionNumber === 1) {
            if(!buyGift()) {
                continue;
            }
        }
        if (optionNumber === 2) {
            let additionalTickets = Number(input("Enter the ticket amount: "));
            if (Number.isNaN(additionalTickets) || (additionalTickets < 0) || (additionalTickets > 1000)) {
                console.log("Please enter a valid number between 0 and 1000.");
                continue;
            }
            tickets = tickets + additionalTickets;
        }
        if (optionNumber === 4) {
            addGiftToTheList();
        }
        if (optionNumber !== 5) {
            console.log(`Total tickets: ${tickets}`);
        }
    } while (optionNumber !== 5);
    console.log("Have a nice day!");
}


addGiftToTheList();
menu();