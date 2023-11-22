let i;
let f = "FIZZ"
let b = "BUZZ"

for(i=1; i<=100; i++){
    console.log(i)

    if(i%15 == 0){
        console.log(i + " " + f + " " + b)
    }
    else if(i%3 == 0){
        console.log(i + " " + f)
    }
    else if(i%5 == 0){
        console.log(i + " " + b)
    }
}