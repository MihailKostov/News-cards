import React from 'react';
import './App.scss';
import { NewsCardList } from './components/NewsCardList';
import { NewsCardsDesription } from './components/NewsCard';
import { Card } from './types/Card';
import { Link, Route, Routes } from 'react-router-dom';

const API_URL = 'https://api.spaceflightnewsapi.net/v3/articles';

type Props = {
  cards: never[];
  value: number;
}

export const NewsArticlePage: React.FC<Props> = ({ cards, value }) => (
  <div className="news">
    <>
      <div className="news__image">
        {cards.map((card: Card, i: number) => 
          i === value
          ? <img
              src={card.imageUrl}
              className="news__image--photo"
            ></img>
          : ''
        )}
      </div>
      <div className="news__container">
        <div className="news__content">
          <div className="news__content--container">
            <p className="news__content--title">
              {cards.map((card: Card, i: number) => 
              i === value
              ? card.title
              : ''
              )}
            </p>

            <p className="news__content--description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum ornare convallis non etiam tincidunt tincidunt. Non dolor vel purus id. Blandit habitasse volutpat id dolor pretium, sem iaculis. Faucibus commodo mauris enim, turpis blandit.
            Porttitor facilisi viverra mi lacus lacinia accumsan. Pellentesque gravida ligula bibendum aliquet nulla massa elit. Ac faucibus donec sit morbi pharetra urna. Vel facilisis amet placerat ultrices lobortis proin nulla. Molestie tellus sed pellentesque tortor vitae eu cras nisl. Sem facilisi amet vitae ultrices nullam tellus. Pellentesque eget iaculis morbi at quis eget lacus, aliquam etiam. Neque ipsum, placerat vel convallis nulla orci, nunc etiam. Elementum risus facilisi mauris diam amet et sed.
            <br></br>
            <br></br>
            At aliquet id amet, viverra a magna lorem urna. Nibh scelerisque quam quam massa amet, sollicitudin vel non. Gravida laoreet neque tincidunt eu egestas massa vitae nibh. Nec ullamcorper amet tortor, velit. Dictum pellentesque dolor sit duis sed nibh. Euismod rutrum pellentesque semper mattis aliquet ornare. Cursus maecenas massa, arcu ac adipiscing odio facilisis ac eu.
            In eget ipsum, sed ultrices tempor consequat, elementum cras porta. Sagittis etiam dictumst at duis praesent a. Malesuada odio amet aenean diam. Tincidunt lorem faucibus neque aliquet lobortis feugiat sed aliquam pulvinar. Praesent aliquet ut tempus feugiat placerat quis duis mauris nibh. Eu ullamcorper id feugiat sit risus turpis mi. Tristique posuere sed convallis magna eu vulputate. Cum sit in hac felis blandit. Cursus eu porta lectus mollis nisi, consectetur ac. Ornare vitae lectus iaculis nibh ac et. Adipiscing amet in parturient etiam fames. Facilisi id eu sem in elementum. Lacus, ipsum morbi vel purus ut arcu laoreet id eu.
            <br></br>
            <br></br>
            Libero, tincidunt aliquet parturient dolor sapien faucibus nunc. In ipsum suscipit nec pharetra non vitae sagittis aenean sit. Consequat integer sit netus pellentesque scelerisque ut. Elit augue dui viverra facilisi varius. Volutpat iaculis eu ipsum ut. Dui, ut viverra ut amet magna in in varius. Aliquet penatibus pretium feugiat lobortis. Mauris nunc, eu non massa donec sit duis. Libero nascetur mauris, ac in aliquet cras duis donec. Sit porttitor sociis aliquam aliquet odio arcu a viverra. Proin convallis bibendum venenatis non orci id proin vitae. Faucibus eleifend fermentum sit dictum sagittis fermentum. At id nisi, aliquet ut sagittis proin enim.
            Eget in aenean mi a elit viverra amet urna, diam. Cursus id viverra amet adipiscing. Pretium, amet amet mi mauris urna, maecenas. Risus ut sit quis donec. Lacinia elementum, amet gravida convallis elementum, metus cras. Adipiscing suspendisse etiam tellus tellus arcu. At accumsan rhoncus, fringilla ut scelerisque consectetur.
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum ornare convallis non etiam tincidunt tincidunt. Non dolor vel purus id. Blandit habitasse volutpat id dolor pretium, sem iaculis. Faucibus commodo mauris enim, turpis blandit.
            Porttitor facilisi viverra mi lacus lacinia accumsan. Pellentesque gravida ligula bibendum aliquet nulla massa elit. Ac faucibus donec sit morbi pharetra urna. Vel facilisis amet placerat ultrices lobortis proin nulla. 
            </p>
          </div>
        </div>
      </div>

      <Link
        className="news__home"
        to="/"
      >
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33171 0.162658C5.54407 0.379657 5.54407 0.730251 5.33025 0.945773L2.90334 3.39845L2.84731 3.448C2.63299 3.61309 2.3271 3.59589 2.13244 3.39698C2.02625 3.28848 1.97316 3.1475 1.97316 3.00653C1.97316 2.86407 2.02625 2.72236 2.13389 2.61386L4.56007 0.161182L4.61612 0.111806C4.83054 -0.0527212 5.13704 -0.0355811 5.33171 0.162658ZM11.5229 4.45073C11.7918 4.48491 12 4.71792 12 4.99998C12 5.30555 11.7556 5.55355 11.4545 5.55355H1.86618L5.33018 9.05432L5.37918 9.11086C5.54253 9.32734 5.5263 9.63852 5.33164 9.83743C5.11927 10.0537 4.77382 10.0544 4.56073 9.83891L0.160727 5.39191L0.112206 5.33622C0.0383835 5.23883 0 5.11992 0 4.99998C0 4.92839 0.0138178 4.85679 0.0414543 4.78889C0.125817 4.58148 0.324364 4.44641 0.545454 4.44641H11.4545L11.5229 4.45073Z" fill="#363636"/>
        </svg>

        Back to homepage
      </Link>
    </>
  </div>
);

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
  }

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
    let { query, visibleCards, cards } = this.state;

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
            <Route path='1' element={<NewsArticlePage cards={cards} value={0} />}></Route>
            <Route path='2' element={<NewsArticlePage cards={cards} value={1} />}></Route>
            <Route path='3' element={<NewsArticlePage cards={cards} value={2} />}></Route>
            <Route path='4' element={<NewsArticlePage cards={cards} value={3} />}></Route>
            <Route path='5' element={<NewsArticlePage cards={cards} value={4} />}></Route>
            <Route path='6' element={<NewsArticlePage cards={cards} value={5} />}></Route>
          </Routes>
      </div>
    );
  }
};
