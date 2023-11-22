let i;
let f = "FIZZ"
let b = "BUZZ"
const list = document.querySelector("ul");
let li;

for(i=1; i<=100; i++){
    console.log(i)
    li = `<li>${i}</li>`
    list.innerHTML += li
    if(i%15 == 0){
        console.log(i + " " + f + " " + b)
        list.innerHTML += f + b
    }
    else if(i%3 == 0){
        console.log(i + " " + f)
        list.innerHTML += f 
    }
    else if(i%5 == 0){
        console.log(i + " " + b)
        list.innerHTML += b
    }
}