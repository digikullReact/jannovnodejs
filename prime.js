function checkPrime(num){

    // a prime is number is divisible by 1 and itself


    for(let i=0;i<num;i++){


     if(num%i==0 && (i!=1 &&  i!=num) ){
           
         return false;


     }

    }

    return true;

}



 const k=9;

//module.exports=checkPrime;  // to export a single entity from a file 
//module.exports=k;  
module.exports={  // to export multiple entity (functions,variable,objects) from a file 
    k:k,
    checkPrime:checkPrime
}


//console.log(module);

///you have to create two modules 

// one for userEgistrations -->login ,signup 
//one for userTest -->sugarTest ,bloodTest ,ecgTest

//export them

// import these modules in app.js -->and use them as well 