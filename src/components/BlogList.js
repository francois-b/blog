import React from 'react';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import { connect } from 'react-redux';

import BlogPost from './BlogPost';

let BlogList = (props) => {

  const blogListStyle = {
    display: 'flex',
    flexDirection: 'column',
    flexFlow: 'column',
  };

  const blogPosts = Object.keys(props.posts).map(key => {
    return (
      <BlogPost
        fileName={key}
        post={props.posts[key]}
        key={shortid.generate()}
      />
    );
  });

  return (
    <div id="blog-list" style={blogListStyle}>{blogPosts}</div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

BlogList = connect(
  mapStateToProps,
  undefined,
)(BlogList);

export default BlogList;
