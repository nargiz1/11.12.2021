"use strict"

let myPrice=document.querySelector("#price-input");
let myMonth=document.querySelector("#month-input");
let myDiscount=document.querySelector("#discount-input");
let countBtn=document.querySelector("#count");
let resetBtn=document.querySelector("#reset");
let mySum=document.querySelector("#h3-sum");
let CardsSection=document.querySelector("#cards");
let CardsRemove=document.querySelector("#cards-remove")

function MonthlyPaymentCount(price, month, discount){
    price+=(price*(discount/100))*month;
    let result=[];
    for(let i=0; i<month-1; i++){
        result.push(Math.round(price/month))
    }
    result.push(Math.round((price/month)+(price%month)));
    return result;
}

function GetMonths(period){
    let today= new Date();
    let dd= String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + period).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    if(mm>12){
        yyyy++;
        today = dd + '/' + (period-1) + '/' + yyyy;
    }else{
        today = dd + '/' + mm + '/' + yyyy;
    }

    return today;
    
}

function Count(){
    // if(CardsRemove.children.length>0){
    //     console.log(CardsRemove.children);
    //     CardsRemove.removeChild(CardsRemove.childNodes[1])
    // }
    Remove();

    let myCardsDiv=document.createElement("div");
    myCardsDiv.classList.add("row", "justify-content-start");
    CardsRemove.append(myCardsDiv);

    let arr=MonthlyPaymentCount(parseInt(myPrice.value), parseInt(myMonth.value), parseInt(myDiscount.value));
    for (let i=0; i<arr.length; i++) {

        let newDiv=document.createElement("div");
        newDiv.classList.add("col-md-3", "mb-3");
        myCardsDiv.append(newDiv);

        let newCard=document.createElement("div");
        newCard.classList.add("card","card-width","justify-content-between", "text-center", "card-width");
        newDiv.append(newCard);

        let cardBody=document.createElement("div");
        cardBody.classList.add("card-body");
        newCard.append(cardBody);

        let cardHeading=document.createElement("h5");
        cardHeading.classList.add("card-title");
        cardHeading.innerText="$"+arr[i];
        cardBody.append(cardHeading);
       
        let date=document.createElement("p");
        date.innerText=GetMonths((i+2));
        cardBody.append(date);

    }

    let sumDiv=document.createElement("div");
    myCardsDiv.append(sumDiv);

    let sumH3=document.createElement("h3");
    sumH3.classList.add("d-inline-block", "me-3");
    sumH3.innerText="Toplam: ";
    sumDiv.append(sumH3);

    let sum=document.createElement("p");
    sum.classList.add("fw-bold", "fs-3", "d-inline-block");
    sum.innerText="$"+arr.reduce(((item, total) => Math.round(item) + Math.round(total)));
    sumDiv.append(sum);

    myPrice.value="";
    myMonth.value="";
    myDiscount.value="";
}

function Remove(){
    if(CardsRemove.children.length>0){
        console.log(CardsRemove.children);
        CardsRemove.removeChild(CardsRemove.childNodes[1])
    }
}

countBtn.addEventListener("click", function(){
    Count();
})

resetBtn.addEventListener("click", function(e){
    Remove();
})

document.addEventListener("keyup", function(e){
    if(e.keyCode==8){
        Remove();
    }
})

document.addEventListener("keyup", function(e){
    if(e.keyCode==13){
        Count();
    }
})