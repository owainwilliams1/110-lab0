interface Inventory {
    cups: number;
    ice: number;
    lemons: number;
    sugar: number;
}

enum Weather {
    sunny = 2,
    windy = 1.5,
    rainy = 0.7
}

const MAX_VISITORS = 400;
const MIN_VISITORS = 200;
const RECIPE: Inventory = {
    cups: 1,
    ice: 4,
    lemons: 2,
    sugar: 0.5,
}

class LemonadeStand {
    inventory: Inventory;
    total_profit: number = 0;

    constructor(
        cups: number,
        ice: number,
        lemons: number,
        sugar: number,
    ) {
        this.inventory = {
            cups: cups,
            ice: ice,
            lemons: lemons,
            sugar: sugar,
        } as Inventory;
    }

    run_game() {
        while (true) {
            const weather = prompt("What is the weather today: ");
            const temperature = prompt("What is the temperature today: ");
            const cups = prompt("What is the price of cups: ");
            const ice = prompt("What is the price of ice: ");
            const lemons = prompt("What is the price of lemons");
            const sugar = prompt("What is the price of sugar");

            const prices = {
                cups: cups as unknown  as number,
                ice: ice as unknown  as number,
                lemons: lemons as unknown  as number,
                sugar: sugar as unknown  as number 
            }

            this.run_day(
                Weather[weather as keyof typeof Weather], 
                tempefaefreujrature as unknown as number,
                prices,
                ,
            )
        }
    }

    run_day(weather: Weather, temp: number, prices: Inventory, cost: number) {
        const consumption_coefficient = weather * temp;
        const visitors = Math.random() * (MAX_VISITORS - MIN_VISITORS) + MIN_VISITORS;
        const consumers = visitors * consumption_coefficient;

        const revenue = consumers * cost;
        this.inventory = {
            cups: this.inventory.cups - RECIPE.cups * consumers,
            ice: this.inventory.ice - RECIPE.ice * consumers,
            lemons: this.inventory.lemons - RECIPE.lemons * consumers,
            sugar: this.inventory.sugar - RECIPE.sugar * consumers,
        }
        const costs = 
            this.inventory.cups < 0 ? this.inventory.cups * prices.cups : 0 +
            this.inventory.ice < 0 ? this.inventory.ice * prices.ice : 0 +
            this.inventory.lemons < 0 ? this.inventory.lemons * prices.lemons : 0 +
            this.inventory.sugar < 0 ? this.inventory.sugar * prices.sugar : 0
        const profit = revenue - costs;
        if (profit >= 0) {
            console.log("You made $" + profit + " dollars!");
        } else {
            console.log("Unfortunately, you didn't do great calculations. Your costs outweighed the revenue and you lost $" + profit);
        }
        this.total_profit += profit;
    }
}