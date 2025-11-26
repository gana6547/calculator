function sum(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function divide(a,b){
    return a/b;
}

function multiply(a,b){
    return a*b;
}

function operator(fn,a,b){
    return fn(a,b)
}

const operations={
    sum,
    subtract,
    divide,
    multiply
}

const btns=document.querySelectorAll(".btn");
btns.forEach(btn=> btn.addEventListener("click",()=>{
    const a=Number(document.querySelector("#num1").value);
    const b=Number(document.querySelector("#num2").value);
    const clearbtn=document.querySelector("#clear");
    clearbtn.addEventListener("click",()=>{
        document.querySelector("#result").textContent="result: "+"00";
    })
    const fnName=btn.dataset.fn

    const fn=operations[fnName]
    const result=operator(fn,a,b)
    

    document.querySelector("#result").textContent= "result: "+result;
}))

console.log(operator(sum,2,4));
console.log(operator(subtract,2,4));
console.log(operator(multiply,2,4));
console.log(operator(divide,2,4));

