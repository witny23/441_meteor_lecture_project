import {Meteor} from 'meteor/meteor';
  // Meteor import allows us access to Meteor.startup which waits for the server
  // to finish processing everything before the code inside of startup is run
import {UP_Collection_Access} from './../imports/api/user_posts.js';
  // this gives us access to the UserPosts object so we can interact with the DB

Meteor.startup(function(){

  // ES5 function
  let square = function(x){   // functions can be anonymous like this one
    return x*x;               // we take the anonymous function and store it on
  }                           // square variable
  console.log(square(10));

  function squareNamed(x){return x*x}; // named function that produces same result
  console.log(squareNamed(9));

  // problem -  arrow functions do not support the named function syntax
  //            all arrow functions are anonymous functions which means you must
  //            use the let variable syntax


  let square2 = (x) => {  // don't need to state function
    x = x+1
    return x*x;   // this is known as statements syntax
  }
  console.log(square2(4));



  let square3 = (x) => x*x; // this is known as expression syntax

  console.log(square3(6));

  // another example with an object
  let user = {
    name: 'newman',
    sayHi: function (){ // this is an ES5 function
        console.log(this.name);
    }
  };
  user.sayHi();

  // let user2 = {
  //   name: 'newman',
  //   sayHi:  () => { // this is an ES6 function
  //       console.log(this.name); // this is undefined b/c arrow functions and
  //   }                           // will not bind the this keyword
  // };                // it is best not to use arrow functions for methods on
  //                   // obects b/c it is most likely going to cause problems - wont work
  // user2.sayHi();



});
