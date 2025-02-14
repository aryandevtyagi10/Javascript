function getmilk(money,costperbottle) {
    console.log("hello");
    console.log(money + " ");
    // var num = Math.floor(money/1.5);
    console.log("buy " + calculatebottles(money , costperbottle) + " bottles of milk")
    console.log("hoho");
    return money % 2 ;
}
// var change = getmilk(4);
// console.log(change);
function calculatebottles(startingmoney,costperbottle) {
    var numofbottles = Math.floor(startingmoney/ costperbottle);
    return numofbottles;
}

getmilk(5,2);