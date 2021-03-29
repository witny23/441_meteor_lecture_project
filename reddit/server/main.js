import { Meteor } from 'meteor/meteor';
import { UP_Collection_Access } from './../imports/api/user_posts.js';

Meteor.startup(() => {

  /////// binding example

  let basic_object = { // obect with two things defined
    moderator: 'newman', // 1 - moderator property
    print_moderator() { // 2- method
      console.log(`Moderator: ${this.moderator}`); // reference the basic_object
    }
  };

  basic_object.print_moderator(); // it prints b/c this references basic_object
  // however, in AddTopics.js we have registered the
  // processFormData as a callback - what this means,
  // when the form gets submitted, call processFormData

  // the following exploits the same flaw
  setTimeout(basic_object.print_moderator, 250);
  // notice we are not calling obj.print_moderator()
  // we are actually passing its reference in
  setTimeout(basic_object.print_moderator.bind(basic_object), 500);
  // bind method gets called and it returns
  // a brand new function that accesses
  // the obj's this rather than global's
});
