import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar.js';
import AddTopics from './AddTopics.js';
import TopicList from './TopicList.js';
import Footer from './Footer.js';

export default class App extends React.Component {
  render() {
    return (
      <>
        <TitleBar
          title={this.props.passedPropTitle}
          moderator={this.props.passedPropModerator}/>

        <div className='wrapper'>
          <AddTopics />
          {/*<AddTopics>
            <h1>Test</h1>
            <p>We need to tell AddTopic.js what to do with these children</p>
          </AddTopics>*/}
          <TopicList passed_posts={this.props.passedPropAllPosts}/>
        </div>
        <Footer footerText={this.props.passedFooter} />
      </>
    )
  }

};

App.propTypes = {
  passedPropTitle: PropTypes.string.isRequired,
  passedPropAllPosts: PropTypes.array.isRequired
};
