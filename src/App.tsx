import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './AppRoutes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTask } from './redux/actions/task';

function App() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getTask()) }, []);
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
