import React from 'react';

import './BlogPost.css';

const projectsStyle = {

  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  "alignContent": "space-around",

};

const projectStyle = {
  fontFamily: "Open Sans",
  fontSize: "14pt",
  border: "1px solid #bbb",
  backgroundColor: "white",
  flex: "0 180px",
  height: "110px",
  opacity: "0.4",
  padding: "40px",
  position: "relative",

}

const slashStyle = {
  borderBottom: "1px solid #2a7ae2",
  width: "50px",
  position: "absolute",
  left: "8px",
  top: "36px",
  transform: "rotate(-45deg)",
}

const Projects = () => {
  return (<div style={projectsStyle}>

    <div style={projectStyle}><div style={slashStyle}></div>Blog Engine based on React and Webpack</div>
    <div style={projectStyle}><div style={slashStyle}></div>Tool for Prepping Coding Interviews</div>
  </div>);
};


export default Projects;
