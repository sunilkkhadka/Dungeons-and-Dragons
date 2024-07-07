import { Suspense } from 'react';
import { Provider } from 'react-redux';

import store from './app/store';
import AppRoute from './routes/AppRoute';

function Loading() {
  return <h1>Loading...</h1>;
}

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <AppRoute />
      </Suspense>
    </Provider>
  );
}

export default App;
