function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    if (n === 1){
        return [0];
    }
    else if(n === 2){
        return [0,1]
    }
    var fibarray = [0,1];
    for (var i = 2; i<n;i++){
        var nextnum = fibarray[i-1] + fibarray[i-2];
        fibarray.push(nextnum);
    }
    return fibarray;
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}
fibonacciGenerator(2);
