import React, { Component } from 'react'
import Single from './Single'
//import UnderTheMountain from './UnderTheMountain.js'


class Clickbait extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      articles: [
        { alt: "mountain",
          Link:"https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg",
          Description:"You won't believe what's under this mountain"},
        { alt:"orc",
          Link:"https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif",
          Description:"Single Orcs in Indianapolis"},
        { alt: "gold",
          Link:"http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg",
          Description:"Mine 20% more gold with One Weird Trick"},
        { alt:"hobbit",
          Link:"http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg",
          Description:"Surprise for Indiana Hobbits born before 1999"}
      ]
    }
  }
    render(){
    return(
    <div className="small-12 columns other-articles">
            <h2> From Around the Realm </h2>
            {this.state.articles.map(currentArticle => <Single article = {currentArticle}/>)}
          </div>
    )
    }
}
export default Clickbait