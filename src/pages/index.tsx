import {FC, memo} from 'react';

import Deck from '../components/Deck/Deck';
import DeckLayout from '../components/Layout/DeckLayout';

const Home: FC = memo(() => (
  <DeckLayout>
    <Deck />
  </DeckLayout>
));

export default Home;
