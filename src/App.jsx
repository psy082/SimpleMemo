import { Route, Switch } from 'react-router-dom';
import * as S from './App.styles';
import MemoList from './Pages/MemoList';
import MemoDetail from './Pages/MemoDetail';
import MemoEditor from './Pages/MemoEditor';

function App() {
  return (
    <Switch>
      <S.Container>
        <Route exact path={['/', '/list']} component={MemoList} />
        <Route exact path='/memo/:id' component={MemoDetail} />
        <Route exact path={['/editor/new', '/editor/:id']} component={MemoEditor} />
      </S.Container>
    </Switch>
  );
}

export default App;
