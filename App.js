import { AppProvider} from './contexts/AppContext';
import { store } from './contexts/Redux/store';
import { Provider } from 'react-redux';
import React, { useEffect } from 'react'
import Entry from './Entry';

export default function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <Entry />
      </AppProvider>
    </Provider>
  );
}


