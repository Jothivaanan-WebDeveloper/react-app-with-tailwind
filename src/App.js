// import './App.css';
import { Provider } from 'react-redux';
import TabParent from './components/TabParent';
import store from './components/store/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <TabParent />
      </Provider>
    </>
  );
}
export default App; 
