import React from 'react';
import './NewsCardList.scss';
import { Card } from '../../types/Card';
import { NewsCard} from '../NewsCard';

interface Props {
  cards: Card[];
  query: string;
}

export const NewsCardList: React.FC<Props> = ({ cards, query }) => (
  <div className="movies">
    {cards.map(card => (
      <NewsCard key={card.id} card={card} query={query} />
    ))}
  </div>
);

