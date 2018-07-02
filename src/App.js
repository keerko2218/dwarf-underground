import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import ClickBait from './Clickbait'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <main class="expanded row">
          <div class="large-8 medium-12 columns article">
            <h2 class="article-title">Gold Madness - Fact or Fiction?</h2>
            <div class="avatar">
              <img src="http://www.zbrushcentral.com/attachment.php?attachmentid=376082" alt="author" />
              <div class="author-info">
                <p class="author-name">By Domri, son of Flug</p>
                <p class="date">on 28 April, 3018 of the Third Age</p>
              </div>
            </div>
            <section class="article-body">
              <p><span class="article-start gold">E</span>psum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium.</p>

              <p>Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito. Epsum factorial non deposit quid pro quo hic escorol. Marquee selectus non provisio incongruous feline nolo contendre Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum.</p>

              <p>Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium. Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito. Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Gratuitous octopus niacin, sodium glutimate.</p>

              <p class="interject">Avast! A stray goblin!</p>

              <p>Quote meon an estimate et non interruptus stadium. Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito.</p>

              <p>Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium.</p>

              <p>Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito. Epsum factorial non deposit quid pro quo hic escorol. Marquee selectus non provisio incongruous feline nolo contendre Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum.</p>
            </section>
            <div class="article-links">
              <a class="article-link" href="#">
                <i class="fa fa-comments-o"></i>
                <span class="article-link-text">Comments</span>
              </a>
              <a class="article-link" href="#">
                <i class="fa fa-share"></i>
                <span class="article-link-text">Share Post</span>
              </a>
            </div>
          </div>
          <aside class="large-4 medium-12 columns">
            <div class="ad">
              <h3>The Last Hammer You'll Ever Need</h3>
              <div class="ad-image">
                <img src="https://s-media-cache-ak0.pinimg.com/originals/b4/d5/ab/b4d5ab4a82b8f7efc1adaf548df1d089.jpg" alt="hammer" />
                <a href="#">visit sponsor</a>
              </div>
              <h4>Mining diamonds or crushing the skulls of your enemies, the SmashMaster 4000 does it all</h4>
              <p class="ad-text">Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium.</p>

              <p class="ad-text">Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito. Epsum factorial non deposit quid pro quo hic escorol. Marquee selectus non provisio incongruous feline nolo contendre Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum.</p>
            </div>
          </aside>
          <ClickBait/>
        </main>

        <footer class="expanded row">
          <h6>&copy; 2017 Erebor Industries</h6>
          <h6 class="float-right">All rights reserved</h6>
        </footer>
      </div>
    );
  }
}

export default App;