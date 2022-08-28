const app=require("../app");
const request = require('supertest');

// We will call our api with some testing tool
/**
 * The Jest docs state it is an alias of test. So they are exactly the same from a functional point of view. 
 * They exist both to enable to make a readable English sentence from your test.
 */

describe('Testing Get Api',function(){


    // This is used for asynchronous testing 
    it("It should return the response 200", (done) => {
      request(app).
          get("/")
          
          .expect(200) //jest 
         
          .end(function (err, res) {
              if (err) return done(err);
              return done();
          });
  
  });
  
  
  })


  // Testing for response text 


  describe('Testing For text Api',function(){


    // This is used for asynchronous testing 
    it("It should return the response 200 and the text", (done) => {
      request(app).
          get("/text")
          .expect(200) //jest 
          .then(response => {
      
            expect(response.text).toBe('All good Here');
        
            done();
        }).catch(err => done(err))
  
  });
  
  
  })


// Testing For Json response

  describe('Testing For json Api',function(){


    // This is used for asynchronous testing 
    it("It should return the response 200 and the json", (done) => {
      request(app).
          get("/json")
          .expect(200) //jest 
          .then(response => {
     
            expect(response.body.message).toBe('Success');
        
            done();
        }).catch(err => done(err))
  
  });
  
  
  })


  // Testing For Post Api



  describe('Testing For POST Api',function(){
    const value=20;


    // This is used for asynchronous testing 
    it("It should return the response 200 and the json with data key", (done) => {
      request(app).
          post("/post")
          .send({value: value})
          .expect(200) //jest 
          .then(response => {
            
            expect(response.body.message).toBe('Success');
            expect(response.body.data).toBe(2*value);
        
            done();
        }).catch(err => done(err))
  
  });
  
  
  })
