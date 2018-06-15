import React from 'react';
import { connect } from 'react-redux';

import BlogPost from './BlogPost';


let BlogView = ({match, posts}) => {

  if (Object.keys(posts).indexOf(match.params.id) !== -1) {
    var blogPost = posts[match.params.id];
    return <BlogPost blogPost={blogPost} fileName={match.params.id} />
  } else {
    return <div>Post not found: {match.params.id}</div>;
  }
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

BlogView = connect(
  mapStateToProps,
  undefined,
)(BlogView);

export default BlogView;
