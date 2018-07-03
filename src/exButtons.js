import React, { Component } from 'react'

class ExButtons extends React.Component{
    constructor(props){
        super(props)
    }
    addText =() => {
        return document.createElement('input')
    }
    render(){
        return(
            <div className="article-links">
            <a className="article-link" href="#">
              <i className="fa fa-comments-o"></i>
              <button className="article-link-text" onClick={this.addText}>Comments</button>
              {/*<span className="article-link-text" >Comments</span>*/}
            </a>
            <a className="article-link" href="#">
              <i className="fa fa-share"></i>
              <span className="article-link-text"  >Share Post</span>
            </a>
          </div>
        )
    }
}
export default ExButtons