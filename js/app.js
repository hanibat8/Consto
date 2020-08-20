const headerData=[
    { 
        h1:"Making Dreams Come Real", 
        img:"../img/rahul-bhogal-Ub9LkIWxyec-unsplash (1).jpg",
        num:1
    },
    {
        h1:"All Smart Apartments", 
        img:"../img/joel-filipe-RFDP7_80v5A-unsplash.jpg",
        num:2
    },
    {
        h1:"Mock Living Environment",
        img:"../img/joel-filipe-jU9VAZDGMzs-unsplash (1).jpg",
        num:3
    }
];              

const num=document.getElementById("#num");
const h1=document.getElementById("#header-heading");
const img=document.getElementById("#header-img");   
         

const lbtn=document.querySelector(".btn--left");
const rbtn=document.querySelector(".btn--right");

let currentItem=0;

rbtn.addEventListener('click',function(){
    currentItem++;
    if(currentItem>headerData.length-1){
        currentItem=0;
    }
    img.src=headerData[currentItem].img;
    num.textContent=headerData[currentItem].num;
    h1.textContent=headerData[currentItem].h1;
});

lbtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem<0){
        currentItem=headerData.length-1;
    }
    img.src=headerData[currentItem].img;
    num.textContent=headerData[currentItem].num;
    h1.textContent=headerData[currentItem].h1;
});
