import React from 'react';
import './App.scss';
import { NewsCardList } from './components/NewsCardList';
import { NewsCardsDesription } from './components/NewsCard';
import { NewsArticlePage } from './components/NewsCardArticlePage';
import { Route, Routes, useParams } from 'react-router-dom';
import { Card } from './types/Card';

const API_URL = 'https://api.spaceflightnewsapi.net/v3/articles';

export class App extends React.Component {
  state = {
    query: '',
    cards: [],
    visibleCards: [],
  };

  async componentDidMount() {
    for (let i = 1; i < 7; i++) {
      const response = await fetch(`${API_URL}/${i}`);
      const json = await response.json();
      const cards = await json;

      this.setState({
        cards: [...this.state.cards, cards],
        visibleCards: [...this.state.cards, cards],
      });
    }
  };

  handleArticlePage = () => {
    const { cardId = 0 } = useParams();
  
    return <NewsArticlePage cards={this.state.cards} value={+cardId - 1}/>
  };

  handleNewsSearchTitle = (card: Card) => {
    return card.title.toLowerCase().includes(this.state.query.toLowerCase());
  };

  handleNewsSearchDescription = () => {
    return NewsCardsDesription.toLocaleLowerCase().includes(this.state.query.toLowerCase());
  };

  sortWithPriority = (arr1: Card[], arr2: Card[]) => {
    arr2.map((card: Card, index) => {
      if (!arr1.includes(card)) {
        arr1 = [...arr1, arr2[index]]
      }
    })
    return arr1;
 };

  visibleCards = () => {
    const arrTitle = this.state.cards.filter((card: Card) => this.handleNewsSearchTitle(card));
    const arrDescription = this.state.cards.filter(() => this.handleNewsSearchDescription());

    this.setState({ visibleCards: this.sortWithPriority(arrTitle, arrDescription)})
  };

  render() {
    let { query, visibleCards } = this.state;

    return (
      <div className="page">
          <Routes>
            <Route path="*" element={<p>Page not found</p>}></Route>
            <Route path="/" element={(
              <>
                <div className="container">
                  <div className="page__search">
                    <div className="page__search--title">
                      Filter by keywords
                    </div>

                    <div className="page__search--input">
                      <svg
                        className="page__search--input-logo"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15.7832 14.3911L20 18.6069L18.6069 20L14.3911 15.7832C12.8224 17.0407 10.8713 17.7246 8.86088 17.7218C3.96968 17.7218 0 13.7521 0 8.86088C0 3.96968 3.96968 0 8.86088 0C13.7521 0 17.7218 3.96968 17.7218 8.86088C17.7246 10.8713 17.0407 12.8224 15.7832 14.3911ZM13.8082 13.6605C15.0577 12.3756 15.7555 10.6532 15.7527 8.86088C15.7527 5.05267 12.6681 1.96909 8.86088 1.96909C5.05267 1.96909 1.96909 5.05267 1.96909 8.86088C1.96909 12.6681 5.05267 15.7527 8.86088 15.7527C10.6532 15.7555 12.3756 15.0577 13.6605 13.8082L13.8082 13.6605Z" fill="#575757" />
                      </svg>

                      <input
                        type="text"
                        className="page__search--input-placeholder"
                        placeholder="The most successful IT companies in 2020"
                        id="text-to-search"
                        value={query}
                        onChange={(event) => {
                          this.visibleCards();
                          this.setState({ query: event.target.value });
                        }} />
                    </div>
                  </div>

                  <div className="page__result">
                    <p className="page__result--count">Results: {visibleCards.length}</p>
                  </div>

                  <div className="page__content">
                    <NewsCardList cards={visibleCards} query={query} />
                  </div>
                </div>
              </>
            )}
          ></Route>
            <Route path='news/:cardId' element={<this.handleArticlePage />}></Route>
          </Routes>
      </div>
    );
  }
};
