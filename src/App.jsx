import { Route, Switch } from 'react-router-dom';
import MemoList from './Pages/MemoList';
import MemoDetail from './Pages/MemoDetail';
import MemoEditor from './Pages/MemoEditor';

function App() {
  return (
    <Switch>
      <Route exact path={['/', '/list']} component={MemoList} />
      <Route exact path='/memo/:id' component={MemoDetail} />
      <Route exact path='/editor/:id' component={MemoEditor} />
    </Switch>
  );
}

export default App;
