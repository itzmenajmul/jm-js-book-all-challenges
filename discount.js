const price = 7000;
if(price >= 5000){
    const discount = ((price / 100) * 10);
    const pay = (price - discount); 
    console.log(pay);
}else{
    console.log(price);
}

