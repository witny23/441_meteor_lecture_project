import {Meteor} from 'meteor/meteor';
  // Meteor import allows us access to Meteor.startup which waits for the server
  // to finish processing everything before the code inside of startup is run
import {UP_Collection_Access} from './../imports/api/user_posts.js';
  // this gives us access to the UserPosts object so we can interact with the DB

Meteor.startup(function(){

  let numbers = [3, 12, 54, 17];
  // challenge 1 use ES5 version to print everything in the array +1
  let newNumbers = numbers.map(function(number){
    return number +1;
  });
  console.log(newNumbers);


  // challenge 2 create an arow function to do the same thing

  let newNumbers2 = numbers.map((number) => number +1);
  console.log(newNumbers2);

});
