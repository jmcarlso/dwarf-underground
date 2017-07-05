import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Article from './Article'
import Footer from './footer'
import Ad from './Ad'
import Other from './Other'
import articleLink from './articleLink'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        

    <main className="expanded row">
      <div className="large-8 medium-12 columns article">
        <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
        <div className="avatar">
          <img src="http://www.zbrushcentral.com/attachment.php?attachmentid=376082" alt="author" />
          <div className="author-info">
            <p className="author-name">By Domri, son of Flug</p>
            <p className="date">on 28 April, 3018 of the Third Age</p>
          </div>
        </div>
       <Article />
        <articleLink />
      </div>
      <Ad />

      <Other />
    </main>

<Footer />
    
      </div>
    );
  }
}

export default App;
