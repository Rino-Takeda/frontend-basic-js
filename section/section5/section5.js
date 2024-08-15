const score = (n) => {
    if(80 <= n && n<=100){
        return "合格";
    }else if(60 <= n && n < 80){
        return "追試";
    }else if(0<= n && n < 60){
        return "不合格";
    }else if(n === undefined){
        return "後日受験";
    }else{
        return "0以上100未満の数字を入れてください";
    }
};

module.exports = { score };
