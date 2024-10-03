
const BASE_URL=
"https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns=document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg =document.querySelector(".msg");



for ( let select of dropdowns){
    for (currCode in countryList){
         let NewOption=document.createElement("option");
         NewOption.innerText=currCode;
         NewOption.value=currCode;
         if(select.name==="from"  && currCode==="USD"){
                NewOption.selected="selected";
         }else if(select.name==="to"  && currCode==="INR"){
            NewOption.selected="selected";
     };
         select.append(NewOption);
    };

    select.addEventListener("change",(evt)=>{
    updateflag(evt.target);

    });
};


const updateExchangeRate= async()=>{
    let amount=document.querySelector(".amount input");
    let amtVal=amount.value;
    if(amtVal==="" || amtVal<1){
       amtVal="1";
       amount.value="1";
    }
   
    const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}`;
    let response=await fetch(URL);
    let data=await response.json();
    let rate=data[toCurr.value.toLowerCase()];
     let  finalAmount=amtVal*rate;
     msg.innerText=`${amtVal} ${fromCurr.value}=${finalAmount} ${toCurr.value}`
 };

const updateflag =(element)=>{
 let currCode=element.value;
 let countryCode=countryList[currCode];
 let newsrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
 let img=element.parentElement.querySelector("img");
 img.src=newsrc;
};

btn.addEventListener("click",(evt)=>{
evt.preventDefault();
updateExchangeRate();
});

document.addEventListener("load",()=>{
    updateExchangeRate();
}); 