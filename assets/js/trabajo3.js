for (let i = 0; i<=15;i++){
    if((i%3===0)&&(i%5===0)){
        console.log(i+"FizzBuzz");
    }else if (i%5===0){
        console.log(i+"Buzz");
    }else if(i%3===0){
        console.log(i+"fizz");
    }else{
        console.log(i);
    }
}