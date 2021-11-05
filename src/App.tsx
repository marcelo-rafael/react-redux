import { Provider } from 'react-redux'

import store from './store'
import { Catalog } from './components/Catolog'
import { Cart } from './components/Cart';

function App() {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  );
}

export default App;
