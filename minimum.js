function min(param1, param2){
    if(param2 === undefined){
        return param1;
    }

    if(param1<param2){
        return param1;
    }else{
        return param2;
    }
}

console.log(min(0,10));
console.log(min(0, -11));