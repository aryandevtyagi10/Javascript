               //switch statements
          // syntax :
// switch (expression) {
// case 1 :
//     print;
//     break;
// ...
// }

// let num = 3;
// switch (num){
// case 1 :
//     console.log("found");
//     break;
// case 2: 
//    console.log("hit");
//    break;
//    default : 
//    console.log("not found");
// }

                   // for loop 
// for (initial exp ; condition ; inremenetexpression){}

// for (let i = 0; i<10; i++) {
//    console.log("aryan",i); 
// }
            // while loop
//while (condition) {code to be executed}
let num = 10;
while (num <=10){
    console.log("hello world",num);
    num++;
}

// do while loop
// let j = 1;
// do { 
//     console.log("hello");
//     j++;
// }while(j<=5);

            //logical operators AND , OR , NOT
            let a = true;
            let b = false ;
             console.log(a&&b);
             console.log(a||b);
             console.log(a!=b);

            //  Password checker 
            let pass = "Aryan@28"
            if (pass.length>=7 && pass.includes("Aryan@28")){
                console.log("password correct");
            }
            else{
                console.log("wrong password");
            }