import {Meteor} from 'meteor/meteor';
import {UP_Collection_Access} from './../imports/api/user_posts.js';

Meteor.startup(() => {
  // convention is to capitalize class names
  class Person {

  };

  let me = new Person();// this will create an empty object which is
                        // expected because there is no data for this person
  console.log(me);

  class Person2 {
    constructor(name){	// constructor called behind scenes
      // so far the name is not stored on the Person instance. The following does that
      this.name = name;
      // every instance can have a different name and its stored in name
    }
  }	// no comma or semi – this is correct class definition for ES6

  let me2 = new Person2('Michael');	// this is passes to the class's constructor function
  console.log(me2);

  class Person3 {
    constructor(name = 'anonymous'){
      this.name = name;
    }
  }
  let me3 = new Person3(); // will print anonymous
  let me3b = new Person3('passed name'); // will print anonymous
  console.log(me3, me3b);

  // the following sets up a method
  class Person4 {
    constructor(name = 'anonymous'){
      this.name = name;
    }
    getGreeting(){  // return custom greeting using their name
                    // will use ES6 template strings
                    // these are designed to make it easy to inject values into a string
                    // will use the back tick which is to the left of the 1 key
                    // return 'hi, I am ' + this name'; will work but template strings are better
      return `hi, I am ${this.name}`; // this is a js expression
    }
  }
  let me4 = new Person4();  // will print anonymous

  console.log(me4.getGreeting());

  /*
  Basics of class - define a class, define a constructor function which sets up
                    initial data, define a set of custom methods available to the class
                    THese methods can use the class's data
  */
});
