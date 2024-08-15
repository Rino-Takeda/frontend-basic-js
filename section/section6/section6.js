const sum = (a, b) => {
    let total = 0;
    let min, max;
    if(a<b){
        min = a;
        max = b;
    }else{
        min = b;
        max = a;
    }

    for(let i=min; i<=max; i++){
        total += i;
    }

    return total;
};

module.exports = { sum };
