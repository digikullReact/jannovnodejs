//Restaurant cli app

const readline=require("readline"); // readli
const readlinePromise=require("readline/promises"); // readli

// 

const os=require("os") ;
//console.log(os);
/**
 * console.log("hii");

process.stdout.write("hello there");
 */

/**
 * 1-I want user information ,name and phonenumber 
 * 2-Number of tables they want to book
 * 3-Time they want to book for
 * 4-Show All dertails
 * 
 * 
 */

const booking={

}

const input=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

input.question("Tell the name for booking "+os.EOL,function(name){
    // Callback hell

    booking.name=name;
    input.question("What is your Phone Number"+os.EOL,function(phonenumber){
        booking.phonenumber=phonenumber

        input.question("How many tables you need"+os.EOL,function(tables){
            booking.tables=tables


            input.question("At what time you want to book table ??"+os.EOL,function(time){
                booking.time=time;

                input.write("your Booking succes"+os.EOL);
                input.write(`your Booking Details Are ${JSON.stringify(booking)} `);

                input.close();

            })
        })

        

    })
   
})


// You have to create a student registration app

// Name ,city ,state ,country ,age ,marks -->