function priceOfFruit(...params) {
    
    let costToBuy = grams/1000*price

    console.log(`I need $${costToBuy.toFixed(2)} to buy ${(grams/1000).toFixed(2)} kilograms ${fruit}.`)

    console.log(params)

}

priceOfFruit("orange", 2500, 1.80)