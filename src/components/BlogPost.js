import React from 'react';
import { Link } from 'react-router-dom';

import './BlogPost.css';

const BlogPost = (props) => {

  const renderBlogPost = function(fileName, post) {
    const formattedDate = new Date(post.date.slice(0, 10)).toString().slice(0, 15);
    return(
      <div className="blog-post">
        <div className="blog-title"><Link to={fileName}>{post.title}</Link></div>
        <div className="blog-info">
          <div className="blog-date">{formattedDate}</div><div className="blog-intra">–</div>
          <div className="blog-location">{post.location || ''}</div>
        </div>
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.mdContent }}></div>
      </div>);
    }

  return renderBlogPost(props.fileName, props.post);
};

export default BlogPost;
