
const allBtn=document.getElementsByClassName('add-btn')

let count=0
for(const btn of allBtn){
btn.addEventListener('click',function(event){
count=count+1;
event.target.parentNode.parentNode.style.backgroundColor='gray'
event.target.style.display='none'

const placeName=event.target.parentNode.childNodes[1].innerText;

const price= event.target.parentNode.childNodes[3].childNodes[1].innerText;

const selectedContainer=document.getElementById('selected-place-container');

const li=document.createElement('li');
const p=document.createElement('p');
p.innerText=placeName
const p2=document.createElement('p');
p2.innerText=price;

li.appendChild(p)
li.appendChild(p2)


const budge=document.getElementById('budget').innerText
const convertedBudge=parseInt(budge);
if(convertedBudge - parseInt(price)<0){
    alert ('shjshgfgs')
    return 
}


document.getElementById('budget').innerText=convertedBudge - parseInt(price);



selectedContainer.appendChild(li)


totalCost('total-cost',parseInt(price))




grandTotalCost()

setInnerText('cart-count',count);


  
})  
}

function totalCost(id,value){

    const totalCost=document.getElementById(id).innerText

const convertedTotalCost=parseInt(totalCost);
const sum=convertedTotalCost + value
    setInnerText(id,sum);}


function grandTotalCost(catrgory){
    const totalCost=document.getElementById('total-cost').innerText

    const convertedTotalCost=parseInt(totalCost);
    // const sum=convertedTotalCost + value
    setInnerText('grand-total',convertedTotalCost);


    if(catrgory=='bus'){
        setInnerText('grand-total',convertedTotalCost+100);
    }
    else if(catrgory=='train'){
        setInnerText('grand-total',convertedTotalCost-200);
    }
    else if(catrgory=='flight'){
        setInnerText('grand-total',convertedTotalCost+500);
    }
    else{
        setInnerText('grand-total',convertedTotalCost);

    }
 
}

function setInnerText(id,value){
    document.getElementById(id).innerText=value;

}
