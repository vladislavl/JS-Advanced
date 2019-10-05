function solve(params) {
    params = params.toString().split("");
    let newParams = params.map(x => (x == x));
    let reducedParams = params.reduce((acc,cur) =>  Number(acc)+Number(cur));
    let result


 
    if(newParams.hasOwnProperty(false)){
        result = fasle
    } else {
        result = true
    }
    console.log(newParams)
    console.log(reducedParams)
    console.log(result)
}

solve(2222222)