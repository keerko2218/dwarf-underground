import React, { Component } from 'react'

class Single extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            
            <div class="small-6 medium-3 columns other-article">
              <a href="#">
                <img src = {this.props.article.Link} alt= {this.props.article.alt} />
                <p>{this.props.article.Description}</p>
              </a>
            </div>
        )
    }
}
export default Single