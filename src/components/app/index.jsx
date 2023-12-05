import { Container } from '@mui/system';
import CardsWrap from '../cards-wrap';
import Header from '../header';
import ImportAndExport from '../import-and-export';
import Search from '../search';

function App() {
  return (
    <Container maxWidth='xl'>
      <Header />
      <ImportAndExport />
      <Search />
      <CardsWrap />
    </Container>
  );
}

export default App;
