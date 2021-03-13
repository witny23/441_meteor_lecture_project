import React from 'react'; // specify the module and then specify the library name
                            // meteor takes care of the rest
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor'; // named export from Meteor
import {UP_Collection_Access} from './../imports/api/user_posts.js';




const renderPosts = function (passed_posts) {
  console.log(passed_posts);
  let formattedPosts = passed_posts.map(function(post){
    return <p key={post._id}>{post.topic} have {post.votes} vote[s]</p>;
  });

  return formattedPosts;
};

const processFormDataFunction = function(event){
  // the event (sometimes e) parameter is a default event handler object that is
  // passed in by the browser when an event occurs
  // this is an important argument becuase it allows us to access the topic name
  // which we need in order to insert a new topic into the db
  event.preventDefault() // stops the page from reloading
  let newTopic = event.target.formInputNameAttribute.value;
  // event.target grabs the target element - the form in this case which lets
  // us grab any of its inputs by referencing it by name (.formInputNameAttribute)
  // .value gets us the value
  if (newTopic){
    event.target.formInputNameAttribute.value = ''; // clear input box

  };
};

Meteor.startup(function () {
  UP_Collection_Access.insert({
    topic: 'kids',
    votes: 0,
  });
  // Tracker tracks queries and reruns code when queries change
  Tracker.autorun(function(){
    const allPostsInDB = UP_Collection_Access.find().fetch();
    let title = '441 reddit';
    let jsx = (
      <div>
        <h1>{title}</h1>
        <form onSubmit={processFormDataFunction}>
          <input type='text' name='formInputNameAttribute' placeholder='Topic Name'/>
          <button>Add Topic</button>
        </form>
        {renderPosts(allPostsInDB)}
      </div>
    );

    ReactDOM.render(jsx, document.getElementById('content'));

  });




});
