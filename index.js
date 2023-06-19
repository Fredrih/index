const  clientsEstimations=[];

function  askClientToGiveEstimation(){
    let customerRating=+prompt('Как вы оцениваете нашу кофейню от 1 до 10?');
    if(customerRating>=0 && customerRating<=10){
        clientsEstimations.push(customerRating);
    }
}

for(let i=0;i<5;i++){
    askClientToGiveEstimation();
}

let positivRating=clientsEstimations.filter((rating)=>{
    return rating>5;
});

let negativRating=clientsEstimations.filter((rating)=>{
    return rating<=5;
});9


console.log(positivRating);
console.log(negativRating);

alert(`Всего положительных оценок: ${positivRating.length}`);
alert(`Всего отрицательных оценок: ${negativRating.length}`);

